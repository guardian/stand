import { css } from '@emotion/react';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotion } from '../../utils/semantic/typography';

const listCss = css`
	list-style: none;
	padding: 0;
	li + li {
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid ${semanticColors.border.default};
	}
`;

const presetNameCss = css`
	display: block;
	font-weight: 700;
`;

const specimenCss = css`
	display: flex;
	gap: 32px;
`;

const propertiesCss = css`
	display: flex;
	gap: 16px;
	dt {
		${convertTypographyToEmotion(semanticTypography['body-sm'])}
		color: ${semanticColors.text.primary};
		margin: 0;
		padding: 0;
	}
	dd {
		${convertTypographyToEmotion(semanticTypography['body-md'])}
		margin: 0;
		padding: 0;
	}
`;

const convertedPresets = Object.entries(
	Object.fromEntries(
		Object.entries(semanticTypography).map(([preset, token]) => [
			preset,
			convertTypographyToEmotion(token).styles,
		]),
	),
);

export const TypographyPresets = () => (
	<ul css={listCss}>
		{convertedPresets.map(([preset, styles], index) => {
			const typographyToken =
				semanticTypography[preset as keyof typeof semanticTypography];

			const fontFamily = typographyToken.font.fontFamily;
			const fontWeight = typographyToken.font.fontWeight;
			const fontSize = typographyToken.font.fontSize;
			const lineHeight = typographyToken.font.lineHeight;
			const letterSpacing = typographyToken.font.letterSpacing;
			const fontStyle = typographyToken.font.fontStyle;
			const fontWidth = typographyToken.fontWidth;

			return (
				<li key={`preset-${index}`}>
					<span css={presetNameCss}>{preset}</span>
					<span css={specimenCss}>
						<dl css={propertiesCss}>
							<div>
								<dt>Family</dt>
								<dd>{fontFamily}</dd>
							</div>
							<div>
								<dt>Weight</dt>
								<dd>{fontWeight}</dd>
							</div>
							<div>
								<dt>Size</dt>
								<dd>{fontSize}</dd>
							</div>
							<div>
								<dt>Line height</dt>
								<dd>{lineHeight}</dd>
							</div>
							<div>
								<dt>Letter spacing</dt>
								<dd>{letterSpacing}</dd>
							</div>
							<div>
								<dt>Style</dt>
								<dd>{fontStyle}</dd>
							</div>
							<div>
								<dt>Width</dt>
								<dd>{fontWidth}</dd>
							</div>
						</dl>
						<span
							css={css`
								${styles}
							`}
							contentEditable
						>
							For facts&apos; sake
						</span>
					</span>
				</li>
			);
		})}
	</ul>
);
