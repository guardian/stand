import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { AvatarProps } from './types';

export type AvatarTheme = Prettify<(typeof component)['avatar']>;
export type PartialAvatarTheme = Prettify<DeepPartial<AvatarTheme>>;

export const defaultAvatarTheme: AvatarTheme = component.avatar;

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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		flex-shrink: 0;
		border-radius: ${theme.shared.borderRadius};
		background-color: ${theme.shared.color[color].background};
		width: ${theme[size].size};
		height: ${theme[size].size};
		border: ${theme.shared.color[color].border};
		user-select: none;
		color: ${theme.shared.color[color].text};
		${convertTypographyToCssString(theme[size].typography)}

		&[data-avatar-context='interactive']:hover {
			background-color: ${theme.shared.color[color].hover.background};

			:has(> img) {
				background-color: black;
			}

			img {
				mask-image: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%));
			}
		}

		&[data-avatar-context='interactive']:active {
			background-color: ${theme.shared.color[color].active.background};

			:has(> img) {
				background-color: black;
			}

			img {
				mask-image: linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%));
			}
		}
	`;
};
