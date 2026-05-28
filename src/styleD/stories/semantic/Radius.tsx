import { css } from '@emotion/react';
import { tableStyles } from '../../../util/storybook/styles';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticRadius } from '../../build/typescript/semantic/radius';

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

const radiusBoxCss = css`
	width: 48px;
	height: 48px;
	background: ${semanticColors.fill.accentStrong};
`;

export const SemanticRadiusTokens = () => (
	<div css={sectionCss}>
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>Token</th>
					<th>Value</th>
					<th>Preview</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(semanticRadius).map(([name, value]) => (
					<tr key={name}>
						<td css={tokenNameCss}>{name}</td>
						<td css={tokenValueCss}>{value}</td>
						<td>
							<div
								css={css`
									${radiusBoxCss}
									border-radius: ${value};
								`}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
