/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*': 'prettier --ignore-unknown --write --cache',
	'package.json': 'sort-package-json',
};
