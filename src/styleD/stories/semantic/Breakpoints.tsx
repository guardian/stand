import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { tableStyles } from '../../../util/storybook/styles';
import { semanticBreakpoints } from '../../build/typescript/semantic/breakpoints';
import { semanticColors } from '../../build/typescript/semantic/colors';
import { semanticTypography } from '../../build/typescript/semantic/typography';
import { between, from, until } from '../../utils/semantic/mq';
import { convertTypographyToEmotionStringStyle } from '../../utils/semantic/typography';

const sectionCss = css`
	margin-bottom: 32px;

	h2 {
		margin-bottom: 16px;
		border-bottom: 2px solid ${semanticColors.border.strong};
		padding-bottom: 8px;
		${convertTypographyToEmotionStringStyle(semanticTypography['heading-md'])}
	}
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

const activeRowCss = css`
	background: ${semanticColors.bg['raised-level-1']};
`;

const activeBadgeCss = css`
	display: inline-block;
	padding: 2px 8px;
	border-radius: 2px;
	background: ${semanticColors.fill['accent-strong']};
	color: ${semanticColors.text['stronger-inverse']};
	${convertTypographyToEmotionStringStyle(semanticTypography['heading-xs'])}
`;

const viewportWidthCss = css`
	color: ${semanticColors.text.weak};
	font-family: monospace;
	font-size: 0.9em;
	margin-bottom: 16px;
`;

const parseMin = (value: string): number =>
	value === '0' ? 0 : parseFloat(value);

const parseMax = (value: string | null): number =>
	value === null ? Infinity : parseFloat(value);

const getActiveBreakpoint = (width: number): string | null => {
	for (const [name, { min, max }] of Object.entries(semanticBreakpoints)) {
		if (width >= parseMin(min) && width <= parseMax(max)) {
			return name;
		}
	}
	return null;
};

const useViewportWidth = (): number => {
	const [width, setWidth] = useState(() => window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return width;
};

export const SemanticBreakpointTokens = () => {
	const viewportWidth = useViewportWidth();
	const activeBreakpoint = getActiveBreakpoint(viewportWidth);

	return (
		<div css={sectionCss}>
			<p css={viewportWidthCss}>
				Current viewport width: <strong>{viewportWidth}px</strong>
				{activeBreakpoint && (
					<>
						{' '}
						- active breakpoint: <strong>{activeBreakpoint}</strong>
					</>
				)}
			</p>
			<table css={tableStyles}>
				<thead>
					<tr>
						<th>Breakpoint</th>
						<th>Min</th>
						<th>Max</th>
						<th>Active</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(semanticBreakpoints).map(([name, { min, max }]) => {
						const isActive = name === activeBreakpoint;
						return (
							<tr key={name} css={isActive ? activeRowCss : undefined}>
								<td css={tokenNameCss}>{name}</td>
								<td css={tokenValueCss}>{min}</td>
								<td css={tokenValueCss}>{max}</td>
								<td>{isActive && <span css={activeBadgeCss}>Current</span>}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

// Media query API demos
const demoWrapperCss = css`
	padding: 24px;
	font-family: sans-serif;
`;

const demoLabelCss = css`
	display: block;
	margin-bottom: 16px;
	color: ${semanticColors.text.weak};
	font-family: monospace;
	font-size: 0.85em;
`;

const demoHeadingCss = css`
	margin: 0 0 4px;
	${convertTypographyToEmotionStringStyle(semanticTypography['heading-sm'])}
`;

const demoDescCss = css`
	margin: 0;
	${convertTypographyToEmotionStringStyle(semanticTypography['body-sm'])}
	color: ${semanticColors.text.weak};
`;

// from demo

const fromGridCss = css`
	display: grid;
	gap: 8px;
	grid-template-columns: 1fr;

	${from.md} {
		grid-template-columns: repeat(2, 1fr);
	}

	${from.lg} {
		grid-template-columns: repeat(3, 1fr);
	}

	${from.xl} {
		grid-template-columns: repeat(6, 1fr);
	}
`;

const fromCardCss = css`
	padding: 16px;
	border-radius: 4px;
	background: ${semanticColors.bg['raised-level-1']};
	border: 1px solid ${semanticColors.border.weak};
	transition: background 0.2s;
