import type { CSSProperties } from 'react';

export type Option = {
	id: string;
	label?: string;
	description?: string;
	labelStyle?: CSSProperties;
	buttonStyle?: CSSProperties;
	isDefault?: boolean;
};
