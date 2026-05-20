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
import type {
	IntendedAudience,
	IntendedAudienceSignifierProps,
	Source,
} from './types';

const sourceIcons = {
	UK: ukFlag,
	US: usFlag,
	AUS: auFlag,
	global: globeIcon,
};

const getSourceIconElement = (source: Source, audience: IntendedAudience) => {
	if (audience === 'global') {
		return globeIcon;
	}
	return sourceIcons[source];
};

const getIntendedAudienceIconElement = (
	source: Source,
	audience: IntendedAudience,
) => {
	if (audience === 'domestic-for-domestic') {
		return getSourceIconElement(source, audience);
	}

	if (audience === 'global' || audience === 'domestic-for-global') {
		return globeIcon;
	}

	return sourceIcons[audience];
};

const getSourceDescription = (
	source: Source,
	audience: IntendedAudience,
): Source | 'Global' => {
	switch (audience) {
		case 'global':
			return 'Global';
		case 'domestic-for-global':
		case 'domestic-for-domestic':
		case 'UK':
		case 'US':
		case 'AUS':
			return source;
	}
};

const getAudienceDescription = (
	source: Source,
	audience: IntendedAudience,
): Source | 'Global' | 'Domestic' => {
	switch (audience) {
		case 'global':
		case 'domestic-for-global':
			return 'Global';
		case 'domestic-for-domestic':
			return 'Domestic';
		case 'UK':
		case 'US':
		case 'AUS':
			return audience === source ? 'Domestic' : audience;
	}
};

const getSignifierDescription = (
	source: Source,
	audience: IntendedAudience,
): string => {
	return `${getSourceDescription(source, audience)} article for ${getAudienceDescription(source, audience)} audience`;
};

const AUDIENCE_NOT_KNOWN_DESCRIPTION = 'Intended audience unknown';

export function IntendedAudienceSignifier({
	source,
	intendedAudience,
	theme = {},
	cssOverrides,
	className,
	...props
}: IntendedAudienceSignifierProps) {
	const mergedTheme = mergeDeep(defaultIntendedAudienceSignifierTheme, theme);

	if (!intendedAudience) {
		return (
			<div
				{...props}
				className={className}
				css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
				aria-label={AUDIENCE_NOT_KNOWN_DESCRIPTION}
			>
				<span>Don&lsquo;t know</span>
			</div>
		);
	}

	const iconStyles = intendedAudienceSignifierIconStyles(mergedTheme);
	const chevronIconStyles =
		intendedAudienceSignifierChevronIconStyles(mergedTheme);

	const description = getSignifierDescription(source, intendedAudience);

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
			aria-label={description}
		>
			<div css={iconStyles}>
				{getSourceIconElement(source, intendedAudience)}
			</div>
			<div css={chevronIconStyles}>{DoubleChevronRightSvg}</div>
			<div css={iconStyles}>
				{getIntendedAudienceIconElement(source, intendedAudience)}
			</div>
		</div>
	);
}