`;

const fromCardBreakpoints: Array<keyof typeof semanticBreakpoints> = [
	'sm',
	'md',
	'lg',
	'xl',
	'max',
	'maxplus',
];

/**
 * Demonstrates `from` - each card becomes highlighted once the viewport
 * reaches or exceeds that breakpoint's minimum width.
 */
export const FromDemo = () => (
	<div css={demoWrapperCss}>
		<span css={demoLabelCss}>
			from.sm / from.md / from.lg / from.xl / from.max / from.maxplus
		</span>
		<div css={fromGridCss}>
			{fromCardBreakpoints.map((bp) => {
				const cardActiveCss = css`
					${from[bp]} {
						background: ${semanticColors.fill['accent-strong']};
						border-color: ${semanticColors.fill['accent-strong']};
						color: ${semanticColors.text['stronger-inverse']};

						p {
							color: ${semanticColors.text['stronger-inverse']};
						}
					}
				`;
				return (
					<div key={bp} css={[fromCardCss, cardActiveCss]}>
						<p css={demoHeadingCss}>{bp}</p>
						<p css={demoDescCss}>
							{semanticBreakpoints[bp].min}
							{' +'}
						</p>
					</div>
				);
			})}
		</div>
		<p
			css={css`
				margin-top: 16px;
				${demoDescCss.styles}
			`}
		>
			Resize the viewport - cards highlight as their breakpoint is reached.
		</p>
	</div>
);

// until demo

const untilBoxBaseCss = css`
	padding: 20px 24px;
	border-radius: 4px;
	border: 1px solid ${semanticColors.border.weak};
	background: ${semanticColors.bg['raised-level-1']};
`;

/**
 * Demonstrates `until` - each box is only visible below the named breakpoint.
 */
export const UntilDemo = () => (
	<div css={demoWrapperCss}>
		<span css={demoLabelCss}>until.md / until.lg / until.xl</span>
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 12px;
			`}
		>
			<div
				css={css`
					${untilBoxBaseCss}
					${until.md} {
						background: ${semanticColors.fill['accent-strong']};
						border-color: ${semanticColors.fill['accent-strong']};
						color: ${semanticColors.text['stronger-inverse']};

						p {
							color: ${semanticColors.text['stronger-inverse']};
						}
					}
				`}
			>
				<p css={demoHeadingCss}>Visible below md</p>
				<p css={demoDescCss}>
					<code>until.md</code> - hidden at {semanticBreakpoints.md.min} and
					above
				</p>
			</div>
			<div
				css={css`
					${untilBoxBaseCss}
					${until.lg} {
						background: ${semanticColors.fill['accent-strong']};
						border-color: ${semanticColors.fill['accent-strong']};
						color: ${semanticColors.text['stronger-inverse']};

						p {
							color: ${semanticColors.text['stronger-inverse']};
						}
					}
				`}
			>
				<p css={demoHeadingCss}>Visible below lg</p>
				<p css={demoDescCss}>
					<code>until.lg</code> - hidden at {semanticBreakpoints.lg.min} and
					above
				</p>
			</div>
			<div
				css={css`
					${untilBoxBaseCss}
					${until.xl} {
						background: ${semanticColors.fill['accent-strong']};
						border-color: ${semanticColors.fill['accent-strong']};
						color: ${semanticColors.text['stronger-inverse']};

						p {
							color: ${semanticColors.text['stronger-inverse']};
						}
					}
				`}
			>
				<p css={demoHeadingCss}>Visible below xl</p>
				<p css={demoDescCss}>
					<code>until.xl</code> - hidden at {semanticBreakpoints.xl.min} and
					above
				</p>
			</div>
		</div>
		<p
			css={css`
				margin-top: 16px;
				${demoDescCss.styles}
			`}
		>
			Resize the viewport - boxes highlight while the viewport is below their
			threshold.
		</p>
	</div>
);

// between demo

const betweenPairs: Array<{
	from: keyof typeof semanticBreakpoints;
	to: keyof typeof semanticBreakpoints;
}> = [
	{ from: 'sm', to: 'md' },
	{ from: 'md', to: 'lg' },
	{ from: 'lg', to: 'xl' },
	{ from: 'xl', to: 'max' },
];

/**
 * Demonstrates `between` - each box is highlighted only when the viewport
 * falls within the stated range.
 */
export const BetweenDemo = () => (
	<div css={demoWrapperCss}>
		<span css={demoLabelCss}>between.A.and.B</span>
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 12px;
			`}
		>
			{betweenPairs.map(({ from: a, to: b }) => (
				<div
					key={`${a}-${b}`}
					css={css`
						${untilBoxBaseCss}
						${between[a].and[b as Exclude<typeof a, typeof a>]} {
							background: ${semanticColors.fill['accent-strong']};
							border-color: ${semanticColors.fill['accent-strong']};
							color: ${semanticColors.text['stronger-inverse']};

							p {
								color: ${semanticColors.text['stronger-inverse']};
							}
						}
					`}
				>
					<p css={demoHeadingCss}>
						{a} → {b}
					</p>
					<p css={demoDescCss}>
						<code>
							between.{a}.and.{b}
						</code>{' '}
						- {semanticBreakpoints[a].min} up to {semanticBreakpoints[b].min}
					</p>
				</div>
			))}
		</div>
		<p
			css={css`
				margin-top: 16px;
				${demoDescCss.styles}
			`}
		>
			Resize the viewport - one box highlights at a time as you move through
			each range.
		</p>
	</div>
);
