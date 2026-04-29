import { mergeDeep } from '../../util/mergeDeep';
import {
	auFlag,
	DontKnowIcon,
	DoubleChevronRightSvg,
	globeIcon,
	ukFlag,
	usFlag,
} from './FlagIcons';
import {
	defaultIntendedAudienceSignifierTheme,
	intendedAudienceSignifierStyles,
} from './styles';
import type { IntendedAudienceSignifierProps } from './types';

export function IntendedAudienceSignifier({
	source,
	intendedAudience,
	theme = {},
	cssOverrides,
	className,
	...props
}: IntendedAudienceSignifierProps) {
	const mergedTheme = mergeDeep(defaultIntendedAudienceSignifierTheme, theme);

	const getSourceIconElement = (
		sourceTag: string,
		intendedAudience: string,
	) => {
		if (intendedAudience === 'Global') {
			return globeIcon;
		}
		if (intendedAudience === "Don't know") {
			return DontKnowIcon;
		}
		switch (sourceTag) {
			case 'UK':
				return ukFlag;
			case 'US':
				return usFlag;
			case 'AUS':
				return auFlag;
			case 'Global':
				return globeIcon;
			default:
				return DontKnowIcon;
		}
	};

	const getIntendedAudienceIconElement = (
		sourceTag: string,
		intendedAudience: string,
	) => {
		switch (intendedAudience) {
			case 'Global':
				return globeIcon;
			case 'Domestic for Domestic':
				return getSourceIconElement(sourceTag, intendedAudience);
			case 'Domestic For Global':
				return globeIcon;
			case "Don't know":
				return DontKnowIcon;
			case 'UK':
				return ukFlag;
			case 'US':
				return usFlag;
			case 'AUS':
				return auFlag;
			default:
				return DontKnowIcon;
		}
	};

	if (intendedAudience === "Don't know") {
		return (
			<div
				{...props}
				className={className}
				css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
			>
				<div>{getSourceIconElement(source, intendedAudience)}</div>
			</div>
		);
	}

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
		>
			<div>{getSourceIconElement(source, intendedAudience)}</div>
			<div> {DoubleChevronRightSvg}</div>
			<div>{getIntendedAudienceIconElement(source, intendedAudience)}</div>
		</div>
	);
}
