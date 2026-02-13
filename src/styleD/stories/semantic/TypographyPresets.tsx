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
		background: ${semanticColors.bg.base};
	}

	td {
		padding: 12px 8px;
		border-bottom: 1px solid ${semanticColors.border.secondary};
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
				<th>CSS Font</th>
				<th>Letter Spacing</th>
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

				const cssFont = typographyToken.font;
				const letterSpacing = typographyToken.letterSpacing;
				const fontWidth = typographyToken.fontWidth;

				return (
					<tr key={`preset-${index}`}>
						<td css={presetNameCss}>{preset}</td>
						<td>{cssFont}</td>
						<td>{letterSpacing}</td>
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
