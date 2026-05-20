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

type KnownAudience = Exclude<IntendedAudience, "Don't know">;

const sourceIcons = {
	UK: ukFlag,
	US: usFlag,
	AUS: auFlag,
	Global: globeIcon,
};

const getSourceIconElement = (source: Source, audience: KnownAudience) => {
	if (audience === 'Global') {
		return globeIcon;
	}
	return sourceIcons[source];
};

const getIntendedAudienceIconElement = (
	source: Source,
	audience: KnownAudience,
) => {
	if (audience === 'Domestic for Domestic') {
		return getSourceIconElement(source, audience);
	}

	if (audience === 'Global' || audience === 'Domestic For Global') {
		return globeIcon;
	}

	return sourceIcons[audience];
};

const getSourceDescription = (
	source: Source,
	audience: KnownAudience,
): Source | 'Global' => {
	switch (audience) {
		case 'Global':
			return 'Global';
		case 'Domestic For Global':
		case 'Domestic for Domestic':
		case 'UK':
		case 'US':
		case 'AUS':
			return source;
	}
};

const getAudienceDescription = (
	source: Source,
	audience: KnownAudience,
): Source | 'Global' | 'Domestic' => {
	switch (audience) {
		case 'Global':
		case 'Domestic For Global':
			return 'Global';
		case 'Domestic for Domestic':
			return 'Domestic';
		case 'UK':
		case 'US':
		case 'AUS':
			return audience === source ? 'Domestic' : audience;
	}
};

const getSignifierDescription = (
	source: Source,
	audience: KnownAudience,
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

	if (intendedAudience === "Don't know") {
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
