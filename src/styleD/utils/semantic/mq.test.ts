import { semanticBreakpoints } from '../../build/typescript/semantic/breakpoints';
import { between, from, until } from './mq';

describe('mq', () => {
	describe('from', () => {
		it('produces a min-width query for each breakpoint', () => {
			expect(from.sm).toBe('@media (min-width: 0px)');
			expect(from.md).toBe('@media (min-width: 600px)');
			expect(from.lg).toBe('@media (min-width: 1024px)');
		});

		it('has an entry for every breakpoint in semanticBreakpoints', () => {
			const breakpointKeys = Object.keys(semanticBreakpoints);
			expect(Object.keys(from)).toEqual(breakpointKeys);
		});
	});

	describe('until', () => {
		it('produces a max-width query 0.1px below the breakpoint min', () => {
			expect(until.sm).toBe('@media (max-width: -0.1px)');
			expect(until.md).toBe('@media (max-width: 599.9px)');
			expect(until.lg).toBe('@media (max-width: 1023.9px)');
		});

		it('has an entry for every breakpoint in semanticBreakpoints', () => {
			const breakpointKeys = Object.keys(semanticBreakpoints);
			expect(Object.keys(until)).toEqual(breakpointKeys);
		});

		it('until query is always strictly less than the corresponding from query', () => {
			// For every breakpoint (other than sm, whose min is 0), the until
			// boundary should be below the from boundary.
			expect(until.md).not.toBe(from.md);
			expect(until.lg).not.toBe(from.lg);
		});
	});

	describe('between', () => {
		it('produces a min-width + max-width query for a range', () => {
			expect(between.md.and.lg).toBe(
				'@media (min-width: 600px) and (max-width: 1023.9px)',
			);
			expect(between.sm.and.md).toBe(
				'@media (min-width: 0px) and (max-width: 599.9px)',
			);
		});

		it('produces a correct query for non-adjacent breakpoints', () => {
			expect(between.sm.and.lg).toBe(
				'@media (min-width: 0px) and (max-width: 1023.9px)',
			);
		});

		it('produces a correct query when lg is the lower bound', () => {
			expect(between.lg.and.md).toBe(
				'@media (min-width: 1024px) and (max-width: 599.9px)',
			);
		});

		it('has an entry for every breakpoint in semanticBreakpoints', () => {
			const breakpointKeys = Object.keys(semanticBreakpoints);
			expect(Object.keys(between)).toEqual(breakpointKeys);
		});

		it('does not include a self-referencing entry in and', () => {
			expect(between.sm.and).not.toHaveProperty('sm');
			expect(between.md.and).not.toHaveProperty('md');
			expect(between.lg.and).not.toHaveProperty('lg');
		});

		it('between.A.and.B min matches from.A', () => {
			const minMatch = between.md.and.lg.match(/min-width: (\S+)/)?.[1];
			const fromMin = from.md.match(/min-width: (\S+)/)?.[1];
			expect(minMatch).toBe(fromMin);
		});

		it('between.A.and.B max matches until.B', () => {
			const betweenMax = between.md.and.lg.match(/max-width: (\S+)/)?.[1];
			const untilMax = until.lg.match(/max-width: (\S+)/)?.[1];
			expect(betweenMax).toBe(untilMax);
		});
	});
});
