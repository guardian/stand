#!/usr/bin/env node

/**
 * Scaffold a new Tools Design System component.
 *
 * Usage:
 *   pnpm scaffold <ComponentName>
 *   pnpm scaffold <component-name>
 *
 * Example:
 *   pnpm scaffold Chip
 *   pnpm scaffold date-picker
 *
 * The script will:
 *  1. Create the token JSON file in src/styleD/tokens/component/
 *  2. Update src/styleD/config.js with the new token entry
 *  3. Run pnpm build-styled
 *  4. Create the component folder under src/components/
 *  5. Scaffold ComponentName.tsx, .stories.tsx, .mdx, sandbox.ts, styles.ts, types.ts
 *  6. Create the entry-point file in src/<name>.ts
 *  7. Add style exports to src/index.ts
 *  8. Update rollup.config.js with the new input entry
 *  9. Update package.json with exports + typesVersions
 *  10. Create a changeset for the new component
 *
 *  Note: This script was generated with help from Copilot and Claude Opus 4.6
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// ── Helpers ──────────────────────────────────────────────────────────

/** "my-component" → "myComponent" */
const camelCase = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** "my-component" → "MyComponent" */
const pascalCase = (str) => {
	const cc = camelCase(str);
	return cc.charAt(0).toUpperCase() + cc.slice(1);
};

/** "MyComponent" → "my-component" */
const kebabCase = (str) =>
	str
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
		.toLowerCase();

// ── Parse input ──────────────────────────────────────────────────────

const rawInput = process.argv[2];
if (!rawInput) {
	console.error(
		'Usage: pnpm scaffold <ComponentName|component-name>\nExample: pnpm scaffold Chip',
	);
	process.exit(1);
}

// Normalise to kebab-case for file paths, camelCase for tokens, PascalCase for types
const kebab = kebabCase(rawInput); // e.g. "date-picker"
const camel = camelCase(kebab); // e.g. "datePicker"
const pascal = pascalCase(kebab); // e.g. "DatePicker"

const ROOT = resolve(import.meta.dirname, '..');

// ── Guard: don't overwrite ───────────────────────────────────────────

const componentDir = resolve(ROOT, 'src/components', kebab);
if (existsSync(componentDir)) {
	console.error(`Component directory already exists: src/components/${kebab}`);
	process.exit(1);
}

const tokenFile = resolve(ROOT, `src/styleD/tokens/component/${camel}.json`);
if (existsSync(tokenFile)) {
	console.error(
		`Token file already exists: src/styleD/tokens/component/${camel}.json`,
	);
	process.exit(1);
}

// ── 1. Create token JSON ─────────────────────────────────────────────

console.log(
	`[1/10] Creating token file: src/styleD/tokens/component/${camel}.json`,
);

const tokenJson = {
	component: {
		[camel]: {
			shared: {
				display: {
					$type: 'string',
					$value: 'inline-flex',
				},
			},
		},
	},
};

writeFileSync(tokenFile, JSON.stringify(tokenJson, null, '\t') + '\n');

// ── 2. Update src/styleD/config.js ───────────────────────────────────

console.log('[2/10] Updating src/styleD/config.js');

const configPath = resolve(ROOT, 'src/styleD/config.js');
let configContent = readFileSync(configPath, 'utf8');

// Insert before the "editorial components" comment
const editorialMarker = '\t/** editorial components */';
if (!configContent.includes(editorialMarker)) {
	console.error(
		'Could not find "/** editorial components */" marker in config.js',
	);
	process.exit(1);
}

const newEntry = [
	`\t{`,
	`\t\tgroup: 'component',`,
	`\t\tcomponent: '${camel}',`,
	`\t},`,
	``,
].join('\n');

configContent = configContent.replace(
	editorialMarker,
	newEntry + editorialMarker,
);

writeFileSync(configPath, configContent);

// ── 3. Run build-styled ──────────────────────────────────────────────

console.log('[3/10] Running pnpm build-styled');

