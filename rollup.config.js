import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import { nodeExternals } from 'rollup-plugin-node-externals';

/**
 * @type {import("rollup").RollupOptions['input']}
 */
const input = {
	index: 'src/index.ts',
	byline: 'src/byline.ts',
	'tag-picker': 'src/tag-picker.ts',
	utils: 'src/utils.ts',
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
			resolve(),
			nodeExternals(),
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
			resolve(),
			nodeExternals(),
			commonjs(),
			esbuild({
				jsx: 'automatic',
			}),
		],
	},
];
