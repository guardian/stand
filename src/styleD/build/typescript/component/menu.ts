/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentMenu = {
	menu: {
		shared: {
			display: 'flex',
			'flex-direction': 'column',
			'background-color': '#ffffff',
			border: '0.0625rem solid #cccccc',
		},
	},
	menuSection: {
		header: {
			shared: {
				display: 'flex',
				'align-items': 'center',
				padding: {
					top: '0',
					right: '0.5rem',
					bottom: '0',
					left: '0.5rem',
				},
				'background-color': '#ededed',
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
			'grid-template-areas': "'icon label aside'",
			'grid-template-areas-with-description':
				"'icon label aside' '. description .'",
			'grid-template-columns': '1fr 6fr 1fr',
			gap: '0.25rem',
			'align-items': 'center',
			padding: {
				top: '0.75rem',
				right: '1rem',
				bottom: '0.75rem',
				left: '1rem',
			},
			'border-bottom': '0.0625rem solid #cccccc',
			icon: {
				'grid-area': 'icon',
				'justify-self': 'end',
				'align-self': 'start',
				color: '#545454',
			},
			label: {
				'grid-area': 'label',
				color: '#000000',
			},
			description: {
				'grid-area': 'description',
				color: '#545454',
			},
			aside: {
				'grid-area': 'aside',
				'justify-self': 'end',
				'align-self': 'start',
				color: '#000000',
			},
			':last-child': {
				'border-bottom': 'none',
			},
			':hover': {
				'background-color': '#ededed',
			},
			':focus-visible': {
				outline: '0.125rem solid #0072a9',
				'outline-offset': '-0.125rem',
			},
		},
		sm: {
			typography: {
				font: 'normal 460 0.875rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			icon: {
				size: '1.125rem',
				'line-height': 1.3,
			},
		},
		md: {
			typography: {
				font: 'normal 460 1rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontWidth: 95,
			},
			icon: {
				size: '1.25rem',
				'line-height': 1.3,
			},
		},
	},
	menuSeparator: {
		shared: {
			'background-color': '#ededed',
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
			'max-width': '200px',
			width: '100%',
		},
		md: {
			'max-width': '320px',
			width: '100%',
		},
	},
};
export type ComponentMenu = typeof componentMenu;
