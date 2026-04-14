/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentCheckbox = {
	input: {
		shared: {
			display: 'flex',
			position: 'relative',
			gap: '0.5rem',
			'align-items': 'flex-start',
			color: '#000000',
			cursor: 'pointer',
			indicator: {
				display: 'flex',
				'align-items': 'center',
				'justify-content': 'center',
				'flex-shrink': 0,
				border: '0.0625rem solid #545454',
				'border-radius': '0.25rem',
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
					'background-color': '#005d8b',
					border: '0.0625rem solid #0072a9',
					svg: {
						fill: '#ffffff',
					},
				},
				':focus-visible': {
					outline: '0.125rem solid #0072a9',
					'outline-offset': '0.125rem',
				},
				error: {
					'background-color': '#b42a19',
					border: '0.0625rem solid #b42a19',
				},
			},
			label: {
				'align-self': 'center',
			},
			disabled: {
				color: '#999999',
				cursor: 'not-allowed',
				indicator: {
					border: '0.0625rem solid #dcdcdc',
					selected: {
						'background-color': '#dcdcdc',
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
			'flex-direction': 'column',
		},
		sm: {
			gap: '1rem',
			'margin-top': '0.5rem',
			'margin-bottom': '0.5rem',
		},
		md: {
			gap: '1.25rem',
			'margin-top': '0.75rem',
			'margin-bottom': '0.75rem',
		},
	},
};
export type ComponentCheckbox = typeof componentCheckbox;
