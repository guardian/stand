# `@guardian/stand`

_Find what you need on the (news)stand!_

A tools component library and design system

Any tool should be able to make use of the components as an npm package, [`@guardian/stand`](https://www.npmjs.com/package/@guardian/stand), and developers should feel comfortable [contributing](https://guardian.github.io/stand/?path=/docs/contributing--docs).

This library is split into two main sections:

- [Tools Design System](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs)
  - The core design system and components used across the Guardian's internal tools.
  - e.g. Colour, Typography, Buttons, Forms, etc.
- [Editorial Components](https://guardian.github.io/stand/?path=/docs/stand-editorial-components-introduction--docs)
  - A collection of highly specific components shared across a smaller number of tools.
  - e.g. Byline editor, Tag picker, etc.

Currently maintained by the P&E DevX E2E team, but open to contributions from anyone in the company. Do reach out for help or to get involved!

Stand is built with [React](https://reactjs.org/), [Emotion](https://emotion.sh/docs/introduction), and [TypeScript](https://www.typescriptlang.org/), but the design system is designed to be as framework-agnostic as possible in that styles can be used without these dependencies if needed.

## Contents

- [Documentation](#documentation)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tasks](#tasks)
- [Design Tokens and Style Dictionary](#design-tokens-and-style-dictionary)
- [Compatibility](#compatibility)
- [Documentation Site Map](#documentation-site-map)

## Documentation

All documentation is available on [Github Pages Storybook](https://guardian.github.io/stand/), which is updated with the latest changes to the library.

## Install

The library is published to npm:

```bash
# With pnpm
pnpm add @guardian/stand

# or with npm
npm install @guardian/stand

# or with yarn
yarn add @guardian/stand
```

Depending on your project setup, you may also need to install [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies).

**My project uses React, Emotion, and TypeScript:**

See the `peerDependencies` in `package.json` for compatible versions and install them.

If you're using the Tools Design System, you may also want to install the compatible version of [`react-aria-components`](https://react-aria.adobe.com/).

For specific Editorial Components, check the documentation for each component for additional dependencies.

**My project doesn't (or can't) use React, Emotion, or TypeScript:**

You can still use design tokens and styles from the Tools Design System. Import [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) and/or JS design tokens directly from the package. Every component has a "Custom Component Build" section in its documentation showing how to do this.

**My project doesn't use JavaScript at all:**

You can import CSS variables from the package, provided your build process supports importing CSS from `node_modules`. See the "Custom Component Build" section in each component's documentation.

## Usage

See the [Tools Design System](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs) and [Editorial Components](https://guardian.github.io/stand/?path=/docs/stand-editorial-components-introduction--docs) documentation for details.

## Contributing

See the [Contributing guidelines](https://guardian.github.io/stand/?path=/docs/contributing--docs) for guidelines on contributing to this project. Project setup and common tasks are listed below.

## Getting Started

> If you are looking to **use Stand in your project**, see the [Tools Design System](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs) or [Editorial Components](https://guardian.github.io/stand/?path=/docs/stand-editorial-components-introduction--docs) documentation for installation and usage instructions.

The following steps are for **developing the Stand library itself**.

1. **Install dependencies:**

   ```bash
   # With pnpm
   pnpm install
   ```

2. **Run Storybook**: Most development is done within Storybook, which provides a live environment for building and testing components in isolation:

   ```bash
   pnpm storybook
   ```

   This will start Storybook at `http://localhost:6007`. See the [contributing guidelines](https://guardian.github.io/stand/?path=/docs/contributing--docs) for how to add new components and stories.

3. **Build** the package for publishing:

   ```bash
   pnpm build
   ```

   To regenerate Style Dictionary design token outputs after changing any token files (see [Design Tokens and Style Dictionary](#design-tokens-and-style-dictionary)):

   ```bash
   pnpm build-styled
   ```

4. **Test:**

   ```bash
   pnpm test                 # unit tests (Jest)
   pnpm test:e2e             # end-to-end tests (Playwright)
   pnpm test:react-matrix    # compatibility matrix tests (see Compatibility)
   pnpm tsc                  # TypeScript type checking
   pnpm lint                 # lint (pnpm lint:fix to auto-fix)
   pnpm format:check         # formatting check (pnpm format:fix to auto-fix)
   ```

## Design Tokens and Style Dictionary

The [Design Tokens](https://www.w3.org/community/design-tokens/) specification provides standards upon which products and design tools can rely for sharing stylistic pieces of a design system at scale.

The project uses [Style Dictionary](https://styledictionary.com/) to manage design tokens.

Tokens are defined in `src/styleD/tokens/`, the generated outputs live in `src/styleD/build/`, and both are committed to the repository. During the package build, Rollup copies the build outputs into `dist/styleD/build/` for publishing.

Most foundation tokens are generated from Figma variables, see `scripts/figma/README.md` for details.

After making changes to any token files, regenerate the outputs and commit them:

```bash
pnpm build-styled
```

See the [Style Dictionary documentation](https://guardian.github.io/stand/?path=/docs/style-dictionary--docs) for more details on how we structure and generate the styles.

## Compatibility

See the `peerDependencies` in `package.json` for compatible versions of React and other dependencies.

Version sets for matrix testing live in `./scripts/deps-matrix-versions.json`. The test script `./scripts/test-deps-matrix.sh` reads this file first, then applies any environment overrides. Precedence is:

1. Explicit env var (e.g. `REACT_VERSIONS="18.0.0 19.0.0"`)
2. Value from `deps-matrix-versions.json`

All three variables (`REACT_VERSIONS`, `EMOTION_VERSIONS`, `TS_VERSIONS`) must be defined after loading; otherwise the script exits with an error.

Matrix generation in CI uses the same JSON file in the workflow `../.github/workflows/stand-component-library-deps-matrix.yml` to ensure consistency.

### Updating Supported Versions

1. Edit `./scripts/deps-matrix-versions.json` with new versions.
2. Run the matrix test locally:
   ```bash
   ./scripts/test-deps-matrix.sh
   ```
3. (Optional) Narrow the matrix with overrides:
   ```bash
   REACT_VERSIONS="18.0.0" EMOTION_VERSIONS="11.14.0" TS_VERSIONS="5.1" ./scripts/test-deps-matrix.sh
   ```
4. Review results (table output and any failures). Fix issues or adjust code.
5. Update `peerDependencies` in `package.json` to reflect the new minimum/tested range.
6. Open a PR, the CI pipeline will comment with the compatibility matrix.

### Tips

- Keep versions in ascending order for readability.
- Remove deprecated versions only after confirming no downstream tool depends on them.
- Add a new version first, then run the matrix, then adjust `peerDependencies` once green.
- Changes to `peerDependencies` are always a breaking change, as per our [recommendations](https://github.com/guardian/recommendations/blob/main/npm-packages.md#changes-to-peerdependencies-ranges-are-breaking).

## Documentation Site Map

- [Getting Started](https://guardian.github.io/stand/?path=/docs/getting-started--docs)
- [Contributing](https://guardian.github.io/stand/?path=/docs/contributing--docs)
- [Tools Design System Introduction](https://guardian.github.io/stand/?path=/docs/stand-tools-design-system-introduction--docs)
- [Editorial Components Introduction](https://guardian.github.io/stand/?path=/docs/stand-editorial-components-introduction--docs)
- [Style Dictionary](https://guardian.github.io/stand/?path=/docs/style-dictionary--docs)
- [Architecture Decision Records](https://guardian.github.io/stand/?path=/docs/architecture-decision-records--docs)
- [Changelog](https://guardian.github.io/stand/?path=/docs/changelog--docs)
