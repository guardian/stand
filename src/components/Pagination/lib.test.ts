import { ELLIPSIS, getPageRange, getTotalPages } from './lib';

describe('getTotalPages', () => {
	it('rounds up partial pages', () => {
		expect(getTotalPages(21, 20)).toBe(2);
		expect(getTotalPages(40, 20)).toBe(2);
		expect(getTotalPages(41, 20)).toBe(3);
	});

	it('always returns at least one page', () => {
		expect(getTotalPages(0, 20)).toBe(1);
	});

	it('guards against a zero or negative page size', () => {
		expect(getTotalPages(20, 0)).toBe(20);
		expect(getTotalPages(20, -5)).toBe(20);
	});

	it('clamps negative totals to a single page', () => {
		expect(getTotalPages(-5, 20)).toBe(1);
	});

	it('treats a single item as one page', () => {
		expect(getTotalPages(1, 20)).toBe(1);
	});
});

describe('getPageRange', () => {
	it('returns every page when they all fit without truncation', () => {
		expect(getPageRange({ currentPage: 1, totalPages: 5 })).toEqual([
			1, 2, 3, 4, 5,
		]);
	});

	it('returns every page at the exact truncation threshold (totalNumbers === totalPages)', () => {
		// defaults: totalNumbers = 1*2 + 3 + 1*2 = 7, so 7 pages still show in full
		expect(getPageRange({ currentPage: 4, totalPages: 7 })).toEqual([
			1, 2, 3, 4, 5, 6, 7,
		]);
	});

	it('starts truncating once totalPages exceeds totalNumbers', () => {
		// 8 > 7, so the compact layout with an ellipsis kicks in
		expect(getPageRange({ currentPage: 1, totalPages: 8 })).toEqual([
			1,
			2,
			3,
			4,
			5,
			ELLIPSIS,
			8,
		]);
	});

	it('shows a trailing ellipsis near the start', () => {
		expect(getPageRange({ currentPage: 1, totalPages: 20 })).toEqual([
			1,
			2,
			3,
			4,
			5,
			ELLIPSIS,
			20,
		]);
	});

	it('shows a leading ellipsis near the end', () => {
		expect(getPageRange({ currentPage: 20, totalPages: 20 })).toEqual([
			1,
			ELLIPSIS,
			16,
			17,
			18,
			19,
			20,
		]);
	});

	it('shows ellipses on both sides in the middle', () => {
		expect(getPageRange({ currentPage: 10, totalPages: 20 })).toEqual([
			1,
			ELLIPSIS,
			9,
			10,
			11,
			ELLIPSIS,
			20,
		]);
	});

	it('respects a larger sibling count', () => {
		expect(
			getPageRange({ currentPage: 10, totalPages: 20, siblingCount: 2 }),
		).toEqual([1, ELLIPSIS, 8, 9, 10, 11, 12, ELLIPSIS, 20]);
	});

	it('respects a larger boundary count', () => {
		expect(
			getPageRange({ currentPage: 10, totalPages: 20, boundaryCount: 2 }),
		).toEqual([1, 2, ELLIPSIS, 9, 10, 11, ELLIPSIS, 19, 20]);
	});

	it('supports a sibling count of 0', () => {
		expect(
			getPageRange({ currentPage: 10, totalPages: 20, siblingCount: 0 }),
		).toEqual([1, ELLIPSIS, 10, ELLIPSIS, 20]);
	});

	it('supports a boundary count of 0', () => {
		expect(
			getPageRange({ currentPage: 10, totalPages: 20, boundaryCount: 0 }),
		).toEqual([ELLIPSIS, 9, 10, 11, ELLIPSIS]);
	});

	it('shows the hidden page number instead of an ellipsis when only one page is hidden near the start', () => {
		expect(getPageRange({ currentPage: 4, totalPages: 20 })).toEqual([
			1,
			2,
			3,
			4,
			5,
			ELLIPSIS,
			20,
		]);
	});

	it('shows the hidden page number instead of an ellipsis when only one page is hidden near the end', () => {
		expect(getPageRange({ currentPage: 17, totalPages: 20 })).toEqual([
			1,
			ELLIPSIS,
			16,
			17,
			18,
			19,
			20,
		]);
	});

	it('returns a single page when there is only one', () => {
		expect(getPageRange({ currentPage: 1, totalPages: 1 })).toEqual([1]);
	});

	it('returns an empty list when there are no pages', () => {
		expect(getPageRange({ currentPage: 1, totalPages: 0 })).toEqual([]);
	});
});
