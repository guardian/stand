/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentTopBar = {
	Navigation: {
		shared: {
			display: 'flex',
			'align-items': 'center',
			padding: {
				top: '1.25rem',
				right: '1rem',
				bottom: '0.75rem',
				left: '1rem',
			},
			'text-decoration': 'none',
			':disabled': {
				cursor: 'not-allowed',
				color: '#999999',
			},
			':focus-visible': {
				outline: '0.125rem solid #0072a9',
			},
		},
		text: {
			margin: {
				left: '0.375rem',
			},
		},
		expandMorePadding: {
			top: '0.375rem',
			left: '0.125rem',
		},
		selected: {
			color: '#000000',
			'border-bottom': '0.5rem solid #0072a9',
		},
		unselected: {
			color: '#545454',
			'border-bottom': '0.5rem solid transparent',
		},
		md: {
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				letterSpacing: '-0.03125rem',
				fontWidth: 95,
			},
		},
		sm: {
			typography: {
				font: 'normal 700 0.875rem/1.15 Open Sans',
				letterSpacing: '-0.0125rem',
				fontWidth: 95,
			},
		},
	},
	ToolName: {
		display: 'flex',
		'align-items': 'center',
		gap: '8px',
		typography: {
			font: 'normal 700 1.25rem/1.15 GH Guardian Headline',
			letterSpacing: '0rem',
			fontWidth: 100,
		},
		divider: {
			border: '0.0625rem solid #cccccc',
			height: '2rem',
		},
		subsection: {
			gap: '2px',
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				letterSpacing: '-0.0125rem',
				fontWidth: 88,
			},
		},
	},
};
export type ComponentTopBar = typeof componentTopBar;
