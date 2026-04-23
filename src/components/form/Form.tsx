import type { ComponentPropsWithRef, ComponentType } from 'react';
import { FieldError, Label } from 'react-aria-components';
import { InlineMessage } from '../../inline-message';
import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultFormInputContainerTheme,
	formInputContainerStyles,
	formInputDescriptionStyles,
	formInputLabelStyles,
} from './styles';
import { ALLOWED_FORM_CONTAINERS } from './types';
import type { AllowedContainer, FormInputContainerDefaultProps } from './types';

type AllowedContainerProps = ComponentPropsWithRef<
	(typeof ALLOWED_FORM_CONTAINERS)[number]
>;

export function FormInputContainer<C extends AllowedContainer>({
	as: Component,
	size = 'md',
	label,
	description,
	error,
	isDisabled = false,
	theme = {},
	formInputContainerTheme,
	cssOverrides,
	children,
	...props
}: FormInputContainerDefaultProps<ComponentPropsWithRef<C>> & {
	as: C;
}) {
	if (!ALLOWED_FORM_CONTAINERS.includes(Component)) {
		return null;
	}

	const mergedTheme = mergeDeep(
		mergeDeep(defaultFormInputContainerTheme, theme),
		formInputContainerTheme ?? {},
	);
	const Tag = Component as ComponentType<AllowedContainerProps>;

	return (
		<Tag
			css={[formInputContainerStyles(mergedTheme), cssOverrides]}
			isDisabled={isDisabled}
			{...(props as AllowedContainerProps)}
		>
			{label && (
				<Label css={formInputLabelStyles(mergedTheme, { size, isDisabled })}>
					{label}
				</Label>
			)}
			{description && (
				<div css={formInputDescriptionStyles(mergedTheme, { isDisabled })}>
					{description}
				</div>
			)}
			{children}
			{error && (
				<FieldError>
					<InlineMessage level="error">{error}</InlineMessage>
				</FieldError>
			)}
		</Tag>
	);
}
