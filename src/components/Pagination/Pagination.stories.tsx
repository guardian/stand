import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from './Pagination';
import type { PaginationProps } from './types';

const ControlledPagination = (props: Omit<PaginationProps, 'onPageChange'>) => {
	const [currentPage, setCurrentPage] = useState(props.currentPage);

	return (
		<Pagination
			{...props}
			currentPage={currentPage}
			onPageChange={setCurrentPage}
		/>
	);
};

const meta = {
	title: 'Stand/Editorial Components/Pagination',
	component: Pagination,
	parameters: {},
	args: {
		currentPage: 1,
		pageSize: 20,
		totalItems: 400,
	},
	// key resets the wrapper's local page state when the currentPage control changes
	render: (args) => <ControlledPagination key={args.currentPage} {...args} />,
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Default = {} satisfies Story;

export const MiddlePage = {
	args: {
		currentPage: 10,
	},
} satisfies Story;

export const LastPage = {
	args: {
		currentPage: 20,
	},
} satisfies Story;

export const FewPages = {
	args: {
		totalItems: 60,
	},
} satisfies Story;

export const SinglePage = {
	args: {
		totalItems: 12,
	},
} satisfies Story;

export const WiderSiblingWindow = {
	args: {
		currentPage: 10,
		siblingCount: 2,
		boundaryCount: 2,
	},
} satisfies Story;

export const WithoutSummary = {
	args: {
		showSummary: false,
	},
} satisfies Story;

export const CustomSummary = {
	args: {
		currentPage: 3,
		renderSummary: ({ currentPage, totalPages }) =>
			`Page ${currentPage} of ${totalPages}`,
	},
} satisfies Story;

export const CustomItemSize = {
	args: {
		currentPage: 10,
		theme: {
			item: {
				minWidth: '2rem',
				height: '2rem',
			},
		},
	},
} satisfies Story;

// Resize the canvas (or use the viewport addon) below the breakpoint to see the
// compact previous/next + "Page X of Y" view. Set to 'lg' here so it collapses
// on narrower desktop widths too, making the behaviour easy to preview.
export const CollapsesOnSmallScreens = {
	args: {
		currentPage: 10,
		collapseBelow: 'lg',
	},
} satisfies Story;

// 110 pages (2200 items / 20 per page) to show three-digit page numbers.
export const ManyPages = {
	args: {
		currentPage: 105,
		totalItems: 2200,
	},
} satisfies Story;

export default meta;
