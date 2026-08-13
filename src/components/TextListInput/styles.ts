import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTextListInput,
	type ComponentTextListInput,
} from '../../styleD/build/typescript/component/textListInput';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';
import { semanticTypography } from '../../styleD/build/typescript/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type TextListInputTheme = Prettify<ComponentTextListInput>;
export type PartialTextListInputTheme = Prettify<
	DeepPartial<TextListInputTheme>
>;
export const defaultTextListInputTheme: TextListInputTheme =
	componentTextListInput;

export const textListInputStyles = (
	theme: TextListInputTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};

export const labelStyles = css`
	display: flex;
	align-items: center;
	gap: ${semanticSpacing.stackXs};
	color: ${semanticColors.text.strong};
	${convertTypographyToEmotionStringStyle(semanticTypography.labelFormMd)}
`;

export const layoutStyles = css`
	display: flex;
	flex-direction: column;
	gap: ${semanticSpacing.stackMd};
	margin-top: ${semanticSpacing.stackXs};
`;

export const inputStyles = css`
	display: flex;
	align-items: center;
	gap: ${semanticSpacing.stackXs};
`;
