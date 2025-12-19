import type { SerializedStyles } from '@emotion/react';

export type Option = {
	id: string;
	label?: string;
	description?: string;
	labelCss?: SerializedStyles;
	buttonCss?: SerializedStyles;
	isDefault?: boolean;
};
