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
			${theme.shared.hover};
			cursor: pointer;
		}
		&[data-pressed] {
			${theme.shared.pressed};
		}
		&[data-disabled] {
			${theme.shared.disabled};
		}
		&[data-focus-visible] {
			outline: 1px solid #0072a9;
		}
	`;
};
