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
		display: ${theme.shared.display};
		align-items: ${theme.shared['align-items']};
		justify-content: ${theme.shared['justify-content']};
		width: ${theme.shared.width};
		height: ${theme.shared.height};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};
		background-color: ${theme[level]['background-color']};
	`;
};

export const alertBannerContentStyles = (
	theme: AlertBannerTheme,
): SerializedStyles => {
	return css`
		display: ${theme.shared.content.display};
		justify-content: ${theme.shared.content['justify-content']};
		gap: ${theme.shared.content.gap};
		height: ${theme.shared.content.height};
		align-items: ${theme.shared.content['align-items']};
		flex: ${theme.shared.content.flex};
		color: ${theme.shared.content.color};
		${convertTypographyToEmotionStringStyle(theme.shared.content.typography)}
	`;
};
