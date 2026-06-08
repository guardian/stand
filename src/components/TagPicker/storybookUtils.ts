import { exampleTags } from './exampleTags';
import type { TagManagerObjectData, TagRow } from './types';

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
	tagType?: string,
): TagManagerObjectRow[] => {
	if (inputText === '') {
		return [];
	}

	const tagMatchingType = tagType
		? mappedExampleTags.filter(
				(tag) => tag.type.toLowerCase() === tagType.toLowerCase(),
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
	tagType?: string,
): Promise<TagManagerObjectRow[]> => {
	await waitFor(500);
	return simulateSearch(inputText, tagType);
};

export const tagMatching =
	(tag: TagManagerObjectRow) => (existingTag: TagManagerObjectRow) =>
		existingTag.path === tag.path;

export const typeOptions = [
	'Topic',
	'Series',
	'Tone',
	'Keyword',
	'PaidContent',
].map((type) => ({
	value: type,
}));
