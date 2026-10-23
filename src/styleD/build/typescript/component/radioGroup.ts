/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentRadioGroup = {
	md: {
		gap: '1.25rem',
		indicator: {
			height: '1.5rem',
			width: '1.5rem',
		},
		typography: {
			font: 'normal 460 1rem/1.3 Open Sans',
			fontWidth: 95,
			letterSpacing: '0rem',
		},
	},
	shared: {
		display: 'flex',
		indicator: {
			after: {
				borderRadius: 'inherit',
				inset: '0px',
				position: 'absolute',
				scale: 0,
			},
			border: '0.0625rem solid #545454',
			borderRadius: '50%',
			disabled: {
				border: '0.0625rem solid #dcdcdc',
			},
			focused: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '0.125rem',
			},
			invalid: {
				after: {
					backgroundColor: '#b42a19',
				},
				border: '0.0625rem solid #b42a19',
			},
			position: 'relative',
			selected: {
				after: {
					backgroundColor: '#0072a9',
					scale: 0.6,
				},
				border: '0.125rem solid #0072a9',
				disabled: {
					after: {
						backgroundColor: '#dcdcdc',
					},
					border: '0.125rem solid #dcdcdc',
				},
				invalid: {
					border: '0.125rem solid #b42a19',
				},
			},
		},
		marginBottom: '0.5rem',
		marginTop: '0.5rem',
		orientation: {
			horizontal: {
				flexDirection: 'row',
			},
			vertical: {
				flexDirection: 'column',
			},
		},
		radio: {
			alignItems: 'center',
			color: '#000000',
			disabled: {
				color: '#999999',
			},
			display: 'flex',
			gap: '0.5rem',
		},
	},
	sm: {
		gap: '1rem',
		indicator: {
			height: '1.25rem',
			width: '1.25rem',
		},
		typography: {
			font: 'normal 460 0.875rem/1.3 Open Sans',
			fontWidth: 95,
			letterSpacing: '0rem',
		},
	},
};
export type ComponentRadioGroup = typeof componentRadioGroup;
