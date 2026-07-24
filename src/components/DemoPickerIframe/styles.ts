import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentDemoPickerIframe,
	type ComponentDemoPickerIframe,
} from '../../styleD/build/typescript/component/demoPickerIframe';
import type { DeepPartial, Prettify } from '../../util/types';

export type DemoPickerIframeTheme = Prettify<ComponentDemoPickerIframe>;
export type PartialDemoPickerIframeTheme = Prettify<
	DeepPartial<DemoPickerIframeTheme>
>;
export const defaultDemoPickerIframeTheme: DemoPickerIframeTheme =
	componentDemoPickerIframe;

export const demoPickerIframeStyles = (
	theme: DemoPickerIframeTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
