import { fileHeader, minifyDictionary } from 'style-dictionary/utils';

// eslint-disable-next-line import/no-default-export -- style dictionary way
export default {
	source: ['tokens/**/*.json'],
	hooks: {
		formats: {
			'typescript/const': async ({ dictionary, file }) => {
				const { tokens } = dictionary;
				const header = await fileHeader({ file });
				const module = JSON.stringify(
					minifyDictionary(tokens, true),
					null,
					2,
				);
				return `${header}export const tokens = ${module} as const;\n`;
			},
		},
	},
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'build/css/',
			files: [
				{
					destination: '_variables.css',
					format: 'css/variables',
				},
			],
		},
		typescript: {
			transforms: ['attribute/cti', 'name/camel', 'color/hex'],
			buildPath: 'build/typescript',
			files: [
				{
					destination: 'tokens.ts',
					format: 'typescript/const',
				},
			],
		},
	},
};