execSync('pnpm run build-styled', { cwd: ROOT, stdio: 'inherit' });

// ── 4. Create component directory ────────────────────────────────────

console.log(`[4/10] Creating component directory: src/components/${kebab}/`);

mkdirSync(componentDir, { recursive: true });

// ── 5. Scaffold component files ──────────────────────────────────────

console.log('[5/10] Scaffolding component files');

// --- types.ts ---
writeFileSync(
	resolve(componentDir, 'types.ts'),
	`import type { DefaultProps } from '../../util/types';
import type { ${pascal}Theme } from './styles';

export interface ${pascal}Props extends DefaultProps<${pascal}Theme> {
	/**
	 * TODO: Add component-specific props here
	 */
	children?: React.ReactNode;
}
`,
);

// --- styles.ts ---
writeFileSync(
	resolve(componentDir, 'styles.ts'),
	`import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Component${pascal} } from '../../styleD/build/typescript/component/${camel}';
import { component${pascal} } from '../../styleD/build/typescript/component/${camel}';
import type { Prettify } from '../../util/types';

export type ${pascal}Theme = Prettify<Component${pascal}>;

export const default${pascal}Theme: ${pascal}Theme = component${pascal};

export const ${camel}Styles = (theme: ${pascal}Theme): SerializedStyles => {
	return css\`
		display: \${theme.shared.display};
	\`;
};
`,
);

// --- ComponentName.tsx ---
writeFileSync(
	resolve(componentDir, `${pascal}.tsx`),
	`import { mergeDeep } from '../../util/mergeDeep';
import { default${pascal}Theme, ${camel}Styles } from './styles';
import type { ${pascal}Props } from './types';

export function ${pascal}({
	children,
	theme = {},
	cssOverrides,
	className,
	...props
}: ${pascal}Props) {
	const mergedTheme = mergeDeep(default${pascal}Theme, theme);

	return (
		<div
			css={[${camel}Styles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}
`,
);

// --- ComponentName.stories.tsx ---
writeFileSync(
	resolve(componentDir, `${pascal}.stories.tsx`),
	`import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${pascal} } from './${pascal}';

const meta = {
	title: 'Stand/Tools Design System/Components/${pascal}',
	component: ${pascal},
	parameters: {},
	args: {},
} satisfies Meta<typeof ${pascal}>;

type Story = StoryObj<typeof ${pascal}>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		children: '${pascal}',
	},
} satisfies Story;
`,
);

