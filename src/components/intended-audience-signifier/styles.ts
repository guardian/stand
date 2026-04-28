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
	color: ${theme.color};
	border-width: 1px;
	border-style: solid;
	border-color: ${theme.color};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
	padding: 2px 4px;
	box-sizing: border-box;
	width: fit-content;
	gap: 8px;
`;
