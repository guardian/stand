import type { DefaultProps } from '../../util/types';
import type { IconProps } from '../icon/types';
import type { FaviconTheme } from './styles';

interface FaviconWithLetter extends DefaultProps<FaviconTheme> {
	/**
	 * Letter to render in the favicon
	 */
	letter: string;
	icon?: never;
	src?: never;
	alt?: never;
}

interface FaviconWithIcon extends DefaultProps<FaviconTheme> {
	/**
	 * Icon to display in the favicon
	 */
	icon: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	letter?: never;
	src?: never;
	alt?: never;
}

interface FaviconWithImage extends DefaultProps<FaviconTheme> {
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
