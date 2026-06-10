import { mergeDeep } from '../../util/mergeDeep';
import {
	auFlag,
	DoubleChevronRightSvg,
	globeIcon,
	ukFlag,
	usFlag,
} from './FlagIcons';
import {
	defaultIntendedAudienceSignifierTheme,
	intendedAudienceSignifierChevronIconStyles,
	intendedAudienceSignifierIconStyles,
	intendedAudienceSignifierStyles,
} from './styles';
import type { IntendedAudienceSignifierProps, SourceOrTarget } from './types';

const icons = {
	uk: ukFlag,
	us: usFlag,
	au: auFlag,
	global: globeIcon,
};

type Description =
	| 'Global'
	| 'Domestic'
	| 'United Kingdom'
	| 'United States'
	| 'Australia';

const descriptionMap: Record<SourceOrTarget, Description> = {
	global: 'Global',
	uk: 'United Kingdom',
	us: 'United States',
	au: 'Australia',
};

const getSourceDescription = (source: SourceOrTarget) => descriptionMap[source];

const getTargetDescription = (
	source: SourceOrTarget,
	target: SourceOrTarget,
): Description => {
	switch (target) {
		case 'global':
			return 'Global';
		case 'uk':
		case 'us':
		case 'au':
			return target === source ? 'Domestic' : descriptionMap[source];
	}
};

const AUDIENCE_NOT_KNOWN_DESCRIPTION = 'Intended audience unknown';
const getSignifierTitle = (
	source?: SourceOrTarget,
	target?: SourceOrTarget,
): string => {
	if (!source || !target) {
		return AUDIENCE_NOT_KNOWN_DESCRIPTION;
	}
	return `${getSourceDescription(source)} for ${getTargetDescription(source, target)} audience`;
};

export function IntendedAudienceSignifier({
	source,
	target,
	theme = {},
	cssOverrides,
	className,
	...props
}: IntendedAudienceSignifierProps) {
	const mergedTheme = mergeDeep(defaultIntendedAudienceSignifierTheme, theme);
	const title = getSignifierTitle(source, target);
	const iconStyles = intendedAudienceSignifierIconStyles(mergedTheme);
	const chevronIconStyles =
		intendedAudienceSignifierChevronIconStyles(mergedTheme);

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
			title={title}
		>
			{target && source ? (
				<>
					<div css={iconStyles}>{icons[source]}</div>
					<div css={chevronIconStyles}>{DoubleChevronRightSvg}</div>
					<div css={iconStyles}>{icons[target]}</div>
				</>
			) : (
				<span>Don&lsquo;t know</span>
			)}
		</div>
	);
}
