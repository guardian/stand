import type { ComponentPropsWithRef, ComponentType } from 'react';
import { FieldError, Label } from 'react-aria-components';
import { InlineMessage } from '../../InlineMessage';
import {
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
	fluid = false,
	label,
	renderLabel,
	description,
	error,
	isDisabled = false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	formInputContainerTheme,
	dangerouslyOverrideCss,
	children,
	...props
}: FormInputContainerDefaultProps<ComponentPropsWithRef<C>> & {
	as: C;
}) {
	if (!ALLOWED_FORM_CONTAINERS.includes(Component)) {
		return null;
	}

	const Tag = Component as ComponentType<AllowedContainerProps>;

	return (
		<Tag
			css={[formInputContainerStyles({ fluid }), dangerouslyOverrideCss]}
			isDisabled={isDisabled}
			{...(props as AllowedContainerProps)}
		>
			{label && (
				<Label css={formInputLabelStyles({ size, isDisabled })}>
					{renderLabel ? renderLabel(label) : label}
				</Label>
			)}
			{description && (
				<div css={formInputDescriptionStyles({ isDisabled })}>
					{description}
				</div>
			)}
			{children}
			{error && (
				<FieldError>
					<InlineMessage level="error" slot="errorMessage">
						{error}
					</InlineMessage>
				</FieldError>
			)}
		</Tag>
	);
}
