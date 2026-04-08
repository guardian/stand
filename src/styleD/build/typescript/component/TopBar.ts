/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentTopBar = {
	'background-color': '#f6f6f6',
	display: 'flex',
	height: '4rem',
	'justify-content': 'space-between',
	border: '0.0625rem solid #cccccc',
	Item: {
		display: 'flex',
		'align-items': 'center',
		height: '100%',
		sm: {
			padding: {
				top: '0',
				right: '0.75rem',
				bottom: '0',
				left: '0.75rem',
			},
		},
		md: {
			padding: {
				top: '0',
				right: '1rem',
				bottom: '0',
				left: '1rem',
			},
		},
		lg: {
			padding: {
				top: '0',
				right: '1.5rem',
				bottom: '0',
				left: '1.5rem',
			},
		},
		border: '0.0625rem solid #cccccc',
	},
	Navigation: {
		shared: {
			display: 'inline-flex',
			position: 'relative',
			'align-items': 'center',
			cursor: 'pointer',
			'text-decoration': 'none',
			height: '100%',
			':disabled': {
				cursor: 'not-allowed',
				color: '#999999',
			},
			padding: {
				top: '0',
				right: '1rem',
				bottom: '0',
				left: '1rem',
			},
			':focus-visible': {
				outline: '0.125rem solid #0072a9',
				'outline-offset': '-0.0625rem',
			},
			'border-top': '0.5rem solid transparent',
			divider: '0.0625rem solid #cccccc',
		},
		text: {
			margin: {
				left: '0.375rem',
			},
		},
		menuIndicator: {
			margin: {
				top: '0.375rem',
				left: '0.125rem',
			},
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
		link: {
			textDecoration: 'none',
			color: 'unset',
			position: 'relative',
			width: '100%',
			height: '100%',
		},
		hoverLink: {
			color: '#ffffff',
			paddingLeft: '1.25rem',
			paddingRight: '1.25rem',
			backgroundColor: '#092f62',
			opacity: '0',
			typography: {
				font: 'normal 700 0.875rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			position: 'absolute',
			width: '100%',
			height: '100%',
			hover: {
				opacity: '1',
			},
			pressed: {
				backgroundColor: '#061d3c',
			},
			focused: {
				outline: '0.125rem solid #0072a9',
				'outline-offset': '-0.125rem',
			},
		},
	},
};
export type ComponentTopBar = typeof componentTopBar;
