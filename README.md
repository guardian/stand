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

##### Open Sans

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

#### Guardian Fonts

Make sure to visit [guardian/fonts](https://github.com/guardian/fonts) repo for the latest information on how to self-host these fonts.

In general, we always want to use the `full-not-hinted` versions of the fonts where possible.

##### Guardian Headline

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

##### Guardian Text Egyptian

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

_Status: WIP_

```ts
import { css } from '@emotion/react';
import { semanticColors } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/semantic/colors.css'; // CSS usage

const stringStyle = css`
	color: ${semanticColors.text.default}; /* JS/TS usage */
	background-color: var(
		--semantic-colors-bg-default-on-light
	); /* CSS usage */
`;

const objectStyle = {
	color: semanticColors.text.default /* JS/TS usage */,
	backgroundColor:
		'var(--semantic-colors-bg-default-on-light)' /* CSS usage */,
};
```

For a list of available semantic color styles see the [Storybook Semantic Colors](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-semantic-color-palette--docs) section.

For a full list of CSS Semantic Color tokens see [`semantic/colors.css`](./src/styleD/build/css/semantic/colors.css).

#### Typography

_Status: WIP_

```ts
import { css } from '@emotion/react';
import { semanticColors, semanticTypography } from '@guardian/stand'; // JS/TS usage
import {
	convertTypographyToEmotionObjectStyle, // helper function to convert from typography token object to emotion CSS object style
	convertTypographyToEmotionStringStyle, // helper function to convert from typography token object to emotion CSS string style
} from '@guardian/stand/utils'; // Utils for working with design tokens
import '@guardian/stand/semantic/typography.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	// other styles e.g.
	color: ${semanticColors.text.default};

	/* (recommended) emotion string style usage helper function*/
	${convertTypographyToEmotionStringStyle(
		semanticTypography['body-compact-md'],
	)}

	/* or direct usage without helper function */
    font: ${semanticTypography['body-compact-md'].font};
	letter-spacing: ${semanticTypography['body-compact-md'].letterSpacing};
	font-variation-settings: 'wdth'
		${semanticTypography['body-compact-md'].fontWidth};
`;
const objectStyleJS = {
	// other styles e.g.
	color: semanticColors.text.default,

	// (recommended) emotion object style usage helper function
	...convertTypographyToEmotionObjectStyle(
		semanticTypography['body-compact-sm'],
	),

	// or direct usage without helper function
	font: semanticTypography['body-compact-sm'].font,
	letterSpacing: semanticTypography['body-compact-sm'].letterSpacing,
	fontVariationSettings: `'wdth' ${semanticTypography['body-compact-sm'].fontWidth}`,
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
	font: 'var(--semantic-typography-body-compact-sm-font)',
	letterSpacing: 'var(--semantic-typography-body-compact-sm-letter-spacing)',
	fontVariationSettings: `'wdth' var(--semantic-typography-body-compact-sm-font-width)`,
};
```

For a list of available typography styles see the [Storybook Semantic Typography](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-semantic-typography--docs) section.

For a full list of CSS Semantic Typography tokens see [`semantic/typography.css`](./src/styleD/build/css/semantic/typography.css).

#### Sizing

_Status: WIP_

```ts
import { css } from '@emotion/react';
import { semanticSizing } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/semantic/sizing.css'; // CSS usage

const stringStyle = css`
	height: ${semanticSizing.height.md}; /* JS/TS usage */
	border-width: var(--semantic-sizing-border-md); /* CSS usage */
`;

const objectStyle = {
	height: semanticSizing.height.md /* JS/TS usage */,
	borderWidth: 'var(--semantic-sizing-border-md)' /* CSS usage */,
};

// Icon sizing example
const iconStyle = css`
	width: ${semanticSizing.icon.lg};
	height: ${semanticSizing.icon.lg};
`;
```

For a list of available semantic sizing styles see the [Storybook Semantic Sizing](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-semantic-sizing--docs) section.

For a full list of CSS Semantic Sizing tokens see [`semantic/sizing.css`](./src/styleD/build/css/semantic/sizing.css).

### Base / Primitives

#### Colors

_Status: WIP_

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

_Status: WIP_

```ts
import { css } from '@emotion/react';
import { baseTypography } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/typography.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	font-family: ${baseTypography.family['Open Sans']};
	font-size: ${baseTypography.size['14-rem']};
	font-weight: ${baseTypography.weight['Open Sans'].normal};
	font-variation-settings: 'wdth' ${baseTypography.width['Open Sans']};
	style: ${baseTypography.style.normal};
	line-height: ${baseTypography.lineHeight.normal};
	letter-spacing: ${baseTypography.letterSpacing['default-rem']};
`;
const objectStyleJS = {
	fontFamily: baseTypography.family['Open Sans'],
	fontSize: baseTypography.size['14-rem'],
	fontWeight: baseTypography.weight['Open Sans'].normal,
	fontVariationSettings: `'wdth' ${baseTypography.width['Open Sans']}`,
	fontStyle: baseTypography.style.normal,
	lineHeight: baseTypography.lineHeight.normal,
	letterSpacing: baseTypography.letterSpacing['default-rem'],
};

/* CSS usage */
const stringStyleCSS = css`
	font-family: var(--base-typography-family-open-sans);
	font-size: var(--base-typography-size-14-rem);
	font-weight: var(--base-typography-weight-open-sans-normal);
	font-variation-settings: 'wdth' var(--base-typography-width-open-sans);
	font-style: var(--base-typography-style-normal);
	line-height: var(--base-typography-line-height-normal);
	letter-spacing: var(--base-typography-letter-spacing-default-rem);
`;
const objectStyleCSS = {
	fontFamily: 'var(--base-typography-family-open-sans)',
	fontSize: 'var(--base-typography-size-14-rem)',
	fontWeight: 'var(--base-typography-weight-open-sans-normal)',
	fontVariationSettings: `'wdth' var(--base-typography-width-open-sans)`,
	fontStyle: 'var(--base-typography-style-normal)',
	lineHeight: 'var(--base-typography-line-height-normal)',
	letterSpacing: 'var(--base-typography-letter-spacing-default-rem)',
};
```

For a list of the available base/primitives typography tokens see the [Storybook Base Typography](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-typography--docs) section.

For a full list of CSS Base/Primitives Typography tokens see [`base/typography.css`](./src/styleD/build/css/base/typography.css).

#### Spacing

_Status: WIP_

The `rem` tokens should be used in most cases to ensure scalability across different root font sizes.
`px` tokens are available for cases where a fixed pixel value is required.

```ts
import { css } from '@emotion/react';
import { baseSpacing } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/spacing.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	padding: ${baseSpacing['16-rem']};
	margin-bottom: ${baseSpacing['24-rem']};
	gap: ${baseSpacing['8-rem']};
`;
const objectStyleJS = {
	padding: baseSpacing['16-rem'],
	marginBottom: baseSpacing['24-rem'],
	gap: baseSpacing['8-rem'],
};

/* CSS usage */
const stringStyleCSS = css`
	padding: var(--base-spacing-16-rem);
	margin-bottom: var(--base-spacing-24-rem);
	gap: var(--base-spacing-8-rem);
`;
const objectStyleCSS = {
	padding: 'var(--base-spacing-16-rem)',
	marginBottom: 'var(--base-spacing-24-rem)',
	gap: 'var(--base-spacing-8-rem)',
};
```

For a list of the available base/primitives spacing tokens see the [Storybook Base Spacing](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-spacing--docs) section.

For a full list of CSS Base/Primitives Spacing tokens see [`base/spacing.css`](./src/styleD/build/css/base/spacing.css).

#### Sizing

_Status: WIP_

The `rem` tokens should be used in most cases to ensure scalability across different root font sizes.
`px` tokens are available for cases where a fixed pixel value is required.

```ts
import { css } from '@emotion/react';
import { baseSizing } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/sizing.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	width: ${baseSizing['size-48-rem']};
	height: ${baseSizing['size-24-rem']};
	min-width: ${baseSizing['size-24-rem']};
`;
const objectStyleJS = {
	width: baseSizing['size-48-rem'],
	height: baseSizing['size-24-rem'],
	minWidth: baseSizing['size-24-rem'],
};

/* CSS usage */
const stringStyleCSS = css`
	width: var(--base-sizing-size-48-rem);
	height: var(--base-sizing-size-24-rem);
	min-width: var(--base-sizing-size-24-rem);
`;
const objectStyleCSS = {
	width: 'var(--base-sizing-size-48-rem)',
	height: 'var(--base-sizing-size-24-rem)',
	minWidth: 'var(--base-sizing-size-24-rem)',
};
```

For a list of the available base/primitives sizing tokens see the [Storybook Base Sizing](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-sizing--docs) section.

For a full list of CSS Base/Primitives Sizing tokens see [`base/sizing.css`](./src/styleD/build/css/base/sizing.css).

#### Radius

_Status: WIP_

The `rem` tokens should be used in most cases to ensure scalability across different root font sizes.
`px` tokens are available for cases where a fixed pixel value is required.

```ts
import { css } from '@emotion/react';
import { baseRadius } from '@guardian/stand'; // JS/TS usage
import '@guardian/stand/base/radius.css'; // CSS usage

/* JS/TS usage */
const stringStyleJS = css`
	border-radius: ${baseRadius['corner-4-rem']};
`;
const objectStyleJS = {
	borderRadius: baseRadius['corner-4-rem'],
};

/* CSS usage */
const stringStyleCSS = css`
	border-radius: var(--base-radius-corner-4-rem);
`;
const objectStyleCSS = {
	borderRadius: 'var(--base-radius-corner-4-rem)',
};
```

For a list of the available base/primitives radius tokens see the [Storybook Base Radius](https://68c12e3ed577cb56abfd31bf-kggeezequd.chromatic.com/?path=/docs/stand-editorial-design-system-base-radius--docs) section.

For a full list of CSS Base/Primitives Radius tokens see [`base/radius.css`](./src/styleD/build/css/base/radius.css).

## Components - Base

General purpose components for use across a variety of editorial tools based on the design system.

### `Avatar`

The Avatar component displays a user's profile image or initials in a circular container. It supports multiple sizes, colors, and automatic fallback handling.

**When to use**

- Display user profiles in lists, comments, or headers
- Show user identity in messaging interfaces
- Represent users in collaborative features

**Peer dependencies:**

- `@emotion/react`
- `react`
- `react-dom`
- `typescript`

See the `peerDependencies` section of `package.json` for compatible versions.

See [avatar custom component build](#avatar-custom-component-build) for usage without React/Emotion.

#### Example usage

See "Emotion/React" heading on [codesandbox.io](https://codesandbox.io/p/sandbox/guardian-stand-avatar-component-mqvzh5)

```tsx
import { Avatar } from '@guardian/stand/avatar';

/* types, if required */
import type { AvatarProps, AvatarTheme } from '@guardian/stand/avatar';

/* Initials only */
<Avatar initials="AB" size="md" />

/* Image with alt text */
<Avatar
	src="https://example.com/avatar.jpg"
	alt="User Name"
	size="md"
/>

/* Image with fallback initials and a specific color */
<Avatar
	src="https://example.com/avatar.jpg"
	alt="User Name"
	initials="AB"
	color="blue"
	size="md"
/>
```

#### Props

| Name           | Type               | Required    | Default                         | Description                                    |
| -------------- | ------------------ | ----------- | ------------------------------- | ---------------------------------------------- |
| `size`         | `'sm'` \| `'md'`   | No          | `'md'`                          | Size of the avatar.                            |
| `color`        | Various            | No          | Deterministic based on initials | Color of the avatar.                           |
| `initials`     | `string`           | Conditional | N/A                             | Initials to display when no image is provided. |
| `src`          | `string`           | Conditional | N/A                             | URL of the avatar image.                       |
| `alt`          | `string`           | Conditional | N/A                             | Alt text for the image for accessibility.      |
| `theme`        | `AvatarTheme`      | No          | N/A                             | Custom theme overrides for the avatar.         |
| `cssOverrides` | `SerializedStyles` | No          | N/A                             | Custom CSS styles for the avatar.              |
| `className`    | `string`           | No          | N/A                             | Additional class name(s) for the avatar.       |

When using `src`, the `alt` prop is required for accessibility.
When not using `src`, the `initials` prop is required.

**`size`**

The avatar supports two sizes:

- `sm` (small): 32px
- `md` (medium): 40px

**`color`**

When no `color` is set, the avatar picks a deterministic color based on the initials (with the exception of `outlined`). You can also specify a color explicitly.

Available colors: `outlined`, `blue`, `green`, `red`, `cyan`, `teal`, `cool-purple`, `warm-purple`, `magenta`, `orange`, `yellow`

#### Customisation

We recommend using the Avatar component as provided, but it can be customised using the `theme` or `cssOverrides` props as required.

**Custom theme**

The `theme` prop allows you to override specific design tokens for the Avatar component:

```tsx
import type { AvatarTheme } from '@guardian/stand/avatar';
import { Avatar } from '@guardian/stand/avatar';
import { baseColors, baseSizing } from '@guardian/stand';

const customTheme: AvatarTheme = {
	shared: {
		color: {
			blue: {
				background: baseColors.blue[100],
				text: baseColors.neutral[900],
			},
		},
	},
	md: {
		size: baseSizing['size-48-rem'],
	},
};

const Component = () => (
	<Avatar color="blue" initials="CT" size="md" theme={customTheme} />
);
```

**CSS overrides**

The `cssOverrides` prop allows you to pass custom CSS to the Avatar component, if the theme prop is not sufficient:

```tsx
import { Avatar } from '@guardian/stand/avatar';
import { baseColors, baseSizing, baseSpacing } from '@guardian/stand';
import { css } from '@emotion/react';

const customStyles = css`
	border: ${baseSizing['size-2-rem']} solid ${baseColors.red[500]};
	margin: ${baseSpacing['8-rem']};
`;

const Component = () => (
	<Avatar initials="CO" size="md" color="red" cssOverrides={customStyles} />
);
```

#### Avatar Custom Component Build

If you're not using React/Emotion, or `@guardian/stand` is not compatible with your project, you can create a custom Avatar component using the styles defined in the `AvatarTheme` type.

You will however be responsible for any additional functionality on top of the styles, for example image loading, image fallback, accessibility etc.

See "Custom Component" heading on [codesandbox.io](https://codesandbox.io/p/sandbox/guardian-stand-avatar-component-mqvzh5)

**`css`**

You can import the Avatar styles as CSS from the package, make sure that your build process supports importing CSS from `node_modules`/`package.json`:

```css
/* import the font and avatar styles */
@import '@guardian/stand/fonts/OpenSans.css';
@import '@guardian/stand/component/avatar.css';

/*
or for scenarios where you have to use relative paths/node_modules directly:

@import 'node_modules/@guardian/stand/dist/fonts/OpenSans.css';
@import 'node_modules/@guardian/stand/dist/styleD/build/css/component/avatar.css';
*/

/* example setup of avatar style using md size and blue color */
.stand-avatar {
	display: var(--component-avatar-shared-display);
	align-items: var(--component-avatar-shared-align-items);
	justify-content: var(--component-avatar-shared-justify-content);
	overflow: var(--component-avatar-shared-overflow);
	flex-shrink: var(--component-avatar-shared-flex-shrink);
	border-radius: var(--component-avatar-shared-border-radius);
	background-color: var(--component-avatar-shared-color-blue-background);
	width: var(--component-avatar-md-size);
	height: var(--component-avatar-md-size);
	border: var(--component-avatar-shared-color-blue-border);
	color: var(--component-avatar-shared-color-blue-text);
	font: var(--component-avatar-md-typography-font);
	letter-spacing: var(--component-avatar-md-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-avatar-md-typography-font-width);
}

/* example setup for avatar image */
.stand-avatar > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
```

```html
<!-- example usage of avatar style in html with avatar -->
<div class="stand-avatar">AB</div>

<!-- example usage of avatar style in html with avatar image -->
<div class="stand-avatar">
	<img src="https://example.com/avatar.jpg" alt="User Name" />
</div>
```

**TypeScript/JavaScript**

Use the `componentAvatar` variable and the `ComponentAvatar` type to define your custom styles in TypeScript/JavaScript:

```ts
import type { ComponentAvatar } from '@guardian/stand'; // if types required
import { componentAvatar } from '@guardian/stand';

const style = `
  display: ${componentAvatar.shared.display};
  align-items: ${componentAvatar.shared['align-items']};
  justify-content: ${componentAvatar.shared['justify-content']};
  overflow: ${componentAvatar.shared.overflow};
  flex-shrink: ${componentAvatar.shared['flex-shrink']};
  border-radius: ${componentAvatar.shared['border-radius']};
  background-color: ${componentAvatar.shared.color.blue.background};
  width: ${componentAvatar.md.size};
  height: ${componentAvatar.md.size};
  border: ${componentAvatar.shared.color.blue.border};
  color: ${componentAvatar.shared.color.blue.text};
  font: ${componentAvatar.md.typography.font};
  letter-spacing: ${componentAvatar.md.typography.letterSpacing};
  font-variation-settings: 'wdth' ${componentAvatar.md.typography.fontWidth};
`;

const imgStyle = `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById('app')!.innerHTML = `
    <h2>
        Using <code>typescript</code>/<code>javascript</code>
    </h2>
    <div style="${style}">AB</div>
    <div style="${style}">
        <img
            style="${imgStyle}"
            src="https://example.com/avatar.jpg"
            alt="User Name"
        />
    </div>
`;
```

## Components - Editorial

Specialised components for use in specific editorial use cases.

### `Byline`

A flexible byline editor component built in ProseMirror and React with usability and accessibility in mind.

**Peer dependencies:**

You'll need to install the following peer dependencies in your project to use the `Byline` component:

- `@emotion/react`
- `@guardian/prosemirror-invisibles`
- `prosemirror-dropcursor`
- `prosemirror-history`
- `prosemirror-keymap`
- `prosemirror-model`
- `prosemirror-state`
- `prosemirror-view`
- `react`
- `react-dom`
- `typescript`

See the `peerDependencies` section of `package.json` for compatible versions.

**Note:** If you only need the built CSS (`@guardian/stand/component/byline.css`), you don't need to install these dependencies.

#### Usage

```tsx
import type { BylineModel } from '@guardian/stand/byline';
import { Byline } from '@guardian/stand/byline';

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

- `@emotion/react`
- `react`
- `react-aria-components`
- `react-dom`
- `typescript`

See the `peerDependencies` section of `package.json` for compatible versions.

**Note:** If you only need the built CSS (`@guardian/stand/component/tagAutocomplete.css`), you don't need to install these dependencies.

##### Props

See [`TagAutocompleteProps`](src/components/tag-picker/TagAutocomplete.tsx#L23) for the full list of props, usage example can be seen in Storybook.

#### TagTable

_Status: Testing_

Part of the overall TagPicker component, the TagTable provides an accessible
table for displaying tags, with options to add, remove, and reorder tags via drag and drop,
based on the [React Aria Table](https://react-spectrum.adobe.com/react-aria/Table) component.

**Peer dependencies:**

- `@emotion/react`
- `react`
- `react-aria-components`
- `react-dom`
- `typescript`

See the `peerDependencies` section of `package.json` for compatible versions.

**Note:** If you only need the built CSS (`@guardian/stand/component/tagTable.css`), you don't need to install these dependencies.

##### Props

See [`TagTableProps`](src/components/tag-picker/TagTable.tsx#L31) for the full list of props, usage example can be seen in Storybook.

#### Usage

_Example with TagAutocomplete and TagTable combined:_

```tsx
import { TagAutocomplete, TagTable } from '@guardian/stand/tag-picker';

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

### `UserMenu`

The UserMenu component presents a collection of accessibility settings for users to customise their experience of using the application. The current supported settings are:

- "Text Size"
- "Font Family"
- "Color scheme"

**Peer dependencies:**

- `@emotion/react`
- `react`
- `react-dom`
- `typescript`
- `react-aria-components`

See the `peerDependencies` section of `package.json` for compatible versions.

**When to use**

- as an application-level "accessibility options" panel
- as part of a more general options page

#### Usage

```tsx
import { UserMenu, type UserMenuProps } from '@guardian/stand/user-menu';

const customFontFamilyOptions = [
	{
		id: 'white',
		buttonStyle: {
			backgroundColor: 'white',
		},
		isDefault: true,
	},
	{
		id: 'pink',
		buttonStyle: {
			backgroundColor: 'pink',
		},
	},
];

const Component = ({
	currentPreferences,
	updatePreferences,
}: {
	currentPreferences: UserMenuProps['preferences'];
	updatePreferences: UserMenuProps['updatePreferences'];
}) => {
	...
	return (
		<>
			...
			<UserMenu
				feedBacklink="https://example.com/feedback-form"
				fontFamilyOptions={customFontFamilyOptions}
				colorSchemeOptions={[]}
				preferences={currentPreferences}
				updatePreferences={updatePreferences}
			/>
			...
		</>
	);
};
```

`UserMenu` does not manage the persistence of the settings, nor how they are applied in the application when set - it merely presents a set of [controlled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) inputs for displaying and setting the values held by the application.

There are options defaults for each of the setting, but these can be overridden with the props. IF the application does not support customising one of the options, setting an empty array for one of the sets of options will exclude that option from the UI (like in `colorSchemeOptions` in the example above).

#### Props

See [`UserMenuProps`](src/user-menu/UserMenu.tsx#L14) for the full list of props, usage example can be seen in Storybook.

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
