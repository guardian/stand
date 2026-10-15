import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint, RuleTester } from 'eslint';
import { designTokens } from './designTokens.js';

const tester = new RuleTester({
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parserOptions: { ecmaFeatures: { jsx: true } },
	},
});
const css = (styles) =>
	`import { css } from '@emotion/react'; css\`${styles}\`;`;
const error = (property) => ({ messageId: 'literal', data: { property } });

tester.run('no-hardcoded-colours', designTokens.rules['no-hardcoded-colours'], {
	valid: [
		css('color: ${theme.color}; background: var(--background);'),
		css('color: transparent; border-color: currentColor; color: inherit;'),
		css('background: linear-gradient(${theme.start}, ${theme.end});'),
		css('background: url("/red.svg"); content: "color: red;";'),
		css('/* color: red; */ color: var(--blue);'),
		css('border: 1px solid ${theme.border};'),
		`import { css } from '@emotion/react'; css({ color: theme.color, backgroundColor: 'var(--background)' });`,
		`const data = { color: 'red' };`,
		`const css = (x) => x; css\`color: red;\`;`,
		`import { css } from '@emotion/react'; function other(css) { return css\`color: red;\`; }`,
		`import { css } from 'another-library'; css\`color: red;\`;`,
	],
	invalid: [
		{ code: css('color: #fff;'), errors: [error('color')] },
		{
			code: css('background-color: #aabbccdd;'),
			errors: [error('background-color')],
		},
		{ code: css('color: blue;'), errors: [error('color')] },
		{
			code: css('border: 1px solid rebeccapurple;'),
			errors: [error('border')],
		},
		{
			code: css('box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);'),
			errors: [error('box-shadow')],
		},
		{
			code: css('background: linear-gradient(red, hsl(0 0% 0%));'),
			errors: [error('background')],
		},
		{
			code: css('fill: oklch(50% 0.1 30); stroke: color(display-p3 1 0 0);'),
			errors: [error('fill'), error('stroke')],
		},
		{ code: css('color: var(--foreground, #fff);'), errors: [error('color')] },
		{ code: css('&:hover { color: red; }'), errors: [error('color')] },
		{ code: css('color: ${"red"};'), errors: [error('color')] },
		{
			code: `import { css as emotionCss } from '@emotion/react'; emotionCss\`color: red;\`;`,
			errors: [error('color')],
		},
		{
			code: `import * as emotion from '@emotion/react'; emotion.css\`color: red;\`;`,
			errors: [error('color')],
		},
		{
			code: `import { css } from '@emotion/react'; css({ '&:hover': { backgroundColor: '#fff' }, borderColor: ['red', 'blue'] });`,
			errors: [error('background-color'), error('border-color')],
		},
		{
			code: `<div css={{ color: 'red' }} style={{ backgroundColor: '#fff' }} />;`,
			errors: [error('color'), error('background-color')],
		},
	],
});

tester.run('no-hardcoded-spacing', designTokens.rules['no-hardcoded-spacing'], {
	valid: [
		css('padding: ${theme.padding}; gap: var(--gap);'),
		css('margin: 0 auto; padding: 0px; gap: normal;'),
		css('margin-inline: 5%; width: 12px; border: 1px solid;'),
		css('padding: calc(100% - ${theme.padding});'),
		css('content: "padding: 8px;"; /* gap: 4px; */'),
		`import { css } from '@emotion/react'; css({ padding: 0, margin: 'auto', gap: theme.gap });`,
		`<div style={{ margin: '-0px', padding: '5%' }} />;`,
		`const data = { padding: 8 };`,
		`const css = (x) => x; css\`padding: 8px;\`;`,
	],
	invalid: [
		{
			code: css('padding: 8px; margin: 0 1rem; gap: .5em;'),
			errors: [error('padding'), error('margin'), error('gap')],
		},
		{
			code: css(
				'margin-inline-start: -2px; padding-block: 4px 8px; row-gap: 1vh; column-gap: 2ch;',
			),
			errors: [
				error('margin-inline-start'),
				error('padding-block'),
				error('row-gap'),
				error('column-gap'),
			],
		},
		{ code: css('gap: calc(${theme.gap} + 2px);'), errors: [error('gap')] },
		{ code: css('padding: ${8}px;'), errors: [error('padding')] },
		{ code: css('gap: var(--gap, 8px);'), errors: [error('gap')] },
		{ code: css('&:hover { padding: 8px; }'), errors: [error('padding')] },
		{
			code: `import { css } from '@emotion/react'; css({ padding: 8, marginTop: -2, gap: '1rem', '&:hover': { paddingInline: '4px' } });`,
			errors: [
				error('padding'),
				error('margin-top'),
				error('gap'),
				error('padding-inline'),
			],
		},
		{
			code: `<div css={{ padding: 8 }} style={{ rowGap: '2px' }} />;`,
			errors: [error('padding'), error('row-gap')],
		},
		{
			code: `import { css } from '@emotion/react'; css([{ padding: [0, '8px'] }]);`,
			errors: [error('padding')],
		},
	],
});

test('component rules are errors; stories, tests, sandbox and token outputs are excluded', async () => {
	const eslint = new ESLint();
	const code = css('color: red; padding: 8px;');
	for (const filePath of [
		'src/components/Button/styles.ts',
		'src/components/Button/Button.tsx',
		'src/components/Button/Button.stories.tsx',
		'src/components/Button/styles.test.ts',
		'src/components/Button/sandbox.ts',
		'src/styleD/build/typescript/component/button.ts',
	]) {
		const [result] = await eslint.lintText(code, { filePath });
		const messages = result.messages.filter((message) =>
			message.ruleId?.startsWith('design-tokens/'),
		);
		const expected = [
			'src/components/Button/styles.ts',
			'src/components/Button/Button.tsx',
		].includes(filePath);
		assert.equal(messages.length, expected ? 2 : 0, filePath);
		assert.ok(
			messages.every((message) => message.severity === 2),
			filePath,
		);
	}
});
