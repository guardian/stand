import { Checkbox as RACCheckbox } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import {
	checkboxLabelStyles,
	checkboxStyles,
	defaultCheckboxTheme,
} from './styles';
import type { CheckboxProps } from './types';

export function Checkbox({
	children,
	size = 'md',
	isIndeterminate = false,
	theme = {},
	cssOverrides,
	...props
}: CheckboxProps) {
	const mergedTheme = mergeDeep(defaultCheckboxTheme, theme);

	return (
		<RACCheckbox
			css={[
				checkboxStyles(mergedTheme, {
					size,
					isIndeterminate,
				}),
				cssOverrides,
			]}
			{...props}
		>
			<>
				<div className="checkbox-indicator">
					{isIndeterminate ? (
						<svg
							viewBox="0 0 12 2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							key="indeterminate"
						>
							<path d="M12 2H0V0H12V2Z" />
						</svg>
					) : (
						<svg
							viewBox="0 0 20 20"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							key="check"
						>
							<path d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z" />
						</svg>
					)}
				</div>
			</>
			<span css={checkboxLabelStyles(mergedTheme)}>{children}</span>
		</RACCheckbox>
	);
}
