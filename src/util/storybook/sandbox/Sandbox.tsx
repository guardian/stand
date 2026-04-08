import { Sandpack } from '@codesandbox/sandpack-react';

const TsConfig = `
{
	"compilerOptions": {
		"strict": true,
		"jsx": "react-jsx",
		"jsxImportSource": "@emotion/react",
		"esModuleInterop": true,
		"sourceMap": true,
		"allowJs": true,
		"lib": ["es6", "dom"],
		"rootDir": "."
	}
}
`;

// Set the version of @guardian/stand to be used in the sandbox, defaulting to 'latest' if not specified.
// This allows a developer to use a canary version when creating a sandbox for a component
// e.g. STORYBOOK_SANDBOX_STAND_VERSION=0.0.0-canary-20260225114514 pnpm run storybook
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- import.meta.env is available in Storybook
const standVersion =
	// @ts-expect-error -- import.meta.env is available in Storybook
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- import.meta.env is available in Storybook
	import.meta.env.STORYBOOK_SANDBOX_STAND_VERSION ?? 'latest';

const PackageJson = `
{
	"name": "@guardian/s(t)andbox",
	"version": "0.0.0",
	"description": "Example showing how to use guardian stand components and how to make them purely using css/js",
	"main": "index.html",
	"scripts": {
		"start": "parcel index.html",
		"build": "parcel build index.html"
	},
	"dependencies": {
		"parcel": "^2.16.3",
		"@guardian/stand": "${standVersion}",
		"@emotion/react": "^11.14.0",
		"react": "^19.2.4",
		"react-dom": "^19.2.4",
		"react-aria-components": "^1.13.0"
	},
	"devDependencies": {
		"@types/react": "^19.2.10",
		"@types/react-dom": "^19.2.3",
		"typescript": "^5.9.3"
	}
}
`;

type IndexHtmlProps = {
	componentName: string;
} & (
	| {
			isVanillaJs: true;
			isReact?: never;
			componentHtml?: never;
	  }
	| {
			isReact: true;
			isVanillaJs?: never;
			componentHtml?: never;
	  }
	| {
			componentHtml: string;
			isVanillaJs?: never;
			isReact?: never;
	  }
);

const IndexHtml = ({
	isVanillaJs,
	isReact,
	componentHtml,
	componentName,
}: IndexHtmlProps) => `
<html>
	<head>
		<title>@guardian/stand</title>
		<meta charset="UTF-8" />
		<link rel="stylesheet" href="./global.css" />
		${componentHtml ? `<link rel="stylesheet" href="./component.css" />` : ''}
	</head>

	<body>
		${isReact ? `<div id="react"></div><script type="module" src="./react.tsx"></script>` : ''}
		${isVanillaJs ? `<h2>Custom ${componentName} Component | Vanilla JS</h2><div id="app"></div><script type="module" src="./component.js"></script>` : ''}
		${componentHtml ? `<h2>Custom ${componentName} Component | Vanilla CSS</h2>${componentHtml}` : ''}
	</body>
</html>
`;

