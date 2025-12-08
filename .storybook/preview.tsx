import { Global } from '@emotion/react';
import { css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';

const ASSETS_URL = 'https://interactive.guim.co.uk/fonts/guss-webfonts/';

const Fonts = css`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap');
	@font-face {
		font-family: 'GH Guardian Headline';
		src:
			url('https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-Bold.woff2')
				format('woff2'),
			url('https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/latin1-not-hinted/GHGuardianHeadline-Bold.woff')
				format('woff');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Guardian Agate Sans';
		src: url('${ASSETS_URL}GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.woff2')
			format('woff2');
		font-weight: 400;
		font-style: 'normal';
		font-display: 'fallback';
	}
	@font-face {
		font-family: 'Guardian Agate Sans';
		src: url('${ASSETS_URL}GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.woff2')
			format('woff2');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Guardian Agate Sans';
		src: url('${ASSETS_URL}GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.woff2')
			format('woff2');
		font-weight: 400;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: 'Guardian Agate Sans';
		src: url('${ASSETS_URL}GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.woff2')
			format('woff2');
		font-weight: 700;
		font-style: italic;
		font-display: swap;
	}
`;

const globalFont = {
	fontFamily: '"Guardian Agate Sans", "Arial", sans-serif',
	fontSize: '13px',
	lineHeight: '1.2',
	color: '#292929',
};

const globalStyles = css({
	html: {
		height: '100vh',
		width: '100vw',
	},
	body: {
		...globalFont,
		minHeight: '100vh',
		width: '100vw',
		margin: '0 auto',
	},
});

const GlobalStyles = () => <Global styles={[Fonts, globalStyles]} />;

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withThemeFromJSXProvider({
			GlobalStyles, // Adds GlobalStyles to all stories
		}),
	],
};

// eslint-disable-next-line import/no-default-export -- storybook expects default
export default preview;
