import type { SourceOrTarget } from './types';

// Minimal representation of Tag model
// See https://github.com/guardian/tagmanager/blob/main/app/model/Tag.scala
export interface Tag {
	path?: string;
}

type SourceOrTargetResult = SourceOrTarget | undefined;

export const mapTagsToSourceAndTarget = (
	tags: Tag[],
): [SourceOrTargetResult, SourceOrTargetResult] => {
	const domesticAudienceTag = tags.find((tag) =>
		/tracking\/audience\/(au|us|uk)/.test(tag.path ?? ''),
	);
	const domesticAudience = domesticAudienceTag?.path
		?.split('/')
		.at(-1) as SourceOrTargetResult;
	const isGlobal = !!tags.find(
		(tag) => tag.path === 'tracking/audience/global',
	);

	if (domesticAudience && !isGlobal) {
		return [domesticAudience, domesticAudience];
	} else if (domesticAudience && isGlobal) {
		return [domesticAudience, 'global'];
	} else if (!domesticAudience && isGlobal) {
		return ['global', 'global'];
	}

	return [undefined, undefined];
};
