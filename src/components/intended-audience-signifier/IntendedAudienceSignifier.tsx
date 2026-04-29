import type { ReactElement } from 'react';
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

const sourceIcons: Record<string, ReactElement> = {
	UK: ukFlag,
	US: usFlag,
	AUS: auFlag,
	Global: globeIcon,
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

	const getSourceIconElement = (sourceTag: string, audience: string) => {
		if (audience === 'Global') {
			return globeIcon;
		}
		if (audience === "Don't know") {
			return DontKnowIcon;
		}
		return sourceIcons[sourceTag] ?? DontKnowIcon;
	};

	const getIntendedAudienceIconElement = (
		sourceTag: string,
		audience: string,
	) => {
		if (audience === 'Domestic for Domestic') {
			return getSourceIconElement(sourceTag, audience);
		}

		if (audience === 'Global' || audience === 'Domestic For Global') {
			return globeIcon;
		}

		if (audience === "Don't know") {
			return DontKnowIcon;
		}

		return sourceIcons[audience] ?? DontKnowIcon;
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
