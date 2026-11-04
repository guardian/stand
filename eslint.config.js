import guardian from '@guardian/eslint-config';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import checkFile from 'eslint-plugin-check-file';
import storybook from 'eslint-plugin-storybook';
import { designTokens } from './scripts/eslint/designTokens.js';

export default [
	{
		ignores: [
			'dist',
			'node_modules',
			'playwright',
			'.storybook',
			'storybook-static',
		],
	},
	...guardian.configs.recommended,
	...guardian.configs.jest,
	...guardian.configs.react,
	...storybook.configs['flat/recommended'],
	{
		files: ['src/**/*.{ts,tsx}'],
		plugins: {
			'check-file': checkFile,
		},
		rules: {
			'check-file/folder-naming-convention': [
				'error',
				{
					'src/components/*/': 'PASCAL_CASE',
				},
				{
					errorMessage:
						'The folder "{{ target }}" does not match the "{{ pattern }}" pattern.',
				},
			],
			'check-file/filename-naming-convention': [
				'error',
				{
					'src/**/*.tsx': 'PASCAL_CASE',
					'src/*/**/*.ts': 'CAMEL_CASE',
					'src/!(index|utils).ts': 'PASCAL_CASE',
				},
				{
					ignoreMiddleExtensions: true,
					errorMessage:
						'The file "{{ target }}" does not match the "{{ pattern }}" pattern.',
				},
			],
		},
	},
	{
		files: ['src/components/**/*.{ts,tsx}'],
		ignores: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}', '**/sandbox.ts'],
		plugins: {
			'design-tokens': designTokens,
		},
		rules: {
			'design-tokens/no-hardcoded-colours': 'error',
			'design-tokens/no-hardcoded-spacing': 'error',
		},
	},
	{
		files: ['*.config.ts', '*.config.js', '*.config.mjs'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
];
