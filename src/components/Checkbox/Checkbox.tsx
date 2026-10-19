import { Global } from '@emotion/react';
import { Checkbox as RACCheckbox } from 'react-aria-components';
import checkboxCss from '../../styleD/build/css/component/checkbox.css?inline';
import { checkboxLabelStyles, checkboxStyles } from './styles';
import type { CheckboxProps } from './types';

export function Checkbox({
	children,
	size = 'md',
	isIndeterminate = false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	cssOverrides,
	...props
}: CheckboxProps) {
	return (
		<>
			<Global styles={checkboxCss} />
			<RACCheckbox
				css={[
					checkboxStyles({
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
				<span css={checkboxLabelStyles}>{children}</span>
			</RACCheckbox>
		</>
	);
}
