import type { DeepPartial } from './util';

type BylineTheme = {
	editor: {
		invisibles: {
			color: string;
		};
		color: string;
		border: string;
		background: string;
		chip: {
			color: string;
			border: string;
			padding: string;
			borderRadius: string;
			taggedBackground: string;
			untagged: {
				color: string;
			};
			selected: {
				border: string;
			};
		};
		lineHeight: string;
		placeholder: {
			color: string;
		};
        readOnlyBackground: string;
	};
	dropdown: {
		background: string;
		border: string;
		maxHeight: string;
		li: {
			color: string;
			borderBottom: string;
			selected: {
				background: string;
				color: string;
			};
		};
	};
};

export type PartialBylineTheme = DeepPartial<BylineTheme>;
