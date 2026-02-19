import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [{
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    }],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
    async viteFinal(config) {
        const { mergeConfig } = await import('vite');
        return mergeConfig(config, {
            plugins: [svgr()],
        });
    },
};

export default config;
