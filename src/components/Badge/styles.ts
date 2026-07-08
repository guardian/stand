import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentBadge,
	type ComponentBadge,
} from '../../styleD/build/typescript/component/badge';
import type { DeepPartial, Prettify } from '../../util/types';

export type BadgeTheme = Prettify<ComponentBadge>;
export type PartialBadgeTheme = Prettify<DeepPartial<BadgeTheme>>;
export const defaultBadgeTheme: BadgeTheme = componentBadge;

export const badgeStyles = (theme: BadgeTheme): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
