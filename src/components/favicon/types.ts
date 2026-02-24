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
	type: 'letter';
	/**
	 * Letter to render in the favicon
	 */
	letter: string;
}

interface FaviconWithIcon extends FaviconBaseProps {
	type: 'icon';
	/**
	 * Icon to display in the favicon
	 */
	icon: IconProps['symbol'] | Exclude<IconProps['children'], string>;
}

interface FaviconWithImage extends FaviconBaseProps {
	type: 'image';
	/**
	 * Image URL for the favicon
	 */
	src: string;
	/**
	 * Alternative text for the image (required when src is provided)
	 */
	alt: string;
}

export type FaviconProps =
	| FaviconWithLetter
	| FaviconWithIcon
	| FaviconWithImage;
