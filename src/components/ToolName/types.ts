import type { DefaultProps } from '../../util/types';
import type { FaviconProps } from '../favicon/types';
import type { IconProps } from '../icon/types';
import type { ToolNameTheme } from './styles';

export interface ToolNameProps extends DefaultProps<ToolNameTheme> {
	/**
	 * Name of the tool to display
	 */
	name: string;
	/**
	 * Icon to display
	 */
	favicon: FaviconProps;
	/**
	 * Type of content that is represented on the page e.g. a subsection of the application (optional)
	 * */
	contentType?: string;
	/**
	 * Icon that represents the content type (optional)
	 * */
	contentTypeIcon?:
		| IconProps['symbol']
		| Exclude<IconProps['children'], string>;
}
