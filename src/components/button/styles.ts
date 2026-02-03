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
		color: ${theme[variant][size].color};
		background: ${theme[variant][size].backgroundColor};
		height: ${theme[variant][size].height};
		padding: ${theme[variant][size].padding.top}
			${theme[variant][size].padding.right}
			${theme[variant][size].padding.bottom}
			${theme[variant][size].padding.left};
		${convertTypographyToEmotionStringStyle(
			theme[variant][size].typography,
		)}
		border: ${theme[variant][size].border};
		border-radius: ${theme[variant][size].borderRadius};

		&:hover {
			background: ${theme[variant][size][':hover'].backgroundColor};
			border: ${theme[variant][size][':hover'].border};
		}

		&:active {
			background: ${theme[variant][size][':active'].backgroundColor};
			border: ${theme[variant][size][':active'].border};
		}

		&:focus-visible {
			outline: ${theme.shared[':focus-visible'].outline};
			outline-offset: ${theme.shared[':focus-visible']['outline-offset']};
		}

		&[disabled] {
			cursor: ${theme.shared[':disabled'].cursor};
			color: ${theme[variant][size][':disabled'].color};
			background: ${theme[variant][size][':disabled'].backgroundColor};
			border: ${theme[variant][size][':disabled'].border};
		}
	`;
};
