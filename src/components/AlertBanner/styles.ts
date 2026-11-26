import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { AlertBannerProps } from './types';

export type AlertBannerTheme = Prettify<(typeof component)['alertBanner']>;
export type PartialAlertBannerTheme = Prettify<DeepPartial<AlertBannerTheme>>;
export const defaultAlertBannerTheme: AlertBannerTheme = component.alertBanner;

export const alertBannerStyles = (
	theme: AlertBannerTheme,
	{ level }: Required<Pick<AlertBannerProps, 'level'>>,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: ${theme.shared.width};
		height: ${theme.shared.height};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};
		background-color: ${theme[level].backgroundColor};
	`;
};

export const alertBannerContentStyles = (
	theme: AlertBannerTheme,
): SerializedStyles => {
	return css`
		display: flex;
		justify-content: center;
		gap: ${theme.shared.content.gap};
		height: ${theme.shared.content.height};
		align-items: center;
		flex: 1;
		color: ${theme.shared.content.color};
		${convertTypographyToCssString(theme.shared.content.typography)}
	`;
};
