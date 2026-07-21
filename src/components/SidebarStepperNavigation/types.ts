import type { DefaultProps } from '../../util/types';
import type { SidebarStepperNavigationTheme } from './styles';

export const StepStatus = [
	'complete',
	'incomplete',
	'optional',
	'no-fields',
] as const;

export type StepStatus = (typeof StepStatus)[number];

export type StepNavStep = {
	id: string;
	label?: string;
	parentStepId?: string;
	canSkipTo?: boolean;
	canSkipFrom?: boolean;
	stepStatus?: StepStatus;
	stepVisible?: boolean;
};

export type StepNavConfig = {
	steps: StepNavStep[];
	isNonLinear: boolean;
};

export interface SidebarStepperNavigationProps extends DefaultProps<SidebarStepperNavigationTheme> {
	currentStepId?: string;
	stepNavConfig: StepNavConfig;
	onPress: (stepId: string) => void;
	stepNavTitle?: string;
}
