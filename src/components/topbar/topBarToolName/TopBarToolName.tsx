import { mergeDeep } from '../../../util/mergeDeep';
import { Favicon } from '../../favicon/Favicon';
import { Icon } from '../../icon/Icon';
import { TopBarItem } from '../topBarItem/TopBarItem';
import {
	defaultToolNameTheme,
	dividerStyles,
	subsectionStyles,
	subsectionTypography,
	toolNameStyles,
	toolNameTypography,
} from './styles';
import type { TopBarToolNameProps } from './types';

export const TopBarToolName = ({
	name,
	favicon,
	subsection,
	subsectionIcon,
	theme = {},
	cssOverrides,
}: TopBarToolNameProps) => {
	const mergedTheme = mergeDeep(defaultToolNameTheme, theme);
	return (
		<TopBarItem alignment="left" size="sm">
			<div css={[toolNameStyles(mergedTheme), cssOverrides]}>
				<Favicon {...favicon} />
				<div css={[toolNameTypography(mergedTheme)]}>{name}</div>
				{subsection && (
					<>
						<div css={dividerStyles(mergedTheme)}>&nbsp;</div>
						<div css={subsectionStyles(mergedTheme)}>
							{subsectionIcon && <Icon size="sm">{subsectionIcon}</Icon>}
							<div css={subsectionTypography(mergedTheme)}>{subsection}</div>
						</div>
					</>
				)}
			</div>
		</TopBarItem>
	);
};
