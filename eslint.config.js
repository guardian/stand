import guardian from '@guardian/eslint-config';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// eslint-disable-next-line import/no-unresolved -- no idea why eslint cannot resolve this
import storybook from 'eslint-plugin-storybook';

export default [
	{
		ignores: ['dist', 'node_modules', 'playwright'],
	},
	...guardian.configs.recommended,
	...guardian.configs.jest,
	...guardian.configs.react,
	...storybook.configs['flat/recommended'],
];
