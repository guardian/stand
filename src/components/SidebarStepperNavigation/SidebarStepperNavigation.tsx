import { css } from '@emotion/react';
import { useState } from 'react';
import { Button } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { useId } from '../../util/useId';
import { Icon } from '../Icon/Icon';
import type { IconProps } from '../Icon/types';
import { Typography } from '../Typography/Typography';
import {
	buttonStyleReset,
	defaultSidebarStepperNavigationTheme,
	listStyles,
	mobileToggleStyles,
	navigationStyles,
	type SidebarStepperNavigationTheme,
	statusRowStyles,
	stepButtonStyles,
	stepContentStyles,
	stepNumberStyles,
} from './styles';
import type { SidebarStepperNavigationProps, StepNavStep } from './types';
import type { StepStatus } from './types';

type StandIconSymbol = IconProps['symbol'];

type StepProps = {
	isCurrent: boolean;
	stepStatus?: StepStatus;
	stepNumber: number;
	onPress: () => void;
	ariaLabel: string;
	isDisabled: boolean;
	description: string;
	theme: SidebarStepperNavigationTheme;
};

type StatusRowProps = {
	label: string;
	icon: StandIconSymbol;
	iconColor: string;
	isDisabled: boolean;
};

function StatusRow({
	label,
	icon,
	iconColor,
	isDisabled,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme,
}: StatusRowProps & { theme: SidebarStepperNavigationTheme }) {
	return (
		<div css={statusRowStyles()}>
			<Typography
				variant="bodySm"
				element="span"
				theme={{
					color: isDisabled
						? 'var(--component-sidebar-stepper-navigation-status-row-shared-text-disabled-color)'
						: 'var(--component-sidebar-stepper-navigation-status-row-shared-text-color)',
				}}
			>
				{label}
			</Typography>
			<Icon
				fill={
					isDisabled
						? 'var(--component-sidebar-stepper-navigation-status-row-shared-text-disabled-color)'
						: iconColor
				}
				size="sm"
				theme={{
					sm: {
						size: 'var(--component-sidebar-stepper-navigation-status-row-shared-icon-size)',
					},
				}}
				symbol={icon}
			/>
		</div>
	);
}

function CompletionCaption({
	status,
	isDisabled,
	theme,
}: {
	status: StepStatus;
	isDisabled: boolean;
	theme: SidebarStepperNavigationTheme;
}) {
	switch (status) {
		case 'no-fields':
			return null;
		case 'optional':
			return (
				<StatusRow
					label="Optional"
					isDisabled={isDisabled}
					iconColor={
						'var(--component-sidebar-stepper-navigation-status-row-shared-icon-optional-color)'
					}
					icon="circle"
					theme={theme}
				/>
			);
		case 'complete':
			return (
				<StatusRow
					label="Complete"
					isDisabled={isDisabled}
					iconColor={
						'var(--component-sidebar-stepper-navigation-status-row-shared-icon-complete-color)'
					}
					icon="check_circle"
					theme={theme}
				/>
			);
		case 'incomplete':
			return (
				<StatusRow
					label="Incomplete"
					isDisabled={isDisabled}
					iconColor={
						'var(--component-sidebar-stepper-navigation-status-row-shared-icon-incomplete-color)'
					}
					icon="warning"
					theme={theme}
				/>
			);
	}
}

function buildStepAriaLabel(
	description: string,
	isCurrent: boolean,
	status?: StepStatus,
): string {
	const statusDescription = (() => {
		switch (status) {
			case 'complete':
				return 'complete';
			case 'incomplete':
				return 'incomplete';
			case 'optional':
				return 'optional';
			default:
				return undefined;
		}
	})();

	return [
		description,
		statusDescription,
		isCurrent ? 'current step' : undefined,
	]
		.filter(Boolean)
		.join(', ');
}

function getStepNumberColor(
	isHovered: boolean,
	isCurrent: boolean,
	isDisabled: boolean,
) {
	if (isHovered || isCurrent) {
		return 'var(--component-sidebar-stepper-navigation-step-shared-text-inverse-color)';
	}

	if (isDisabled) {
		return 'var(--component-sidebar-stepper-navigation-step-shared-text-disabled-color)';
	}

	return 'var(--component-sidebar-stepper-navigation-step-shared-text-color)';
}

