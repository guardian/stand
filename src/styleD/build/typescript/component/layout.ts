/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentLayout = {
	layout: {
		shared: {
			display: 'grid',
			minHeight: '100svh',
			width: '100%',
			gridTemplateAreas: "'topbar topbar'\n'sidebar grid'",
			gridTemplateColumns: 'min-content 1fr',
			gridTemplateRows: 'min-content 1fr',
		},
	},
	sidebar: {
		sm: {
			display: 'none',
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
