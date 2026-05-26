import type { DefaultProps } from '../../util/types';
import type { IntendedAudienceSignifierTheme } from './styles';

export type SourceOrTarget = 'global' | 'UK' | 'US' | 'AUS';

export interface IntendedAudienceSignifierProps extends DefaultProps<IntendedAudienceSignifierTheme> {
	source?: SourceOrTarget;
	target?: SourceOrTarget;
	textWhenUnset?: string;
}
