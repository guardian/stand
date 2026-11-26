import type { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';

export type PartialUserMenuTheme = Prettify<
	DeepPartial<typeof component.userMenu>
>;
