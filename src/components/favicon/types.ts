import type { DefaultProps } from '../../util/types';
import type { IconProps } from '../icon/types';
import type { FaviconTheme } from './styles';

interface FaviconBaseProps extends DefaultProps<FaviconTheme> {
	/**
	 * The type of icon to use
	 */
	type: 'letter' | 'icon' | 'image';
}

interface FaviconWithLetter extends FaviconBaseProps {
	/**
	 * Letter to render in the favicon
	 */
	letter: string;
	icon?: never;
	src?: never;
	alt?: never;
}

interface FaviconWithIcon extends FaviconBaseProps {
	/**
	 * Icon to display in the favicon
	 */
	icon: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	letter?: never;
	src?: never;
	alt?: never;
}

interface FaviconWithImage extends FaviconBaseProps {
	/**
	 * Image URL for the favicon
	 */
	src: string;
	/**
	 * Alternative text for the image (required when src is provided)
	 */
	alt: string;
	/**
	 * Letter to display when image fails to load (optional)
	 */
	letter?: string;
	icon?: never;
}

export type FaviconProps =
	| FaviconWithLetter
	| FaviconWithIcon
	| FaviconWithImage;
