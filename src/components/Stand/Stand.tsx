import { Global } from '@emotion/react';
import { type ReactNode } from 'react';
import standStyles from '../../terrazzo/build/stand.css?inline';
import type { Mode, Theme } from '../../terrazzo/themes';

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
		<div data-stand-theme={theme} data-stand-mode={mode}>
			<Global styles={standStyles} />
			{children}
		</div>
	);
};
