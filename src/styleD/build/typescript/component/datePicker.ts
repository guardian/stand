/**
 * Do not edit directly, this file was auto-generated.
 */

export const componentDatePicker = {
	picker: {
		shared: {
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '2.5rem',
			borderRadius: '0.25rem',
			border: '0.0625rem solid #545454',
			backgroundColor: '#ffffff',
			gap: '0.5rem',
			padding: {
				top: '0',
				right: '0.25rem',
				bottom: '0',
				left: '0.75rem',
			},
			disabled: {
				cursor: 'not-allowed',
				backgroundColor: '#ededed',
				color: '#999999',
			},
			focusVisible: {
				outline: '0.125rem solid #0072a9',
			},
			invalid: {
				border: '0.0625rem solid #b42a19',
			},
			button: {
				flex: '1',
				backgroundColor: '#00000000',
				border: '0 solid transparent',
				padding: {
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				margin: {
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				color: '#545454',
				cursor: 'pointer',
				disabled: {
					color: '#999999',
					cursor: 'not-allowed',
				},
			},
		},
	},
	segment: {
		shared: {
			placeholder: {
				color: '#545454',
				focusVisible: {
					outline: '0.125rem solid #0072a9',
				},
			},
		},
	},
	popover: {
		shared: {
			offset: 8,
			containerPadding: 0,
			backgroundColor: '#ffffff',
			padding: {
				top: '0.25rem',
				right: '0.25rem',
				bottom: '0.25rem',
				left: '0.25rem',
			},
			boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.3)',
		},
	},
	calendar: {
		header: {
			shared: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				typography: {
					font: 'normal 700 0.875rem/1.15 Open Sans',
					letterSpacing: '-0.0125rem',
					fontWidth: 95,
				},
				button: {
					backgroundColor: '#00000000',
					border: 'none',
					padding: {
						top: '0',
						right: '0',
						bottom: '0',
						left: '0',
					},
					margin: {
						top: '0',
						right: '0',
						bottom: '0',
						left: '0',
					},
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#545454',
					cursor: 'pointer',
					width: '2.5rem',
					height: '2.5rem',
					aspectRatio: '1',
					hovered: {
						backgroundColor: '#f6f6f6',
					},
					pressed: {
						backgroundColor: '#ededed',
					},
					selected: {
						backgroundColor: '#b8d8e7',
					},
					focusVisible: {
						outline: '0.125rem solid #0072a9',
					},
					disabled: {
						cursor: 'not-allowed',
						color: '#999999',
					},
				},
			},
		},
		grid: {
			shared: {
				typography: {
					font: 'normal 460 0.875rem/1.3 Open Sans',
					letterSpacing: '0rem',
					fontWidth: 95,
				},
				borderCollapse: 'collapse',
				borderSpacing: '0',
				th: {
					width: '2.5rem',
					height: '2.5rem',
					verticalAlign: 'middle',
				},
			},
		},
		cell: {
			shared: {
				width: '2.5rem',
				aspectRatio: '1',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				outsideMonth: {
					display: 'none',
				},
				hovered: {
					backgroundColor: '#f6f6f6',
				},
				pressed: {
					backgroundColor: '#ededed',
				},
				selected: {
					backgroundColor: '#b8d8e7',
				},
				focusVisible: {
					outline: '0.125rem solid #0072a9',
				},
				disabled: {
					cursor: 'not-allowed',
					color: '#999999',
				},
			},
		},
	},
};
export type ComponentDatePicker = typeof componentDatePicker;
