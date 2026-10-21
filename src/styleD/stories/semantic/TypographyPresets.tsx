import { css } from '@emotion/react';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const SIZE_ORDER: Record<string, number> = {
	Xs: 1,
	Sm: 2,
	Md: 3,
	Lg: 4,
	Xl: 5,
	'2Xl': 6,
};

const SIZE_REGEX = /(2Xl|Xl|Lg|Md|Sm|Xs)$/;

const parsePresetKey = (key: string) => {
	const match = key.match(SIZE_REGEX);
	const size = match?.[1];

	if (!size) {
		return { baseName: key, rank: 99 };
	}

	return {
		baseName: key.slice(0, -size.length),
		rank: SIZE_ORDER[size] ?? 99,
	};
};

const tableCss = css`
	width: 100%;
	border-collapse: collapse;
	${convertTypographyToEmotionStringStyle(semanticTypography.bodySm)}

	th {
		text-align: left;
		font-weight: 700;
		padding: 12px 8px;
		border-bottom: 2px solid ${semanticColors.border.strong};
		position: sticky;
		top: 0;
		background: ${semanticColors.bg.base};
	}

	td {
		padding: 12px 8px;
		border-bottom: 1px solid ${semanticColors.border.weak};
		vertical-align: top;
	}

	tr:hover {
		background: ${semanticColors.bg.raisedLevel1};
	}
`;

const presetNameCss = css`
	font-weight: 700;
	white-space: nowrap;
`;

const sampleCss = css`
	min-width: 200px;
`;

const sortedPresets = Object.entries(semanticTypography)
	.map(([preset, token]) => ({
		preset,
		token,
		styles: convertTypographyToEmotionStringStyle(token).styles,
		...parsePresetKey(preset),
	}))
	.sort((a, b) => {
		const nameCompare = a.baseName.localeCompare(b.baseName);
		if (nameCompare !== 0) {
			return nameCompare;
		}
		return a.rank - b.rank;
	});

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
			{sortedPresets.map(({ preset, token, styles }) => (
				<tr key={preset}>
					<td css={presetNameCss}>{preset}</td>
					<td>{token.font}</td>
					<td>{token.letterSpacing}</td>
					<td>{token.fontWidth}</td>
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
			))}
		</tbody>
	</table>
);
