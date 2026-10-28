/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentMenu = {
	menu: {
		shared: {
			backgroundColor: '#ffffff',
			border: '0.0625rem solid #cccccc',
			// display: 'flex',
			// flexDirection: 'column',
		},
	},
	menuItem: {
		md: {
			icon: {
				lineHeight: 1.3,
				size: '1.25rem',
			},
		},
		shared: {
			// alignItems: 'center',
			aside: {
				// alignSelf: 'start',
				color: '#000000',
				// gridArea: 'aside',
				// justifySelf: 'end',
				typography: {
					font: 'normal 460 1rem/1.3 Open Sans',
					fontWidth: 95,
					letterSpacing: '0rem',
				},
			},
			backgroundColor: '#ffffff',
			borderBottom: '0.0625rem solid #cccccc',
			description: {
				color: '#545454',
				// gridArea: 'description',
				typography: {
					font: 'normal 460 0.875rem/1.3 Open Sans',
					fontWidth: 95,
					letterSpacing: '0rem',
				},
			},
			// display: 'grid',
			focusVisible: {
				outline: '0.125rem solid #0072a9',
				outlineOffset: '-0.125rem',
			},
			gap: '0.25rem',
			// gridTemplateAreas: "'icon label aside'",
			// gridTemplateAreasWithDescription: "'icon label aside' '. description .'",
			gridTemplateColumns: 'auto 6fr 1fr',
			hover: {
				backgroundColor: '#f6f6f6',
				// outline: 'none',
			},
			icon: {
				// alignSelf: 'start',
				color: '#545454',
				// gridArea: 'icon',
			},
			label: {
				color: '#000000',
				// gridArea: 'label',
				typography: {
					font: 'normal 460 1rem/1.3 Open Sans',
					fontWidth: 95,
					letterSpacing: '0rem',
				},
			},
			lastChild: {
				borderBottom: 'none',
			},
			padding: {
				bottom: '0.75rem',
				left: '1rem',
				right: '1rem',
				top: '0.75rem',
			},
			pressed: {
				backgroundColor: '#ededed',
			},
		},
		sm: {
			icon: {
				lineHeight: 1.3,
				size: '1.125rem',
			},
		},
	},
	menuPopover: {
		md: {
			maxWidth: '320px',
			width: '100%',
		},
		shared: {
			// overflow: 'auto',
			shadow: '0px 0.125rem 0.375rem 0px rgb(0% 0% 0% / 0.3)',
		},
		sm: {
			maxWidth: '200px',
			width: '100%',
		},
	},
	menuSection: {
		header: {
			md: {
				height: '2rem',
				typography: {
					font: 'normal 700 1rem/1 Open Sans',
					fontWidth: 95,
					letterSpacing: '-0.0125rem',
				},
			},
			shared: {
				// alignItems: 'center',
				backgroundColor: '#ededed',
				color: '#000000',
				// display: 'flex',
				padding: {
					bottom: '0px',
					left: '0.5rem',
					right: '0.5rem',
					top: '0px',
				},
			},
			sm: {
				height: '1.5rem',
				typography: {
					font: 'normal 700 0.875rem/1 Open Sans',
					fontWidth: 95,
					letterSpacing: '-0.0125rem',
				},
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
};
export type ComponentMenu = typeof componentMenu;
