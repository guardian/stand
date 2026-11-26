import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentButton } from '../../styleD/build/typescript/component/button';
import { componentButton } from '../../styleD/build/typescript/component/button';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import type { ButtonProps } from './types';

export type ButtonTheme = Prettify<ComponentButton>;
export type PartialButtonTheme = Prettify<DeepPartial<ButtonTheme>>;

export const defaultButtonTheme: ButtonTheme = componentButton;

export const buttonStyles = (
	theme: ButtonTheme,
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
		color: ${theme[variant].shared.color};
		background: ${theme[variant].shared.backgroundColor};
		height: ${theme[variant][size].height};
		padding: ${theme[variant][size].padding.top}
			${theme[variant][size].padding.right}
			${theme[variant][size].padding.bottom}
			${theme[variant][size].padding.left};
		${convertTypographyToEmotionStringStyle(theme[variant][size].typography)}
		border: ${theme[variant].shared.border};
		border-radius: ${theme[variant].shared.borderRadius};

		${
			hasIcon &&
			css`
				padding-left: ${theme[variant][size].padding.withIcon.iconLeft.left};
				gap: ${theme[variant][size].icon.gap};
			`
		}

		${
			isIconButton &&
			css`
				width: ${theme[variant][size].iconButton.width};
				padding: 0;
			`
		}

		&[data-hovered], &:hover {
			background: ${theme[variant].shared.hover.backgroundColor};
			border: ${theme[variant].shared.hover.border};
		}

		&[data-pressed],
		&:active {
			background: ${theme[variant].shared.active.backgroundColor};
			border: ${theme[variant].shared.active.border};
		}

		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared.focusVisible.outline};
			outline-offset: ${theme.shared.focusVisible.outlineOffset};
		}

		&[data-disabled],
		&:disabled {
			cursor: not-allowed;
			color: ${theme[variant].shared.disabled.color};
			background: ${theme[variant].shared.disabled.backgroundColor};
			border: ${theme[variant].shared.disabled.border};
		}
	`;
};
