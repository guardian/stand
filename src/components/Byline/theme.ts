import type { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';

export type PartialBylineTheme = Prettify<DeepPartial<typeof component.byline>>;
