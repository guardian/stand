import type { DefaultProps } from '../../util/types';
import type { IntendedAudienceSignifierTheme } from './styles';

export type IntendedAudienceTag = 'uk' | 'us' | 'au' | 'global';
export interface IntendedAudienceSignifierProps extends DefaultProps<IntendedAudienceSignifierTheme> {
	sourceTag: IntendedAudienceTag;
	intendedAudienceTag: IntendedAudienceTag;
}
