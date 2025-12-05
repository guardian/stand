import type { Components } from 'src/styleD/build/typescript/components';
import type { DeepPartial } from '../util';
import { userMenuHeadingStyles } from './styles';

interface UserMenuProps {
	theme?: DeepPartial<Components['userMenu']>;
}

export function UserMenu({ theme }: UserMenuProps) {
	return (
		<div>
			<header css={userMenuHeadingStyles(theme)}>user menu</header>
            <div>
                text
            </div>
		</div>
	);
}
