/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentToast = {
	region: {
		position: 'fixed',
		right: '1.25rem',
		top: '1.25rem',
		zIndex: 1000,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.75rem',
		outline: 'none',
	},
	shared: {
		display: 'grid',
		alignItems: 'start',
		gap: '0.75rem',
		width: '100%',
		maxWidth: '26.25rem',
		padding: {
			top: '0.75rem',
			right: '0.75rem',
			bottom: '0.75rem',
			left: '0.75rem',
		},
		borderWidth: '0px',
		accentBorderWidth: '0.125rem',
		borderStyle: 'solid',
		borderRadius: '0.25rem',
		color: '#000000',
		shadow: '0px 2px 6px 0px rgb(0% 0% 0% / 0.3)',
		content: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.25rem',
			titleTypography: {
				font: 'normal 700 0.875rem/1.15 Open Sans',
				letterSpacing: '-0.0125rem',
				fontWidth: 95,
			},
			subjectTypography: {
				font: 'normal 460 0.875rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			additionalInfoTypography: {
				font: 'normal 460 0.75rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
		},
		media: {
			size: '4rem',
			borderRadius: '0.125rem',
		},
	},
	information: {
		backgroundColor: '#e8f0fb',
		accentColor: '#00344e',
	},
	success: {
		backgroundColor: '#cde4c9',
		accentColor: '#326528',
	},
	warning: {
		backgroundColor: '#ffedac',
		accentColor: '#433608',
	},
	error: {
		backgroundColor: '#f5c6c0',
		accentColor: '#8c2113',
	},
};
export type ComponentToast = typeof componentToast;
