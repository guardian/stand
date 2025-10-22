# Stand - a tools component library

_Find what you need on the (news)stand!_

Stand is component library for Guardian editorial tools. It is co-located within flexible-content as Composer is expected to be the main consumer of the UI components within Stand. But any editorial tool should be able to make use of the components as an npm package - `@guardian/stand` - and developers should feel comfortable contributing.

## Setup

- Run `./setup.sh` in the project root (flexible-content) directory to set up pnpm, install dependencies, and build the project.

## Tasks

- Run `pnpm install` to install dependencies.
- Run `pnpm build` to build, this makes any changes available to flexible-frontend
- Run `pnpm storybook` to run Storybook

## Contributing

See the [Contributing to Stand](./CONTRIBUTING.md) documentation

## Compatibility

See the package.json `peerDependencies` section for compatible versions of React and other dependencies that Stand works with.

Version sets for matrix testing live in `./scripts/deps-matrix-versions.json`:

The test script `./scripts/test-deps-matrix.sh` reads this JSON file first, then applies any environment overrides you supply. Precedence is:

1. Explicit env var (e.g. `REACT_VERSIONS="18.0.0 19.0.0"`)
2. Value from `deps-matrix-versions.json`

All three variables (`REACT_VERSIONS`, `EMOTION_VERSIONS`, `TS_VERSIONS`) must be defined after loading; otherwise the script exits with an error.

Matrix generation in CI uses the same JSON file in the workflow: `../.github/workflows/stand-component-library-deps-matrix.yml` to ensure consistency.

### Updating Supported Versions

1. Edit `./scripts/deps-matrix-versions.json` with new versions
2. Run the matrix test locally:
    ```bash
    ./scripts/test-deps-matrix.sh
    ```
3. (Optional) Narrow the matrix with overrides:
    ```bash
    REACT_VERSIONS="18.0.0" EMOTION_VERSIONS="11.14.0" TS_VERSIONS="5.1" ./scripts/test-deps-matrix.sh
    ```
4. Review results (table output and any failures). Fix issues or adjust code
5. Update `peerDependencies` in `package.json` to reflect the new minimum / tested range
6. Open a PR, the CI pipeline will comment with the compatibility matrix

### Tips

- Keep versions in ascending order for readability
- Remove deprecated versions only after confirming no downstream tool depends on them
- Add a new version first, then run the matrix, then adjust `peerDependencies` once green
- Changes to `peerDependencies` are always a breaking change to the library, as per our [recommendations](https://github.com/guardian/recommendations/blob/main/npm-packages.md#changes-to-peerdependencies-ranges-are-breaking)
