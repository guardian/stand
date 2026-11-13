import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentSelect } from '../../styleD/build/typescript/component/select';
import { componentSelect } from '../../styleD/build/typescript/component/select';
import { convertCSSTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import type { ListBoxProps, SelectProps } from './types';

export type SelectTheme = Prettify<ComponentSelect>;
export type PartialSelectTheme = Prettify<DeepPartial<SelectTheme>>;

export const defaultSelectTheme: SelectTheme = componentSelect;

export const popoverStyles = (): SerializedStyles => {
	return css`
		/* width must be determined by the react-aria popover --trigger-width variable */
		width: var(--trigger-width);
	`;
};

export const listBoxItemStyles = (): SerializedStyles => {
	return css`
		padding-left: var(--component-select-shared-option-padding-left);
		padding-right: var(--component-select-shared-option-padding-right);
		padding-top: var(--component-select-shared-option-padding-top);
		padding-bottom: var(--component-select-shared-option-padding-bottom);

		&[data-hovered] {
			outline: var(--component-select-shared-hover-outline);
		}

		/* Hovering adds data-focused and the item stays focused after hovering away */
		&[data-focused] {
			background-color: var(--component-select-shared-hover-background-color);
		}

		/* Override default browser focus behaviour */
		:focus-visible {
			outline: none;
		}

		&[data-focus-visible] {
			outline: var(--component-select-shared-option-focused-outline);
			outline-offset: var(
				--component-select-shared-option-focused-outline-offset
			);
			background-color: var(
				--component-select-shared-option-focused-background-color
			);
		}

		/* Must be last to take precedence */
		&[data-pressed] {
			background-color: var(--component-select-shared-pressed-background-color);
		}
	`;
};

export const listBoxStyles = ({
	size,
}: {
	size: ListBoxProps['size'];
}): SerializedStyles => {
	return css`
		background-color: var(--component-select-shared-list-box-background-color);
		border: var(--component-select-shared-list-box-border);
		box-shadow: var(--component-select-shared-list-box-shadow);
		width: var(--component-select-shared-width);
		outline: none;
		${convertCSSTypographyToEmotionStringStyle(`--component-select-${size}`)}
	`;
};

export const buttonStyles = ({
	size,
	isInvalid,
}: Required<Pick<SelectProps, 'size' | 'isInvalid'>>): SerializedStyles => {
	return css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--component-select-shared-button-background-color);
		border: var(--component-select-shared-button-border);
		border-radius: var(--component-select-shared-button-border-radius);
		height: var(--component-select-${size}-height);
		padding-left: var(--component-select-shared-button-padding-left);
		padding-right: var(--component-select-shared-button-padding-right);
		margin-top: var(--component-select-shared-button-margin-top);
		color: var(--component-select-shared-button-color);
		${convertCSSTypographyToEmotionStringStyle(`--component-select-${size}`)}

		&[data-hovered] {
			background-color: var(--component-select-shared-hover-background-color);
		}

		&[data-pressed] {
			background-color: var(--component-select-shared-pressed-background-color);
		}

		&[data-focus-visible] {
			outline: var(--component-select-shared-button-focused-outline);
			outline-offset: var(
				--component-select-shared-button-focused-outline-offset
			);
		}

		&[data-disabled] {
			cursor: not-allowed;
			background-color: var(
				--component-select-shared-button-disabled-background-color
			);
			color: var(--component-select-shared-button-disabled-color);
			border: var(--component-select-shared-button-disabled-border);
		}

		${isInvalid ? `border: var(--component-select-shared-button-error-border);` : ``}
	`;
};

export const iconStyles = (): SerializedStyles => {
	return css`
		[data-open] & {
			transform: rotate(180deg);
		}
	`;
};

export const valueListStyles = (): SerializedStyles => {
	return css`
		display: inline-flex;
		overflow: hidden;

		/* Allow shrinking below intrinisic width of children */
		min-width: 0;
	`;
};

export const valueItemStyles = (): SerializedStyles => {
	return css`
		/* Elide text */
		text-wrap: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		/** Minimum width of an elided text snippet. Text naturally shorter than this won't be elided */
		--elided-text-snippet-min-width: 4ch;

		/* Always show first few characters, even when elided */
		min-width: min(var(--elided-text-snippet-min-width), min-content);
		max-width: min-content;

		/* Prefer to elide longer pieces of text first */
		flex: 1 1 var(--elided-text-snippet-min-width);
	`;
};
