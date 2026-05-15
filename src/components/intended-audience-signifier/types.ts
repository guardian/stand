import type { DefaultProps } from '../../util/types';
import type { IntendedAudienceSignifierTheme } from './styles';

export type Source = 'UK' | 'US' | 'AUS';
export type IntendedAudience =
	| 'global'
	| 'domestic-for-domestic'
	| 'domestic-for-global'
	| 'UK'
	| 'US'
	| 'AUS';
export interface IntendedAudienceSignifierProps extends DefaultProps<IntendedAudienceSignifierTheme> {
	source: Source;
	intendedAudience?: IntendedAudience | null;
	includeTitle?: boolean;
}
