import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import { nodeExternals } from 'rollup-plugin-node-externals';

/**
 * @returns {import("rollup").RollupOptions[]}
 */
export default [
	{
		input: 'src/index.ts',
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
						dest: 'dist/styleD/build/css/',
					},
				],
			}),
		],
	},
	{
		input: 'src/index.ts',
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
