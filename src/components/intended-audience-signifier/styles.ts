import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentIntendedAudienceSignifier } from '../../styleD/build/typescript/component/intendedAudienceSignifier';
import { componentIntendedAudienceSignifier } from '../../styleD/build/typescript/component/intendedAudienceSignifier';
import type { Prettify } from '../../util/types';

export type IntendedAudienceSignifierTheme =
	Prettify<ComponentIntendedAudienceSignifier>;

export const defaultIntendedAudienceSignifierTheme: IntendedAudienceSignifierTheme =
	componentIntendedAudienceSignifier;

export const intendedAudienceSignifierStyles = (
	theme: IntendedAudienceSignifierTheme,
): SerializedStyles => css`
	display: ${theme.display};
	flex-direction: ${theme.flexDirection};
	justify-content: ${theme.justifyContent};
	align-items: ${theme.alignItems};
	color: ${theme.color};
	font-weight: ${theme.typography.fontWeight};
	font-size: ${theme.typography.fontSize};
	line-height: ${theme.typography.lineHeight};
	border-width: ${theme.borderWidth};
	border-style: ${theme.borderStyle};
	border-color: ${theme.borderColor};
	border-radius: ${theme.borderRadius};
	padding: ${theme.paddingY} ${theme.paddingX};
	box-sizing: ${theme.boxSizing};
	width: ${theme.width};
	gap: ${theme.gap};
	svg {
		height: ${theme.svg.height};
		width: ${theme.svg.width};
	}
`;
