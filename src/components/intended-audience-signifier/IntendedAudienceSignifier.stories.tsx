import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntendedAudienceSignifier } from './IntendedAudienceSignifier';

const meta = {
	title: 'Stand/Tools Design System/Components/IntendedAudienceSignifier',
	component: IntendedAudienceSignifier,
	parameters: {},
	args: {},
} satisfies Meta<typeof IntendedAudienceSignifier>;

type Story = StoryObj<typeof IntendedAudienceSignifier>;

export default meta;

export const TestStory = {
	name: 'TestStory',
	args: {},
} satisfies Story;

export const UKAndUSStory = {
	name: 'UKandUS',
	args: { rightIcon: 'uk', leftIcon: 'us' },
} satisfies Story;

export const UKAndGlobalStory = {
	name: 'UKandGlobal',
	args: { rightIcon: 'uk', leftIcon: 'global', theme: { color: 'red' } },
} satisfies Story;
