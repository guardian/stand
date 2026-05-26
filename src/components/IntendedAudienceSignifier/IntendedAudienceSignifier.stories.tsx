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

export const DomesticForGlobalUk = {
	name: 'DomesticForGlobalUk',
	args: { source: 'UK', target: 'global' },
} satisfies Story;

export const DomesticForGlobalUs = {
	name: 'DomesticForGlobalUs',
	args: { source: 'US', target: 'global' },
} satisfies Story;

export const DomesticForGlobalAus = {
	name: 'DomesticForGlobalAus',
	args: { source: 'AUS', target: 'global' },
} satisfies Story;

export const DomesticForDomesticUk = {
	name: 'DomesticForDomesticUk',
	args: { source: 'UK', target: 'UK' },
} satisfies Story;

export const DomesticForDomesticUs = {
	name: 'DomesticForDomesticUs',
	args: { source: 'US', target: 'US' },
} satisfies Story;

export const DomesticForDomesticAus = {
	name: 'DomesticForDomesticAus',
	args: { source: 'AUS', target: 'AUS' },
} satisfies Story;

export const GlobalForGlobal = {
	name: 'GlobalForGlobal',
	args: {
		source: 'global',
		target: 'global',
	},
} satisfies Story;

export const UKAndGlobalStoryWithCustomTheme = {
	name: 'UKandGlobalWithCustomTheme',
	args: {
		source: 'UK',
		target: 'global',
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
		target: 'global',
		cssOverrides: css`
			border-color: #0000ffff;
			background-color: pink;
		`,
	},
} satisfies Story;

export const DontKnowStory = {
	name: 'DontKnow',
	args: {},
} satisfies Story;

export const CustomUnsetTextStory = {
	name: 'CustomUnsetText',
	args: {
		textWhenUnset: 'Not set',
	},
} satisfies Story;

export const UKAndUSStory = {
	name: 'UKAndUSStory',
	args: { source: 'UK', target: 'US' },
} satisfies Story;

export const USAndUKStory = {
	name: 'USAndUKStory',
	args: { source: 'US', target: 'UK' },
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
	args: { source: 'UK', target: 'US', theme: largeIconTheme },
} satisfies Story;

export const GlobalUSStoryLargeIconTheme = {
	name: 'GlobalUSStoryLargeIconTheme',
	args: {
		source: 'US',
		target: 'global',
		theme: largeIconTheme,
	},
} satisfies Story;
