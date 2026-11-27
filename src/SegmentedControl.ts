/**
 * SegmentedControl component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/segmentedControl.css),
 * you don't need to install these.
 */
export {
	SegmentedControl,
	SegmentedControlItem,
} from './components/SegmentedControl/SegmentedControl';
export type {
	SegmentedControlProps,
	SegmentedControlItemProps,
} from './components/SegmentedControl/types';
export type { PartialSegmentedControlTheme as SegmentedControlTheme } from './components/SegmentedControl/styles';
export { componentSegmentedControl } from './styleD/build/typescript/component/segmentedControl';
export type { ComponentSegmentedControl } from './styleD/build/typescript/component/segmentedControl';
