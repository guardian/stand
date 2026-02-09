import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { avatarImageStyles, avatarStyles, defaultAvatarTheme } from './styles';
import { avatarColors, type AvatarColors, type AvatarProps } from './types';

// deterministically pick a color based on the first 2 characters of input string
const getColorFromString = (input: string): AvatarColors => {
	const sum = input
		.split('')
		.slice(0, 2)
		.reduce((acc, char) => acc + (char.codePointAt(0) ?? 0), 0);
	const index = sum % avatarColors.length;
	return avatarColors[index]!;
};

export function Avatar({
	src,
	initials,
	alt,
	size = 'md',
	color,
	theme = {},
	cssOverrides,
	...props
}: AvatarProps) {
	const mergedTheme = mergeDeep(defaultAvatarTheme, theme);

	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	const showImage = src && !imageError;

	const displayInitials = initials?.slice(0, 2).toUpperCase() ?? '';

	// determine color: use provided color, or derive from src or initials
	const avatarColor = color ?? getColorFromString(src ?? displayInitials);

	return (
		<div
			css={[
				avatarStyles(mergedTheme, { size, color: avatarColor }),
				cssOverrides,
			]}
			role="img"
			aria-label={
				alt ??
				`Avatar ${displayInitials ? `with initials ${displayInitials}` : ''}`
			}
			title={alt ?? displayInitials}
			{...props}
		>
			{showImage ? (
				<img
					src={src}
					alt={alt}
					title={alt}
					onError={handleImageError}
					css={avatarImageStyles}
				/>
			) : (
				<>{displayInitials}</>
			)}
		</div>
	);
}
