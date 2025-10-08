import type { ComponentProps } from 'react';
import { Byline } from '../src';
import type { TaggedContributor } from '../src/byline/lib';

const mockSearchContributors: (
	selectedText: string,
) => Promise<TaggedContributor[]> = (selectedText: string) => {
	const allContributors: TaggedContributor[] = [
		{
			path: 'profile/mahesh-makani',
			label: 'Mahesh Makani',
			internalLabel: 'Mahesh Makani (Software Engineer)',
			tagId: '1',
		},
		{
			path: 'profile/andrew-howe-ely',
			label: 'Andrew Howe-Ely',
			tagId: '2',
		},
		{
			path: 'profile/jane-smith',
			label: 'Jane Smith',
			internalLabel: 'Jane Smith (Journalist)',
			tagId: '3',
		},
		{
			path: 'profile/john-doe',
			label: 'John Doe',
			tagId: '4',
		},
	];

	const filteredContributors = allContributors.filter((contributor) =>
		contributor.label
			.toLowerCase()
			.startsWith(selectedText.toLowerCase().trim()),
	);

	if (selectedText === '*') {
		return Promise.resolve(allContributors);
	}

	return Promise.resolve(filteredContributors);
};

type BylineWithMockProps = Omit<
	ComponentProps<typeof Byline>,
	'searchContributors' | 'handleSave'
>;

export const BylineWithMockSearchContributors = (
	props: BylineWithMockProps,
) => (
	<Byline
		{...props}
		searchContributors={mockSearchContributors}
		handleSave={() => {}}
	/>
);
