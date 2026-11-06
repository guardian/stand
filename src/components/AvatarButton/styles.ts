import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { AvatarTheme, PartialAvatarTheme } from '../Avatar/styles';
import { defaultAvatarTheme } from '../Avatar/styles';

export type AvatarButtonTheme = AvatarTheme;
export type PartialAvatarButtonTheme = PartialAvatarTheme;

export const defaultAvatarButtonTheme: AvatarButtonTheme = defaultAvatarTheme;

export const avatarButtonStyles = (
	theme: AvatarButtonTheme,
): SerializedStyles => {
	return css`
		display: inline-flex;
		width: ${theme.shared.link.width};
		background: ${theme.shared.button.background};
		border: ${theme.shared.button.border};
		padding: ${theme.shared.button.padding};
		cursor: pointer;
		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared.link.focusVisible.outline};
			outline-offset: ${theme.shared.link.focusVisible.outlineOffset};
			border-radius: ${theme.shared.borderRadius};
		}
		&[data-disabled],
		&:disabled {
			cursor: not-allowed;
		}
	`;
};
