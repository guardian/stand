import { css } from '@emotion/react';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const tableCss = css`
	width: 100%;
	border-collapse: collapse;
	${convertTypographyToEmotionStringStyle(semanticTypography['body-sm'])}

	th {
		text-align: left;
		font-weight: 700;
		padding: 12px 8px;
		border-bottom: 2px solid ${semanticColors.border.default};
		position: sticky;
		top: 0;
		background: ${semanticColors.bg['default-onLight']};
	}

	td {
		padding: 12px 8px;
		border-bottom: 1px solid ${semanticColors.border.subtle};
		vertical-align: top;
	}

	tr:hover {
		background: ${semanticColors.surface['light-1']};
	}
`;

const presetNameCss = css`
	font-weight: 700;
	white-space: nowrap;
`;

const sampleCss = css`
	min-width: 200px;
`;

const convertedPresets = Object.entries(
	Object.fromEntries(
		Object.entries(semanticTypography).map(([preset, token]) => [
			preset,
			convertTypographyToEmotionStringStyle(token).styles,
		]),
	),
);

export const TypographyPresets = () => (
	<table css={tableCss}>
		<thead>
			<tr>
				<th>Preset</th>
				<th>Family</th>
				<th>Weight</th>
				<th>Size</th>
				<th>Line Height</th>
				<th>Letter Spacing</th>
				<th>Style</th>
				<th>Width</th>
				<th>Sample</th>
			</tr>
		</thead>
		<tbody>
			{convertedPresets.map(([preset, styles], index) => {
				const typographyToken =
					semanticTypography[
						preset as keyof typeof semanticTypography
					];

				const fontFamily = typographyToken.font.fontFamily;
				const fontWeight = typographyToken.font.fontWeight;
				const fontSize = typographyToken.font.fontSize;
				const lineHeight = typographyToken.font.lineHeight;
				const letterSpacing = typographyToken.font.letterSpacing;
				const fontStyle = typographyToken.font.fontStyle;
				const fontWidth = typographyToken.fontWidth;

				return (
					<tr key={`preset-${index}`}>
						<td css={presetNameCss}>{preset}</td>
						<td>{fontFamily}</td>
						<td>{fontWeight}</td>
						<td>{fontSize}</td>
						<td>{lineHeight}</td>
						<td>{letterSpacing}</td>
						<td>{fontStyle}</td>
						<td>{fontWidth}</td>
						<td css={sampleCss}>
							<span
								css={css`
									${styles}
								`}
								contentEditable
							>
								For facts&apos; sake
							</span>
						</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);
