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
	Avatar: 'src/Avatar.ts',
	AvatarLink: 'src/AvatarLink.ts',
	AvatarButton: 'src/AvatarButton.ts',
	Button: 'src/Button.ts',
	LinkButton: 'src/LinkButton.ts',
	IconButton: 'src/IconButton.ts',
	IconLinkButton: 'src/IconLinkButton.ts',
	Typography: 'src/Typography.ts',
	Icon: 'src/Icon.ts',
	Favicon: 'src/Favicon.ts',
	DatePicker: 'src/DatePicker.ts',
	Layout: 'src/Layout.ts',
	Link: 'src/Link.ts',
	Grid: 'src/Grid.ts',
	AlertBanner: 'src/AlertBanner.ts',
	RadioGroup: 'src/RadioGroup.ts',
	Checkbox: 'src/Checkbox.ts',
	TextArea: 'src/TextArea.ts',
	Form: 'src/Form.ts',
	TextInput: 'src/TextInput.ts',
	InlineMessage: 'src/InlineMessage.ts',
	Select: 'src/Select.ts',
	Menu: 'src/Menu.ts',
	TopBar: 'src/TopBar.ts',
	// editorial components
	Byline: 'src/Byline.ts',
	TagPicker: 'src/TagPicker.ts',
	UserMenu: 'src/UserMenu.ts',
	IntendedAudienceSignifier: 'src/IntendedAudienceSignifier.ts',
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
						src: 'src/fonts/*',
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
