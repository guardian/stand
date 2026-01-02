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

export const Themed: Story = {
	args: {
		theme: {
			container: {
				backgroundColor: 'skyblue',
				width: '500px',
				paddingX: '10px',
				paddingY:'20px',
			},
			heading: {
				textAlign: 'center',
				paddingTop: '10px',
				fontSize: '3em',
			},
			toggleButton: {
				selectedBorderColor: 'crimson',
				gap:'10px'
			},
		},
	},
	render: render,
};

export default meta;