// --- ComponentName.mdx ---
writeFileSync(
	resolve(componentDir, `${pascal}.mdx`),
	`import { Meta, Story } from '@storybook/addon-docs/blocks';
import ${pascal}Stories, { Default } from './${pascal}.stories';
import {
	SandboxReact,
	SandboxCss,
	SandboxJs,
} from '../../util/storybook/sandbox/Sandbox';
import {
	componentName,
	componentCss,
	componentHtml,
	componentJs,
	componentTsx,
} from './sandbox';

<Meta of={${pascal}Stories} />

# ${pascal}

TODO: Add a description for the ${pascal} component.

## When to use

- TODO: Describe when to use this component

## Peer dependencies

- \`@emotion/react\`
- \`react\`
- \`react-dom\`
- \`typescript\`

See the \`peerDependencies\` section of \`package.json\` for compatible versions.

See [custom component build](#custom-component-build) for usage without React/Emotion.

## Example usage

<SandboxReact componentName={componentName} componentTsx={componentTsx} />

\`\`\`tsx
import { ${pascal} } from '@guardian/stand/${kebab}';

/* types, if required */
import type { ${pascal}Props, ${pascal}Theme } from '@guardian/stand/${kebab}';

<${pascal}>Hello</${pascal}>
\`\`\`

## Props

| Name           | Type               | Required | Default | Description                          |
| -------------- | ------------------ | -------- | ------- | ------------------------------------ |
| \`children\`     | \`React.ReactNode\`  | No       | N/A     | Content to render inside the component. |
| \`theme\`        | \`${pascal}Theme\`     | No       | N/A     | Custom theme overrides.              |
| \`cssOverrides\` | \`SerializedStyles\` | No       | N/A     | Custom CSS styles.                   |
| \`className\`    | \`string\`           | No       | N/A     | Additional class name(s).            |

## Stories

### Default

<Story of={Default} />

## Customisation

We recommend using the ${pascal} component as provided, but it can be customised using the \`theme\` or \`cssOverrides\` props as required.

### Custom theme

The \`theme\` prop allows you to override specific design tokens for the ${pascal} component:

\`\`\`tsx
import type { ${pascal}Theme } from '@guardian/stand/${kebab}';
import { ${pascal} } from '@guardian/stand/${kebab}';

const customTheme: Partial<${pascal}Theme> = {
	// override tokens here
};

const Component = () => <${pascal} theme={customTheme}>Hello</${pascal}>;
\`\`\`

### CSS overrides

The \`cssOverrides\` prop allows you to pass custom CSS to the ${pascal} component:

\`\`\`tsx
import { ${pascal} } from '@guardian/stand/${kebab}';
import { css } from '@emotion/react';

const customStyles = css\\\`
	// custom styles here
\\\`;

const Component = () => <${pascal} cssOverrides={customStyles}>Hello</${pascal}>;
\`\`\`

## Custom Component Build

If you're not using React/Emotion, you can create a custom ${pascal} component using the styles defined in the \`${pascal}Theme\` type.

**\`css\`**

You can import the ${pascal} styles as CSS from the package:

<SandboxCss
	componentName={componentName}
	componentHtml={componentHtml}
	componentCss={componentCss}
/>

**TypeScript/JavaScript**

Use the \`component${pascal}\` variable and the \`Component${pascal}\` type:

<SandboxJs componentName={componentName} componentJs={componentJs} />
`,
);

// --- sandbox.ts ---
writeFileSync(
	resolve(componentDir, 'sandbox.ts'),
	`// Component Name
export const componentName = '${pascal}';

// ${pascal} - React sandbox example
export const componentTsx = /* javascript */ \`import { ${pascal} } from '@guardian/stand/${kebab}';

export const Component = () => (
	<${pascal}>Hello</${pascal}>
);
\`;

// ${pascal} - Custom component - CSS example
export const componentCss = /* css */ \`
/* import the ${pascal.toLowerCase()} styles */
@import '@guardian/stand/component/${camel}.css';

.stand-${kebab} {
	display: var(--component-${camel}-shared-display);
}
\`;

export const componentHtml = /* html */ \`<div class="container">
	<div class="stand-${kebab}">Hello</div>
</div>
\`;

// ${pascal} - Custom component - JS example
export const componentJs = /* javascript */ \`
import { component${pascal} } from "@guardian/stand";

const style = \\\`
	display: \\\${component${pascal}.shared.display};
\\\`;

document.getElementById("app").innerHTML = \\\`
	<div style="\\\${style}">Hello</div>
\\\`;
\`;
`,
);

// ── 6. Create entry-point file in src/ ───────────────────────────────

console.log(`[6/10] Creating entry point: src/${kebab}.ts`);

const entryPath = resolve(ROOT, `src/${kebab}.ts`);
writeFileSync(
	entryPath,
	`/**
 * ${pascal} component entry point
 *
 * Peer dependencies required to use these components:
 * - \`@emotion/react\`
 * - \`react\`
 * - \`react-dom\`
 * - \`typescript\`
 *
 * See the \`peerDependencies\` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/${camel}.css),
 * you don't need to install these.
 */
export { ${pascal} } from './components/${kebab}/${pascal}';
export type { ${pascal}Props } from './components/${kebab}/types';
export type { ${pascal}Theme } from './components/${kebab}/styles';
export { component${pascal} } from './styleD/build/typescript/component/${camel}';
export type { Component${pascal} } from './styleD/build/typescript/component/${camel}';
`,
);

// ── 7. Add style exports to src/index.ts ─────────────────────────────

