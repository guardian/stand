/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentSidebarStepperNavigation = {
	mobileToggle: {
		shared: {
			border: '0.125rem solid #cccccc',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: '4.5rem',
			paddingInline: '1rem',
			width: '100%',
			backgroundColor: '#f6f6f6',
			hovered: {
				backgroundColor: '#ededed',
			},
			pressed: {
				backgroundColor: '#e6e6e6',
			},
		},
	},
	navigation: {
		shared: {
			border: '0.0625rem solid #8d8d8d',
			flexDirection: 'column',
			height: '100%',
		},
	},
	statusRow: {
		shared: {
			display: 'flex',
			gap: '0.375rem',
			alignItems: 'center',
			text: {
				color: '#545454',
				disabledColor: '#999999',
			},
			icon: {
				size: '1rem',
				optionalColor: '#cde4c9',
				completeColor: '#326528',
				incompleteColor: '#8c2113',
			},
		},
	},
	step: {
		shared: {
			height: '4.5rem',
			backgroundColor: '#ffffff',
			currentBackgroundColor: '#f6f6f6',
			cursor: 'pointer',
			disabledCursor: 'default',
			border: '0.0625rem solid #cccccc',
			text: {
				color: '#000000',
				disabledColor: '#999999',
				inverseColor: '#ffffff',
			},
			numberColumnWidth: '2rem',
		},
	},
	stepNumber: {
		shared: {
			height: '100%',
			backgroundColor: '#005d8b',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	stepContent: {
		shared: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			gap: '0.25rem',
			marginLeft: '0.75rem',
		},
	},
};
export type ComponentSidebarStepperNavigation =
	typeof componentSidebarStepperNavigation;
