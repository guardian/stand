import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './LinkButton';

const meta = {
	title: 'Stand/Editorial Design System/Components/LinkButton',
	component: LinkButton,
	parameters: {},
	args: {
		href: '#',
		children: 'LinkButton Label',
		isDisabled: false,
	},
} satisfies Meta<typeof LinkButton>;

type Story = StoryObj<typeof LinkButton>;

export default meta;

export const EmphasisedPrimaryXs = {
	name: 'emphasised-primary - xs',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'emphasised-primary',
	},
} satisfies Story;

export const EmphasisedPrimarySm = {
	name: 'emphasised-primary - sm',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'emphasised-primary',
	},
} satisfies Story;

export const EmphasisedPrimaryMd = {
	name: 'emphasised-primary - md',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'emphasised-primary',
	},
} satisfies Story;

export const EmphasisedPrimaryLg = {
	name: 'emphasised-primary - lg',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'emphasised-primary',
	},
} satisfies Story;

export const EmphasisedPrimaryXsDisabled = {
	name: 'emphasised-primary - xs - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'emphasised-primary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedPrimarySmDisabled = {
	name: 'emphasised-primary - sm - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'emphasised-primary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedPrimaryMdDisabled = {
	name: 'emphasised-primary - md - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'emphasised-primary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedPrimaryLgDisabled = {
	name: 'emphasised-primary - lg - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'emphasised-primary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedSecondaryXs = {
	name: 'emphasised-secondary - xs',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'emphasised-secondary',
	},
} satisfies Story;

export const EmphasisedSecondarySm = {
	name: 'emphasised-secondary - sm',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'emphasised-secondary',
	},
} satisfies Story;

export const EmphasisedSecondaryMd = {
	name: 'emphasised-secondary - md',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'emphasised-secondary',
	},
} satisfies Story;

export const EmphasisedSecondaryLg = {
	name: 'emphasised-secondary - lg',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'emphasised-secondary',
	},
} satisfies Story;

export const EmphasisedSecondaryXsDisabled = {
	name: 'emphasised-secondary - xs - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'emphasised-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedSecondarySmDisabled = {
	name: 'emphasised-secondary - sm - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'emphasised-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedSecondaryMdDisabled = {
	name: 'emphasised-secondary - md - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'emphasised-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const EmphasisedSecondaryLgDisabled = {
	name: 'emphasised-secondary - lg - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'emphasised-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralPrimaryXs = {
	name: 'neutral-primary - xs',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'neutral-primary',
	},
} satisfies Story;

export const NeutralPrimarySm = {
	name: 'neutral-primary - sm',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'neutral-primary',
	},
} satisfies Story;

export const NeutralPrimaryMd = {
	name: 'neutral-primary - md',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'neutral-primary',
	},
} satisfies Story;

export const NeutralPrimaryLg = {
	name: 'neutral-primary - lg',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'neutral-primary',
	},
} satisfies Story;

export const NeutralPrimaryXsDisabled = {
	name: 'neutral-primary - xs - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'neutral-primary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralPrimarySmDisabled = {
	name: 'neutral-primary - sm - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'neutral-primary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralPrimaryMdDisabled = {
	name: 'neutral-primary - md - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'neutral-primary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralPrimaryLgDisabled = {
	name: 'neutral-primary - lg - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'neutral-primary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralSecondaryXs = {
	name: 'neutral-secondary - xs',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'neutral-secondary',
	},
} satisfies Story;

export const NeutralSecondarySm = {
	name: 'neutral-secondary - sm',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'neutral-secondary',
	},
} satisfies Story;

export const NeutralSecondaryMd = {
	name: 'neutral-secondary - md',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'neutral-secondary',
	},
} satisfies Story;

export const NeutralSecondaryLg = {
	name: 'neutral-secondary - lg',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'neutral-secondary',
	},
} satisfies Story;

export const NeutralSecondaryXsDisabled = {
	name: 'neutral-secondary - xs - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'xs',
		variant: 'neutral-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralSecondarySmDisabled = {
	name: 'neutral-secondary - sm - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'sm',
		variant: 'neutral-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralSecondaryMdDisabled = {
	name: 'neutral-secondary - md - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'md',
		variant: 'neutral-secondary',
		isDisabled: true,
	},
} satisfies Story;

export const NeutralSecondaryLgDisabled = {
	name: 'neutral-secondary - lg - disabled',
	args: {
		children: 'LinkButton Label',
		size: 'lg',
		variant: 'neutral-secondary',
		isDisabled: true,
	},
} satisfies Story;
