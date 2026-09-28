export const componentName = 'Toast';

export const componentTsx = /* javascript */ `import { Button } from '@guardian/stand/Button';
import { ToastRegion, toastQueue } from '@guardian/stand/Toast';

export const Component = () => (
	<>
		<Button
			onPress={() =>
				toastQueue.add(
					{
						level: 'success',
						title: 'Changes saved',
						subject: 'Your updates are now available.',
						showIcon: true,
					},
					{ timeout: 5000 },
				)
			}
		>
			Save
		</Button>
		<ToastRegion />
	</>
);
`;

export const componentCss = /* css */ `
@import '@guardian/stand/component/toast.css';

.stand-toast {
	display: var(--component-toast-shared-display);
	grid-template-columns: minmax(0, 1fr) auto;
	align-items: var(--component-toast-shared-align-items);
	gap: var(--component-toast-shared-gap);
	width: var(--component-toast-shared-width);
	max-width: var(--component-toast-shared-max-width);
	padding: var(--component-toast-shared-padding-top)
		var(--component-toast-shared-padding-right)
		var(--component-toast-shared-padding-bottom)
		var(--component-toast-shared-padding-left);
	border-left-width: var(--component-toast-shared-accent-border-width);
	border-left-style: var(--component-toast-shared-border-style);
	border-radius: var(--component-toast-shared-border-radius);
	box-shadow: var(--component-toast-shared-shadow);
	color: var(--component-toast-shared-color);
}

.stand-toast[data-level='error'] {
	border-left-color: var(--component-toast-error-accent-color);
	background: var(--component-toast-error-background-color);
}

.stand-toast[data-level='warning'] {
	border-left-color: var(--component-toast-warning-accent-color);
	background: var(--component-toast-warning-background-color);
}

.stand-toast[data-level='success'] {
	border-left-color: var(--component-toast-success-accent-color);
	background: var(--component-toast-success-background-color);
}

.stand-toast[data-level='information'] {
	border-left-color: var(--component-toast-information-accent-color);
	background: var(--component-toast-information-background-color);
}

.stand-toast-content {
	display: var(--component-toast-shared-content-display);
	flex-direction: var(--component-toast-shared-content-flex-direction);
	gap: var(--component-toast-shared-content-gap);
}

.stand-toast-title {
	font: var(--component-toast-shared-content-title-typography-font);
	letter-spacing: var(--component-toast-shared-content-title-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-toast-shared-content-title-typography-font-width);
}

.stand-toast-subject {
	font: var(--component-toast-shared-content-subject-typography-font);
	letter-spacing: var(--component-toast-shared-content-subject-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-toast-shared-content-subject-typography-font-width);
}
`;

export const componentHtml = /* html */ `<div class="stand-toast" data-level="success" role="status" aria-live="polite">
	<div class="stand-toast-content">
		<strong class="stand-toast-title">Changes saved</strong>
		<span class="stand-toast-subject">Your updates are now available.</span>
	</div>
	<button type="button" aria-label="Dismiss notification">Close</button>
</div>`;

export const componentJs = /* javascript */ `import { componentToast } from '@guardian/stand';

const toast = document.querySelector('.stand-toast');
const level = 'success';

toast.style.maxWidth = componentToast.shared.maxWidth;
toast.style.backgroundColor = componentToast[level].backgroundColor;
toast.style.borderLeftColor = componentToast[level].accentColor;

toast.querySelector('button').addEventListener('click', () => toast.remove());
`;
