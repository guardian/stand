/**
 * @type {import('lint-staged').Configuration}
 */
// eslint-disable-next-line import/no-default-export -- lint-staged configs do this
export default {
	'*': 'prettier --ignore-unknown --write --cache',
	'package.json': 'sort-package-json',
};
