import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { UserMenuProps } from './UserMenu';
import { UserMenu } from './UserMenu';

const meta = {
	title: 'Stand/UserMenu',
	component: UserMenu,
	args: {
		feedBacklink: '/',
	},
} satisfies Meta<typeof UserMenu>;

type Story = StoryObj<typeof UserMenu>;

const render = (args: UserMenuProps) => {
	const [preferences, setPreferences] = useState({});
	return (
		<UserMenu
			{...args}
			preferences={preferences}
			updatePreferences={(mod) =>
				setPreferences((current) => ({ ...current, ...mod }))
			}
		/>
	);
};

export const Default: Story = {
	render: render,
};

export const HeadingTwoTitle: Story = {
	render: render,
	args: {
		headingLevel: 2,
	},
};

export const CustomOptions: Story = {
	render: render,
	args: {
		textSizeOptions: [],
		fontFamilyOptions: [
			{
				id: 'comic',
				label: 'Comic Sans',
				description: "It's fun!",
				labelStyle: {
					fontFamily: '"ComicSans", sans-serif',
					fontSize: '2em',
				},
			},
			{
				id: 'monospace',
				label: 'Monospace Font',
				description: 'For predictable widths.',
				labelStyle: {
					fontFamily: 'monospace',
					fontSize: '2em',
				},
			},
			{
				id: 'cursive',
				label: 'Cursive style',
				description: 'Decorative',
				labelStyle: {
					fontFamily: 'cursive',
					fontSize: '2em',
				},
			},
		],
		colorSchemeOptions: [
			{
				id: 'red',
				label: 'Bright Red',
				buttonStyle: {
					backgroundColor: 'red',
					color: 'white',
				},
			},
			{
				id: 'aqua',
				label: 'Aqua',
				buttonStyle: {
					backgroundColor: 'aqua',
					color: 'black',
				},
			},
			{
				id: 'goldenrod',
				label: 'Gold',
				buttonStyle: {
					backgroundColor: 'goldenrod',
					color: 'black',
				},
			},
		],
	},
};

export const Themed: Story = {
	args: {
		theme: {
			container: {
				backgroundColor: 'skyblue',
				width: '500px',
				paddingX: '10px',
				paddingY: '20px',
			},
			heading: {
				textAlign: 'center',
				paddingTop: '10px',
				fontSize: '3em',
			},
			label: {
				textAlign: 'center',
				paddingTop: '2em',
				fontSize: '1.4em',
			},
			toggleButton: {
				selectedBorderColor: 'crimson',
				gap: '10px',
			},
		},
	},
	render: render,
};

export default meta;