console.log('[7/10] Adding style exports to src/index.ts');

const indexPath = resolve(ROOT, 'src/index.ts');
let indexContent = readFileSync(indexPath, 'utf8');

// Find the end of the "design system component tokens" block — insert before the blank line/base tokens
const faviconExportLine = `export type { ComponentFavicon } from './styleD/build/typescript/component/favicon';`;
if (!indexContent.includes(faviconExportLine)) {
	console.error('Could not find ComponentFavicon export line in src/index.ts');
	process.exit(1);
}

const newExports = [
	`export { component${pascal} } from './styleD/build/typescript/component/${camel}';`,
	`export type { Component${pascal} } from './styleD/build/typescript/component/${camel}';`,
].join('\n');

indexContent = indexContent.replace(
	faviconExportLine,
	faviconExportLine + '\n' + newExports,
);

writeFileSync(indexPath, indexContent);

// ── 8. Update rollup.config.js ───────────────────────────────────────

console.log('[8/10] Updating rollup.config.js');

const rollupPath = resolve(ROOT, 'rollup.config.js');
let rollupContent = readFileSync(rollupPath, 'utf8');

// Insert new entry after the last design system component (favicon)
const faviconRollupLine = `\tfavicon: 'src/favicon.ts',`;
if (!rollupContent.includes(faviconRollupLine)) {
	console.error('Could not find favicon entry in rollup.config.js');
	process.exit(1);
}

const newRollupEntry = `\t'${kebab}': 'src/${kebab}.ts',`;
rollupContent = rollupContent.replace(
	faviconRollupLine,
	faviconRollupLine + '\n' + newRollupEntry,
);

writeFileSync(rollupPath, rollupContent);

// ── 9. Update package.json ───────────────────────────────────────────

console.log('[9/10] Updating package.json');

const pkgPath = resolve(ROOT, 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));

// Add to exports map — component entry point
pkg.exports[`./${kebab}`] = {
	types: `./dist/types/${kebab}.d.ts`,
	import: `./dist/${kebab}.js`,
	require: `./dist/${kebab}.cjs`,
};

// Add CSS export
pkg.exports[`./component/${camel}.css`] =
	`./dist/styleD/build/css/component/${camel}.css`;

// Add to typesVersions
pkg.typesVersions['*'][kebab] = [`./dist/types/${kebab}.d.ts`];

writeFileSync(pkgPath, JSON.stringify(pkg, null, '\t') + '\n');

// ── 10. Create changeset ──────────────────────────────────────────────

console.log('[10/10] Creating changeset');

const changesetDir = resolve(ROOT, '.changeset');
const changesetId = `add-${kebab}-component`;
const changesetPath = resolve(changesetDir, `${changesetId}.md`);

const changesetContent = [
	'---',
	`"@guardian/stand": minor`,
	'---',
	'',
	`Add ${pascal} component`,
	'',
].join('\n');

writeFileSync(changesetPath, changesetContent);

// ── Final format pass ────────────────────────────────────────────────

console.log('\nRunning final format:fix...');
execSync('pnpm run format:fix', { cwd: ROOT, stdio: 'inherit' });

console.log(`
✅ Component "${pascal}" scaffolded successfully!

Files created:
  src/styleD/tokens/component/${camel}.json
  src/components/${kebab}/${pascal}.tsx
  src/components/${kebab}/${pascal}.stories.tsx
  src/components/${kebab}/${pascal}.mdx
  src/components/${kebab}/sandbox.ts
  src/components/${kebab}/styles.ts
  src/components/${kebab}/types.ts
  src/${kebab}.ts
  .changeset/${changesetId}.md

Files updated:
  src/styleD/config.js
  src/index.ts
  rollup.config.js
  package.json

Next steps:
  1. Edit src/styleD/tokens/component/${camel}.json with your actual design tokens
  2. Run "pnpm build-styled" if you update the tokens
  3. Update the component (${pascal}.tsx), styles, types, stories, docs, and sandbox
  4. Run "pnpm storybook" to see your new component
`);
