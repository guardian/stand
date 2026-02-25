import { css } from '@emotion/react';
import {
	baseSpacing,
	semanticColors,
	semanticSizing,
	semanticTypography,
} from '../..';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export const tableStyles = css`
	width: 100%;
	border-collapse: collapse;
	${convertTypographyToEmotionStringStyle(semanticTypography['body-sm'])}

	th {
		text-align: left;
		${convertTypographyToEmotionStringStyle(semanticTypography['heading-sm'])}
		padding: ${baseSpacing['12-rem']} ${baseSpacing['8-rem']};
		border-bottom: ${semanticSizing.border.md} solid
			${semanticColors.border.default};
		position: sticky;
		top: 0;
		background: ${semanticColors.bg.base};
	}

	td {
		padding: ${baseSpacing['12-rem']} ${baseSpacing['8-rem']};
		border-bottom: ${semanticSizing.border.default} solid
			${semanticColors.border.secondary};
		vertical-align: middle;
	}

	tr:hover {
		background: ${semanticColors.surface['light-1']};
	}
`;
