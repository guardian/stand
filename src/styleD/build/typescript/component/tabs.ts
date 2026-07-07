/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentTabs = {
	tabs: {
		shared: {
			display: 'flex',
			maxWidth: '100%',
			orientation: {
				vertical: {
					flexDirection: 'row',
					width: '100%',
				},
				horizontal: {
					flexDirection: 'column',
				},
			},
		},
	},
	tab: {
		shared: {
			position: 'relative',
			display: 'inline-flex',
			gap: '0.375rem',
			cursor: 'pointer',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			padding: {
				top: '0',
				bottom: '0',
				left: '1rem',
				right: '1rem',
			},
			color: '#545454',
			border: '0.0625rem solid #cccccc',
			selected: {
				background: '#f6f6f6',
				border: {
					border: '0.5rem solid #0072a9',
					size: '0.5rem',
					background: '#0072a9',
				},
			},
			disabled: {
				cursor: 'not-allowed',
				color: '#999999',
			},
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.0625rem',
			},
		},
		md: {
			height: '3rem',
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				letterSpacing: '-0.03125rem',
				fontWidth: 95,
			},
		},
		sm: {
			height: '2.5rem',
			typography: {
				font: 'normal 700 0.875rem/1.15 Open Sans',
				letterSpacing: '-0.0125rem',
				fontWidth: 95,
			},
		},
	},
	tabList: {
		shared: {
			display: 'flex',
			orientation: {
				horizontal: {
					flexDirection: 'row',
				},
				vertical: {
					flexDirection: 'column',
				},
			},
		},
	},
	tabPanels: {
		shared: {
			position: 'relative',
			overflow: 'clip',
		},
	},
	tabPanel: {
		shared: {
			position: 'initial',
		},
	},
};
export type ComponentTabs = typeof componentTabs;
