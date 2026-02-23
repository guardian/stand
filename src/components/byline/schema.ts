import { Schema } from 'prosemirror-model';

export const bylineEditorSchema = new Schema({
	nodes: {
		doc: {
			content: 'inline*',
		},
		chip: {
			group: 'inline',
			inline: true,
			atom: false,
			selectable: true, // allows selection for deletion/drag and drop
			attrs: {
				label: { default: '' },
				type: { default: 'untagged' },
				tagId: { default: '' }, // tagId is optional for untagged contributors
				path: { default: '' }, // path is optional for untagged contributors
				meta: { default: {} }, // meta is optional and can hold any additional data
			},
			parseDOM: [
				{
					tag: 'chip[data-label][data-type][data-tag-id][data-path][data-meta]',
					getAttrs(dom: HTMLElement) {
						return {
							label: dom.getAttribute('data-label'),
							type: dom.getAttribute('data-type'),
							tagId: dom.getAttribute('data-tag-id') ?? '',
							path: dom.getAttribute('data-path') ?? '',
							meta: dom.getAttribute('data-meta')
								? (JSON.parse(
										dom.getAttribute('data-meta') as string,
									) as unknown)
								: {},
						};
					},
				},
			],
			toDOM(node) {
				return [
					'chip',
					{
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- label exists as string on chip node
						'data-label': node.attrs.label,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- type exists as string on chip node
						'data-type': node.attrs.type,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- tagId exists as string on chip node
						'data-tag-id': node.attrs.tagId,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- path exists as string on chip node
						'data-path': node.attrs.path,
						'data-meta': node.attrs.meta ? JSON.stringify(node.attrs.meta) : {},
					},
					node.attrs.label,
				];
			},
		},
		text: {
			group: 'inline',
		},
	},
});
