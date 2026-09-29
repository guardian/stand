/**
 * Toast component entry point
 *
 * Peer dependencies required to use this component:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/toast.css),
 * you don't need to install these.
 */
export {
	Toast,
	ToastQueue,
	ToastRegion,
	toastQueue,
} from './components/Toast/Toast';
export type {
	ToastContent,
	ToastLevel,
	ToastProps,
	ToastRegionProps,
} from './components/Toast/types';
export type { PartialToastTheme as ToastTheme } from './components/Toast/styles';
export { componentToast } from './styleD/build/typescript/component/toast';
export type { ComponentToast } from './styleD/build/typescript/component/toast';
