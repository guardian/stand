import type { SourceOrTarget } from './types';

// Minimal representation of Tag model
// See https://github.com/guardian/tagmanager/blob/main/app/model/Tag.scala
export interface Tag {
	path?: string;
}

export const mapTagsToSourceAndTarget = (
	tags: Tag[],
): { source: SourceOrTarget; target: SourceOrTarget } | undefined => {
	const domesticAudienceTag = tags.find((tag) =>
		/tracking\/audience\/(au|us|uk)/.test(tag.path ?? ''),
	);
	const domesticAudience = domesticAudienceTag?.path?.split('/').at(-1) as
		SourceOrTarget | undefined;
	const isGlobal = !!tags.find(
		(tag) => tag.path === 'tracking/audience/global',
	);

	if (domesticAudience && !isGlobal) {
		return { source: domesticAudience, target: domesticAudience };
	} else if (domesticAudience && isGlobal) {
		return { source: domesticAudience, target: 'global' };
	} else if (!domesticAudience && isGlobal) {
		return { source: 'global', target: 'global' };
	}

	return undefined;
};
