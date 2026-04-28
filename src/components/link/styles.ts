import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentLink } from '../../styleD/build/typescript/component/link';
import { componentLink } from '../../styleD/build/typescript/component/link';
import type { Prettify } from '../../util/types';

export type LinkTheme = Prettify<ComponentLink>;

export const defaultLinkTheme: LinkTheme = componentLink;

export const linkStyles = (theme: LinkTheme): SerializedStyles => {
	return css`
		text-decoration: underline;
		text-decoration-style: solid;
		text-underline-offset: 8%;
		text-decoration-thickness: 5%;
		${theme.shared.enabled};
		&[data-hovered] {
			color: ${theme.shared.hover.color};
			cursor: ${theme.shared.hover.cursor};
		}
		&[data-pressed] {
			color: ${theme.shared.pressed.color};
		}
		&[data-disabled] {
			color: ${theme.shared.disabled.color};
		}
		&[data-focus-visible] {
			outline: ${theme.shared.focus.outline};
		}
	`;
};
