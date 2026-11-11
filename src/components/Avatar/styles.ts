import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentAvatar } from '../../styleD/build/typescript/component/avatar';
import { componentAvatar } from '../../styleD/build/typescript/component/avatar';
import type { DeepPartial, Prettify } from '../../util/types';
import type { AvatarProps } from './types';

export type AvatarTheme = Prettify<ComponentAvatar>;
export type PartialAvatarTheme = Prettify<DeepPartial<AvatarTheme>>;

export const defaultAvatarTheme: AvatarTheme = componentAvatar;

export const avatarImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

/**
 * TODO: map camelcased color prop to hyphenated CSS variable names
 * ie. `coolPurple` -> `cool-purple`, `warmPurple` -> `warm-purple`
 */
export const avatarStyles = ({
	size,
	color,
}: Required<Pick<AvatarProps, 'size' | 'color'>>): SerializedStyles => {
	return css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		flex-shrink: 0;
		border-radius: var(--component-avatar-shared-border-radius);
		background-color: var(--component-avatar-shared-color-${color}-background);
		width: var(--component-avatar-${size}-size);
		height: var(--component-avatar-${size}-size);
		border: var(--component-avatar-shared-color-${color}-border);
		user-select: none;
		color: var(--component-avatar-shared-color-${color}-text);
		font: normal var(--component-avatar-${size}-typography-font-font-weight)
			var(--component-avatar-${size}-typography-font-font-size)/var(
				--component-avatar-${size}-typography-font-line-height
			)
			var(--component-avatar-${size}-typography-font-font-family);
		letter-spacing: var(
			--component-avatar-${size}-typography-font-letter-spacing
		);
		font-variation-settings: 'wdth'
			var(--component-avatar-${size}-typography-font-width);

		&[data-avatar-context='interactive']:hover {
			background-color: var(
				--component-avatar-shared-color-${color}-hover-background
			);

			:has(> img) {
				background-color: black;
			}

			img {
				mask-image: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%));
			}
		}

		&[data-avatar-context='interactive']:active {
			background-color: var(
				--component-avatar-shared-color-${color}-active-background
			);

			:has(> img) {
				background-color: black;
			}

			img {
				mask-image: linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%));
			}
		}
	`;
};
