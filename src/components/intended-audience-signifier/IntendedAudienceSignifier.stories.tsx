import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntendedAudienceSignifier } from './IntendedAudienceSignifier';

const meta = {
	title: 'Stand/Editorial Components/IntendedAudienceSignifier',
	component: IntendedAudienceSignifier,
	parameters: {},
	args: {},
} satisfies Meta<typeof IntendedAudienceSignifier>;

type Story = StoryObj<typeof IntendedAudienceSignifier>;

export default meta;

export const GlobalUKStory = {
	name: 'GlobalUK',
	args: { source: 'UK', intendedAudience: 'global' },
} satisfies Story;

export const GlobalUKStoryTitleOn = {
	name: 'GlobalUKStoryTitleOn',
	args: { source: 'UK', intendedAudience: 'global', includeTitle: true },
} satisfies Story;

export const GlobalUSStory = {
	name: 'GlobalUS',
	args: { source: 'US', intendedAudience: 'global' },
} satisfies Story;

export const GlobalAUSStory = {
	name: 'GlobalAUS',
	args: { source: 'AUS', intendedAudience: 'global' },
} satisfies Story;

export const UKAndUKStory = {
	name: 'UKandUK',
	args: { source: 'UK', intendedAudience: 'domestic-for-domestic' },
} satisfies Story;

export const USAndUSStory = {
	name: 'USandUS',
	args: { source: 'US', intendedAudience: 'domestic-for-domestic' },
} satisfies Story;

export const USAndUSStoryTitleOn = {
	name: 'USAndUSStoryTitleOn',
	args: {
		source: 'US',
		intendedAudience: 'domestic-for-domestic',
		includeTitle: true,
	},
} satisfies Story;

export const AUSAndAUSStory = {
	name: 'AUSandAUS',
	args: { source: 'AUS', intendedAudience: 'domestic-for-domestic' },
} satisfies Story;

export const UKAndGlobalStory = {
	name: 'UKandGlobal',
	args: { source: 'UK', intendedAudience: 'domestic-for-global' },
} satisfies Story;

export const UKAndGlobalStoryTitleOn = {
	name: 'UKandGlobal',
	args: {
		source: 'UK',
		intendedAudience: 'domestic-for-global',
		includeTitle: true,
	},
} satisfies Story;

export const USAndGlobalStory = {
	name: 'USandGlobal',
	args: {
		source: 'US',
		intendedAudience: 'domestic-for-global',
	},
} satisfies Story;

export const AUSAndGlobalStory = {
	name: 'AUSandGlobal',
	args: {
		source: 'AUS',
		intendedAudience: 'domestic-for-global',
	},
} satisfies Story;

export const UKAndGlobalStoryWithCustomTheme = {
	name: 'UKandGlobalWithCustomTheme',
	args: {
		source: 'UK',
		intendedAudience: 'domestic-for-global',
		theme: {
			borderRadius: '20%',
			borderStyle: 'inset',
			borderColor: 'blue',
			borderWidth: '4px',
			gap: '12px',
			paddingY: '.2em',
			chevron: {
				fill: 'blue',
			},
		},
	},
} satisfies Story;

export const AUSAndGlobalWithCSSOverrides = {
	name: 'AUSAndGlobalWithCSSOverrides',
	args: {
		source: 'AUS',
		intendedAudience: 'domestic-for-global',
		cssOverrides: css`
			border-color: #0000ffff;
			background-color: pink;
		`,
	},
} satisfies Story;

export const DontKnowStoryUK = {
	name: 'DontKnowUK',
	args: { source: 'UK' },
} satisfies Story;

export const DontKnowStoryUS = {
	name: 'DontKnowUS',
	args: { source: 'US' },
} satisfies Story;

export const DontKnowStoryAUS = {
	name: 'DontKnowAUS',
	args: { source: 'AUS' },
} satisfies Story;

export const DontKnowStoryAUSTitleOn = {
	name: 'DontKnowStoryAUSTitleOn',
	args: { source: 'AUS', includeTitle: true },
} satisfies Story;

export const UKAndUSStory = {
	name: 'UKAndUSStory',
	args: { source: 'UK', intendedAudience: 'US' },
} satisfies Story;

export const USAndUKStory = {
	name: 'USAndUKStory',
	args: { source: 'US', intendedAudience: 'UK' },
} satisfies Story;

export const USAndUKStoryTitleOn = {
	name: 'USAndUKStory',
	args: { source: 'US', intendedAudience: 'UK', includeTitle: true },
} satisfies Story;

const largeIconTheme = {
	svg: {
		width: '40px',
		height: '28px',
	},
	paddingY: '4px',
	typography: {
		font: "normal 460 28px/1.3 'Open Sans'",
	},
};

export const DontKnowStoryAUSLargeIconTheme = {
	name: 'DontKnowStoryAUSLargeIconTheme',
	args: {
		source: 'AUS',
		theme: largeIconTheme,
	},
} satisfies Story;

export const UKAndUSStoryLargeIconTheme = {
	name: 'UKAndUSStoryLargeIconTheme',
	args: { source: 'UK', intendedAudience: 'US', theme: largeIconTheme },
} satisfies Story;

export const GlobalUSStoryLargeIconTheme = {
	name: 'GlobalUSStoryLargeIconTheme',
	args: {
		source: 'US',
		intendedAudience: 'domestic-for-global',
		theme: largeIconTheme,
	},
} satisfies Story;