const GlobalCss = `
@import '@guardian/stand/util/reset.css';
@import url('https://assets.guim.co.uk/fonts/open-sans/OpenSans.css');
@import "@guardian/stand/fonts/MaterialSymbolsOutlined.css";
@import '@guardian/stand/semantic/typography.css';
@import '@guardian/stand/base/spacing.css';
@font-face {
	font-family: 'GH Guardian Headline';
	src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/full-not-hinted/GHGuardianHeadline-Bold.woff2')
		format('woff2');
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}

body {
	font: var(--semantic-typography-body-md-font);
	letter-spacing: var(--semantic-typography-body-md-letter-spacing);
	font-variation-settings: 'wdth' var(--semantic-typography-body-md-font-width);
	padding: var(--base-spacing-4-rem);
}

code {
	font-family: monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: var(--base-spacing-8-rem) 0;
}

h1 {
	font: var(--semantic-typography-heading-2xl-font);
	letter-spacing: var(--semantic-typography-heading-2xl-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-2xl-font-width);
}

h2 {
	font: var(--semantic-typography-heading-xl-font);
	letter-spacing: var(--semantic-typography-heading-xl-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-xl-font-width);
}

h3 {
	font: var(--semantic-typography-heading-lg-font);
	letter-spacing: var(--semantic-typography-heading-lg-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-lg-font-width);
}

h4 {
	font: var(--semantic-typography-heading-md-font);
	letter-spacing: var(--semantic-typography-heading-md-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-md-font-width);
}

h5 {
	font: var(--semantic-typography-heading-sm-font);
	letter-spacing: var(--semantic-typography-heading-sm-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-sm-font-width);
}

h6 {
	font: var(--semantic-typography-heading-xs-font);
	letter-spacing: var(--semantic-typography-heading-xs-letter-spacing);
	font-variation-settings: 'wdth'
		var(--semantic-typography-heading-xs-font-width);
}

ul {
	margin-top: var(--base-spacing-8-rem);
	list-style: square;
	padding: 0 var(--base-spacing-24-rem);
}

.container {
  display: flex;
  gap: var(--base-spacing-4-rem);
  margin: var(--base-spacing-4-rem);
}

.flow-column {
 flex-direction: column;
}
`;

const ReactTsx = ({
	flowColumn,
	componentName,
}: {
	flowColumn?: boolean;
	componentName: string;
}) => `
import { createRoot } from 'react-dom/client';
import { css } from '@emotion/react';
import { Component } from './component';

const App = () => {
	return (
		<>
			<h2>React ${componentName} Component</h2>
			<div className="container${flowColumn ? ' flow-column' : ''}">
				<Component />
			</div>
		</>
	);
};

const app = document.getElementById('react')!;
const root = createRoot(app);
root.render(<App />);
`;

export const SandboxReact = ({
	componentTsx,
	componentName,
	flowColumn = false,
}: {
	componentTsx: string;
	componentName: string;
	flowColumn?: boolean;
}) => {
	return (
		<Sandpack
			files={{
				'/tsconfig.json': {
					code: TsConfig,
					hidden: true,
				},
				'/package.json': {
					code: PackageJson,
					hidden: true,
				},
				'/index.html': {
					code: IndexHtml({ isReact: true, componentName }),
					hidden: true,
				},
				'/global.css': {
					code: GlobalCss,
					hidden: true,
				},
				'/react.tsx': {
					code: ReactTsx({ flowColumn, componentName }),
					hidden: true,
				},
				'/component.tsx': {
					code: componentTsx,
					active: true,
				},
			}}
		/>
	);
};

export const SandboxCss = ({
	componentCss,
	componentHtml,
	componentName,
}: {
	componentCss: string;
	componentHtml: string;
	componentName: string;
}) => {
	return (
		<Sandpack
			files={{
				'/tsconfig.json': {
					code: TsConfig,
					hidden: true,
				},
				'/package.json': {
					code: PackageJson,
					hidden: true,
				},
				'/index.html': {
					code: IndexHtml({ componentHtml, componentName }),
				},
				'/global.css': {
					code: GlobalCss,
					hidden: true,
				},
				'/component.css': {
					code: componentCss,
					active: true,
				},
			}}
		/>
	);
};

export const SandboxJs = ({
	componentJs,
	componentName,
}: {
	componentJs: string;
	componentName: string;
}) => {
	return (
		<Sandpack
			files={{
				'/tsconfig.json': {
					code: TsConfig,
					hidden: true,
				},
				'/package.json': {
					code: PackageJson,
					hidden: true,
				},
				'/index.html': {
					code: IndexHtml({ isVanillaJs: true, componentName }),
					hidden: true,
				},
				'/global.css': {
					code: GlobalCss,
					hidden: true,
				},
				'/component.js': {
					code: componentJs,
					active: true,
				},
			}}
		/>
	);
};
