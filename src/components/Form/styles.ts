import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { FormInputContainerDefaultProps } from './types';

export type FormInputContainerTheme = Prettify<typeof component.form.input>;

export const defaultFormInputContainerTheme: FormInputContainerTheme =
	component.form.input;

export const formInputContainerStyles = (
	theme: FormInputContainerTheme,
	{ fluid }: FormInputContainerDefaultProps<{ className?: unknown }, unknown>,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme.shared.container.gap};
		width: ${theme.shared.container.width};
		${
			!fluid &&
			css`
				max-width: ${theme.shared.container.maxWidth};
			`
		}
	`;
};

export const formInputLabelStyles = (
	theme: FormInputContainerTheme,
	{
		isDisabled,
		size,
	}: {
		size: keyof Omit<FormInputContainerTheme, 'shared'>;
		isDisabled?: boolean;
	},
): SerializedStyles => {
	return css`
		color: ${theme.shared.label.color};
		${convertTypographyToCssString(theme[size].label.typography)}

		${
			isDisabled &&
			css`
				color: ${theme.shared.label.disabled.color};
			`
		}
	`;
};

export const formInputDescriptionStyles = (
	theme: FormInputContainerTheme,
	{
		isDisabled,
	}: {
		isDisabled?: boolean;
	},
): SerializedStyles => {
	return css`
		color: ${theme.shared.description.color};
		${convertTypographyToCssString(theme.shared.description.typography)}
		${
			isDisabled &&
			css`
				color: ${theme.shared.description.disabled.color};
			`
		}
	`;
};
