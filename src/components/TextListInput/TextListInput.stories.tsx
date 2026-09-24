import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { baseSizing } from '../../styleD/build/typescript/base/sizing';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';
import { TextListInput } from './TextListInput';

const meta = {
	title: 'Stand/Tools Design System/Components/TextListInput',
	component: TextListInput,
	parameters: {},
} satisfies Meta<typeof TextListInput>;

type Story = StoryObj<typeof TextListInput>;

export const Empty = {
	args: {
		label: 'Text list',
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const WithInitialDataMedium = {
	name: 'With Initial Data - md',
	args: {
		label: 'Text list',
		initialData: ['Item 1', 'Item 2', 'Item 3'],
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const WithInitialDataSmall = {
	name: 'With Initial Data - sm',
	args: {
		label: 'Text list',
		size: 'sm',
		initialData: ['Item 1', 'Item 2', 'Item 3'],
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const WithPlaceholder = {
	args: {
		label: 'Text list',
		placeholder: 'Placeholder text',
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const WithErrorMessage = {
	args: {
		label: 'Text list',
		initialData: ['Item 1', 'Item 2'],
		errorMessage: 'This is an error message',
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		label: 'Text list',
		initialData: ['Item 1', 'Item 2'],
		theme: {
			label: {
				color: baseColors.orange[200],
			},
			row: {
				gap: semanticSpacing['stackXxs'],
			},
			column: {
				gap: semanticSpacing['stackXxs'],
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		label: 'Text list',
		initialData: ['Item 1', 'Item 2'],
		cssOverrides: css`
			input,
			button {
				color: ${baseColors.blue[200]};
				border: ${baseSizing.size1Rem} solid ${baseColors.blue[600]};
			}
		`,
	},
} satisfies Story;

export default meta;
