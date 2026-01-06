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

## Foundations

The Editorial Design System foundations are available via Stand. These are split into two categories: Semantic and Base / Primitives.

In most cases consumers should use the Semantic tokens, which are more meaningful abstractions of the Base / Primitives tokens, i.e applied to specific use cases.

The base / primitives tokens are available for low-level use cases, or very specific cases, but these should be avoided where possible in favour of the semantic tokens.

Stand provides the foundations via CSS variables, as well as JS/TS exports for use in code, which could also be used in CSS-in-JS solutions.

Base / Primitive tokens should not be overridden if they are used directly, as this could have unintended consequences. Instead override the Semantic tokens which are designed to be overridden.

### Fonts

Most applications should only need to load the `Open Sans` and `Guardian Headline` fonts, as these are the primary fonts used across the Guardian's Editorial Tool design system.

You only need to load Guardian Text Egyptian if you're planning to use it in your project, in most cases you only need this when working on Guardian editorial content on an editorial tool, i.e. when using `article-body-*` semantic tokens.

#### Open Sans

##### Guardian Hosted (Recommended)

We are self hosting this font under a Guardian specific domain, so you can load the Open Sans variable font CSS file from our CDN:

Via CSS `@import`:

```css
@import url('https://assets.guim.co.uk/fonts/open-sans/OpenSans.css');
```

Via HTML `<link>`:

```html
<link
	rel="stylesheet"
	href="https://assets.guim.co.uk/fonts/open-sans/OpenSans.css"
/>
```

We also publish the same `OpenSans.css` file in the `@guardian/stand` package if you prefer to import it from there and you're using a bundler that supports CSS imports:

```ts
import '@guardian/stand/fonts/OpenSans.css';
```

All options use the font files hosted on the Guardian CDN at `https://assets.guim.co.uk/fonts/open-sans/woff2/`.

You can also create your own CSS `@font-face` declarations, using the same format as in the `OpenSans.css` file, and/or self host the font files yourself if needed.

##### via Google Fonts

The Open Sans variable font can also be loaded via Google Fonts, but we recommend using the Guardian hosted version to avoid loading from a third party domain:

