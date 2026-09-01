// Component Name
export const componentName = 'Pagination';

// React sandbox example
export const componentTsx = /* javascript */ `import { useState } from 'react';
import { Pagination } from '@guardian/stand/Pagination';

export const Component = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<Pagination
			currentPage={currentPage}
			pageSize={20}
			totalItems={400}
			onPageChange={setCurrentPage}
		/>
	);
};
`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the pagination styles */
@import '@guardian/stand/component/pagination.css';
/* import the icon styles for the previous/next arrows */
@import "@guardian/stand/component/icon.css";

.stand-pagination {
	display: var(--component-pagination-shared-display);
	align-items: var(--component-pagination-shared-align-items);
	gap: var(--component-pagination-shared-gap);
}

.stand-pagination-list {
	display: var(--component-pagination-shared-display);
	align-items: var(--component-pagination-shared-align-items);
	gap: var(--component-pagination-shared-gap);
	margin: 0;
	padding: 0;
	list-style: none;
}

.stand-pagination-item {
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: var(--component-pagination-item-min-width);
	height: var(--component-pagination-item-height);
	padding: 0 var(--component-pagination-item-padding-x);
	border-radius: var(--component-pagination-item-border-radius);
	border: var(--component-pagination-item-border-width)
		var(--component-pagination-item-border-style)
		var(--component-pagination-item-border-color);
	background-color: var(--component-pagination-item-background-color);
	color: var(--component-pagination-item-color);
	cursor: var(--component-pagination-item-cursor);
	font: var(--component-pagination-item-typography-font);
	letter-spacing: var(--component-pagination-item-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-pagination-item-typography-font-width);
}

.stand-pagination-item:hover {
	background-color: var(--component-pagination-item-hover-background-color);
	border-color: var(--component-pagination-item-hover-border-color);
}

.stand-pagination-item[aria-current="page"] {
	background-color: var(--component-pagination-item-current-background-color);
	border-color: var(--component-pagination-item-current-border-color);
	color: var(--component-pagination-item-current-color);
	cursor: default;
	font: var(--component-pagination-item-current-typography-font);
}

/* constrain the prev/next arrow icons to the small icon size */
.stand-pagination-item .material-symbols {
	font-size: var(--component-icon-sm-size);
}

.stand-pagination-ellipsis {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: var(--component-pagination-ellipsis-min-width);
	color: var(--component-pagination-ellipsis-color);
}

.stand-pagination-summary {
	margin-left: var(--component-pagination-summary-margin-left);
	color: var(--component-pagination-summary-color);
	font: var(--component-pagination-summary-typography-font);
	letter-spacing: var(--component-pagination-summary-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-pagination-summary-typography-font-width);
}
`;

export const componentHtml = /* html */ `<nav class="stand-pagination" aria-label="Pagination">
	<button class="stand-pagination-item" aria-label="Go to previous page">
		<span class="material-symbols">chevron_left</span>
	</button>
	<ul class="stand-pagination-list">
		<li><button class="stand-pagination-item" aria-current="page">1</button></li>
		<li><button class="stand-pagination-item">2</button></li>
		<li><button class="stand-pagination-item">3</button></li>
		<li aria-hidden="true"><span class="stand-pagination-ellipsis">…</span></li>
		<li><button class="stand-pagination-item">20</button></li>
	</ul>
	<button class="stand-pagination-item" aria-label="Go to next page">
		<span class="material-symbols">chevron_right</span>
	</button>
	<span class="stand-pagination-summary">Results: 1–20 of 400</span>
</nav>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `import { componentPagination, componentIcon } from "@guardian/stand";

const navStyles = \`
	display: \${componentPagination.shared.display};
	align-items: \${componentPagination.shared.alignItems};
	gap: \${componentPagination.shared.gap};
\`;

const listStyles = \`
	display: \${componentPagination.shared.display};
	align-items: \${componentPagination.shared.alignItems};
	gap: \${componentPagination.shared.gap};
	margin: \${componentPagination.shared.margin};
	padding: \${componentPagination.shared.padding};
	list-style: none;
\`;

const itemStyles = \`
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: \${componentPagination.item.minWidth};
	height: \${componentPagination.item.height};
	padding: 0 \${componentPagination.item.paddingX};
	border-radius: \${componentPagination.item.borderRadius};
	border: \${componentPagination.item.borderWidth} \${componentPagination.item.borderStyle} \${componentPagination.item.borderColor};
	background-color: \${componentPagination.item.backgroundColor};
	color: \${componentPagination.item.color};
	cursor: \${componentPagination.item.cursor};
	font: \${componentPagination.item.typography.font};
\`;

const currentItemStyles = itemStyles + \`
	background-color: \${componentPagination.item.current.backgroundColor};
	border-color: \${componentPagination.item.current.borderColor};
	color: \${componentPagination.item.current.color};
	font: \${componentPagination.item.current.typography.font};
\`;

const ellipsisStyles = \`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: \${componentPagination.ellipsis.minWidth};
	color: \${componentPagination.ellipsis.color};
\`;

const summaryStyles = \`
	margin-left: \${componentPagination.summary.marginLeft};
	color: \${componentPagination.summary.color};
	font: \${componentPagination.summary.typography.font};
\`;

// keep the prev/next arrow glyphs at the small icon size
const iconStyles = \`font-size: \${componentIcon.sm.size};\`;

document.getElementById("app").innerHTML = \`
<nav style="\${navStyles}" aria-label="Pagination">
	<button style="\${itemStyles}" aria-label="Go to previous page">
		<span class="material-symbols" style="\${iconStyles}">chevron_left</span>
	</button>
	<ul style="\${listStyles}">
		<li><button style="\${currentItemStyles}" aria-current="page">1</button></li>
		<li><button style="\${itemStyles}">2</button></li>
		<li><button style="\${itemStyles}">3</button></li>
		<li aria-hidden="true"><span style="\${ellipsisStyles}">…</span></li>
		<li><button style="\${itemStyles}">20</button></li>
	</ul>
	<button style="\${itemStyles}" aria-label="Go to next page">
		<span class="material-symbols" style="\${iconStyles}">chevron_right</span>
	</button>
	<span style="\${summaryStyles}">Results: 1–20 of 400</span>
</nav>
\`;
`;
