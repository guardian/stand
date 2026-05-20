/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentMenu = {
	menu: {
		shared: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#ffffff',
			border: '0.0625rem solid #cccccc',
		},
	},
	menuSection: {
		header: {
			shared: {
				display: 'flex',
				alignItems: 'center',
				padding: {
					top: '0',
					right: '0.5rem',
					bottom: '0',
					left: '0.5rem',
				},
				backgroundColor: '#ededed',
				color: '#000000',
			},
			sm: {
				height: '1.5rem',
				typography: {
					font: 'normal 700 0.875rem/1 Open Sans',
					letterSpacing: '-0.0125rem',
					fontWidth: 95,
				},
			},
			md: {
				height: '2rem',
				typography: {
					font: 'normal 700 1rem/1 Open Sans',
					letterSpacing: '-0.0125rem',
					fontWidth: 95,
				},
			},
		},
	},
	menuItem: {
		shared: {
			display: 'grid',
			gridTemplateAreas: "'icon label aside'",
			gridTemplateAreasWithDescription: "'icon label aside' '. description .'",
			gridTemplateColumns: 'auto 6fr 1fr',
			gap: '0.25rem',
			alignItems: 'center',
			padding: {
				top: '0.75rem',
				right: '1rem',
				bottom: '0.75rem',
				left: '1rem',
			},
			borderBottom: '0.0625rem solid #cccccc',
			backgroundColor: '#ffffff',
			icon: {
				gridArea: 'icon',
				alignSelf: 'start',
				color: '#545454',
			},
			label: {
				gridArea: 'label',
				color: '#000000',
				typography: {
					font: 'normal 460 1rem/1.3 Open Sans',
					letterSpacing: '0rem',
					fontWidth: 95,
				},
			},
			description: {
				gridArea: 'description',
				color: '#545454',
				typography: {
					font: 'normal 460 0.875rem/1.3 Open Sans',
					letterSpacing: '0rem',
					fontWidth: 95,
				},
			},
			aside: {
				gridArea: 'aside',
				justifySelf: 'end',
				alignSelf: 'start',
				color: '#000000',
				typography: {
					font: 'normal 460 1rem/1.3 Open Sans',
					letterSpacing: '0rem',
					fontWidth: 95,
				},
			},
			lastChild: {
				borderBottom: 'none',
			},
			hover: {
				backgroundColor: '#f6f6f6',
				outline: 'none',
			},
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.125rem',
			},
			pressed: {
				backgroundColor: '#ededed',
			},
		},
		sm: {
			icon: {
				size: '1.125rem',
				lineHeight: 1.3,
			},
		},
		md: {
			icon: {
				size: '1.25rem',
				lineHeight: 1.3,
			},
		},
	},
	menuSeparator: {
		shared: {
			backgroundColor: '#ededed',
			height: '0.5rem',
			width: '100%',
		},
	},
	menuPopover: {
		shared: {
			overflow: 'auto',
			shadow: '0 0.125rem 0.375rem 0 rgb(0% 0% 0% / 0.3)',
		},
		sm: {
			maxWidth: '200px',
			width: '100%',
		},
		md: {
			maxWidth: '320px',
			width: '100%',
		},
	},
};
export type ComponentMenu = typeof componentMenu;
