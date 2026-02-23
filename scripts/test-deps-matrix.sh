#!/usr/bin/env bash
set -euo pipefail

# Local helper to test the stand component library against multiple dependency versions.
# Use deps-matrix-versions.json to define default version sets.
# Default versions can be overridden via REACT_VERSIONS / EMOTION_VERSIONS / TS_VERSIONS env var (space-separated).
# Example: REACT_VERSIONS="17.0.2 18.0.0 19.0.0" ./scripts/test-react-matrix.sh

# Load defaults from JSON versions file, then allow explicit environment overrides.
VERSIONS_JSON_FILE="${VERSIONS_JSON_FILE:-scripts/deps-matrix-versions.json}"
USER_REACT_VERSIONS=${REACT_VERSIONS-}
USER_EMOTION_VERSIONS=${EMOTION_VERSIONS-}
USER_TS_VERSIONS=${TS_VERSIONS-}

if [ -f "$VERSIONS_JSON_FILE" ]; then
	REACT_VERSIONS=$(jq -r '.react | join(" ")' "$VERSIONS_JSON_FILE")
	EMOTION_VERSIONS=$(jq -r '.emotion | join(" ")' "$VERSIONS_JSON_FILE")
	TS_VERSIONS=$(jq -r '.typescript | join(" ")' "$VERSIONS_JSON_FILE")
    EXCLUDE_RULES=()
    while IFS= read -r line; do
        [ -n "$line" ] && EXCLUDE_RULES+=("$line")
    done < <(jq -r '.exclude[]? | to_entries | map(.key+"="+.value) | join(" ")' "$VERSIONS_JSON_FILE")
else
	echo "Versions JSON file not found at $VERSIONS_JSON_FILE (continuing; relying solely on provided overrides)." >&2
fi

# Re-apply overrides supplied by user (precedence)
[ -n "${USER_REACT_VERSIONS}" ] && REACT_VERSIONS="$USER_REACT_VERSIONS"
[ -n "${USER_EMOTION_VERSIONS}" ] && EMOTION_VERSIONS="$USER_EMOTION_VERSIONS"
[ -n "${USER_TS_VERSIONS}" ] && TS_VERSIONS="$USER_TS_VERSIONS"

# Validate presence (after optional sourcing). Allow user overrides by exporting before invocation.
missing=()
if [ -z "${REACT_VERSIONS:-}" ]; then missing+=("REACT_VERSIONS"); fi
if [ -z "${EMOTION_VERSIONS:-}" ]; then missing+=("EMOTION_VERSIONS"); fi
if [ -z "${TS_VERSIONS:-}" ]; then missing+=("TS_VERSIONS"); fi

if [ ${#missing[@]} -ne 0 ]; then
	echo "Error: Missing required version variable(s): ${missing[*]}." >&2
	echo "Set them via environment (e.g. REACT_VERSIONS=\"18.0.0\") or define them in $VERSIONS_JSON_FILE." >&2
	exit 1
fi

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
if [ ${#EXCLUDE_RULES[@]} -gt 0 ]; then
	echo "Exclude rules:"
	for r in "${EXCLUDE_RULES[@]}"; do
		echo "  - $r"
	done
fi

FAILURES=()

RESULT_ROWS=()
if [ -n "${MATRIX_OUTPUT_FILE:-}" ]; then
	OUTPUT_FILE="$MATRIX_OUTPUT_FILE"
	echo "Will write compatibility table to $OUTPUT_FILE" >&2
else
	OUTPUT_FILE=""
	echo "MATRIX_OUTPUT_FILE not set; will only print compatibility results to stdout" >&2
fi

should_skip() {
	local rv="$1" ev="$2" tv="$3"
	# Return 0 (true) if any rule matches all its specified key=value pairs
	for rule in "${EXCLUDE_RULES[@]:-}"; do
		[ -z "$rule" ] && continue
		local match=1
		for kv in $rule; do
			local key="${kv%%=*}" val="${kv#*=}"
			case "$key" in
				react) [ "$rv" = "$val" ] || match=0 ;;
				emotion) [ "$ev" = "$val" ] || match=0 ;;
				typescript) [ "$tv" = "$val" ] || match=0 ;;
			esac
			[ $match -eq 0 ] && break
		done
		[ $match -eq 1 ] && return 0
	done
	return 1
}

for rv in $REACT_VERSIONS; do
	for ev in $EMOTION_VERSIONS; do
		for tv in $TS_VERSIONS; do
			# Determine major React major version for logging and conditional deps
			REACT_MAJOR_VERSION=${rv%%.*}

			if should_skip "$rv" "$ev" "$tv"; then
				printf '\n-- Skipping excluded combination React %s | Emotion %s | TypeScript %s\n' "$rv" "$ev" "$tv"
				# Use 'skip' for all statuses if excluded
				RESULT_ROWS+=("$REACT_MAJOR_VERSION|$ev|$tv|skip|skip|skip|skip")
				continue
			fi

			# Revert to baseline each loop to avoid version layering
			cp "$ORIG_PKG" package.json || true
			cp "$ORIG_LOCK" pnpm-lock.yaml || true
			pnpm install --frozen-lockfile || pnpm install

			# Determine appropriate @types/react version and playwright renderer package
            # i.e use @playwright/experimental-ct-react for React 18+; otherwise use @playwright/experimental-ct-react17
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
			pnpm add -D react@"$rv" react-dom@"$rv" @emotion/react@"$ev" @types/react@"^$TYPES_VERSION" @types/react-dom@"^$TYPES_VERSION"

			# Installing devDeps
			echo "-- Installing devDeps - TypeScript $tv"
			pnpm add -D typescript@"$tv"

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
			pnpm exec playwright install --with-deps chromium --only-shell

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
	echo "| React | Emotion | TypeScript | Typecheck | Unit | E2E | Build |" | tee "$OUTPUT_FILE"
	echo "|-------|---------|------------|-----------|------|-----|-------|" | tee -a "$OUTPUT_FILE"
else
	echo "| React | Emotion | TypeScript | Typecheck | Unit | E2E | Build |"
	echo "|-------|---------|------------|-----------|------|-----|-------|"
fi
OVERALL_FAIL=0
for row in "${RESULT_ROWS[@]}"; do
	IFS='|' read -r rv ev tv type unit e2e build <<<"$row"
	# Mark any failure as overall failure, but continue printing the table
	if [ "$type" = "fail" ] || [ "$unit" = "fail" ] || [ "$e2e" = "fail" ] || [ "$build" = "fail" ] || [ "$type" = "skip" ]; then
		[ "$type" = "fail" ] && OVERALL_FAIL=1
		[ "$unit" = "fail" ] && OVERALL_FAIL=1
		[ "$e2e" = "fail" ] && OVERALL_FAIL=1
		[ "$build" = "fail" ] && OVERALL_FAIL=1
	fi
	if [ -n "$OUTPUT_FILE" ]; then
		printf '| %s | %s | %s | %s | %s | %s | %s |\n' "$rv" "$ev" "$tv" "$type" "$unit" "$e2e" "$build" | tee -a "$OUTPUT_FILE"
	else
		printf '| %s | %s | %s | %s | %s | %s | %s |\n' "$rv" "$ev" "$tv" "$type" "$unit" "$e2e" "$build"
	fi
done

if [ $OVERALL_FAIL -eq 1 ]; then
	echo "One or more matrix entries failed." >&2
	exit 1
else
	echo "All matrix entries succeeded (failures none; warnings allowed)."
fi
