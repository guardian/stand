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
	 * If the theme does not cover all use cases, you can use this prop to
	 * override component styles by passing in the result of [emotion's `css` function/prop](https://emotion.sh/docs/introduction).
	 */
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;
