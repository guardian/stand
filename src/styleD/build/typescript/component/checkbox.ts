/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentCheckbox = {
	input: {
		shared: {
			display: 'flex',
			position: 'relative',
			gap: '0.5rem',
			alignItems: 'flex-start',
			color: '#000000',
			cursor: 'pointer',
			indicator: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexShrink: 0,
				border: '0.0625rem solid #545454',
				borderRadius: '0.25rem',
				transition: 'all 200ms',
				svg: {
					fill: 'none',
				},
				check: {
					width: '20px',
					height: '20px',
				},
				indeterminate: {
					width: '12px',
					height: '2px',
				},
				selected: {
					backgroundColor: '#005d8b',
					border: '0.0625rem solid #0072a9',
					svg: {
						fill: '#ffffff',
					},
				},
				focusVisible: {
					outline: '0.125rem solid #0072a9',
					outlineOffset: '0.125rem',
				},
				error: {
					backgroundColor: '#b42a19',
					border: '0.0625rem solid #b42a19',
				},
			},
			label: {
				alignSelf: 'center',
			},
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
		},
		sm: {
			typography: {
				font: 'normal 460 0.875rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			indicator: {
				size: '1.25rem',
			},
		},
		md: {
			typography: {
				font: 'normal 460 1rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			indicator: {
				size: '1.5rem',
			},
		},
	},
	group: {
		shared: {
			display: 'flex',
			flexDirection: 'column',
		},
		sm: {
			gap: '1rem',
			marginTop: '0.5rem',
			marginBottom: '0.5rem',
		},
		md: {
			gap: '1.25rem',
			marginTop: '0.75rem',
			marginBottom: '0.75rem',
		},
	},
};
export type ComponentCheckbox = typeof componentCheckbox;
