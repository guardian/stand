import { readdirSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { defineConfig, type UserConfigExport } from 'tsdown';

const entry = Object.fromEntries(
	readdirSync('src')
		.filter((file) => file.endsWith('.ts'))
		.map((file) => [basename(file, extname(file)), `src/${file}`]),
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
	copy: [
		{ from: 'src/styleD/build/css/', to: 'dist/styleD/build/' },
		{ from: 'src/fonts/*', to: 'dist/fonts/' },
		{ from: 'src/util/reset.css', to: 'dist/util/css/' },
	],
}) as UserConfigExport;
