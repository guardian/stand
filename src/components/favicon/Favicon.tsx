import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
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

	switch (props.type) {
		case 'letter':
			return (
				<div
					css={[
						faviconStyles(mergedTheme),
						faviconTypographyStyles(mergedTheme),
						props.cssOverrides,
					]}
				>
					{props.letter}
				</div>
			);
		case 'icon':
			return (
				<div css={[faviconStyles(mergedTheme), props.cssOverrides]}>
					<Icon fill={mergedTheme.color.text}>{props.icon}</Icon>
				</div>
			);
		case 'image':
			return (
				<div css={[faviconStyles(mergedTheme), props.cssOverrides]}>
					{imageError ? (
						<>Backup</>
					) : (
						<img
							src={props.src}
							alt={props.alt}
							title={props.alt}
							onError={handleImageError}
							css={faviconImageStyles}
						/>
					)}
				</div>
			);
	}
};
