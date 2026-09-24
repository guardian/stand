/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentToggleSwitch = {
	shared: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
		cursor: 'pointer',
		color: '#000000',
		label: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			paddingBlock: '0.125rem',
		},
		description: {
			color: '#545454',
			typography: {
				font: 'normal 460 0.75rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
		},
		track: {
			display: 'flex',
			alignItems: 'center',
			padding: '0.25rem',
			borderRadius: '100px',
			backgroundColor: '#666666',
			transition: 'background-color 200ms',
			selected: {
				backgroundColor: '#0072a9',
			},
			disabled: {
				backgroundColor: '#dcdcdc',
			},
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '0.125rem',
			},
		},
		thumb: {
			borderRadius: '50%',
			backgroundColor: '#ffffff',
			color: '#0072a9',
			disabled: {
				color: '#dcdcdc',
			},
			transition: 'transform 200ms',
		},
		disabled: {
			color: '#999999',
			cursor: 'not-allowed',
		},
	},
	sm: {
		typography: {
			font: 'normal 460 0.875rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
		track: {
			width: '2.75rem',
			height: '1.5rem',
		},
		thumb: {
			size: '1.125rem',
			translateX: '1.25rem',
			iconSize: '1rem',
		},
	},
	md: {
		typography: {
			font: 'normal 460 1rem/1.3 Open Sans',
			letterSpacing: '0rem',
			fontWidth: 95,
		},
		track: {
			width: '3.75rem',
			height: '2rem',
		},
		thumb: {
			size: '1.5rem',
			translateX: '1.75rem',
			iconSize: '1.25rem',
		},
	},
};
export type ComponentToggleSwitch = typeof componentToggleSwitch;
