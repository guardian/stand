/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentModal = {
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: '#00000066',
		overflow: 'clip',
		zIndex: 100,
	},
	modal: {
		position: 'sticky',
		maxHeight: '90%',
		top: '50%',
		marginLeft: '50svw',
		translate: '-50% -50%',
		boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.30)',
		borderRadius: '0.5rem',
		width: 'max-content',
		maxWidth: 'min(484px, 90svw)',
		backgroundColor: '#ffffff',
		padding: {
			top: '1rem',
			bottom: '2rem',
			left: '2rem',
			right: '2rem',
		},
	},
	dialog: {
		container: {
			display: 'grid',
			gridTemplateAreas: "'dismiss' 'title' 'children' 'ctas'",
			gridTemplateColumns: '1fr',
			gridTemplateRows: 'auto auto 1fr auto',
		},
		dismiss: {
			gridArea: 'dismiss',
			marginLeft: 'auto',
			marginBottom: '1rem',
			border: 'none',
			height: '1rem',
			width: '1rem',
			hovered: {
				background: 'none',
				border: 'none',
			},
		},
		title: {
			gridArea: 'title',
			marginBottom: '1rem',
		},
		children: {
			gridArea: 'children',
			marginBottom: '2.5rem',
		},
		ctas: {
			gridArea: 'ctas',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			justifyContent: 'flex-end',
			md: {
				flexDirection: 'row',
			},
		},
	},
};
export type ComponentModal = typeof componentModal;
