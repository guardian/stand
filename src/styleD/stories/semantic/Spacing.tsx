import { css } from '@emotion/react';
import { tableStyles } from '../../../util/storybook/styles';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticSpacing } from '../../build/typescript/semantic/spacing';

const sectionCss = css`
	margin-bottom: 32px;
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

const spacingBarCss = css`
	height: 16px;
	background: ${semanticColors.fill.accentStrong};
	border-radius: 2px;
`;

export const SemanticSpacingTokens = () => (
	<div css={sectionCss}>
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>Token</th>
					<th>Value</th>
					<th>Visualization</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(semanticSpacing).map(([name, value]) => (
					<tr key={name}>
						<td css={tokenNameCss}>{name}</td>
						<td css={tokenValueCss}>{value}</td>
						<td>
							<div
								css={css`
									${spacingBarCss}
									width: ${value};
								`}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
