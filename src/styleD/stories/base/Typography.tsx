import { css } from '@emotion/react';
import { baseTypography } from '../../build/typescript/base/typography';
import { semanticColors } from '../../build/typescript/semantic/colors';

const propertyCss = css`
	margin-bottom: 16px;
	border-bottom: 2px solid ${semanticColors.border.default};
`;

const listCss = css`
	list-style: none;
	padding: 0;
	li + li {
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid ${semanticColors.border.subtle};
	}
`;

const presetNameCss = css`
	display: block;
	font-weight: 700;
	margin-bottom: 8px;
`;

export const Typography = () => (
	<div>
		<div css={propertyCss}>
			<h1>Family</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography.family).map(([name, value]) => (
					<li key={name}>
						<span css={presetNameCss}>{name}</span>
						<span
							css={css`
								font-family: '${value}';
								font-weight: 460; /* use a hard coded weight to normalise the output for family */
								font-size: ${baseTypography.size['18-px']};
								font-style: ${baseTypography.style.normal};
								line-height: ${baseTypography['line-height']
									.normal};
								letter-spacing: ${baseTypography[
									'letter-spacing'
								]['default-px']};
								font-variation-settings: 'wdth'
									${baseTypography.width[
										name as keyof typeof baseTypography.width
									]};
							`}
							contentEditable
						>
							For facts&apos; sake
						</span>
					</li>
				))}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Size</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography.size).map(([name, value]) => (
					<li key={name}>
						<span css={presetNameCss}>{name}</span>
						<span
							css={css`
								font-family: '${baseTypography.family[
									'Open Sans'
								]}';
								font-weight: ${baseTypography.weight[
									'Open Sans'
								].normal};
								font-size: ${value};
								font-style: ${baseTypography.style.normal};
								line-height: ${baseTypography['line-height']
									.normal};
								letter-spacing: ${baseTypography[
									'letter-spacing'
								]['default-px']};
								font-variation-settings: 'wdth'
									${baseTypography.width['Open Sans']};
							`}
							contentEditable
						>
							For facts&apos; sake
						</span>
					</li>
				))}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Weight</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography.weight).map(([name, value]) => (
					<li key={name}>
						<h2 css={presetNameCss}>{name}</h2>
						<ul css={listCss}>
							{Object.entries(value).map(
								([sizeName, sizeValue]) => (
									<li key={sizeName}>
										<span css={presetNameCss}>
											{sizeName}
										</span>
										<span css={presetNameCss}>
											{sizeValue}
										</span>
										<span
											css={css`
												font-family: '${baseTypography
													.family['Open Sans']}';
												font-weight: ${sizeValue};
												font-size: ${baseTypography
													.size['18-px']};
												font-style: ${baseTypography
													.style.normal};
												line-height: ${baseTypography[
													'line-height'
												].normal};
												letter-spacing: ${baseTypography[
													'letter-spacing'
												]['default-px']};
												font-variation-settings: 'wdth'
													${baseTypography.width[
														name as keyof typeof baseTypography.width
													]};
											`}
											contentEditable
										>
											For facts&apos; sake
										</span>
									</li>
								),
							)}
						</ul>
					</li>
				))}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Width</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography.width).map(([name, value]) => (
					<li key={name}>
						<span css={presetNameCss}>{name}</span>
						<span css={presetNameCss}>{value}</span>
						<span
							css={css`
								font-family: '${baseTypography.family[
									name as keyof typeof baseTypography.family
								]}';
								font-weight: ${baseTypography.weight[
									'Open Sans'
								].normal};
								font-size: ${baseTypography.size['18-px']};
								font-style: ${baseTypography.style.normal};
								line-height: ${baseTypography['line-height']
									.normal};
								letter-spacing: ${baseTypography[
									'letter-spacing'
								]['default-px']};
								font-variation-settings: 'wdth' ${value};
							`}
							contentEditable
						>
							For facts&apos; sake
						</span>
					</li>
				))}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Style</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography.style).map(([name, value]) => (
					<li key={name}>
						<span css={presetNameCss}>{name}</span>
						<span
							css={css`
								font-family: '${baseTypography.family['Open Sans']}';
								font-weight: ${baseTypography.weight['Open Sans'].normal}
								font-size: ${baseTypography.size['18-px']};
								font-style: ${value};
								line-height: ${baseTypography['line-height'].normal};
								letter-spacing: ${baseTypography['letter-spacing']['default-px']};
								font-variation-settings: 'wdth'
									${baseTypography.width['Open Sans']};
							`}
							contentEditable
						>
							For facts&apos; sake
						</span>
					</li>
				))}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Line Height</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography['line-height']).map(
					([name, value]) => (
						<li key={name}>
							<span css={presetNameCss}>{name}</span>
							<span css={presetNameCss}>{value}</span>
							<span
								css={css`
									font-family: '${baseTypography.family[
										'Open Sans'
									]}';
									font-weight: ${baseTypography.weight[
										'Open Sans'
									].normal};
									font-size: ${baseTypography.size['18-px']};
									font-style: ${baseTypography.style.normal};
									line-height: ${value};
									letter-spacing: ${baseTypography[
										'letter-spacing'
									]['default-px']};
									font-variation-settings: 'wdth'
										${baseTypography.width['Open Sans']};
								`}
								contentEditable
							>
								For facts&apos; sake
							</span>
						</li>
					),
				)}
			</ul>
		</div>
		<div css={propertyCss}>
			<h1>Letter Spacing</h1>
			<ul css={listCss}>
				{Object.entries(baseTypography['letter-spacing']).map(
					([name, value]) => (
						<li key={name}>
							<span css={presetNameCss}>{name}</span>
							<span css={presetNameCss}>{value}</span>
							<span
								css={css`
									font-family: '${baseTypography.family[
										'Open Sans'
									]}';
									font-weight: ${baseTypography.weight[
										'Open Sans'
									].normal};
									font-size: ${baseTypography.size['18-px']};
									font-style: ${baseTypography.style.normal};
									line-height: ${baseTypography['line-height']
										.normal};
									letter-spacing: ${value};
									font-variation-settings: 'wdth'
										${baseTypography.width['Open Sans']};
								`}
								contentEditable
							>
								For facts&apos; sake
							</span>
						</li>
					),
				)}
			</ul>
		</div>
	</div>
);
