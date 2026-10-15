/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentTabs = {
	tab: {
		md: {
			height: '3rem',
			typography: {
				font: 'normal 700 1rem/1.15 Open Sans',
				fontWidth: 95,
				letterSpacing: '-0.03125rem',
			},
		},
		shared: {
			alignItems: 'center',
			border: '0.0625rem solid #cccccc',
			color: '#545454',
			cursor: 'pointer',
			disabled: {
				color: '#999999',
				cursor: 'not-allowed',
			},
			display: 'inline-flex',
			flexDirection: 'row',
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.0625rem',
			},
			gap: '0.375rem',
			justifyContent: 'center',
			padding: {
				bottom: 0,
				left: '1rem',
				right: '1rem',
				top: 0,
				verticalRight: '1.25rem',
				withIcon: {
					right: '1.25rem',
					verticalRight: '1.5rem',
				},
			},
			position: 'relative',
			selected: {
				background: '#f6f6f6',
				border: {
					background: '#0072a9',
					border: '0.5rem solid #0072a9',
					size: '0.5rem',
				},
			},
		},
		sm: {
			height: '2.5rem',
			typography: {
				font: 'normal 700 0.875rem/1.15 Open Sans',
				fontWidth: 95,
				letterSpacing: '-0.0125rem',
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
	tabPanel: {
		shared: {
			position: 'initial',
		},
	},
	tabPanels: {
		shared: {
			overflow: 'clip',
			position: 'relative',
		},
	},
	tabs: {
		shared: {
			display: 'flex',
			maxWidth: '100%',
			orientation: {
				horizontal: {
					flexDirection: 'column',
				},
				vertical: {
					flexDirection: 'row',
					width: '100%',
				},
			},
		},
	},
};
export type ComponentTabs = typeof componentTabs;
