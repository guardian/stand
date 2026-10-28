import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentAlertBanner } from '../../styleD/build/typescript/component/alertBanner';
import { componentAlertBanner } from '../../styleD/build/typescript/component/alertBanner';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { AlertBannerProps } from './types';

export type AlertBannerTheme = Prettify<ComponentAlertBanner>;
export type PartialAlertBannerTheme = Prettify<DeepPartial<AlertBannerTheme>>;
export const defaultAlertBannerTheme: AlertBannerTheme = componentAlertBanner;

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
		${convertTypographyToEmotionStringStyle(theme.shared.content.typography)}
	`;
};
