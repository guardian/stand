/* eslint-disable import/no-default-export -- style dictionary way */

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { camelCase, pascalCase } from 'change-case';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';

/**
 * @name fileList
 *
 * Automatically generated from the top two levels of each token JSON file
 * under the `tokens/` directory. Each unique `{ group, component }` pair
 * found across all files is included exactly once.
 *
 * @type {{group: string, component: string}[]}
 */
const tokenDir = fileURLToPath(new URL('./tokens', import.meta.url));
const seen = new Set();
const fileList = /** @type {{group: string, component: string}[]} */ ([]);

for (const rel of readdirSync(tokenDir, { recursive: true })) {
	if (!String(rel).endsWith('.json')) {
		continue;
	}
	const json = JSON.parse(readFileSync(join(tokenDir, String(rel)), 'utf8'));
	for (const [group, components] of Object.entries(json)) {
		for (const component of Object.keys(/** @type {object} */ (components))) {
			const key = `${group}/${component}`;
			if (!seen.has(key)) {
				seen.add(key);
				fileList.push({ group, component });
			}
		}
	}
}

console.log('Discovered token groups and components:', fileList);

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
				'shadow/css/shorthand',
			],
			buildPath: 'build/typescript/',
			files: generateSplitTokenConfig(fileList, 'typescript/const', 'ts'),
		},
	},
};
