import { readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type UserConfigExport } from 'tsdown';

const srcDir = join(fileURLToPath(import.meta.url), '..', 'src');

const entry = Object.fromEntries(
	readdirSync(srcDir)
		.filter((file) => file.endsWith('.ts'))
		.map((file) => [basename(file, extname(file)), join(srcDir, file)]),
);

console.log('Entry points:', entry);

export default defineConfig({
	entry,
	format: ['esm', 'cjs'],
	outDir: 'dist',
	fixedExtension: false,
	unbundle: true,
	clean: true,
	dts: true,
	publint: true,
	attw: {
		profile: 'strict',
		excludeEntrypoints: [/\.css$/],
	},
	copy: [
		{ from: join(srcDir, 'styleD/build/css/'), to: 'dist/styleD/build/' },
		{ from: join(srcDir, 'fonts/*'), to: 'dist/fonts/' },
		{ from: join(srcDir, 'util/reset.css'), to: 'dist/util/css/' },
	],
}) as UserConfigExport;
