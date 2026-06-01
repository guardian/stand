import { css } from '@emotion/react';
import { tableStyles } from '../../../util/storybook/styles';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticGrid } from '../../build/typescript/semantic/grid';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const sectionCss = css`
	margin-bottom: 32px;

	h2 {
		margin-bottom: 16px;
		border-bottom: 2px solid ${semanticColors.border.strong};
		padding-bottom: 8px;
		${convertTypographyToEmotionStringStyle(semanticTypography.headingMd)}
	}
`;

const tokenNameCss = css`
	font-weight: 700;
	white-space: nowrap;
`;

const tokenValueCss = css`
	color: ${semanticColors.text.weak};
	font-family: monospace;
	font-size: 0.9em;
`;

const usageCss = css`
	color: ${semanticColors.text.weak};
	font-size: 0.9em;
	margin-bottom: 16px;
`;

const renderGridCategory = (
	categoryName: string,
	categoryTokens: Record<string, string | number>,
	usage: string,
) => (
	<div css={sectionCss}>
		<h2>{categoryName}</h2>
		<p css={usageCss}>{usage}</p>
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>Token</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(categoryTokens).map(([name, value]) => (
					<tr key={name}>
						<td css={tokenNameCss}>
							{categoryName}.{name}
						</td>
						<td css={tokenValueCss}>{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export const SemanticGridTokens = () => (
	<div>
		{renderGridCategory(
			'gutter',
			semanticGrid.gutter,
			'Space between columns in the grid layout.',
		)}
		{renderGridCategory(
			'margin',
			semanticGrid.margin,
			'Outer margins surrounding the grid at each breakpoint.',
		)}
		{renderGridCategory(
			'columns',
			semanticGrid.columns,
			'Number of columns in the grid at each breakpoint.',
		)}
	</div>
);
