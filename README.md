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

When updating React, Emotion or TypeScript versions, please ensure that the [script](./scripts/test-deps-matrix.sh) and [CI workflow](../.github/workflows/stand-component-library-deps-matrix.yml) is updated to match the versions range.

After which run `./scripts/test-deps-matrix.sh` to ensure that the package works correctly with the new versions.

If everything works correctly, update the `peerDependencies` section in package.json to reflect the new versions.
