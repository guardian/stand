import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentAvatar } from '../../styleD/build/typescript/component/avatar';
import { componentAvatar } from '../../styleD/build/typescript/component/avatar';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { Prettify } from '../../util/types';
import type { AvatarProps } from './types';

export type AvatarTheme = Prettify<ComponentAvatar>;

export const defaultAvatarTheme: AvatarTheme = componentAvatar;

export const avatarImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const avatarStyles = (
	theme: AvatarTheme,
	{ size, color }: Required<Pick<AvatarProps, 'size' | 'color'>>,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		align-items: ${theme.shared['align-items']};
		justify-content: ${theme.shared['justify-content']};
		overflow: ${theme.shared.overflow};
		flex-shrink: ${theme.shared['flex-shrink']};
		border-radius: ${theme.shared['border-radius']};
		background-color: ${theme.shared.color[color].background};
		width: ${theme[size].size};
		height: ${theme[size].size};
		border: ${theme.shared.color[color].border};
		user-select: ${theme.shared['user-select']};
		color: ${theme.shared.color[color].text};
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
	`;
};
