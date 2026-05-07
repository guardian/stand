/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentLayout = {
	layout: {
		shared: {
			display: 'grid',
			minHeight: '100svh',
			width: '100%',
		},
		sm: {
			gridTemplateAreas: "'alertbanner'\n'topbar'\n'sidebar'\n'grid'",
			gridTemplateColumns: '1fr',
			gridTemplateRows: 'min-content min-content min-content 1fr',
		},
		md: {
			gridTemplateAreas:
				"'alertbanner alertbanner'\n'topbar topbar'\n'sidebar grid'",
			gridTemplateColumns: 'min-content 1fr',
			gridTemplateRows: 'min-content min-content 1fr',
		},
		lg: {
			gridTemplateAreas:
				"'alertbanner alertbanner'\n'topbar topbar'\n'sidebar grid'",
			gridTemplateColumns: 'min-content 1fr',
			gridTemplateRows: 'min-content min-content 1fr',
		},
	},
	sidebar: {
		sm: {
			hidden: {
				display: 'none',
			},
			aboveGrid: {
				display: 'block',
			},
		},
		md: {
			display: 'block',
			width: '200px',
		},
		lg: {
			width: '320px',
		},
	},
};
export type ComponentLayout = typeof componentLayout;
