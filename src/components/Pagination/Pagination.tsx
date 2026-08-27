import { Button as ReactAriaButton } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { IconButton } from '../IconButton/IconButton';
import { ELLIPSIS, getPageRange, getTotalPages } from './lib';
import {
	arrowStyles,
	compactStatusStyles,
	defaultPaginationTheme,
	ellipsisStyles,
	itemStyles,
	listStyles,
	paginationStyles,
	summaryStyles,
} from './styles';
import type { PaginationLabels, PaginationProps } from './types';

const defaultLabels: Required<PaginationLabels> = {
	nav: 'Pagination',
	previous: 'Go to previous page',
	next: 'Go to next page',
	page: (page) => `Go to page ${page}`,
	status: (currentPage, totalPages) => `Page ${currentPage} of ${totalPages}`,
};

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

export const Pagination = ({
	currentPage,
	totalItems,
	pageSize,
	onPageChange,
	siblingCount = 1,
	boundaryCount = 1,
	showSummary = true,
	renderSummary,
	collapseBelow = 'md',
	labels,
	theme,
	cssOverrides,
	className,
}: PaginationProps) => {
	const mergedTheme = mergeDeep(defaultPaginationTheme, theme ?? {});
	const mergedLabels = { ...defaultLabels, ...labels };

	const safePageSize = Math.max(1, pageSize);
	const totalPages = getTotalPages(totalItems, safePageSize);
	const page = clamp(currentPage, 1, totalPages);

	const items = getPageRange({
		currentPage: page,
		totalPages,
		siblingCount,
		boundaryCount,
	});

	const goTo = (next: number) => onPageChange(clamp(next, 1, totalPages));

	const startItem = totalItems === 0 ? 0 : (page - 1) * safePageSize + 1;
	const endItem = Math.min(page * safePageSize, totalItems);

	const summary = renderSummary
		? renderSummary({
				currentPage: page,
				totalPages,
				totalItems,
				pageSize: safePageSize,
				startItem,
				endItem,
			})
		: `Results: ${startItem}\u2013${endItem} of ${totalItems}`;

	return (
		<nav
			aria-label={mergedLabels.nav}
			className={className}
			css={[paginationStyles(mergedTheme), cssOverrides]}
		>
			<IconButton
				variant="secondary"
				size="xs"
				symbol="chevron_left"
				ariaLabel={mergedLabels.previous}
				isDisabled={page <= 1}
				onPress={() => goTo(page - 1)}
				cssOverrides={arrowStyles(mergedTheme)}
			/>
			<ul css={listStyles(mergedTheme, collapseBelow)}>
				{items.map((item, index) => {
					if (item === ELLIPSIS) {
						return (
							<li key={`ellipsis-${index}`} aria-hidden="true">
								<span css={ellipsisStyles(mergedTheme)}>{'\u2026'}</span>
							</li>
						);
					}

					const isCurrent = item === page;

					return (
						<li key={item}>
							<ReactAriaButton
								aria-label={mergedLabels.page(item)}
								aria-current={isCurrent ? 'page' : undefined}
								onPress={() => !isCurrent && goTo(item)}
								css={itemStyles(mergedTheme, isCurrent)}
							>
								{item}
							</ReactAriaButton>
						</li>
					);
				})}
			</ul>
			<span css={compactStatusStyles(mergedTheme, collapseBelow)}>
				{mergedLabels.status(page, totalPages)}
			</span>
			<IconButton
				variant="secondary"
				size="xs"
				symbol="chevron_right"
				ariaLabel={mergedLabels.next}
				isDisabled={page >= totalPages}
				onPress={() => goTo(page + 1)}
				cssOverrides={arrowStyles(mergedTheme)}
			/>
			{showSummary && (
				<span css={summaryStyles(mergedTheme, collapseBelow)}>{summary}</span>
			)}
		</nav>
	);
};
