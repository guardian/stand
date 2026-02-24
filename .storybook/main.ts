import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
	// The order of the stories is determined by the order of the array, so we can ensure that the Intro/Getting Started page is always first, followed by any other MDX files, and then the component stories.
	stories: ['../docs/storybook/GettingStarted.mdx', '../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
