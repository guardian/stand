import { exampleTags } from './exampleTags';
import type { FilterOption, TagManagerObjectData, TagRow } from './types';

export type TagManagerObjectRow = TagManagerObjectData & TagRow;

export const mappedExampleTags: TagManagerObjectRow[] = exampleTags.map(
	(tag) => ({
		...tag,
		type: tag.type || 'Unknown',
		sectionName: tag.section.name || 'Unknown',
		name: tag.internalName || 'Unknown',
		id: tag.id,
	}),
);

// Approximates the tagmanager API's search behaviour.
export const simulateSearch = (
	inputText: string,
	tagTypeFilter?: string,
): TagManagerObjectRow[] => {
	if (inputText === '') {
		return [];
	}

	const allowedTagTypes = tagTypeFilter?.toLowerCase().split(',');
	const tagMatchingType = allowedTagTypes
		? mappedExampleTags.filter((tag) =>
				allowedTagTypes.includes(tag.type.toLowerCase()),
			)
		: mappedExampleTags;

	if (inputText.includes('*')) {
		const startsWithQueryPatternRegExp = new RegExp(
			'^' + inputText.toLowerCase().split('*').join('.*'),
		);
		return tagMatchingType.filter((tag) =>
			startsWithQueryPatternRegExp.test(tag.name.toLowerCase()),
		);
	}

	return tagMatchingType.filter((tag) =>
		tag.name.toLowerCase().startsWith(inputText.toLowerCase()),
	);
};

const waitFor = (delay: number) =>
	new Promise((resolve) => setTimeout(resolve, delay));

export const simulateSearchAsyncSearch = async (
	inputText: string,
	tagTypeFilter?: string,
): Promise<TagManagerObjectRow[]> => {
	await waitFor(500);
	return simulateSearch(inputText, tagTypeFilter);
};

export const tagMatching =
	(tag: TagManagerObjectRow) => (existingTag: TagManagerObjectRow) =>
		existingTag.path === tag.path;

export const allTagTypeFilters: FilterOption[] = [
	{ filter: '', label: 'All' },
	{ filter: 'Blog', label: 'Blog - DEPRECATED' },
	{ filter: 'Campaign', label: 'Campaign' },
	{ filter: 'ContentType', label: 'Content Type' },
	{ filter: 'Contributor', label: 'Contributor' },
	{ filter: 'NewspaperBook', label: 'Newspaper Book' },
	{ filter: 'NewspaperBookSection', label: 'Newspaper Book Section' },
	{ filter: 'Publication', label: 'Publication' },
	{ filter: 'Series', label: 'Series' },
	{ filter: 'Tone', label: 'Tone' },
	{ filter: 'Topic', label: 'Topic' },
	{ filter: 'Tracking', label: 'Tracking' },
];

export const proposeWithoutRationalBasis = (
	selectedTags: TagManagerObjectRow[],
): TagManagerObjectRow[] => {
	if (selectedTags.length === 0) {
		return [];
	}

	if (selectedTags.length === 1) {
		return mappedExampleTags.filter((tag) => ['world'].includes(tag.slug));
	}

	return mappedExampleTags.filter((tag) =>
		['we-love', 'bolivia', 'world'].includes(tag.slug),
	);
};
