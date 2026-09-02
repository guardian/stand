import type { ReactNode } from 'react';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DefaultProps } from '../../util/types';
import type { PaginationTheme } from './styles';

export interface PaginationSummaryInfo {
	/** The currently active page (1-based). */
	currentPage: number;
	/** Total number of pages. */
	totalPages: number;
	/** Total number of items across all pages. */
	totalItems: number;
	/** Number of items shown per page. */
	pageSize: number;
	/** 1-based index of the first item on the current page. */
	startItem: number;
	/** 1-based index of the last item on the current page. */
	endItem: number;
}

export interface PaginationLabels {
	/** Accessible label for the surrounding `nav` element. */
	nav?: string;
	/** Accessible label for the previous-page button. */
	previous?: string;
	/** Accessible label for the next-page button. */
	next?: string;
	/** Accessible label for a page button, given the page number. */
	page?: (page: number) => string;
	/** Text shown in the compact (collapsed) view below the `collapseBelow` breakpoint. */
	status?: (currentPage: number, totalPages: number) => string;
}

export type PaginationProps = DefaultProps<PaginationTheme> & {
	/** The currently active page (1-based). */
	currentPage: number;
	/** Total number of items across all pages. */
	totalItems: number;
	/** Number of items shown per page. Used to derive the total page count. */
	pageSize: number;
	/** Called with the requested page number when the user navigates. */
	onPageChange: (page: number) => void;
	/** Number of page buttons to show either side of the current page. Defaults to 1. */
	siblingCount?: number;
	/** Number of page buttons to always show at the start and end. Defaults to 1. */
	boundaryCount?: number;
	/** Whether to render the results summary. Defaults to true. */
	showSummary?: boolean;
	/** Render prop to customise the results summary text. */
	renderSummary?: (info: PaginationSummaryInfo) => ReactNode;
	/**
	 * Below this breakpoint the page-number list and results summary collapse to a
	 * compact previous/next + "Page X of Y" view to avoid horizontal overflow.
	 * Defaults to 'md'.
	 */
	collapseBelow?: Breakpoint;
	/** Overrides for the accessible labels. */
	labels?: PaginationLabels;
};
