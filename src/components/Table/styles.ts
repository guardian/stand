import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { from, until } from '../../styleD/utils/semantic/mq';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';

export const tableStyles = (
	columns: string,
	mobileColumns: string,
	compactAt: Breakpoint,
): SerializedStyles => css`
	--stand-table-columns: ${mobileColumns};
	width: 100%;
	color: ${semanticColors.text.strong};

	${from[compactAt]} {
		--stand-table-columns: ${columns};
	}
`;

export const tableHeaderStyles = (
	compactAt: Breakpoint,
): SerializedStyles => css`
	display: grid;
	grid-template-columns: var(--stand-table-columns);
	background-color: ${semanticColors.bg.raisedLevel2};
	border-block: 1px solid ${semanticColors.border.weak};

	${until[compactAt]} {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
`;

export const tableBodyStyles = css`
	display: block;
`;

export const tableRowStyles = css`
	display: grid;
	grid-template-columns: var(--stand-table-columns);
	align-items: center;
	border-bottom: 1px solid ${semanticColors.border.weak};
`;

export const tableColumnHeaderStyles = css`
	min-width: 0;
	padding: 8px 12px;
	font-size: 12px;
	font-weight: 700;
	text-align: left;
`;

export const tableCellStyles = (
	compactAt: Breakpoint,
	mobileGridColumn?: string,
	hideOnMobile?: boolean,
): SerializedStyles => css`
	min-width: 0;
	padding: 8px 12px;

	${until[compactAt]} {
		${mobileGridColumn ? `grid-column: ${mobileGridColumn};` : ''}
		${hideOnMobile ? 'display: none;' : ''}
	}
`;

export const mobileLabelStyles = (
	compactAt: Breakpoint,
): SerializedStyles => css`
	display: inline;
	margin-right: 4px;
	color: ${semanticColors.text.weak};
	font-size: 12px;
	font-weight: 700;

	${from[compactAt]} {
		display: none;
	}
`;
