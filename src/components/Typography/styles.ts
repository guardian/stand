import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component, semantic } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { TypographyProps } from './types';

export type TypographyTheme = Prettify<typeof component.typography>;
export type PartialTypographyTheme = Prettify<DeepPartial<TypographyTheme>>;

export const defaultTypographyTheme: TypographyTheme = component.typography;

export const typographyStyles = (
	theme: TypographyTheme,
	{ variant }: Required<Pick<TypographyProps, 'variant'>>,
): SerializedStyles => css`
	${convertTypographyToCssString(semantic.typography[variant])}
	color: ${theme.color};
`;
