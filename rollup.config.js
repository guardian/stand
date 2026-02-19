import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-import-css';
import { nodeExternals } from 'rollup-plugin-node-externals';

// A Rollup plugin to handle '?inline' imports for CSS files
// This allows importing CSS files with '?inline' to get their content inlined,
// as we needed the ?inline query to get the css files working with vite storybook
const inlineCssQuery = () => ({
	name: 'inline-css-query',
	resolveId(source, importer) {
		if (source.endsWith('?inline')) {
			const withoutQuery = source.slice(0, -'?inline'.length);
			return this.resolve(withoutQuery, importer, { skipSelf: true });
		}
		return null;
	},
});

/**
 * @type {import("rollup").RollupOptions['input']}
 */
const input = {
	// root entry point - design tokens
	index: 'src/index.ts',
	// additional utility exports
	utils: 'src/utils.ts',
	// design system components
	avatar: 'src/avatar.ts',
	button: 'src/button.ts',
	'link-button': 'src/link-button.ts',
	typography: 'src/typography.ts',
	// editorial components
	byline: 'src/byline.ts',
	'tag-picker': 'src/tag-picker.ts',
	'user-menu': 'src/user-menu.ts',
};

/**
 * @returns {import("rollup").RollupOptions[]}
 */
export default [
	{
		input,
		output: {
			dir: 'dist',
			format: 'esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
		},
		plugins: [
			inlineCssQuery(),
			resolve(),
			nodeExternals(),
			css(),
			esbuild({
				jsx: 'automatic',
			}),
			typescript({
				tsconfig: './tsconfig.build.json',
				outDir: 'dist/types',
			}),
			copy({
				targets: [
					{
						src: 'src/styleD/build/css/',
						dest: 'dist/styleD/build/',
					},
					{
						src: 'src/fonts/OpenSans.css',
						dest: 'dist/fonts/',
					},
					{
						src: 'src/util/reset.css',
						dest: 'dist/util/css/',
					},
				],
			}),
		],
	},
	{
		input,
		output: {
			dir: 'dist',
			format: 'cjs',
			preserveModules: true,
			preserveModulesRoot: 'src',
			entryFileNames: '[name].cjs',
		},
		plugins: [
			inlineCssQuery(),
			resolve(),
			nodeExternals(),
			commonjs(),
			css(),
			esbuild({
				jsx: 'automatic',
			}),
		],
	},
];
