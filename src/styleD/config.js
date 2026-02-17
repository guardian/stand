/* eslint-disable import/no-default-export -- style dictionary way */

import { camelCase, pascalCase } from 'change-case';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';

/**
 * @name fileList
 *
 * List of token files to generate based on the component and group
 * which correspond to the 1st and 2nd level of the token JSON structure.
 *
 * When adding new tokens to the design system, make sure to add the corresponding
 * entry here so that Style Dictionary generates the appropriate output files.
 *
 * @type {{group: string, component: string}[]}
 */
const fileList = [
	/** design system base/foundations tokens */
	{
		group: 'base',
		component: 'colors',
	},
	{
		group: 'base',
		component: 'typography',
	},
	{
		group: 'base',
		component: 'spacing',
	},
	{
		group: 'base',
		component: 'radius',
	},
	{
		group: 'base',
		component: 'sizing',
	},
	/** design system semantic tokens */
	{
		group: 'semantic',
		component: 'colors',
	},
	{
		group: 'semantic',
		component: 'typography',
	},
	{
		group: 'semantic',
		component: 'sizing',
	},
	/** design system components */
	{
		group: 'component',
		component: 'avatar',
	},
	{
		group: 'component',
		component: 'button',
	},
	/** editorial components */
	{
		group: 'component',
		component: 'byline',
	},
	{
		group: 'component',
		component: 'tagAutocomplete',
	},
	{
		group: 'component',
		component: 'tagTable',
	},
];

/**
 * @param {{group: string, component: string}[]} fileList
 * @param {string | import('style-dictionary').File['format']} format
 * @param {string} fileExtension
 * @returns {import('style-dictionary').File[]}
 */
const generateSplitTokenConfig = (fileList, format, fileExtension) => {
	return fileList.map(({ component, group }) => {
		return {
			destination: `${group}/${component}.${fileExtension}`,
			format,
			filter: (token) => {
				return token.path[0] === group && token.path[1] === component;
			},
		};
	});
};

/**
 * @type {import('style-dictionary').Config}
 */
export default {
	source: ['tokens/**/*.json'],
	preprocessors: ['log-dictionary'],
	hooks: {
		formats: {
			'typescript/const': async ({ dictionary, file }) => {
				const [group, component] = file.destination.split('/');
				const name = component.replace('.ts', '');

				const { tokens } = dictionary;
				const header = await fileHeader({ file });
				const minified = minifyDictionary(tokens, true);
				const module = JSON.stringify(minified[group][name], null, 2);

				const variableName = camelCase(`${group}-${name}`);
				const typeName = pascalCase(`${group} ${name}`);

				return `${header}export const ${variableName} = ${module}${group === 'base' ? ' as const' : ''};\nexport type ${typeName} = typeof ${variableName};\n`;
			},
		},
	},
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'build/css/',
			files: generateSplitTokenConfig(fileList, 'css/variables', 'css'),
		},
		typescript: {
			transforms: [
				'attribute/cti',
				'name/camel',
				'color/hex',
				'border/css/shorthand',
				'typography/css/shorthand',
				'border/css/shorthand',
			],
			buildPath: 'build/typescript/',
			files: generateSplitTokenConfig(fileList, 'typescript/const', 'ts'),
		},
	},
};
