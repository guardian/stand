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
	UK: ukFlag,
	US: usFlag,
	AUS: auFlag,
	global: globeIcon,
};

const getSourceDescription = (source: SourceOrTarget) => {
	switch (source) {
		case 'global':
			return 'Global';
		case 'UK':
		case 'US':
		case 'AUS':
			return source;
	}
};

const getTargetDescription = (
	source: SourceOrTarget,
	target: SourceOrTarget,
): SourceOrTarget | 'Global' | 'Domestic' => {
	switch (target) {
		case 'global':
			return 'Global';
		case 'UK':
		case 'US':
		case 'AUS':
			return target === source ? 'Domestic' : target;
	}
};

const AUDIENCE_NOT_KNOWN_DESCRIPTION = 'Intended audience unknown';
const getSignifierDescription = (
	source?: SourceOrTarget,
	target?: SourceOrTarget,
): string => {
	if (!source || !target) {
		return AUDIENCE_NOT_KNOWN_DESCRIPTION;
	}
	return `${getSourceDescription(source)} article for ${getTargetDescription(source, target)} audience`;
};

export function IntendedAudienceSignifier({
	source,
	target,
	textWhenUnset = 'Don‘t know',
	theme = {},
	cssOverrides,
	className,
	...props
}: IntendedAudienceSignifierProps) {
	const mergedTheme = mergeDeep(defaultIntendedAudienceSignifierTheme, theme);
	const description = getSignifierDescription(source, target);
	const iconStyles = intendedAudienceSignifierIconStyles(mergedTheme);
	const chevronIconStyles =
		intendedAudienceSignifierChevronIconStyles(mergedTheme);

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
			aria-label={description}
		>
			{target && source ? (
				<>
					<div css={iconStyles}>{icons[source]}</div>
					<div css={chevronIconStyles}>{DoubleChevronRightSvg}</div>
					<div css={iconStyles}>{icons[target]}</div>
				</>
			) : (
				<span>{textWhenUnset}</span>
			)}
		</div>
	);
}
