import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import {
	defaultFaviconTheme,
	faviconImageStyles,
	faviconStyles,
	faviconTypographyStyles,
} from './styles';
import type { FaviconProps } from './types';

export const Favicon = (props: FaviconProps) => {
	const mergedTheme = mergeDeep(defaultFaviconTheme, props.theme ?? {});

	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	const displayLetter = props.letter?.slice(0, 1).toUpperCase() ?? '';

	if ('src' in props && !imageError) {
		return (
			<div css={[faviconStyles(mergedTheme), props.dangerouslyOverrideCss]}>
				<img
					src={props.src}
					alt={props.alt}
					title={props.alt}
					onError={handleImageError}
					css={faviconImageStyles}
				/>
			</div>
		);
	}
	if ('letter' in props || imageError) {
		return (
			<div
				css={[
					faviconStyles(mergedTheme),
					faviconTypographyStyles(mergedTheme),
					props.dangerouslyOverrideCss,
				]}
			>
				{displayLetter}
			</div>
		);
	}
	if ('icon' in props) {
		return (
			<div css={[faviconStyles(mergedTheme), props.dangerouslyOverrideCss]}>
				<Icon fill={mergedTheme.color.text}>{props.icon}</Icon>
			</div>
		);
	}

	return null;
};
