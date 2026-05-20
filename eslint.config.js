import guardian from '@guardian/eslint-config';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import checkFile from 'eslint-plugin-check-file';
import storybook from 'eslint-plugin-storybook';

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
];
