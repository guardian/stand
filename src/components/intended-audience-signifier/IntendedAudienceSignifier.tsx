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

const getSourceIconElement = (
	sourceTag: Source,
	audience: IntendedAudience,
) => {
	if (audience === 'global') {
		return globeIcon;
	}
	return sourceIcons[sourceTag];
};

const getIntendedAudienceIconElement = (
	sourceTag: Source,
	audience: IntendedAudience,
) => {
	if (audience === 'domestic-for-domestic') {
		return getSourceIconElement(sourceTag, audience);
	}

	if (audience === 'global' || audience === 'domestic-for-global') {
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

	if (!intendedAudience) {
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
