import type { PathLike } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { build, defineConfig, parse } from '@terrazzo/parser';
import css from '@terrazzo/plugin-css';
import cssInJs from '@terrazzo/plugin-css-in-js';

const config: ReturnType<typeof defineConfig> = defineConfig(
	{
		tokens: ['./stand.resolver.json'],
		outDir: './build',
		plugins: [
			css({
				filename: 'stand.css',
			}),
			cssInJs({
				filename: 'stand.js',
			}),
		],
		lint: {
			build: { enabled: true },
			rules: {
				'core/valid-color': 'error',
				// 'core/valid-dimension': 'error',
				'core/valid-font-family': 'error',
				'core/valid-font-weight': 'error',
				'core/valid-duration': 'error',
				'core/valid-cubic-bezier': 'error',
				'core/valid-number': 'error',
				'core/valid-link': 'error',
				'core/valid-boolean': 'error',
				'core/valid-string': 'error',
				// 'core/valid-stroke-style': 'error',
				'core/valid-border': 'error',
				'core/valid-transition': 'error',
				'core/valid-shadow': 'error',
				'core/valid-gradient': 'error',
				'core/valid-typography': 'error',
				// 'core/consistent-naming': 'warn',
				'core/required-typography-properties': 'error',
			},
		},
	},
	{ cwd: new URL('./', import.meta.url) },
);

/**
 * Terrazzo does not apply transforms to tokens when using a resolver [1] so we
 * transform the JSON directly as the token files are loaded. Tokens defined in
 * Tokens Studio with a type of `text` are ignored by Terrazzo as it's not a
 * recognised type. These are converted to Terrazzo's own custom `string` type
 * so they are processed and included in the generated output. In the longer
 * term we should update the type of these tokens or remove them as appropriate.
 *
 * [1] https://github.com/terrazzoapp/terrazzo/issues/653
 */
const loadAndTransformSource = async (filename: PathLike) =>
	JSON.stringify(
		JSON.parse(await readFile(filename, 'utf8'), (key, value) =>
			key === '$type' && value === 'text' ? 'string' : (value as unknown),
		),
		undefined,
		2,
	);

const { tokens, sources, resolver } = await parse(
	await Promise.all(
		config.tokens.map(async (filename) => ({
			filename,
			src: await loadAndTransformSource(filename),
		})),
	),
	{ config, req: loadAndTransformSource },
);
const { outputFiles } = await build(tokens, { config, sources, resolver });

await mkdir(config.outDir, { recursive: true });
await Promise.all(
	outputFiles.map(({ filename, contents }) =>
		writeFile(new URL(filename, config.outDir), contents),
	),
);
