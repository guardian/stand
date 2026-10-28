/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentModal = {
	dialog: {
		children: {
			// gridArea: 'children',
			marginBottom: '2.5rem',
		},
		// container: {
		// display: 'grid',
		// gridTemplateAreas: "'dismiss' 'title' 'children' 'ctas'",
		// gridTemplateColumns: '1fr',
		// gridTemplateRows: 'auto auto 1fr auto',
		// },
		ctas: {
			// display: 'flex',
			// flexDirection: 'column',
			gap: '1rem',
			// gridArea: 'ctas',
			// justifyContent: 'flex-end',
			// md: {
			// flexDirection: 'row',
			// },
		},
		dismiss: {
			border: 'none',
			// gridArea: 'dismiss',
			height: '1rem',
			hovered: {
				background: 'none',
				border: 'none',
			},
			marginBottom: '1rem',
			marginLeft: 'auto',
			width: '1rem',
		},
		title: {
			// gridArea: 'title',
			marginBottom: '1rem',
		},
	},
	modal: {
		backgroundColor: '#ffffff',
		borderRadius: '0.5rem',
		boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.30)',
		// marginLeft: '50svw',
		maxHeight: '90%',
		maxWidth: 'min(484px, 90svw)',
		padding: {
			bottom: '2rem',
			left: '2rem',
			right: '2rem',
			top: '1rem',
		},
		// position: 'sticky',
		// top: '50%',
		// translate: '-50% -50%',
		width: 'max-content',
	},
	overlay: {
		backgroundColor: '#00000066',
		height: '100%',
		// left: 0,
		// overflow: 'clip',
		// position: 'absolute',
		// top: 0,
		width: '100%',
		// zIndex: 100,
	},
};
export type ComponentModal = typeof componentModal;
