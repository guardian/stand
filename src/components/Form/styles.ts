import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentForm } from '../../styleD/build/typescript/component/form';
import { componentForm } from '../../styleD/build/typescript/component/form';
import { convertCSSTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { Prettify } from '../../util/types';
import type { FormInputContainerDefaultProps } from './types';

export type FormInputContainerTheme = Prettify<ComponentForm['input']>;

export const defaultFormInputContainerTheme: FormInputContainerTheme =
	componentForm.input;

export const formInputContainerStyles = ({
	fluid,
}: FormInputContainerDefaultProps<
	{ className?: unknown },
	unknown
>): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: var(--component-form-input-shared-container-gap);
		width: var(--component-form-input-shared-container-width);
		${
			!fluid &&
			css`
				max-width: var(--component-form-input-shared-container-max-width);
			`
		}
	`;
};

export const formInputLabelStyles = ({
	isDisabled,
	size,
}: {
	size: keyof Omit<FormInputContainerTheme, 'shared'>;
	isDisabled?: boolean;
}): SerializedStyles => {
	return css`
		color: var(--component-form-input-shared-label-color);
		${convertCSSTypographyToEmotionStringStyle(`--component-form-input-${size}-label`)}
		${
			isDisabled &&
			css`
				color: var(--component-form-input-shared-label-disabled-color);
			`
		}
	`;
};

export const formInputDescriptionStyles = ({
	isDisabled,
}: {
	isDisabled?: boolean;
}): SerializedStyles => {
	return css`
		color: var(--component-form-input-shared-description-color);
		${convertCSSTypographyToEmotionStringStyle(`--component-form-input-shared-description`)}
		${
			isDisabled &&
			css`
				color: var(--component-form-input-shared-description-disabled-color);
			`
		}
	`;
};
