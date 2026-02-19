import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { semanticTypography } from '../..';
import {
	componentTypography,
	type ComponentTypography,
} from '../../styleD/build/typescript/component/typography';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { TypographyProps } from './types';

export type TypographyTheme = Prettify<ComponentTypography>;

export const defaultTypographyTheme: TypographyTheme = componentTypography;

export const typographyStyles = (
	theme: TypographyTheme,
	{ variant }: Required<Pick<TypographyProps, 'variant'>>,
): SerializedStyles => css`
	${convertTypographyToEmotionStringStyle(semanticTypography[variant])}
	color: ${theme.color};
`;
