/**
 * Modal component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/Modal.css),
 * you don't need to install these.
 */
export { Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/types';
export type { PartialModalTheme as ModalTheme } from './components/Modal/styles';
export { componentModal } from './styleD/build/typescript/component/modal';
export type { ComponentModal } from './styleD/build/typescript/component/modal';
