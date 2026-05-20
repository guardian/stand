/**
 * DatePicker component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 * - `@internationalized/date`
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/datePicker.css),
 * you don't need to install these.
 */
export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/types';
export type { DatePickerTheme } from './components/DatePicker/styles';
export { componentDatePicker } from './styleD/build/typescript/component/datePicker';
export type { ComponentDatePicker } from './styleD/build/typescript/component/datePicker';
