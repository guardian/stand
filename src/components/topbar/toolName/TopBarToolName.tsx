import { mergeDeep } from '../../../util/mergeDeep';
import { Favicon } from '../../favicon/Favicon';
import { Icon } from '../../icon/Icon';
import {
	contentTypeStyles,
	contentTypeTypography,
	defaultToolNameTheme,
	dividerStyles,
	toolNameStyles,
	toolNameTypography,
} from './styles';
import type { TopBarToolNameProps } from './types';

export const TopBarToolName = ({
	name,
	favicon,
	contentType,
	contentTypeIcon,
	theme = {},
	cssOverrides,
}: TopBarToolNameProps) => {
	const mergedTheme = mergeDeep(defaultToolNameTheme, theme);
	return (
		<div css={[toolNameStyles(mergedTheme), cssOverrides]}>
			<Favicon {...favicon} />
			<div css={[toolNameTypography(mergedTheme)]}>{name}</div>
			{contentType && (
				<>
					<div css={dividerStyles(mergedTheme)}>&nbsp;</div>
					<div css={contentTypeStyles(mergedTheme)}>
						{contentTypeIcon && <Icon size="sm">{contentTypeIcon}</Icon>}
						<div css={contentTypeTypography(mergedTheme)}>{contentType}</div>
					</div>
				</>
			)}
		</div>
	);
};
