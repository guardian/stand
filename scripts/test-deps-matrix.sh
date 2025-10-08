#!/usr/bin/env bash
set -euo pipefail

# Local helper to test the stand component library against multiple dependency versions.
# Default versions can be overridden via REACT_VERSIONS / EMOTION_VERSIONS / TS_VERSIONS env var (space-separated).
# Example: REACT_VERSIONS="17.0.2 18.0.0 19.0.0" ./scripts/test-react-matrix.sh

REACT_VERSIONS=${REACT_VERSIONS:-"17.0.2 18.0.0 19.0.0"}
# Two emotion versions: baseline (lower bound) and upper tested bound within peer range.
EMOTION_VERSIONS=${EMOTION_VERSIONS:-"11.11.4 11.14.0"}
# TypeScript minor versions 5.0, 5.1 and 5.9 (Override with TS_VERSIONS env var if needed.
TS_VERSIONS=${TS_VERSIONS:-"5.0 5.1 5.9"}

# Keep original manifest to restore at the end
ORIG_PKG=$(mktemp)
ORIG_LOCK=$(mktemp)
cp package.json "$ORIG_PKG" || true
cp pnpm-lock.yaml "$ORIG_LOCK" || true

restore_manifest() {
	echo "Restoring original package.json and pnpm-lock.yaml" >&2
	cp "$ORIG_PKG" package.json || true
	cp "$ORIG_LOCK" pnpm-lock.yaml || true
	pnpm install --frozen-lockfile || pnpm install
}

trap restore_manifest EXIT

# Ensure baseline install (lowest dev deps)
pnpm install

echo "React versions: $REACT_VERSIONS"
echo "Emotion versions: $EMOTION_VERSIONS"
echo "TypeScript versions: $TS_VERSIONS"

FAILURES=()

RESULT_ROWS=()
if [ -n "${MATRIX_OUTPUT_FILE:-}" ]; then
	OUTPUT_FILE="$MATRIX_OUTPUT_FILE"
	echo "Will write compatibility table to $OUTPUT_FILE" >&2
else
	OUTPUT_FILE=""
	echo "MATRIX_OUTPUT_FILE not set; will only print compatibility results to stdout" >&2
fi