function StepNumber({
	stepNumber,
	isHovered,
	isCurrent,
	isDisabled,
}: {
	stepNumber: number;
	isHovered: boolean;
	isCurrent: boolean;
	isDisabled: boolean;
}) {
	return (
		<Typography
			element="div"
			// TODO: Use theme instead of CSS overrides
			dangerouslyOverrideCss={[
				stepNumberStyles(isHovered, isCurrent),
				css`
					color: ${getStepNumberColor(isHovered, isCurrent, isDisabled)};
				`,
			]}
		>
			{stepNumber}
		</Typography>
	);
}

function Step({
	isDisabled,
	isCurrent,
	stepNumber,
	stepStatus,
	onPress,
	ariaLabel,
	description,
	theme,
}: StepProps) {
	const descriptionTypographyColor =
		isCurrent || !isDisabled
			? 'var(--component-sidebar-stepper-navigation-step-shared-text-color)'
			: 'var(--component-sidebar-stepper-navigation-step-shared-text-disabled-color)';

	return (
		<Button
			css={[buttonStyleReset, stepButtonStyles(isCurrent, isDisabled)]}
			isDisabled={isDisabled}
			aria-label={ariaLabel}
			aria-current={isCurrent ? 'step' : undefined}
			onPress={onPress}
		>
			{({ isHovered }) => (
				<>
					<StepNumber
						stepNumber={stepNumber}
						isHovered={isHovered}
						isCurrent={isCurrent}
						isDisabled={isDisabled}
					/>
					<div css={stepContentStyles()}>
						<Typography
							element="div"
							theme={{ color: descriptionTypographyColor }}
							variant="headingMd"
						>
							{description}
						</Typography>
						{stepStatus !== undefined && (
							<CompletionCaption
								status={stepStatus}
								isDisabled={isDisabled && !isCurrent}
								theme={theme}
							/>
						)}
					</div>
				</>
			)}
		</Button>
	);
}

export function SidebarStepperNavigation({
	currentStepId,
	stepNavConfig,
	onPress,
	stepNavTitle = 'Steps',
	theme = {},
	dangerouslyOverrideCss,
	className,
}: SidebarStepperNavigationProps) {
	const mergedTheme = mergeDeep(defaultSidebarStepperNavigationTheme, theme);
	const [isOpen, setIsOpen] = useState(false);
	const stepNavId = useId('sidebar-stepper-navigation');
	const currentStep = stepNavConfig.steps.find(
		(step) => step.id === currentStepId,
	);
	const visibleSteps = stepNavConfig.steps.filter(
		(step) => !step.parentStepId && step.stepVisible !== false,
	);

	const isCurrent = (step: StepNavStep) =>
		step.id === currentStep?.id || step.id === currentStep?.parentStepId;
	const canNavigateTo = (step: StepNavStep) =>
		Boolean(
			!currentStep ||
			(currentStep.canSkipFrom &&
				stepNavConfig.isNonLinear &&
				step.canSkipTo &&
				!isCurrent(step)),
		);
	const currentStepLabel = currentStep?.label ?? currentStep?.id;
	const mobileToggleLabel = currentStepLabel
		? `${stepNavTitle} / ${currentStepLabel}`
		: stepNavTitle;

	return (
		<>
			<Button
				onPress={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls={stepNavId}
				css={[buttonStyleReset, mobileToggleStyles()]}
			>
				<Typography element="div" variant="bodyBoldSm">
					{mobileToggleLabel}
				</Typography>
				<Icon
					size="md"
					symbol={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
				/>
			</Button>
			<nav
				css={[navigationStyles(isOpen), dangerouslyOverrideCss]}
				aria-label={stepNavTitle}
				id={stepNavId}
				className={className}
			>
				<ol css={listStyles}>
					{visibleSteps.map((step, index) => {
						const stepStatus = step.stepStatus;
						const description = step.label ?? step.id;
						const stepIsCurrent = isCurrent(step);
						const stepIsDisabled = !stepIsCurrent && !canNavigateTo(step);
						const onStepPress = () => {
							if (!stepIsDisabled && !stepIsCurrent) {
								onPress(step.id);
							}
						};
						return (
							<li key={step.id}>
								<Step
									isDisabled={stepIsDisabled}
									onPress={onStepPress}
									stepNumber={index + 1}
									isCurrent={stepIsCurrent}
									stepStatus={stepStatus}
									theme={mergedTheme}
									ariaLabel={buildStepAriaLabel(
										description,
										stepIsCurrent,
										stepStatus,
									)}
									description={description}
								/>
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}
