import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { articleEmail } from './fixtures/article';
import { BreakingNewsAustralia_Red_2_email } from './fixtures/breakingNews';
import { HtmlPreviewLoader } from './HtmlPreviewLoader';

const meta = {
	title: 'Stand/Editorial Components/HtmlPreviewLoader',
	component: HtmlPreviewLoader,
	parameters: {},
} satisfies Meta<typeof HtmlPreviewLoader>;

type Story = StoryObj<typeof HtmlPreviewLoader>;

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchBreakingNewsHtml = async () => {
	await delay();
	return Promise.resolve(BreakingNewsAustralia_Red_2_email);
};
const fetchArticleHtml = async () => {
	await delay();
	return Promise.resolve(articleEmail);
};
const failToFetch = async () => {
	await delay();
	return Promise.reject(new Error('Could not fetch preview'));
};

export const Default = {
	args: {
		title: 'html preview',
		fetchHtml: fetchBreakingNewsHtml,
	},
} satisfies Story;

export const WithReloadButton = {
	args: {
		title: 'html preview',
		fetchHtml: fetchBreakingNewsHtml,
		allowReloading: true,
	},
} satisfies Story;

export const WithCustomWidthOptions = {
	args: {
		title: 'html preview',
		fetchHtml: fetchBreakingNewsHtml,
		widthOptions: [200, 400],
		defaultWidth: 400,
	},
} satisfies Story;

export const WithoutWidthOptions = {
	args: {
		title: 'html preview',
		fetchHtml: fetchBreakingNewsHtml,
		widthOptions: [],
		defaultWidth: 500,
	},
} satisfies Story;

export const CustomTitleMarkup = {
	args: {
		title: (
			<div>
				This title needs a <button>button</button>
			</div>
		),
		fetchHtml: fetchArticleHtml,
	},
} satisfies Story;

export const Loading = {
	args: {
		title: 'html preview that never loads',
		fetchHtml: () => {
			return new Promise<string>(() => {});
		},
	},
} satisfies Story;

export const WithError = {
	args: {
		title: 'html preview that fails',
		fetchHtml: failToFetch,
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		title: 'html preview that never loads',
		fetchHtml: fetchBreakingNewsHtml,
		theme: {
			shared: {
				color: {
					background: 'skyblue',
				},
			},
			paddingBottom: '20px',
			previewFrame: {
				backgroundColor: 'lime',
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		fetchHtml: fetchBreakingNewsHtml,
		cssOverrides: css`
			margin: 0 auto;
			max-width: 700px;
			border: 4px dotted black;
			padding: 5px;
		`,
	},
} satisfies Story;

export default meta;
