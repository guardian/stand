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
	${convertTypographyToEmotionStringStyle(semanticTypography.bodySm)}

	th {
		text-align: left;
		${convertTypographyToEmotionStringStyle(semanticTypography.headingSm)}
		padding: ${baseSpacing['12Rem']} ${baseSpacing['8Rem']};
		border-bottom: ${semanticSizing.border.md} solid
			${semanticColors.border.strong};
		position: sticky;
		top: 0;
		background: ${semanticColors.bg.base};
	}

	td {
		padding: ${baseSpacing['12Rem']} ${baseSpacing['8Rem']};
		border-bottom: ${semanticSizing.border.default} solid
			${semanticColors.border.weak};
		vertical-align: middle;
	}

	tr:hover {
		background: ${semanticColors.bg.raisedLevel1};
	}
`;
