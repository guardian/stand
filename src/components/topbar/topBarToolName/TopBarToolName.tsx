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
	toolNameHoverLinkTextCollapsedStyles,
	toolNameHoverLinkTextExpandedStyles,
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
	collapseBelow = 'lg',
	theme = {},
	cssOverrides,
}: TopBarToolNameProps) {
	const mergedTheme = mergeDeep(defaultToolNameTheme, theme);

	return (
		<TopBarItem alignment="left" size="sm">
			<div css={[toolNameStyles(mergedTheme), cssOverrides]}>
				<Favicon {...favicon} />
				<div css={[toolNameTypography(mergedTheme, { collapseBelow })]}>
					{name}
				</div>
				{subsection && (
					<>
						<div css={dividerStyles(mergedTheme, { collapseBelow })}>
							&nbsp;
						</div>
						<div css={subsectionStyles(mergedTheme, { collapseBelow })}>
							{subsectionIcon && <Icon size="sm">{subsectionIcon}</Icon>}
							<div css={subsectionTypography(mergedTheme)}>{subsection}</div>
						</div>
					</>
				)}
			</div>
		</TopBarItem>
	);
}

export const TopBarToolName = ({
	collapseBelow = 'lg',
	theme = {},
	...props
}: TopBarToolNameProps) => {
	const mergedTheme = mergeDeep(defaultToolNameTheme, theme);

	if (
		('href' in props || 'onPress' in props) &&
		('hoverText' in props || 'collapsedHoverText' in props)
	) {
		return (
			<ReactAriaLink
				css={toolNameLinkStyles(mergedTheme)}
				href={props.href}
				onPress={props.onPress}
			>
				<div
					css={[
						toolNameHoverLinkStyles(mergedTheme, {
							collapseBelow,
						}),
					]}
				>
					{/* shown on and above collapseBelow */}
					<span
						css={toolNameHoverLinkTextExpandedStyles({
							collapseBelow,
						})}
					>
						{props.hoverText ?? props.collapsedHoverText}
					</span>
					{/* shown below collapseBelow */}
					<span
						css={toolNameHoverLinkTextCollapsedStyles({
							collapseBelow,
						})}
					>
						{props.collapsedHoverText ?? props.hoverText}
					</span>
				</div>
				<ToolName
					theme={mergedTheme}
					collapseBelow={collapseBelow}
					{...props}
				/>
			</ReactAriaLink>
		);
	}

	return (
		<ToolName theme={mergedTheme} collapseBelow={collapseBelow} {...props} />
	);
};
