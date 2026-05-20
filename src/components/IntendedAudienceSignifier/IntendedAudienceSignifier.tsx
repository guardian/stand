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

const getSourceIconElement = (sourceTag: Source, audience: KnownAudience) => {
	if (audience === 'Global') {
		return globeIcon;
	}
	return sourceIcons[sourceTag];
};

const getIntendedAudienceIconElement = (
	sourceTag: Source,
	audience: KnownAudience,
) => {
	if (audience === 'Domestic for Domestic') {
		return getSourceIconElement(sourceTag, audience);
	}

	if (audience === 'Global' || audience === 'Domestic For Global') {
		return globeIcon;
	}

	return sourceIcons[audience];
};

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
			>
				<span>Don&lsquo;t know</span>
			</div>
		);
	}

	const iconStyles = intendedAudienceSignifierIconStyles(mergedTheme);
	const chevronIconStyles =
		intendedAudienceSignifierChevronIconStyles(mergedTheme);

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
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
