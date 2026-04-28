import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntendedAudienceSignifier } from './IntendedAudienceSignifier';

const meta = {
	title: 'Stand/Tools Design System/Components/IntendedAudienceSignifier',
	component: IntendedAudienceSignifier,
	parameters: {},
	args: {},
} satisfies Meta<typeof IntendedAudienceSignifier>;

type Story = StoryObj<typeof IntendedAudienceSignifier>;

const iconStyles = css`
	border-color: #0000ffff;
	align-items: flex-end;
`;

export default meta;

export const UKAndUSStory = {
	name: 'UKandUS',
	args: { sourceTag: 'uk', intendedAudienceTag: 'us' },
} satisfies Story;

export const UKAndAUStory = {
	name: 'UKandAU',
	args: { sourceTag: 'uk', intendedAudienceTag: 'au' },
} satisfies Story;

export const UKAndGlobalStory = {
	name: 'UKandGlobal',
	args: { sourceTag: 'uk', intendedAudienceTag: 'global' },
} satisfies Story;

export const USAndAUStory = {
	name: 'USandAU',
	args: { sourceTag: 'us', intendedAudienceTag: 'au' },
} satisfies Story;

export const USAndGlobalStory = {
	name: 'USandGlobal',
	args: {
		sourceTag: 'us',
		intendedAudienceTag: 'global',
	},
} satisfies Story;

export const AUAndGlobalStory = {
	name: 'AUandGlobal',
	args: {
		sourceTag: 'au',
		intendedAudienceTag: 'global',
	},
} satisfies Story;

export const UKAndGlobalStoryWithCustomTheme = {
	name: 'UKandGlobalWithCustomTheme',
	args: {
		sourceTag: 'uk',
		intendedAudienceTag: 'global',
		theme: { color: 'red' },
	},
} satisfies Story;

export const AUAndGlobalWithCSSOverrides = {
	name: 'AUAndGlobalWithCSSOverrides',
	args: {
		sourceTag: 'au',
		intendedAudienceTag: 'global',
		cssOverrides: iconStyles,
	},
} satisfies Story;
