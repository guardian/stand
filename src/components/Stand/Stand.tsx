import { Global } from '@emotion/react';
import { type ReactNode } from 'react';
import standStyles from '../../styleD/build/css/stand.css?inline';

export const Stand = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Global styles={standStyles} />
			{children}
		</>
	);
};
