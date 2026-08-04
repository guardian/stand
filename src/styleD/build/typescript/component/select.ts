/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentSelect = {
	shared: {
		width: '100%',
		offset: 8,
		containerPadding: 0,
		hover: {
			backgroundColor: '#f6f6f6',
			outline: 'none',
		},
		pressed: {
			backgroundColor: '#ededed',
		},
		button: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: '0.25rem',
			backgroundColor: '#ffffff',
			border: '0.0625rem solid #545454',
			borderRadius: '0.25rem',
			paddingLeft: '0.75rem',
			paddingRight: '0.25rem',
			color: '#000000',
			focused: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '0.125rem',
			},
			disabled: {
				backgroundColor: '#ffffff',
				cursor: 'not-allowed',
				color: '#999999',
				border: '0.0625rem solid #dcdcdc',
			},
			error: {
				border: '0.0625rem solid #b42a19',
			},
		},
		option: {
			paddingLeft: '1rem',
			paddingRight: '1rem',
			paddingTop: '0.75rem',
			paddingBottom: '0.75rem',
			focused: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '0',
				backgroundColor: 'inherit',
			},
		},
		listBox: {
			border: '0.0625rem solid #cccccc',
			backgroundColor: '#ffffff',
			shadow: '0 0.125rem 0.375rem 0 rgb(0% 0% 0% / 0.3)',
		},
	},
	sm: {
		height: '2rem',
		typography: {
			font: 'normal 460 0.875rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
	},
	md: {
		height: '2.5rem',
		typography: {
			font: 'normal 460 1rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
	},
};
export type ComponentSelect = typeof componentSelect;
