import type { ComponentAvatar } from '../../styleD/build/typescript/component/avatar';
import type { DefaultProps } from '../../util/types';
import type { AvatarTheme } from './styles';

export type AvatarColors = keyof ComponentAvatar['shared']['color'];

export const avatarColors: AvatarColors[] = [
	'blue',
	'green',
	'red',
	'cyan',
	'teal',
	'cool-purple',
	'warm-purple',
	'magenta',
	'orange',
	'yellow',
];

interface AvatarBaseProps extends DefaultProps<AvatarTheme> {
	/**
	 * Size variant of the avatar
	 */
	size?: keyof Omit<AvatarTheme, 'shared'>;
	/**
	 * Color variant of the avatar
	 */
	color?: AvatarColors;
}

interface AvatarWithImage extends AvatarBaseProps {
	/**
	 * Image URL for the avatar
	 */
	src: string;
	/**
	 * Alternative text for the image (required when src is provided)
	 */
	alt: string;
	/**
	 * Initials to display when image fails to load (optional)
	 */
	initials?: string;
}

interface AvatarWithInitials extends AvatarBaseProps {
	/**
	 * Image URL for the avatar (optional)
	 */
	src?: never;
	/**
	 * Alternative text for the image (optional)
	 */
	alt?: string;
	/**
	 * Initials to display (required, typically 1-2 characters)
	 */
	initials: string;
}

export type AvatarProps = AvatarWithImage | AvatarWithInitials;
