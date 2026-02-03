/* eslint-disable import/no-default-export -- css uses default exports */
declare module '*.css' {
	const css: string;
	export default css;
}

declare module '*.css?inline' {
	const css: string;
	export default css;
}
