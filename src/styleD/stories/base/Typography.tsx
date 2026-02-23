import { css } from '@emotion/react';
import { baseTypography } from '../../build/typescript/base/typography';
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

const sampleCss = css`
	min-width: 200px;
`;

export const Typography = () => (
	<div>
		<div css={sectionCss}>
			<h1>Family</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography.family).map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td css={sampleCss}>
								<span
									css={css`
										font-family: '${value}';
										font-weight: 460;
										font-size: ${baseTypography.size['18-rem']};
										font-style: ${baseTypography.style.normal};
										line-height: ${baseTypography['line-height'].normal};
										letter-spacing: ${baseTypography['letter-spacing'][
											'default-rem'
										]};
										font-variation-settings: 'wdth'
											${baseTypography.width[
												name as keyof typeof baseTypography.width
											]};
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
		</div>

		<div css={sectionCss}>
			<h1>Size</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography.size).map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td css={sampleCss}>
								<span
									css={css`
										font-family: '${baseTypography.family['Open Sans']}';
										font-weight: ${baseTypography.weight['Open Sans'].normal};
										font-size: ${value};
										font-style: ${baseTypography.style.normal};
										line-height: ${baseTypography['line-height'].normal};
										letter-spacing: ${baseTypography['letter-spacing'][
											'default-rem'
										]};
										font-variation-settings: 'wdth'
											${baseTypography.width['Open Sans']};
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
		</div>

		<div css={sectionCss}>
			<h1>Weight</h1>
			{Object.entries(baseTypography.weight).map(([familyName, weights]) => (
				<div
					key={familyName}
					css={css`
						margin-bottom: 24px;
					`}
				>
					<h2>{familyName}</h2>
					<table css={tableCss}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Value</th>
								<th>Sample</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(weights).map(([weightName, weightValue]) => (
								<tr key={weightName}>
									<td css={tokenNameCss}>{weightName}</td>
									<td css={tokenValueCss}>{weightValue}</td>
									<td css={sampleCss}>
										<span
											css={css`
												font-family: '${baseTypography.family[
													familyName as keyof typeof baseTypography.family
												]}';
												font-weight: ${weightValue};
												font-size: ${baseTypography.size['18-rem']};
												font-style: ${baseTypography.style.normal};
												line-height: ${baseTypography['line-height'].normal};
												letter-spacing: ${baseTypography['letter-spacing'][
													'default-rem'
												]};
												font-variation-settings: 'wdth'
													${baseTypography.width[
														familyName as keyof typeof baseTypography.width
													]};
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
				</div>
			))}
		</div>

		<div css={sectionCss}>
			<h1>Width</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography.width).map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td css={sampleCss}>
								<span
									css={css`
										font-family: '${baseTypography.family[
											name as keyof typeof baseTypography.family
										]}';
										font-weight: ${baseTypography.weight['Open Sans'].normal};
										font-size: ${baseTypography.size['18-rem']};
										font-style: ${baseTypography.style.normal};
										line-height: ${baseTypography['line-height'].normal};
										letter-spacing: ${baseTypography['letter-spacing'][
											'default-rem'
										]};
										font-variation-settings: 'wdth' ${value};
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
		</div>

		<div css={sectionCss}>
			<h1>Style</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography.style).map(([name, value]) => (
						<tr key={name}>
							<td css={tokenNameCss}>{name}</td>
							<td css={tokenValueCss}>{value}</td>
							<td css={sampleCss}>
								<span
									css={css`
										font-family: '${baseTypography.family['Open Sans']}';
										font-weight: ${baseTypography.weight['Open Sans'].normal};
										font-size: ${baseTypography.size['18-rem']};
										font-style: ${value};
										line-height: ${baseTypography['line-height'].normal};
										letter-spacing: ${baseTypography['letter-spacing'][
											'default-rem'
										]};
										font-variation-settings: 'wdth'
											${baseTypography.width['Open Sans']};
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
		</div>

		<div css={sectionCss}>
			<h1>Line Height</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography['line-height']).map(
						([name, value]) => (
							<tr key={name}>
								<td css={tokenNameCss}>{name}</td>
								<td css={tokenValueCss}>{value}</td>
								<td css={sampleCss}>
									<span
										css={css`
											font-family: '${baseTypography.family['Open Sans']}';
											font-weight: ${baseTypography.weight['Open Sans'].normal};
											font-size: ${baseTypography.size['18-rem']};
											font-style: ${baseTypography.style.normal};
											line-height: ${value};
											letter-spacing: ${baseTypography['letter-spacing'][
												'default-rem'
											]};
											font-variation-settings: 'wdth'
												${baseTypography.width['Open Sans']};
										`}
										contentEditable
									>
										For facts&apos; sake
									</span>
								</td>
							</tr>
						),
					)}
				</tbody>
			</table>
		</div>

		<div css={sectionCss}>
			<h1>Letter Spacing</h1>
			<table css={tableCss}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(baseTypography['letter-spacing']).map(
						([name, value]) => (
							<tr key={name}>
								<td css={tokenNameCss}>{name}</td>
								<td css={tokenValueCss}>{value}</td>
								<td css={sampleCss}>
									<span
										css={css`
											font-family: '${baseTypography.family['Open Sans']}';
											font-weight: ${baseTypography.weight['Open Sans'].normal};
											font-size: ${baseTypography.size['18-rem']};
											font-style: ${baseTypography.style.normal};
											line-height: ${baseTypography['line-height'].normal};
											letter-spacing: ${value};
											font-variation-settings: 'wdth'
												${baseTypography.width['Open Sans']};
										`}
										contentEditable
									>
										For facts&apos; sake
									</span>
								</td>
							</tr>
						),
					)}
				</tbody>
			</table>
		</div>
	</div>
);
