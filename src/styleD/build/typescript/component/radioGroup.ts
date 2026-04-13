/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentRadioGroup = {
	shared: {
		marginTop: '0.5rem',
		marginBottom: '0.5rem',
		display: 'flex',
		flexDirection: 'column',
		radio: {
			color: '#000000',
			disabled: {
				color: '#999999',
			},
			display: 'flex',
			alignItems: 'center',
			gap: '0.5rem',
		},
		indicator: {
			position: 'relative',
			after: {
				position: 'absolute',
				borderRadius: 'inherit',
				inset: '0px',
				scale: '0',
			},
			borderRadius: '50%',
			border: '0.0625rem solid #545454',
			focused: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '0.125rem',
			},
			invalid: {
				border: '0.0625rem solid #b42a19',
				after: {
					backgroundColor: '#b42a19',
				},
			},
			disabled: {
				border: '0.0625rem solid #dcdcdc',
			},
			selected: {
				after: {
					backgroundColor: '#005d8b',
					scale: '0.6',
				},
				border: '0.125rem solid #0072a9',
				invalid: {
					border: '0.125rem solid #b42a19',
				},
				disabled: {
					border: '0.125rem solid #dcdcdc',
					after: {
						backgroundColor: '#dcdcdc',
					},
				},
			},
		},
	},
	sm: {
		gap: '1rem',
		typography: {
			font: 'normal 460 0.875rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
		indicator: {
			width: '1.25rem',
			height: '1.25rem',
		},
	},
	md: {
		gap: '1.25rem',
		typography: {
			font: 'normal 460 1rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
		indicator: {
			width: '1.5rem',
			height: '1.5rem',
		},
	},
};
export type ComponentRadioGroup = typeof componentRadioGroup;
