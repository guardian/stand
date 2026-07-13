import type { Meta, StoryObj } from '@storybook/react-vite';
import { articleEmail } from './fixtures/article';
import { HtmlPreview } from './HtmlPreview';

const meta = {
	title: 'Stand/Tools Design System/Components/HtmlPreview',
	component: HtmlPreview,
	parameters: {},
} satisfies Meta<typeof HtmlPreview>;

type Story = StoryObj<typeof HtmlPreview>;

export const Default = {
	args: {
		title: 'html preview',
		html: articleEmail,
	},
} satisfies Story;

export const Loading = {
	args: {
		title: 'html preview that never loads',
		isLoading: true,
	},
} satisfies Story;

export const Reloading = {
	args: {
		html: articleEmail,
		title: 'html preview that never loads',
		isLoading: true,
	},
} satisfies Story;

export const WithError = {
	args: {
		errorMessage: 'failed to load',
	},
} satisfies Story;

export const WithContentAndError = {
	args: {
		html: articleEmail,
		errorMessage: 'failed to load',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		title: 'html preview that never loads',
		html: articleEmail,
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

export default meta;
