import { Global } from '@emotion/react';
import { type ReactNode } from 'react';
import standStyles from '../../studio/stand.css?inline';

type Theme =
	'blue' | 'coolPurple' | 'cyan' | 'orange' | 'teal' | 'warmPurple' | 'magenta';
type Mode = 'light' | 'dark';

export const Stand = ({
	theme,
	mode,
	children,
}: {
	theme: Theme;
	mode: Mode;
	children: ReactNode;
}) => {
	return (
		<div data-color-theme={theme} data-mode={mode}>
			<Global styles={standStyles} />
			{children}
		</div>
	);
};