1. Visit [Google Fonts - Open Sans](https://fonts.google.com/specimen/Open+Sans)
2. Click "Get Font" -> "Get embed code"
3. Click "Change styles" dropdown
4. Use "Full axis" for all options (Italic, Weight, Width)
5. Copy the relevant `<link>` tag or `@import` code snippet into your project
    - You don't need to include the CSS class, as the design system will handle applying the correct font-family via CSS variables or JS/TS tokens.

### Guardian Fonts

Make sure to visit [guardian/fonts](https://github.com/guardian/fonts) repo for the latest information on how to self-host these fonts.

In general, we always want to use the `full-not-hinted` versions of the fonts where possible.

#### Guardian Headline

We only use the bold weight (700) of Guardian Headline in the design system.

```css
@font-face {
	font-family: 'GH Guardian Headline';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/full-not-hinted/GHGuardianHeadline-Bold.woff2')
		format('woff2');
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}
```

#### Guardian Text Egyptian

We want the regular/normal weight (400), the bold weight (700), and the italic version of each weight for Guardian Text Egyptian in the design system.

```css
@font-face {
	font-family: 'GuardianTextEgyptian';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/full-not-hinted/GuardianTextEgyptian-Regular.woff2')
		format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: 'GuardianTextEgyptian';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/full-not-hinted/GuardianTextEgyptian-RegularItalic.woff2')
		format('woff2');
	font-weight: 400;
	font-style: italic;
	font-display: swap;
}
@font-face {
	font-family: 'GuardianTextEgyptian';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/full-not-hinted/GuardianTextEgyptian-Bold.woff2')
		format('woff2');
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: 'GuardianTextEgyptian';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/full-not-hinted/GuardianTextEgyptian-BoldItalic.woff2')
		format('woff2');
	font-weight: 700;
	font-style: italic;
	font-display: swap;
}
```

### Semantic

#### Colors

```ts
import { css } from '@emotion/react';
import { semanticColors } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/semantic/colors.css'; // CSS usage

const stringStyle = css`
	color: ${semanticColors.text.primary}; /* JS/TS usage */
	background-color: var(
		--semantic-colors-bg-default-on-light
	); /* CSS usage */
`;

const objectStyle = {
	color: semanticColors.text.primary /* JS/TS usage */,
	backgroundColor:
		'var(--semantic-colors-bg-default-on-light)' /* CSS usage */,
};
```

For a list of available semantic color styles see the [Storybook Semantic Colors](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-semantic-color-palette--docs) section.

For a full list of CSS Semantic Color tokens see [`semantic/colors.css`](./src/styleD/build/css/semantic/colors.css).

#### Typography

```ts
import { css } from '@emotion/react';
import {
	semanticColors,
	semanticTypography,
	convertTypographyToEmotionObjectStyle, // helper function to convert from typography token object to emotion CSS object style
	convertTypographyToEmotionStringStyle, // helper function to convert from typography token object to emotion CSS string style
} from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/semantic/typography.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	${convertTypographyToEmotionStringStyle(
		semanticTypography['body-compact-md'],
	)}
`;
const objectStyleJS = {
	// other styles e.g.
	color: semanticColors.text.primary,

	// typography styles
	...convertTypographyToEmotionObjectStyle(
		semanticTypography['body-compact-sm'],
	),
};

/* CSS usage */
const stringStyleCSS = css`
	/* CSS usage */
	font: var(--semantic-typography-body-compact-sm-font);
	letter-spacing: var(--semantic-typography-body-compact-sm-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-body-compact-sm-font-width);
`;
const objectStyleCSS = {
	fontFamily: 'var(--semantic-typography-body-compact-sm-font-family)',
	fontWeight: 'var(--semantic-typography-body-compact-sm-font-weight)',
	fontSize: 'var(--semantic-typography-body-compact-sm-font-size)',
	lineHeight: 'var(--semantic-typography-body-compact-sm-line-height)',
	letterSpacing: 'var(--semantic-typography-body-compact-sm-letter-spacing)',
	fontVariationSettings: `'wdth' var(--semantic-typography-body-compact-sm-font-variation-settings)`,
};
```

For a list of available typography styles see the [Storybook Semantic Typography](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-semantic-typography--docs) section.

For a full list of CSS Semantic Typography tokens see [`semantic/typography.css`](./src/styleD/build/css/semantic/typography.css).

### Base / Primitives

#### Colors

```ts
import { css } from '@emotion/react';
import { baseColors } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/colors.css'; // CSS usage

const stringStyle = css`
	color: ${baseColors.neutral['900']}; /* JS/TS usage */
	background-color: var(--base-colors-blue-500); /* CSS usage */
`;

const objectStyle = {
	color: baseColors.neutral['900'] /* JS/TS usage */,
	backgroundColor: 'var(--base-colors-blue-500)' /* CSS usage */,
};
```

For a list of the available base/primitives color styles see the [Storybook Base Colors](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-color-palette--docs) section.

For a full list of CSS Base/Primitives Color tokens see [`base/colors.css`](./src/styleD/build/css/base/colors.css).

#### Typography

```ts
import { css } from '@emotion/react';
import { baseTypography } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/typography.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	font-family: ${baseTypography.family['Open Sans']};
	font-size: ${baseTypography.size['14-px']};
	font-weight: ${baseTypography.weight['Open Sans'].normal};
	font-variation-settings: 'wdth' ${baseTypography.width['Open Sans']};
	style: ${baseTypography.style.normal};
	line-height: ${baseTypography.lineHeight.normal};
	letter-spacing: ${baseTypography.letterSpacing['default-px']};
`;
const objectStyleJS = {
	fontFamily: baseTypography.family['Open Sans'],
	fontSize: baseTypography.size['14-px'],
	fontWeight: baseTypography.weight['Open Sans'].normal,
	fontVariationSettings: `'wdth' ${baseTypography.width['Open Sans']}`,
	fontStyle: baseTypography.style.normal,
	lineHeight: baseTypography.lineHeight.normal,
	letterSpacing: baseTypography.letterSpacing['default-px'],
};

/* CSS usage */
const stringStyleCSS = css`
	font-family: var(--base-typography-family-open-sans);
	font-size: var(--base-typography-size-14-px);
	font-weight: var(--base-typography-weight-open-sans-normal);
	font-variation-settings: 'wdth' var(--base-typography-width-open-sans);
	font-style: var(--base-typography-style-normal);
	line-height: var(--base-typography-line-height-normal);
	letter-spacing: var(--base-typography-letter-spacing-default-px);
`;
const objectStyleCSS = {
	fontFamily: 'var(--base-typography-family-open-sans)',
	fontSize: 'var(--base-typography-size-14-px)',
	fontWeight: 'var(--base-typography-weight-open-sans-normal)',
	fontVariationSettings: `'wdth' var(--base-typography-width-open-sans)`,
	fontStyle: 'var(--base-typography-style-normal)',
	lineHeight: 'var(--base-typography-line-height-normal)',
	letterSpacing: 'var(--base-typography-letter-spacing-default-px)',
};
```

For a list of the available base/primitives typography tokens see the [Storybook Base Typography](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-typography--docs) section.

For a full list of CSS Base/Primitives Typography tokens see [`base/typography.css`](./src/styleD/build/css/base/typography.css).

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

### TagPicker

#### TagAutocomplete

_Status: Testing_

Part of the overall TagPicker component, the TagAutocomplete provides an accessible
autocomplete input for selecting tags from a list of options, based on the [React Aria ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox) component.

**Peer dependencies:**

- `react-aria-components`

See the `peerDependencies` section of the `package.json` for compatible versions to install.

##### Props

See [`TagAutocompleteProps`](src/components/tag-picker/TagAutocomplete.tsx#L23) for the full list of props, usage example can be seen in Storybook.

#### TagTable

_Status: Testing_

Part of the overall TagPicker component, the TagTable provides an accessible
table for displaying tags, with options to add, remove, and reorder tags via drag and drop,
based on the [React Aria Table](https://react-spectrum.adobe.com/react-aria/Table) component.

**Peer dependencies:**

- `react-aria-components`

See the `peerDependencies` section of the `package.json` for compatible versions to install.

##### Props

See [`TagTableProps`](src/components/tag-picker/TagTable.tsx#L31) for the full list of props, usage example can be seen in Storybook.

#### Usage

_Example with TagAutocomplete and TagTable combined:_

```tsx
import { TagAutocomplete, TagTable } from '@guardian/stand';

const Component = () => {
  const [selectedTags, setSelectedTags] = useState<
    TagManagerObjectData[] // TagManagerObjectData is an internal type representing a Tag
  >([]);
  const [options, setOptions] = useState<TagManagerObjectData[]>([]);
  const [value, setValue] = useState('');
  const onChange = (inputText: string) => {
    setValue(inputText);
    if (inputText === '') {
      setOptions([]);
      return;
    }

    if (inputText === '*') {
      setOptions(exampleTags); // exampleTags is an array of Tags
      return;
    }

    // Simple filtering against exampleTags
    const filteredItems = exampleTags.filter((t) =>
      t.internalName.toLowerCase().includes(inputText.toLowerCase()),
    );
    return setOptions(filteredItems);
  };
  return (
    <>
      <div
        css={css`
            display: flex;
        `}
      >
        <TagAutocomplete
          onChange={onChange}
          options={options}
          label="Tags"
          addTag={(tag) =>
              setSelectedTags((tags) => {
                  return [...tags, tag];
              })
          }
          loading={false}
          placeholder={''}
          disabled={false}
          value={value}
        />
        <select>
           option>All tags</option>
        </select>
      </div>
      <TagTable rows={selectedTags} filterRows={() => true} />
    </>
  );
};
```

#### Example

This is currently still in testing phase, so a production implementation is not yet available.

### Contributing

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
