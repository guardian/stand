/* FOR STORYBOOK USE ONLY - don't use svgs directly in the component library */
/* eslint-disable import/no-default-export -- svg uses default exports */
declare module '*.svg?react' {
	import type { FC, SVGProps } from 'react';

	export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
