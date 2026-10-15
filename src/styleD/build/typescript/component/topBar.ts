/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentTopBar = {
	backgroundColor: '#f6f6f6',
	borderBottom: '0.0625rem solid #cccccc',
	borderLeft: '0.0625rem solid #cccccc',
	borderRight: '0.0625rem solid #cccccc',
	borderTop: '0.0625rem solid #cccccc',
	collapsedNavMenu: {
		button: {
			active: {
				backgroundColor: '#ededed',
			},
			background: '#00000000',
			border: 'none',
			color: '#000000',
			cursor: 'pointer',
			hovered: {
				backgroundColor: '#ededed',
			},
			margin: 0,
			padding: 0,
		},
		popover: {
			backgroundColor: '#f6f6f6',
			border: '0.0625rem solid #cccccc',
			containerPadding: 0,
			offset: 1,
		},
	},
	display: 'flex',
	height: '4rem',
	item: {
		alignItems: 'center',
		border: '0.0625rem solid #cccccc',
		display: 'flex',
		height: '100%',
		lg: {
			padding: {
				bottom: 0,
				left: '1.5rem',
				right: '1.5rem',
				top: 0,
			},
		},
		md: {
			padding: {
				bottom: 0,
				left: '1rem',
				right: '1rem',
				top: 0,
			},
		},
		sm: {
			padding: {
				bottom: 0,
				left: '0.75rem',
				right: '0.75rem',
				top: 0,
			},
		},
	},
	justifyContent: 'flex-start',
	navigation: {
		md: {
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				fontWidth: 95,
				letterSpacing: '-0.03125rem',
			},
		},
		menuIndicator: {
			margin: {
				left: '0.125rem',
				top: '0.375rem',
			},
		},
		selected: {
			borderBottom: '0.5rem solid #0072a9',
			color: '#000000',
		},
		shared: {
			_menuOpen: {
				height: '64px',
				selected: {
					backgroundColor: '#ededed',
				},
				width: '100%',
			},
			alignItems: 'center',
			borderTop: '0.5rem solid #00000000',
			cursor: 'pointer',
			disabled: {
				color: '#999999',
				cursor: 'not-allowed',
			},
			display: 'inline-flex',
			divider: '0.0625rem solid #cccccc',
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.0625rem',
			},
			height: '100%',
			padding: {
				bottom: 0,
				left: '1rem',
				right: '1rem',
				top: 0,
			},
			position: 'relative',
			textDecoration: 'none',
		},
		sm: {
			typography: {
				font: 'normal 700 0.875rem/1.15 Open Sans',
				fontWidth: 95,
				letterSpacing: '-0.0125rem',
			},
		},
		text: {
			margin: {
				left: '0.375rem',
			},
		},
		unselected: {
			borderBottom: '0.5rem solid #00000000',
			color: '#545454',
		},
	},
	spacer: {
		marginLeft: 'auto',
	},
	toolName: {
		alignItems: 'center',
		color: '#000000',
		display: 'flex',
		divider: {
			border: '0.0625rem solid #cccccc',
			height: '2rem',
		},
		gap: '0.5rem',
		hoverLink: {
			backgroundColor: '#092f62',
			collapsed: {
				justifyContent: 'center',
				paddingLeft: '0.25rem',
				paddingRight: '0.25rem',
			},
			color: '#ffffff',
			focused: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.125rem',
			},
			height: '100%',
			hover: {
				opacity: 1,
			},
			opacity: 0,
			paddingLeft: '1.25rem',
			paddingRight: '1.25rem',
			position: 'absolute',
			pressed: {
				backgroundColor: '#061d3c',
			},
			typography: {
				font: 'normal 700 0.875rem/1.3 Open Sans',
				fontWidth: 95,
				letterSpacing: '0rem',
			},
			width: '100%',
		},
		link: {
			color: 'unset',
			height: '100%',
			position: 'relative',
			textDecoration: 'none',
			width: '100%',
		},
		subsection: {
			gap: '0.125rem',
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				fontWidth: 88,
				letterSpacing: '-0.0125rem',
			},
		},
		typography: {
			font: 'normal 700 1.25rem/1.15 GH Guardian Headline',
			fontWidth: 100,
			letterSpacing: '0rem',
		},
	},
};
export type ComponentTopBar = typeof componentTopBar;
