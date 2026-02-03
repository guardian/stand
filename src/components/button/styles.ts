import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentButton } from '../../styleD/build/typescript/component/button';
import { componentButton } from '../../styleD/build/typescript/component/button';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { Prettify } from '../../util/types';
import type { ButtonProps } from './types';

export type ButtonTheme = Prettify<ComponentButton>;

export const defaultButtonTheme: ButtonTheme = componentButton;

export const buttonStyles = (
	theme: ButtonTheme,
	{ size, variant }: Required<Pick<ButtonProps, 'size' | 'variant'>>,
): SerializedStyles => {
	return css`
		/* button/link button reset styles */
		display: ${theme.shared['display']};
		-webkit-appearance: ${theme.shared['-webkit-appearance']};
		text-align: ${theme.shared['text-align']};
		box-shadow: ${theme.shared['box-shadow']};
		text-decoration: ${theme.shared['text-decoration']};
		/* button component styles */
		cursor: ${theme.shared.cursor};
		justify-content: ${theme.shared['justify-content']};
		align-items: ${theme.shared['align-items']};
		color: ${theme[variant].shared.color};
		background: ${theme[variant].shared.backgroundColor};
		height: ${theme[variant][size].height};
		padding: ${theme[variant][size].padding.top}
			${theme[variant][size].padding.right}
			${theme[variant][size].padding.bottom}
			${theme[variant][size].padding.left};
		${convertTypographyToEmotionStringStyle(
			theme[variant][size].typography,
		)}
		border: ${theme[variant].shared.border};
		border-radius: ${theme[variant].shared.borderRadius};

		&[data-hovered] {
			background: ${theme[variant].shared[':hover'].backgroundColor};
			border: ${theme[variant].shared[':hover'].border};
		}

		&[data-pressed] {
			background: ${theme[variant].shared[':active'].backgroundColor};
			border: ${theme[variant].shared[':active'].border};
		}

		&[data-focus-visible] {
			outline: ${theme.shared[':focus-visible'].outline};
			outline-offset: ${theme.shared[':focus-visible']['outline-offset']};
		}

		&[data-disabled] {
			cursor: ${theme.shared[':disabled'].cursor};
			color: ${theme[variant].shared[':disabled'].color};
			background: ${theme[variant].shared[':disabled'].backgroundColor};
			border: ${theme[variant].shared[':disabled'].border};
		}
	`;
};
