import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentForm } from '../../styleD/build/typescript/component/form';
import { componentForm } from '../../styleD/build/typescript/component/form';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type FormInputContainerTheme = Prettify<ComponentForm['input']>;

export const defaultFormInputContainerTheme: FormInputContainerTheme =
	componentForm.input;

export const formInputContainerStyles = (
	theme: FormInputContainerTheme,
): SerializedStyles => {
	return css`
		display: ${theme.shared.container.display};
		flex-direction: ${theme.shared.container['flex-direction']};
		gap: ${theme.shared.container.gap};
		width: ${theme.shared.container.width};
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
		${convertTypographyToEmotionStringStyle(theme[size].label.typography)}

		${isDisabled &&
		css`
			color: ${theme.shared.label.disabled.color};
		`}
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
		${convertTypographyToEmotionStringStyle(
			theme.shared.description.typography,
		)}
		${isDisabled &&
		css`
			color: ${theme.shared.description.disabled.color};
		`}
	`;
};
