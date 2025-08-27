import type { Node } from 'prosemirror-model';
import type { Command } from 'prosemirror-state';
import type { EditorView } from 'prosemirror-view';
import { bylineEditorSchema } from './schema';

type ContributorType = 'tagged' | 'untagged';

export type TypingFromStartRange = {
	start: number;
	maxReached: number;
	lastPosition: number;
};

// Name detection algorithm
const detectNameInText = (
	text: string,
	cursorOffset: number,
	isTypingFromStartRange?: TypingFromStartRange,
): { name: string; startIndex: number; endIndex: number } | undefined => {
	// Simplified name pattern: Capitalized words with common name symbols
	const namePattern =
		/[\p{Lu}*][\p{L}*]*(?:[-'\s*]+[\p{Lu}*][\p{L}*]*)*[ ]?/gu;

	// When typing from start, only search in the text up to maxReached position
	const searchText = isTypingFromStartRange
		? text.substring(0, isTypingFromStartRange.maxReached)
		: text;

	// Find all matches in the search text
	// Using flat() to flatten the array of matches
	// And then map to find index positions
	const matches = Array.from(searchText.matchAll(namePattern))
		.flat()
		.map((match) => ({
			name: match.trimEnd(),
			startIndex: searchText.indexOf(match),
			endIndex: searchText.indexOf(match) + match.length,
		}));

	if (matches.length === 0) {
		return undefined;
	}

	// Find the name that contains the cursor position
	const nameContainingCursor = matches.find(
		(match) =>
			cursorOffset >= 0 &&
			cursorOffset >= match.startIndex &&
			cursorOffset <= match.endIndex,
	);

	if (nameContainingCursor) {
		return nameContainingCursor;
	}

	// if the cursor isn't within a name, then don't return a name
	return undefined;
};

// Refocus the editor after inserting the chip, the setTimeout is used to ensure the focus happens after the DOM update
function refocusEditor(viewRef: React.MutableRefObject<EditorView | null>) {
	setTimeout(() => {
		viewRef.current?.focus();
	}, 0);
}

// Function overloads to enforce type safety
export function insertChip(
	text: string,
	from: number,
	to: number,
	type: 'tagged',
	tagId: string,
	path?: string,
	meta?: unknown,
): Command;
export function insertChip(
	text: string,
	from: number,
	to: number,
	type: 'untagged',
	tagId?: undefined,
	meta?: undefined,
): Command;
export function insertChip(
	text: string,
	from: number,
	to: number,
	type: ContributorType,
	tagId?: string,
	path?: string,
	meta?: unknown,
): Command {
	const command: Command = (state, dispatch) => {
		const chipNode = bylineEditorSchema.nodes.chip.create({
			label: text,
			type,
			tagId,
			path,
			meta,
		});

		const tr = state.tr.replaceRangeWith(from, to, chipNode);

		if (dispatch) {
			dispatch(tr);
		}
		return true;
	};

	return command;
}

export const getCurrentText = (
	doc: Node,
	currentOffset: number,
	toOffset: number,
	isTypingFromStartRange?: TypingFromStartRange,
): {
	currentTextNode: Node | null;
	startOffset: number;
	endOffset: number;
	selectedText: string;
	hasSelection: boolean;
} => {
	const hasSelection = currentOffset !== toOffset;
	const selectedText = hasSelection
		? doc.textBetween(currentOffset, toOffset, ' ')
		: '';

	// If there's a selection, return the selected text info
	if (hasSelection) {
		return {
			currentTextNode: null,
			startOffset: -1,
			endOffset: -1,
			selectedText,
			hasSelection: true,
		};
	}

	// Otherwise, find the last text node and plausible name before the current position
	let currentTextNode: Node | null = null;
	let startOffset = -1;
	let endOffset = -1;
	let lastTextContent = '';

	doc.descendants((node, pos) => {
		// Stop traversing if we reach or pass the current offset
		if (pos >= currentOffset) {
			return false;
		}

		// If the node is a text node, check for a name
		if (node.isText && node.textContent.trim()) {
			// Calculate the relative cursor position within this text node
			const relativeCursorOffset = currentOffset - pos;

			// detect a name in the text content, and update the lastTextContent, startOffset, and endOffset accordingly
			const detectedName = detectNameInText(
				node.textContent,
				relativeCursorOffset,
				isTypingFromStartRange,
			);

			// If a name is detected, update the currentTextNode and offsets
			if (detectedName) {
				currentTextNode = node;
				lastTextContent = detectedName.name;
				startOffset = pos + detectedName.startIndex;
				endOffset = pos + detectedName.endIndex;
			}
		} else if (node.type.name === 'chip') {
			// Reset on chip - we want text after the last chip
			currentTextNode = null;
			startOffset = -1;
			endOffset = -1;
			lastTextContent = '';
		}

		return true; // continue traversing
	});

	return {
		currentTextNode,
		startOffset,
		endOffset,
		selectedText: lastTextContent,
		hasSelection: false,
	};
};

export const hasHitContributorLimit = (
	doc: Node,
	contributorLimit?: number,
) => {
	if (contributorLimit === undefined) {
		return false;
	}

	const numberOfContributors = doc.children.filter(
		(c) => c.type.name === 'chip',
	).length;

	return numberOfContributors >= contributorLimit;
};

export type TaggedContributor = {
	tagId: string; // unique id for the contributor
	label: string; // display text for the contributor, usually their name
	internalLabel?: string; // used internally for differentiation between same-name contributors, priority over label in search
	path?: string; // optional path parameter linking to their Guardian profile, e.g. profile/joebloggs
	// additional metadata e.g. the tag object from tag manager/capi
	// this allows us to persist the meta data back to the consumer
	// so it makes it possible to avoid additional network requests
	// to load the full tag object
	// use type guards, validation library (like zod), or an `as` assertion when using this
	meta?: unknown;
};

export const addUntaggedContributor = (
	viewRef: React.MutableRefObject<EditorView | null>,
	setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>,
	contributorLimit?: number,
	isTypingFromStartRange?: TypingFromStartRange,
) => {
	if (!viewRef.current) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/unbound-method -- fix avoid unbound method
	const { state, dispatch } = viewRef.current;

	const doc = state.doc;

	if (hasHitContributorLimit(doc, contributorLimit)) {
		return;
	}

	const {
		currentTextNode,
		startOffset,
		endOffset,
		selectedText,
		hasSelection,
	} = getCurrentText(
		doc,
		state.selection.from,
		state.selection.to,
		isTypingFromStartRange,
	);

	// If there's a selection, convert the selected text to a chip
	if (hasSelection) {
		setShowDropdown(false);
		const result = insertChip(
			selectedText,
			state.selection.from,
			state.selection.to,
			'untagged',
		)(state, dispatch);

		refocusEditor(viewRef);

		return result;
	}

	// Otherwise, convert the last text node to a chip
	if (!currentTextNode || startOffset === -1) {
		console.warn('No text node found in the document');
		return;
	}

	setShowDropdown(false);

	const result = insertChip(
		selectedText,
		startOffset,
		endOffset,
		'untagged',
	)(state, dispatch);

	refocusEditor(viewRef);

	return result;
};

export const addTaggedContributor = (
	contributor: TaggedContributor,
	viewRef: React.MutableRefObject<EditorView | null>,
	setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>,
	contributorLimit?: number,
	isTypingFromStartRange?: TypingFromStartRange,
) => {
	if (!viewRef.current) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/unbound-method -- fix avoid unbound method
	const { state, dispatch } = viewRef.current;

	const doc = state.doc;

	if (hasHitContributorLimit(doc, contributorLimit)) {
		return;
	}

	const { currentTextNode, startOffset, endOffset, hasSelection } =
		getCurrentText(
			doc,
			state.selection.from,
			state.selection.to,
			isTypingFromStartRange,
		);

	// If there's a selection, replace it with the tagged contributor
	if (hasSelection) {
		setShowDropdown(false);
		const result = insertChip(
			contributor.label,
			state.selection.from,
			state.selection.to,
			'tagged',
			contributor.tagId,
			contributor.path,
			contributor.meta,
		)(state, dispatch);

		refocusEditor(viewRef);

		return result;
	}

	// Otherwise, replace the last text node with the tagged contributor
	if (!currentTextNode || startOffset === -1) {
		console.warn('No text node found in the document');
		return;
	}

	setShowDropdown(false);
	const result = insertChip(
		contributor.label,
		startOffset,
		endOffset,
		'tagged',
		contributor.tagId,
		contributor.path,
		contributor.meta,
	)(state, dispatch);

	refocusEditor(viewRef);

	return result;
};

type BylineText = {
	type: 'text';
	value: string;
};

type BylineContributor = {
	type: 'contributor';
	value: string; // display text for the contributor, usually their name
	tagId?: string; // if tagId doesn't exist then it's an untagged contributor, usually a unique id for the tagged contributor
	path?: string; // optional path parameter linking to their Guardian profile, e.g. profile/joebloggs
	meta?: unknown; // additional metadata e.g. the tag object from tag manager/capi, use type guards, validation library (like zod), or an `as` assertion when using this
};

type BylinePart = BylineText | BylineContributor;

export type BylineModel = BylinePart[];

export const convertBylineModelToNode = (value?: BylineModel): Node => {
	const nodes: Node[] = (value ?? []).map((part) => {
		if (part.type === 'contributor') {
			return bylineEditorSchema.nodes.chip.create({
				label: part.value,
				type: part.tagId ? 'tagged' : 'untagged',
				tagId: part.tagId,
				path: part.path,
				meta: part.meta,
			});
		} else {
			return bylineEditorSchema.text(part.value);
		}
	});
	return bylineEditorSchema.node('doc', null, nodes);
};

export const convertNodeToBylineModel = (doc: Node): BylineModel => {
	const model: BylineModel = [];
	doc.forEach((node) => {
		if (node.isText) {
			model.push({
				type: 'text',
				value: node.text ?? '',
			});
		} else if (node.type.name === 'chip') {
			model.push({
				type: 'contributor',
				value: node.attrs.label as string,
				tagId: node.attrs.tagId as string,
				path: node.attrs.path as string,
				meta: node.attrs.meta as unknown,
			});
		}
	});
	return model;
};
