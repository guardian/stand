import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Favicon } from '../../favicon/Favicon';
import { Icon } from '../../icon/Icon';
import { TopBarItem } from '../topBarItem/TopBarItem';
import {
	defaultToolNameTheme,
	dividerStyles,
	subsectionStyles,
	subsectionTypography,
	toolNameHoverLinkStyles,
	toolNameLinkStyles,
	toolNameStyles,
	toolNameTypography,
} from './styles';
import type { TopBarToolNameProps } from './types';

function ToolName({
	name,
	favicon,
	subsection,
	subsectionIcon,
	theme = {},
	cssOverrides,
}: TopBarToolNameProps) {
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
}

export const TopBarToolName = (props: TopBarToolNameProps) => {
	const mergedTheme = mergeDeep(defaultToolNameTheme, props.theme ?? {});

	if (('href' in props || 'onPress' in props) && 'hoverText' in props) {
		return (
			<ReactAriaLink
				css={toolNameLinkStyles(mergedTheme)}
				href={props.href}
				onPress={props.onPress}
			>
				<div css={[toolNameHoverLinkStyles(mergedTheme)]}>
					{props.hoverText}
				</div>
				<ToolName {...props} />
			</ReactAriaLink>
		);
	}

	return <ToolName {...props} />;
};
