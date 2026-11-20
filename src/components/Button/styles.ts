import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentButton } from '../../styleD/build/typescript/component/button';
import { componentButton } from '../../styleD/build/typescript/component/button';
import { convertCSSTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import type { ButtonProps } from './types';

export type ButtonTheme = Prettify<ComponentButton>;
export type PartialButtonTheme = Prettify<DeepPartial<ButtonTheme>>;

export const defaultButtonTheme: ButtonTheme = componentButton;

export const buttonStyles = (
	{ size, variant }: Required<Pick<ButtonProps, 'size' | 'variant'>>,
	hasIcon = false,
	isIconButton = false,
): SerializedStyles => {
	return css`
		/* button/link button reset styles */
		display: inline-flex;
		-webkit-appearance: none;
		text-align: inherit;
		box-shadow: none;
		text-decoration: none;
		/* button component styles */
		cursor: pointer;
		justify-content: center;
		align-items: center;
		color: var(--component-button-${variant}-shared-color);
		background: var(--component-button-${variant}-shared-background-color);
		height: var(--component-button-${variant}-${size}-height);
		padding: var(--component-button-${variant}-${size}-padding-top)
			var(--component-button-${variant}-${size}-padding-right)
			var(--component-button-${variant}-${size}-padding-bottom)
			var(--component-button-${variant}-${size}-padding-left);
		${convertCSSTypographyToEmotionStringStyle(`--component-button-${variant}-${size}`)}
		border: var(--component-button-${variant}-shared-border);
		border-radius: var(--component-button-${variant}-shared-border-radius);

		${
			hasIcon &&
			css`
				padding-left: var(
					--component-button-${variant}-${size}-padding-with-icon-icon-left-left
				);
				gap: var(--component-button-${variant}-${size}-icon-gap);
			`
		}

		${
			isIconButton &&
			css`
				width: var(--component-button-${variant}-${size}-icon-button-width);
				padding: 0;
			`
		}

		&[data-hovered], &:hover {
			background: var(
				--component-button-${variant}-shared-hover-background-color
			);
			border: var(--component-button-${variant}-shared-hover-border);
		}

		&[data-pressed],
		&:active {
			background: var(
				--component-button-${variant}-shared-active-background-color
			);
			border: var(--component-button-${variant}-shared-active-border);
		}

		&[data-focus-visible],
		&:focus-visible {
			outline: var(--component-button-shared-focus-visible-outline);
			outline-offset: var(
				--component-button-shared-focus-visible-outline-offset
			);
		}

		&[data-disabled],
		&:disabled {
			cursor: not-allowed;
			color: var(--component-button-${variant}-shared-disabled-color);
			background: var(
				--component-button-${variant}-shared-disabled-background-color
			);
			border: var(--component-button-${variant}-shared-disabled-border);
		}
	`;
};
