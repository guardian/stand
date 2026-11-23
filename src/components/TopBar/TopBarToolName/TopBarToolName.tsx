import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Favicon } from '../../Favicon/Favicon';
import { Icon } from '../../Icon/Icon';
import { TopBarItem } from '../TopBarItem/TopBarItem';
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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
}: TopBarToolNameProps) {
	return (
		<TopBarItem alignment="left" size="sm">
			<div css={[toolNameStyles(), dangerouslyOverrideCss]}>
				<Favicon {...favicon} />
				<div css={[toolNameTypography({ collapseBelow })]}>{name}</div>
				{subsection && (
					<>
						<div css={dividerStyles({ collapseBelow })}>&nbsp;</div>
						<div css={subsectionStyles({ collapseBelow })}>
							{subsectionIcon && <Icon size="sm">{subsectionIcon}</Icon>}
							<div css={subsectionTypography()}>{subsection}</div>
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
				css={toolNameLinkStyles()}
				href={props.href}
				onPress={props.onPress}
			>
				<div
					css={[
						toolNameHoverLinkStyles({
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
