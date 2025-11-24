# Stand - a tools component library

_Find what you need on the (news)stand!_

Stand is component library for Guardian editorial tools. It is co-located within flexible-content as Composer is expected to be the main consumer of the UI components within Stand. But any editorial tool should be able to make use of the components as an npm package - `@guardian/stand` - and developers should feel comfortable contributing.

## Installation

```bash
$ pnpm add @guardian/stand # or yarn or npm
```

You'll also need to have TypeScript, React, and Emotion installed in your project.

The compatible versions are listed in the `peerDependencies` section of `package.json`.

Some components have additional dependencies that you will need to install too. See the [Components](#components) section for more details for which components have which peer dependencies.

## Components

### `Byline`

A flexible byline editor component built in ProseMirror and React with usability and accessibility in mind.

**Peer dependencies:**

You'll need to install the following peer dependencies in your project to use the `Byline` component:

- `@guardian/prosemirror-invisibles`
- `prosemirror-dropcursor`
- `prosemirror-history`
- `prosemirror-keymap`
- `prosemirror-model`
- `prosemirror-state`
- `prosemirror-view`

See the `peerDependencies` section of `package.json` for compatible versions to install.

#### Usage

```tsx
import type { BylineModel } from '@guardian/stand';
import { Byline } from '@guardian/stand';

const Component = () => {
    const bylineModel: BylineModel = {
        // ...set up your byline model here
    };
    ...
	return (
        <>
        ...
            <Byline initialValue={bylineModel} />
        ...
        </>
    );
};
```

By itself the `Byline` component is just the editor UI. You will need to set up the ProseMirror editor state, schema, and plugins to get a fully functioning byline editor. See the props and example below for a more complete implementation.

The `BylineModel` type defines the structure of the byline data which is agnostic from any other data structure. You must convert to/from this model when integrating with your application's data structures.

#### Props

See [`BylineProps`](src/byline/Byline.tsx#L41) for the full list of props, usage example can be seen in Storybook.

#### Example

The `ContentByline` component in `flexible-frontend` has a detailed example of how to use the `Byline` component from Stand. See [ContentByline.tsx](https://github.com/guardian/flexible-content/blob/1d537615a18ae24a4a5410a3f945b2b9db1dbb47/flexible-frontend/src/app/components/furniture/content-byline/ContentByline.tsx#L72-L205).

## Contributing

See the [Contributing to Stand](./CONTRIBUTING.md) documentation for guidelines on contributing to this project. Project setup and common tasks are listed below.

### Setup

- Run `./setup.sh` in the project root (flexible-content) directory to set up pnpm, install dependencies, and build the project.

### Tasks

- Run `pnpm install` to install dependencies.
- Run `pnpm build` to build, this makes any changes available to flexible-frontend
- Run `pnpm storybook` to run Storybook
- Run `pnpm build:storybook` to build the Storybook static site
- Run `pnpm build-styled` to build the Style Dictionary styles
- Run `pnpm test` to run tests
- Run `pnpm test:e2e` to run end-to-end tests using Playwright
- Run `pnpm test:react-matrix` to run matrix tests (see Compatibility section below)
- Run `pnpm tsc` to run check TypeScript types
- Run `pnpm lint` to run the linter
    - Run `pnpm lint:fix` to fix any auto-fixable issues
- Run `pnpm format:check` to check code formatting
    - Run `pnpm format:fix` to fix code formatting issues

### Style Dictionary

The project uses [Style Dictionary](https://styledictionary.com/) to manage design tokens.

Tokens are defined in the `src/styleD/tokens` folder.

The output styles are generated into the `src/styleD/build` folder.

We use rollup to copy the built styles into the `dist/styleD/build` folder during the build process, and these are published with the package.

Most tokens are generated from Figma variables using a script to make these available in the `src/styleD/tokens` folder. See the [Generate Design Tokens from Figma Variables](./scripts/figma/README.md) documentation for more details.

Use `pnpm build-styled` to generate the styles after making changes to the tokens and make sure to test and commit the changes to the built styles.

See the [Style Dictionary documentation](./docs/style-dictionary.md) for more details on how we structure and generate the styles.

### Compatibility

See the package.json `peerDependencies` section for compatible versions of React and other dependencies that Stand works with.

Version sets for matrix testing live in `./scripts/deps-matrix-versions.json`:

The test script `./scripts/test-deps-matrix.sh` reads this JSON file first, then applies any environment overrides you supply. Precedence is:

1. Explicit env var (e.g. `REACT_VERSIONS="18.0.0 19.0.0"`)
2. Value from `deps-matrix-versions.json`

All three variables (`REACT_VERSIONS`, `EMOTION_VERSIONS`, `TS_VERSIONS`) must be defined after loading; otherwise the script exits with an error.

Matrix generation in CI uses the same JSON file in the workflow: `../.github/workflows/stand-component-library-deps-matrix.yml` to ensure consistency.

#### Updating Supported Versions

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

#### Tips

- Keep versions in ascending order for readability
- Remove deprecated versions only after confirming no downstream tool depends on them
- Add a new version first, then run the matrix, then adjust `peerDependencies` once green
- Changes to `peerDependencies` are always a breaking change to the library, as per our [recommendations](https://github.com/guardian/recommendations/blob/main/npm-packages.md#changes-to-peerdependencies-ranges-are-breaking)
