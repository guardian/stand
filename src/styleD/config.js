/* eslint-disable import/no-default-export -- style dictionary way */

import { fileHeader, minifyDictionary } from 'style-dictionary/utils';

/**
 * @param {string[]} tokenGroups
 * @param {string | import('style-dictionary').File['format']} format
 * @param {string} fileExtension
 * @returns {import('style-dictionary').File[]}
 */
const generateSplitTokenConfig = (tokenGroups, format, fileExtension) => {
	return tokenGroups.map((component) => ({
		destination: `${component}.${fileExtension}`,
		format: format,
		filter: (token) => token.path[0] === component,
	}));
};

/**
 * @type {string[]}
 */
const tokenGroups = ['base', 'semantic', 'components'];

/**
 * @type {import('style-dictionary').Config}
 */
export default {
	source: ['tokens/**/*.json'],
	hooks: {
		formats: {
			'typescript/const': async ({ dictionary, file }) => {
				const name = file.destination.replace('.ts', '');

				const { tokens } = dictionary;
				const header = await fileHeader({ file });
				const minified = minifyDictionary(tokens, true);
				const module = JSON.stringify(minified[name], null, 2);
				return `${header}export const ${name} = ${module}${name === 'base' ? ' as const' : ''};\nexport type ${`${name[0].toUpperCase()}${name.slice(1)}`} = typeof ${name};\n`;
			},
		},
	},
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'build/css/',
			files: generateSplitTokenConfig(
				tokenGroups,
				'css/variables',
				'css',
			),
		},
		typescript: {
			transforms: ['attribute/cti', 'name/camel', 'color/hex'],
			buildPath: 'build/typescript/',
			files: generateSplitTokenConfig(
				tokenGroups,
				'typescript/const',
				'ts',
			),
		},
	},
};
