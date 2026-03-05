import { css } from '@emotion/react';
import { tableStyles } from '../../../util/storybook/styles';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticShadow } from '../../build/typescript/semantic/shadow';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const sectionCss = css`
	margin-bottom: 32px;

	h2 {
		margin-bottom: 16px;
		border-bottom: 2px solid ${semanticColors.border.default};
		padding-bottom: 8px;
		${convertTypographyToEmotionStringStyle(semanticTypography['heading-md'])}
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

const shadowBoxCss = css`
	width: 64px;
	height: 40px;
	border-radius: 4px;
	background: ${semanticColors.bg.base};
`;

export const SemanticShadowTokens = () => (
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
				{Object.entries(semanticShadow).map(([name, value]) => (
					<tr key={name}>
						<td css={tokenNameCss}>{name}</td>
						<td css={tokenValueCss}>{value}</td>
						<td>
							<div
								css={css`
									${shadowBoxCss}
									box-shadow: ${value};
								`}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
