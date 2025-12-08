import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Node } from 'prosemirror-model';
import {
	type ComponentByline,
	componentByline,
} from '../../styleD/build/typescript/component/byline';
import type { DeepPartial } from '../util';
import { mergeDeep } from '../util';

export const bylineContainerStyles = css`
	position: relative;
	width: 100%;
`;

export const bylineEditorStyles = (
	partialTheme: DeepPartial<ComponentByline> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentByline, partialTheme);
	return css`
		border-color: ${theme.borderColor};
		border-style: ${theme.borderStyle};
		border-width: ${theme.borderWidth};
		background-color: ${theme.backgroundColor};
		color: ${theme.color};

		/* ProseMirror styles from prosemirror-view/styles/prosemirror.css */
		.ProseMirror {
			padding: 4px 4px;
			word-wrap: break-word;
			white-space: pre-wrap;
			white-space: break-spaces;
			-webkit-font-variant-ligatures: none;
			font-variant-ligatures: none;
			font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
			line-height: ${theme.lineHeight};
		}

		.ProseMirror[contenteditable='false'] {
			background: ${theme.readonlyBackgroundColor};
			cursor: 'not-allowed';
		}

		.ProseMirror pre {
			white-space: pre-wrap;
		}

		.ProseMirror li {
			position: relative;
		}

		.ProseMirror-hideselection *::selection {
			background: transparent;
		}
		.ProseMirror-hideselection *::-moz-selection {
			background: transparent;
		}
		.ProseMirror-hideselection {
			caret-color: transparent;
		}

		/* See https://github.com/ProseMirror/prosemirror/issues/1421#issuecomment-1759320191 */
		.ProseMirror [draggable][contenteditable='false'] {
			user-select: text;
		}

		.ProseMirror-selectednode {
			outline: 1px solid ${theme.chip.selectedBorderColor};
		}

		/* Make sure li selections wrap around markers */

		li.ProseMirror-selectednode {
			outline: none;
		}

		li.ProseMirror-selectednode:after {
			content: '';
			position: absolute;
			left: -32px;
			right: -2px;
			top: -2px;
			bottom: -2px;
			border: 1px solid ${theme.chip.selectedBorderColor};
			pointer-events: none;
		}

		/* Protect against generic img rules */

		img.ProseMirror-separator {
			display: inline !important;
			border: none !important;
			margin: 0 !important;
		}

		.ProseMirror:focus {
			outline: none;
		}

		/* Invisible styles from @guardian/prosemirror-invisibles/dist/style.css */

		.invisible {
			/* Chrome in particular dislikes doing the right thing
		* with carets and inline elements when contenteditable
		* is 'false'. See e.g. https://github.com/ProseMirror/prosemirror/issues/1061
   		*/
			display: inline;
			position: relative;
			pointer-events: none;
		}

		.invisible:before {
			position: relative;
			caret-color: inherit;
			color: ${theme.invisiblesColor};
			display: inline-block;
			font-weight: 400;
			font-style: normal;
			line-height: initial;
			width: 0;
			top: 0;
			left: 0;
			z-index: 1;
		}

		.invisible__selected-marker {
			position: absolute;
			caret-color: inherit;
			background-color: #dcdcdc;
			display: inline-block;
			font-weight: 400;
			font-style: normal;
			line-height: initial;
			top: 0;
			left: 0;
			width: 10px;
			height: 100%;
			z-index: 0;
		}

		.ProseMirror-focused .invisible__selected-marker {
			background-color: #b4d9ff;
		}

		.ProseMirror-focused .invisible--is-selected::before {
			background-color: #b4d8ff;
		}

		.invisible--is-selected::before {
			background-color: #dcdcdc;
		}

		.invisible--space:before {
			content: '·';
		}

		.invisible--nb-space {
			vertical-align: text-bottom;
		}

		.invisible--nb-space:before {
			font-size: 15px;
			content: '^';
			position: absolute;
			top: 9px;
			left: -1px;
		}

		chip {
			border-color: ${theme.chip.borderColor};
			border-style: ${theme.chip.borderStyle};
			border-width: ${theme.chip.borderWidth};
			border-radius: ${theme.chip.borderRadius};
			padding: ${theme.chip.paddingY} ${theme.chip.paddingX};
			color: ${theme.chip.color};

			cursor: default;

			&[data-type='tagged'] {
				background-color: ${theme.chip.taggedBackgroundColor};
			}

			&[data-type='untagged'] {
				color: ${theme.chip.untaggedColor};
			}

			::after {
				content: '';
				display: inline-block;
			}

			span {
				cursor: pointer;
				margin-left: 5px;
			}
		}

		/* Leave space between subsequent chips */
		chip + chip {
			margin-left: 3px;
		}

		.placeholder {
			display: inline-block;
			height: 0;
			width: 0;
			white-space: nowrap;
			color: ${theme.placeholderColor};
			pointer-events: none;
			cursor: text;
		}
	`;
};

export const dropdownContainerStyles = (
	showDropdown: boolean,
	partialTheme: DeepPartial<ComponentByline['dropdown']> = {},
) => {
	const theme = mergeDeep(componentByline['dropdown'], partialTheme);
	return css`
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		z-index: 1000;
		border-width: ${theme.borderWidth};
		border-style: ${theme.borderStyle};
		border-color: ${theme.borderColor};
		background-color: ${theme.backgroundColor};
		display: ${showDropdown ? 'block' : 'none'};
		max-height: ${theme.maxHeight};
		overflow-y: auto;
	`;
};

export const dropdownUlStyles = css`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const dropdownLiStyles = (
	partialTheme: DeepPartial<ComponentByline['dropdown']> = {},
) => {
	const theme = mergeDeep(componentByline['dropdown'], partialTheme);
	return css`
		cursor: pointer;
		padding: 5px;
		border-bottom-color: ${theme.li.borderBottomColor};
		border-bottom-width: ${theme.li.borderBottomWidth};
		border-bottom-style: ${theme.li.borderBottomStyle};
		color: ${theme.li.color};
	`;
};

export const selectedDropdownLiStyles = (
	partialTheme: DeepPartial<ComponentByline['dropdown']> = {},
) => {
	const theme = mergeDeep(componentByline['dropdown'], partialTheme);
	return css`
		background-color: ${theme.li.selectedBackgroundColor};
		color: ${theme.li.selectedColor};
	`;
};

export const previewStyles = css`
	margin-top: 5px;
	white-space: pre-wrap;
`;

export const previewFreeTextStyles = css`
	font-style: italic;
`;

export const previewContributorStyles = (node: Node) => css`
	${node.attrs.type === 'tagged' ? 'text-decoration: underline;' : ''}
	color: inherit;
`;
