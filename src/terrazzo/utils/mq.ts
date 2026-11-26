import semanticTokens from '../tokens/semantic/semantic.json';

const breakpoints = semanticTokens.semantic.breakpoints;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Making this value much smaller than `1px` prevents
 * media queries falling between entire pixel values.
 */
const smidgen = 0.1;

const minWidthQuery = (px: number): string => `@media (min-width: ${px}px)`;

const maxWidthQuery = (px: number): string =>
	`@media (max-width: ${px - smidgen}px)`;

const minMaxWidthQuery = (minPx: number, maxPx: number): string =>
	`@media (min-width: ${minPx}px) and (max-width: ${maxPx - smidgen}px)`;

/**
 * Returns a `min-width` media query string for the given breakpoint.
 * Use to apply styles at that breakpoint and above.
 *
 * @example
 * const styles = css`
 * 	 display: none;
 *   ${from.md} {
 *     display: block;
 *   }
 * `;
 */
export const from = Object.fromEntries(
	Object.entries(breakpoints).map(([name, min]) => [
		name,
		minWidthQuery(min.$value.value),
	]),
) as Record<Breakpoint, string>;

/**
 * Returns a `max-width` media query string for everything *below* the given
 * breakpoint (exclusive). Use to apply styles only on screens smaller than
 * where that breakpoint starts.
 *
 * @example
 * const styles = css`
 *   display: block;
 *   ${until.lg} {
 *     display: none;
 *   }
 * `;
 */
export const until = Object.fromEntries(
	Object.entries(breakpoints).map(([name, min]) => [
		name,
		maxWidthQuery(min.$value.value),
	]),
) as Record<Breakpoint, string>;

/**
 * Returns a combined `min-width` and `max-width` media query string for
 * the range starting at breakpoint A up to (but not including) breakpoint B.
 *
 * @example
 * const styles = css`
 *   display: none;
 *   ${between.md.and.lg} {
 *     display: block;
 *   }
 * `;
 */
export const between = Object.fromEntries(
	Object.entries(breakpoints).map(([fromName, fromMin]) => [
		fromName,
		{
			and: Object.fromEntries(
				Object.entries(breakpoints)
					.filter(([toName]) => toName !== fromName)
					.map(([toName, toMin]) => [
						toName,
						minMaxWidthQuery(fromMin.$value.value, toMin.$value.value),
					]),
			),
		},
	]),
) as {
	[B in Breakpoint]: {
		and: Record<Exclude<Breakpoint, B>, string>;
	};
};
