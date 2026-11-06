import type { SerializedStyles } from '@emotion/react';

export interface DefaultProps<ThemeType, ClassNameType = undefined> {
	/**
	 * Custom theme overrides for the component, this is the recommended way to
	 * customize the appearance of the component based on the design system tokens
	 */
	theme?: DeepPartial<ThemeType>;
	/**
	 * Class name to be applied to the component's root element, for scenarios where
	 * custom styling is needed outside of the design system theming.
	 *
	 * Either use type ClassNameType (when extending a component from react-aria-components)
	 * or optional string if ClassNameType is undefined/not provided.
	 */
	className?: ClassNameType extends undefined
		? string | undefined
		: ClassNameType;
	/**
	 * Escape hatch for custom CSS using [Emotion's `css` function](https://emotion.sh/docs/introduction).
	 * Prefer the `theme` prop. CSS overrides make components harder to maintain
	 * and update, and may cause them to no longer follow design system conventions.
	 */
	dangerouslyOverrideCss?: SerializedStyles | SerializedStyles[];
}

export interface DefaultPropsWithChildren<
	ThemeType,
	ClassNameType = undefined,
	ChildrenType = React.ReactNode,
> extends DefaultProps<ThemeType, ClassNameType> {
	/**
	 * The content of the component
	 */
	children?: ChildrenType;
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;
