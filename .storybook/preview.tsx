import { Global } from '@emotion/react';
import { css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';
import {
	semanticTypography,
} from '../src';
import { convertTypographyToEmotionObjectStyle } from '../src/utils';

const Fonts = css`
	@import url('https://assets.guim.co.uk/fonts/open-sans/OpenSans.css');
	@font-face {
		font-family: 'GH Guardian Headline';
		src: url('https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/full-not-hinted/GHGuardianHeadline-Bold.woff2')
			format('woff2');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
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
`;

const globalFont = {
	color: '#292929',
	...convertTypographyToEmotionObjectStyle(semanticTypography['body-sm']),
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
