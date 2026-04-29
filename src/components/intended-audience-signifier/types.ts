import type { DefaultProps } from '../../util/types';
import type { IntendedAudienceSignifierTheme } from './styles';

export type Source = 'UK' | 'US' | 'AUS';
export type IntendedAudience =
	| 'Global'
	| 'Domestic for Domestic'
	| 'Domestic For Global'
	| "Don't know"
	| 'UK'
	| 'US'
	| 'AUS';
export interface IntendedAudienceSignifierProps extends DefaultProps<IntendedAudienceSignifierTheme> {
	source: Source;
	intendedAudience: IntendedAudience;
}
