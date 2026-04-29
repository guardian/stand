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

export const GlobalUKStory = {
	name: 'GlobalUK',
	args: { source: 'UK', intendedAudience: 'Global' },
} satisfies Story;

export const GlobalUSStory = {
	name: 'GlobalUS',
	args: { source: 'US', intendedAudience: 'Global' },
} satisfies Story;

export const GlobalAUSStory = {
	name: 'GlobalAUS',
	args: { source: 'AUS', intendedAudience: 'Global' },
} satisfies Story;

export const UKAndUKStory = {
	name: 'UKandUK',
	args: { source: 'UK', intendedAudience: 'Domestic for Domestic' },
} satisfies Story;

export const USAndUSStory = {
	name: 'USandUS',
	args: { source: 'US', intendedAudience: 'Domestic for Domestic' },
} satisfies Story;

export const AUSAndAUSStory = {
	name: 'AUSandAUS',
	args: { source: 'AUS', intendedAudience: 'Domestic for Domestic' },
} satisfies Story;

export const UKAndGlobalStory = {
	name: 'UKandGlobal',
	args: { source: 'UK', intendedAudience: 'Domestic For Global' },
} satisfies Story;

export const USAndGlobalStory = {
	name: 'USandGlobal',
	args: {
		source: 'US',
		intendedAudience: 'Domestic For Global',
	},
} satisfies Story;

export const AUSAndGlobalStory = {
	name: 'AUSandGlobal',
	args: {
		source: 'AUS',
		intendedAudience: 'Domestic For Global',
	},
} satisfies Story;

export const UKAndGlobalStoryWithCustomTheme = {
	name: 'UKandGlobalWithCustomTheme',
	args: {
		source: 'UK',
		intendedAudience: 'Domestic For Global',
		theme: { color: 'red' },
	},
} satisfies Story;

export const AUSAndGlobalWithCSSOverrides = {
	name: 'AUSAndGlobalWithCSSOverrides',
	args: {
		source: 'AUS',
		intendedAudience: 'Domestic For Global',
		cssOverrides: iconStyles,
	},
} satisfies Story;

export const DontKnowStoryUK = {
	name: 'DontKnowUK',
	args: { source: 'UK', intendedAudience: "Don't know" },
} satisfies Story;

export const DontKnowStoryUS = {
	name: 'DontKnowUS',
	args: { source: 'US', intendedAudience: "Don't know" },
} satisfies Story;

export const DontKnowStoryAUS = {
	name: 'DontKnowAUS',
	args: { source: 'AUS', intendedAudience: "Don't know" },
} satisfies Story;

export const UKAndUSStory = {
	name: 'UKAndUSStory',
	args: { source: 'UK', intendedAudience: 'US' },
} satisfies Story;

export const USAndUKStory = {
	name: 'USAndUKStory',
	args: { source: 'US', intendedAudience: 'UK' },
} satisfies Story;
