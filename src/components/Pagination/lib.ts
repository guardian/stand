export const ELLIPSIS = 'ellipsis';

export type PaginationItem = number | typeof ELLIPSIS;

export interface PageRangeOptions {
	currentPage: number;
	totalPages: number;
	/** Number of page buttons to show on each side of the current page. */
	siblingCount?: number;
	/** Number of page buttons to always show at the start and end. */
	boundaryCount?: number;
}

const range = (start: number, end: number): number[] =>
	Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);

/** Derive the total number of pages from a total item count and page size. */
export const getTotalPages = (totalItems: number, pageSize: number): number =>
	Math.max(1, Math.ceil(Math.max(0, totalItems) / Math.max(1, pageSize)));

/**
 * Build the list of page numbers and ellipsis markers to render, keeping the
 * first/last boundary pages and a window of siblings around the current page.
 */
export const getPageRange = ({
	currentPage,
	totalPages,
	siblingCount = 1,
	boundaryCount = 1,
}: PageRangeOptions): PaginationItem[] => {
	if (totalPages <= 1) {
		return range(1, totalPages);
	}

	// first/last + current + (ellipsis * 2) + siblings + boundaries
	const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;

	if (totalNumbers >= totalPages) {
		return range(1, totalPages);
	}

	const startPages = range(1, boundaryCount);
	const endPages = range(totalPages - boundaryCount + 1, totalPages);

	const siblingsStart = Math.max(
		Math.min(
			currentPage - siblingCount,
			totalPages - boundaryCount - siblingCount * 2 - 1,
		),
		boundaryCount + 2,
	);
	const siblingsEnd = Math.min(
		Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
		endPages.length > 0 ? endPages[0]! - 2 : totalPages - 1,
	);

	const startEllipsis: PaginationItem[] =
		siblingsStart > boundaryCount + 2
			? [ELLIPSIS]
			: boundaryCount + 1 < totalPages - boundaryCount
				? [boundaryCount + 1]
				: [];

	const endEllipsis: PaginationItem[] =
		siblingsEnd < totalPages - boundaryCount - 1
			? [ELLIPSIS]
			: totalPages - boundaryCount > boundaryCount
				? [totalPages - boundaryCount]
				: [];

	return [
		...startPages,
		...startEllipsis,
		...range(siblingsStart, siblingsEnd),
		...endEllipsis,
		...endPages,
	];
};
