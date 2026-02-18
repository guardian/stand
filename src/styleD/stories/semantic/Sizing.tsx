import { css } from '@emotion/react';
import { tableStyles } from '../../../util/storybookStyles';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticSizing } from '../../build/typescript/semantic/sizing';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const sectionCss = css`
	margin-bottom: 32px;

	h2 {
		margin-bottom: 16px;
		border-bottom: 2px solid ${semanticColors.border.default};
		padding-bottom: 8px;
		${convertTypographyToEmotionStringStyle(
			semanticTypography['heading-md'],
		)}
	}
`;

const tokenNameCss = css`
	font-weight: 700;
	white-space: nowrap;
`;

const tokenValueCss = css`
	color: ${semanticColors.text.subdued};
	font-family: monospace;
	font-size: 0.9em;
`;

const visualizationCss = css`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const sizingBoxCss = css`
	background: ${semanticColors.border.default};
	border-radius: 2px;
`;

const usageCss = css`
	color: ${semanticColors.text.subdued};
	font-size: 0.9em;
`;

const renderSizingCategory = (
	categoryName: string,
	categoryTokens: Record<string, string>,
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
					<th>Visualization</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(categoryTokens).map(([name, value]) => (
					<tr key={name}>
						<td css={tokenNameCss}>
							{categoryName}.{name}
						</td>
						<td css={tokenValueCss}>{value}</td>
						<td>
							<div css={visualizationCss}>
								<div
									css={css`
										${sizingBoxCss}
										width: ${value};
										height: ${value};
									`}
								/>
								<span css={tokenValueCss}>
									{value} × {value}
								</span>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export const SemanticSizingTokens = () => (
	<div>
		{renderSizingCategory(
			'height',
			semanticSizing.height,
			'Standard heights for interactive elements like buttons, inputs, and controls.',
		)}
		{renderSizingCategory(
			'icon',
			semanticSizing.icon,
			'Standard sizes for icons to ensure consistency across the interface.',
		)}
		{renderSizingCategory(
			'border',
			semanticSizing.border,
			'Standard border widths for consistent visual boundaries.',
		)}
	</div>
);
