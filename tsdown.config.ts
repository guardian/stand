import { defineConfig, type UserConfigExport } from 'tsdown';

export default defineConfig({
	entry: {
		// root entry point - design tokens
		index: 'src/index.ts',
		// additional utility exports
		utils: 'src/utils.ts',
		// design system components
		avatar: 'src/avatar.ts',
		avatarLink: 'src/avatar-link.ts',
		avatarButton: 'src/avatar-button.ts',
		button: 'src/button.ts',
		'link-button': 'src/link-button.ts',
		'icon-button': 'src/icon-button.ts',
		'icon-link-button': 'src/icon-link-button.ts',
		typography: 'src/typography.ts',
		icon: 'src/icon.ts',
		favicon: 'src/favicon.ts',
		'date-picker': 'src/date-picker.ts',
		layout: 'src/layout.ts',
		link: 'src/link.ts',
		grid: 'src/grid.ts',
		'alert-banner': 'src/alert-banner.ts',
		'radio-group': 'src/radio-group.ts',
		checkbox: 'src/checkbox.ts',
		'text-area': 'src/text-area.ts',
		form: 'src/form.ts',
		'text-input': 'src/text-input.ts',
		'inline-message': 'src/inline-message.ts',
		select: 'src/select.ts',
		menu: 'src/menu.ts',
		TopBar: 'src/TopBar.ts',
		// editorial components
		byline: 'src/byline.ts',
		'tag-picker': 'src/tag-picker.ts',
		'user-menu': 'src/user-menu.ts',
		'intended-audience-signifier': 'src/intended-audience-signifier.ts',
	},
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
