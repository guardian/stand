import { defineConfig } from '@terrazzo/cli';

/**
 * We only use Terrazzo for linting design tokens in this repository.
 * For token generation, we use Style Dictionary (see src/styleD/config.js).
 *
 * @see https://terrazzo.app/docs/cli/configuration
 */

// eslint-disable-next-line import/no-default-export -- @terrazzo/cli requires a default export
export default defineConfig({
	tokens: [
		'./src/styleD/tokens/foundations/figma.json',
		'./src/styleD/tokens/foundations/local.json',
		'./src/styleD/tokens/components/byline.json',
		'./src/styleD/tokens/components/tagAutocomplete.json',
		'./src/styleD/tokens/components/tagTable.json',
	],
	lint: {
		/** @see https://terrazzo.app/docs/cli/lint */
		rules: {
			'core/required-typography-properties': [
				'error',
				{
					properties: [
						'fontFamily',
						'fontSize',
						'fontStyle',
						'fontWeight',
						'letterSpacing',
						'lineHeight',
					],
				},
			],
		},
	},
});