for rv in $REACT_VERSIONS; do
	for ev in $EMOTION_VERSIONS; do
		for tv in $TS_VERSIONS; do
			# Revert to baseline each loop to avoid version layering
			cp "$ORIG_PKG" package.json || true
			cp "$ORIG_LOCK" pnpm-lock.yaml || true
			pnpm install

			# Determine major React major version for logging and conditional deps
			REACT_MAJOR_VERSION=${rv%%.*}
			printf 'REACT_MAJOR_VERSION = %s\n' "$REACT_MAJOR_VERSION"

			if [ "$REACT_MAJOR_VERSION" = "19" ] && [ "$ev" = "11.11.4" ]; then
				echo "Skipping unsupported combo React $REACT_MAJOR_VERSION + @emotion/react $ev (TS $tv)" >&2
				RESULT_ROWS+=("$REACT_MAJOR_VERSION|$ev|$tv|skip|skip|skip|skip")
				continue
			fi

			# Determine appropriate @types/react version and playwright renderer package
			TYPES_VERSION="latest"
			PLAYWRIGHT_CT_REACT_18=false
			case "$REACT_MAJOR_VERSION" in
				17) TYPES_VERSION="17" ;;
				18) TYPES_VERSION="18" PLAYWRIGHT_CT_REACT_18=true ;;
				19) TYPES_VERSION="19" PLAYWRIGHT_CT_REACT_18=true ;;
			esac

			printf '\n=============================================================\n'
			echo "Testing React $REACT_MAJOR_VERSION  |  @emotion/react $ev  |  TypeScript $tv"
			echo "============================================================="

			# Installing deps
			echo "-- Installing deps - React $REACT_MAJOR_VERSION, @emotion/react $ev"
			pnpm add react@"~$rv" react-dom@"~$rv" @emotion/react@"~$ev"

			# Installing devDeps
			echo "-- Installing devDeps - TypeScript $tv"
			pnpm add -D typescript@"~$tv"

			# if PLAYWRIGHT_CT_REACT_18 = true then remove @playwright/experimental-ct-react17 and install @playwright/experimental-ct-react
			if [ "$PLAYWRIGHT_CT_REACT_18" = true ]; then
				echo "-- Installing @playwright/experimental-ct-react for React $REACT_MAJOR_VERSION"
				pnpm remove @playwright/experimental-ct-react17
				pnpm add -D @playwright/experimental-ct-react@"^1.56.0"
			else
				echo "-- Using existing @playwright/experimental-ct-react17 for React $REACT_MAJOR_VERSION"
				pnpm add -D @playwright/experimental-ct-react17@"^1.55.1"
			fi

			echo "-- Installing playwright browsers"
			pnpm exec playwright install chromium --only-shell

			TYPECHECK_STATUS=ok
			UNIT_TEST_STATUS=ok
			E2E_TEST_STATUS=ok
			BUILD_STATUS=ok

			echo "-- Type check"
			if ! pnpm tsc --project tsconfig.check.json; then
				echo "Type check failed for React $REACT_MAJOR_VERSION Emotion $ev TS $tv" >&2
				TYPECHECK_STATUS=fail
			fi

			if [ "$TYPECHECK_STATUS" = "ok" ]; then
				echo "-- Unit tests"
				if ! pnpm test; then
					echo "Tests failed for React $REACT_MAJOR_VERSION Emotion $ev TS $tv" >&2
					UNIT_TEST_STATUS=fail
				fi
			else
				UNIT_TEST_STATUS=skip
			fi

			if [ "$TYPECHECK_STATUS" = "ok" ] && [ "$UNIT_TEST_STATUS" = "ok" ]; then
				echo "-- E2E tests"
				if ! PLAYWRIGHT_CT_REACT_18=$PLAYWRIGHT_CT_REACT_18 pnpm test:e2e --reporter=dot --project=chromium; then
					echo "E2E Tests failed for React $REACT_MAJOR_VERSION Emotion $ev TS $tv" >&2
					E2E_TEST_STATUS=fail
				fi
			else
				E2E_TEST_STATUS=skip
			fi

			if [ "$TYPECHECK_STATUS" = "ok" ] && [ "$UNIT_TEST_STATUS" = "ok" ] && [ "$E2E_TEST_STATUS" = "ok" ]; then
				echo "-- Build"
				if ! pnpm run build; then
					echo "Build failed for React $REACT_MAJOR_VERSION Emotion $ev TS $tv" >&2
					BUILD_STATUS=fail
				fi
			else
				BUILD_STATUS=skip
			fi

			RESULT_ROWS+=("$REACT_MAJOR_VERSION|$ev|$tv|$TYPECHECK_STATUS|$UNIT_TEST_STATUS|$E2E_TEST_STATUS|$BUILD_STATUS")
		done
	done
done

echo ""
# Write table header conditionally (file only if MATRIX_OUTPUT_FILE provided)
if [ -n "$OUTPUT_FILE" ]; then
	: > "$OUTPUT_FILE"
	echo "| React | Emotion | TypeScript |" | tee "$OUTPUT_FILE"
	echo "|-------|---------|------------|" | tee -a "$OUTPUT_FILE"
else
	echo "| React | Emotion | TypeScript |"
	echo "|-------|---------|------------|"
fi
OVERALL_FAIL=0
for row in "${RESULT_ROWS[@]}"; do
	IFS='|' read -r rv ev tv type unit e2e build <<<"$row"
	# Exclude any row with skip or fail in critical phases
	if [ "$type" = "fail" ] || [ "$unit" = "fail" ] || [ "$e2e" = "fail" ] || [ "$build" = "fail" ] || [ "$type" = "skip" ]; then
		[ "$type" = "fail" ] && OVERALL_FAIL=1
		[ "$unit" = "fail" ] && OVERALL_FAIL=1
		[ "$e2e" = "fail" ] && OVERALL_FAIL=1
		[ "$build" = "fail" ] && OVERALL_FAIL=1
		continue
	fi
	if [ -n "$OUTPUT_FILE" ]; then
		printf '| %s | %s | %s |\n' "$rv" "$ev" "$tv" | tee -a "$OUTPUT_FILE"
	else
		printf '| %s | %s | %s |\n' "$rv" "$ev" "$tv"
	fi
done

if [ $OVERALL_FAIL -eq 1 ]; then
	echo "One or more matrix entries failed." >&2
	exit 1
else
	echo "All matrix entries succeeded (failures none; warnings allowed)."
fi
