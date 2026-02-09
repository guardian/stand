import { css } from '@emotion/react';
import { baseSpacing } from '../../build/typescript/base/spacing';
import { semanticColors } from '../../build/typescript/semantic/colors';

const sectionCss = css`
	margin-bottom: 32px;

	h1 {
		margin-bottom: 16px;
		border-bottom: 2px solid ${semanticColors.border.default};
		padding-bottom: 8px;
	}
`;

const tableCss = css`
	width: 100%;
	border-collapse: collapse;

	th {
		text-align: left;
		font-weight: 700;
		padding: 8px;
		border-bottom: 2px solid ${semanticColors.border.default};
		background: ${semanticColors.surface['light-1']};
	}

	td {
		padding: 8px;
		border-bottom: 1px solid ${semanticColors.border.secondary};
		vertical-align: middle;
	}

	tr:hover {
		background: ${semanticColors.surface['light-1']};
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

const spacingBoxCss = css`
	background: ${semanticColors.border.default};
	height: 24px;
	border-radius: 2px;
`;

// Group by px and rem
const pxTokens = Object.entries(baseSpacing).filter(([key]) =>
	key.endsWith('-px'),
);
const remTokens = Object.entries(baseSpacing).filter(([key]) =>
	key.endsWith('-rem'),
);

export const Spacing = () => (
	<div>
		<div css={sectionCss}>
			<h1>Spacing Tokens (rem)</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Visualization</th>
					</tr>
				</thead>
				<tbody>
					{remTokens.map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td>
								<div css={visualizationCss}>
									<div
										css={css`
											${spacingBoxCss}
											width: ${value};
										`}
									/>
									<span css={tokenValueCss}>{value}</span>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>

		<div css={sectionCss}>
			<h1>Spacing Tokens (px)</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Visualization</th>
					</tr>
				</thead>
				<tbody>
					{pxTokens.map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td>
								<div css={visualizationCss}>
									<div
										css={css`
											${spacingBoxCss}
											width: ${value};
										`}
									/>
									<span css={tokenValueCss}>{value}</span>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
