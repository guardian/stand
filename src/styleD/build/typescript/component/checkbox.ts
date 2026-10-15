/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentCheckbox = {
	group: {
		md: {
			gap: '1.25rem',
			marginBottom: '0.75rem',
			marginTop: '0.75rem',
		},
		shared: {
			display: 'flex',
			flexDirection: 'column',
		},
		sm: {
			gap: '1rem',
			marginBottom: '0.5rem',
			marginTop: '0.5rem',
		},
	},
	input: {
		md: {
			indicator: {
				size: '1.5rem',
			},
			typography: {
				font: 'normal 460 1rem/1.3 Open Sans',
				fontWidth: 95,
				letterSpacing: '0rem',
			},
		},
		shared: {
			alignItems: 'flex-start',
			color: '#000000',
			cursor: 'pointer',
			disabled: {
				color: '#999999',
				cursor: 'not-allowed',
				indicator: {
					border: '0.0625rem solid #dcdcdc',
					selected: {
						backgroundColor: '#dcdcdc',
					},
				},
			},
			display: 'flex',
			gap: '0.5rem',
			indicator: {
				alignItems: 'center',
				border: '0.0625rem solid #545454',
				borderRadius: '0.25rem',
				check: {
					height: '20px',
					width: '20px',
				},
				display: 'flex',
				error: {
					backgroundColor: '#b42a19',
					border: '0.0625rem solid #b42a19',
				},
				flexShrink: 0,
				focusVisible: {
					outline: '0.125rem solid #0072a9',
					outlineOffset: '0.125rem',
				},
				indeterminate: {
					height: '2px',
					width: '12px',
				},
				justifyContent: 'center',
				selected: {
					backgroundColor: '#0072a9',
					border: '0.0625rem solid #0072a9',
					svg: {
						fill: '#ffffff',
					},
				},
				svg: {
					fill: 'none',
				},
				transition: 'all 200ms',
			},
			label: {
				alignSelf: 'center',
			},
			position: 'relative',
		},
		sm: {
			indicator: {
				size: '1.25rem',
			},
			typography: {
				font: 'normal 460 0.875rem/1.3 Open Sans',
				fontWidth: 95,
				letterSpacing: '0rem',
			},
		},
	},
};
export type ComponentCheckbox = typeof componentCheckbox;
