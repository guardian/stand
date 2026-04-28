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
	intendedAudienceSignifierStyles,
} from './styles';
import type { IntendedAudienceSignifierProps } from './types';

export function IntendedAudienceSignifier({
	sourceTag,
	intendedAudienceTag,
	theme = {},
	cssOverrides,
	className,
	...props
}: IntendedAudienceSignifierProps) {
	const mergedTheme = mergeDeep(defaultIntendedAudienceSignifierTheme, theme);

	const getIconElement = (icon: string) => {
		switch (icon) {
			case 'uk':
				return ukFlag;
			case 'us':
				return usFlag;
			case 'au':
				return auFlag;
			case 'global':
				return globeIcon;
			default:
				return '';
		}
	};

	return (
		<div
			{...props}
			className={className}
			css={[intendedAudienceSignifierStyles(mergedTheme), cssOverrides]}
		>
			<div>{getIconElement(sourceTag)}</div>
			<div> {DoubleChevronRightSvg}</div>
			<div>{getIconElement(intendedAudienceTag)}</div>
		</div>
	);
}
