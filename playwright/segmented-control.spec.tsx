/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import {
	ControlledWidthSelector,
	DesignReferenceSelector,
	LabelledNumericSelector,
	ThemedSelector,
	WidthSelector,
} from './segmented-control.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('supports uncontrolled single selection and clearing an optional choice', async ({
	mount,
	page,
}) => {
	const changes: Array<Array<string | number>> = [];
	await mount(
		<WidthSelector onSelectedValuesChange={(keys) => changes.push(keys)} />,
	);
	const group = page.getByRole('radiogroup', { name: 'Preview width' });
	const first = group.getByRole('radio', { name: '320' });
	const last = group.getByRole('radio', { name: '650' });

	await expect(last).toBeChecked();
	await first.click();
	await expect(first).toBeChecked();
	await expect(last).not.toBeChecked();
	expect(changes).toEqual([['320']]);

	await first.click();
	await expect(first).not.toBeChecked();
	expect(changes).toEqual([['320'], []]);
});

test('allows starting with no selection', async ({ mount, page }) => {
	await mount(<WidthSelector defaultSelectedKeys={[]} />);
	await expect(page.getByRole('radio', { checked: true })).toHaveCount(0);
	await page.getByRole('radio', { name: '425' }).click();
	await expect(page.getByRole('radio', { name: '425' })).toBeChecked();
});

test('prevents clearing a required choice', async ({ mount, page }) => {
	const changes: Array<Array<string | number>> = [];
	await mount(
		<WidthSelector
			disallowEmptySelection
			onSelectedValuesChange={(keys) => changes.push(keys)}
		/>,
	);
	const last = page.getByRole('radio', { name: '650' });
	await last.click();
	await expect(last).toBeChecked();
	expect(changes.every((keys) => keys.includes('650'))).toBe(true);

	await page.getByRole('radio', { name: '425' }).click();
	await expect(last).not.toBeChecked();
	expect([...(changes.at(-1) ?? [])]).toEqual(['425']);
});

test('supports controlled selection and external updates', async ({
	mount,
	page,
}) => {
	await mount(<ControlledWidthSelector />);
	await page.getByRole('radio', { name: '425' }).click();
	await expect(page.getByRole('status', { name: 'Selection' })).toHaveText(
		'425',
	);
	await page.getByRole('button', { name: 'Reset selection' }).click();
	await expect(page.getByRole('radio', { name: '320' })).toBeChecked();
	await expect(page.getByRole('radio', { name: '425' })).not.toBeChecked();
});

test('preserves arrow navigation, skips disabled items and selects with Space or Enter', async ({
	mount,
	page,
}) => {
	await mount(<WidthSelector disallowEmptySelection disabledItem="375" />);
	const first = page.getByRole('radio', { name: '320' });
	const third = page.getByRole('radio', { name: '425' });
	const last = page.getByRole('radio', { name: '650' });

	await page.keyboard.press('Tab');
	await expect(first).toBeFocused();
	await expect(first).toHaveAttribute('data-focus-visible', 'true');
	await page.keyboard.press('ArrowRight');
	await expect(third).toBeFocused();
	await expect(last).toBeChecked();
	await page.keyboard.press('Space');
	await expect(third).toBeChecked();
	await page.keyboard.press('ArrowRight');
	await expect(last).toBeFocused();
	await page.keyboard.press('Enter');
	await expect(last).toBeChecked();
	await page.keyboard.press('ArrowLeft');
	await page.keyboard.press('ArrowLeft');
	await expect(first).toBeFocused();
});

test('disables individual items and whole groups without changing selection', async ({
	mount,
	page,
}) => {
	const component = await mount(<WidthSelector disabledItem="375" />);
	const disabled = page.getByRole('radio', { name: '375' });
	await expect(disabled).toBeDisabled();
	await expect(disabled).toHaveCSS('color', 'rgb(153, 153, 153)');
	await disabled.dispatchEvent('click');
	await expect(disabled).not.toBeChecked();
	await expect(page.getByRole('radio', { name: '650' })).toBeChecked();

	await component.update(<WidthSelector isDisabled />);
	await expect(page.getByRole('radio')).toHaveCount(4);
	for (const button of await page.getByRole('radio').all()) {
		await expect(button).toBeDisabled();
	}
	await page.getByRole('radio', { name: '320' }).dispatchEvent('click');
	await expect(page.getByRole('radio', { name: '650' })).toBeChecked();
});

test('keeps a disabled selected item visible and permits selecting an enabled alternative', async ({
	mount,
	page,
}) => {
	await mount(
		<WidthSelector
			defaultSelectedKeys={['375']}
			disabledItem="375"
			disallowEmptySelection
		/>,
	);
	const disabled = page.getByRole('radio', { name: '375' });
	await expect(disabled).toBeDisabled();
	await expect(disabled).toBeChecked();
	await expect(disabled).toHaveCSS('background-color', 'rgb(220, 220, 220)');
	await page.getByRole('radio', { name: '425' }).click();
	await expect(disabled).not.toBeChecked();
	await expect(page.getByRole('radio', { name: '425' })).toBeChecked();
});

test('supports visible group labels, numeric values, fragments and React Aria render functions', async ({
	mount,
	page,
}) => {
	await mount(<LabelledNumericSelector />);
	const group = page.getByRole('radiogroup', { name: 'Display size' });
	await expect(group.getByRole('radio', { name: 'Compact' })).toBeChecked();
	const fullWidth = group.getByRole('radio', { name: 'Full width' });
	await fullWidth.click();
	await expect(fullWidth).toBeChecked();
	await expect(fullWidth).toHaveClass(/selected-item/);
	await expect(
		page.getByRole('status', { name: 'Numeric selection' }),
	).toHaveText('650');
});

test('inherits group themes, applies item overrides and isolates neighbouring groups', async ({
	mount,
	page,
}) => {
	await mount(<ThemedSelector />);
	const group = page.getByRole('radiogroup', { name: 'Theme example' });
	await expect(group.getByRole('radio', { name: 'One' })).toHaveCSS(
		'color',
		'rgb(36, 73, 29)',
	);
	await expect(group.getByRole('radio', { name: 'Two' })).toHaveCSS(
		'color',
		'rgb(105, 60, 22)',
	);
	await expect(page.getByRole('radio', { name: '320' })).toHaveCSS(
		'color',
		'rgb(84, 84, 84)',
	);
});

test('renders connected 32px segments with rounded outer corners and state styles', async ({
	mount,
	page,
}, testInfo) => {
	await mount(<WidthSelector />);
	const group = page.getByRole('radiogroup', { name: 'Preview width' });
	const first = group.getByRole('radio', { name: '320' });
	const last = group.getByRole('radio', { name: '650' });
	const boxes = await group.getByRole('radio').evaluateAll((buttons) =>
		buttons.map((button) => {
			const { x, width, height } = button.getBoundingClientRect();
			const style = getComputedStyle(button);
			return {
				x,
				width,
				height,
				startRadius: style.borderTopLeftRadius,
				endRadius: style.borderTopRightRadius,
			};
		}),
	);
	expect(boxes.map((box) => box.height)).toEqual([32, 32, 32, 32]);
	expect(boxes[0]?.startRadius).toBe('4px');
	expect(boxes[1]?.startRadius).toBe('0px');
	expect(boxes[2]?.endRadius).toBe('0px');
	expect(boxes[3]?.endRadius).toBe('4px');
	expect(
		await first.evaluate(
			(button) => getComputedStyle(button, '::after').height,
		),
	).toBe('24px');
	expect(
		await group
			.getByRole('radio', { name: '425' })
			.evaluate((button) => getComputedStyle(button, '::after').display),
	).toBe('none');
	for (const [index, box] of boxes.entries()) {
		const previous = boxes[index - 1];
		if (previous) {
			expect(box.x).toBeCloseTo(previous.x + previous.width);
		}
	}
	await expect(last).toHaveCSS('background-color', 'rgb(197, 223, 236)');
	await expect(last).toHaveCSS('border-color', 'rgb(0, 114, 169)');
	await first.hover();
	await expect(first).toHaveCSS('background-color', 'rgb(197, 223, 236)');
	await expect(first).toHaveCSS('border-left-color', 'rgb(204, 204, 204)');
	await expect(group.getByRole('radio', { name: '375' })).toHaveCSS(
		'border-left-color',
		'rgba(0, 0, 0, 0)',
	);
	await page.keyboard.press('Tab');
	await expect(first).toHaveCSS('outline-width', '2px');
	await expect(first).toHaveCSS('outline-style', 'solid');
	await group.screenshot({
		path: testInfo.outputPath('segmented-control.png'),
	});
});

test('matches the small condensed design without resizing when selection changes', async ({
	mount,
	page,
}, testInfo) => {
	await mount(<DesignReferenceSelector />);
	const group = page.getByRole('radiogroup', { name: 'Design reference' });
	const buttons = group.getByRole('radio');
	const widths = await buttons.evaluateAll((items) =>
		items.map((item) => item.getBoundingClientRect().width),
	);

	for (const button of await buttons.all()) {
		await expect(button).toHaveCSS('height', '32px');
		await expect(button).toHaveCSS('font-size', '12px');
		await expect(button).toHaveCSS('font-weight', '460');
		await expect(button).toHaveCSS('font-variation-settings', '"wdth" 88');
		await expect(button).toHaveCSS('line-height', '12px');
		await expect(button).toHaveCSS('padding-left', '11px');
		await expect(button).toHaveCSS('padding-right', '11px');
	}

	await expect(buttons.nth(1)).toBeChecked();
	await expect(buttons.nth(1)).toHaveCSS(
		'background-color',
		'rgb(197, 223, 236)',
	);
	await expect(buttons.nth(1)).toHaveCSS('border-color', 'rgb(0, 114, 169)');
	await expect(buttons.nth(1)).toHaveCSS('color', 'rgb(0, 0, 0)');
	await expect(buttons.nth(0)).toHaveCSS('color', 'rgb(84, 84, 84)');
	await expect(buttons.nth(0)).toHaveCSS(
		'background-color',
		'rgb(237, 237, 237)',
	);
	expect(
		await buttons
			.nth(2)
			.evaluate((button) => getComputedStyle(button, '::after').height),
	).toBe('24px');
	await group.screenshot({ path: testInfo.outputPath('figma-design.png') });

	for (const button of await buttons.all()) {
		await button.click();
		await expect(button).toBeChecked();
		expect(
			await buttons.evaluateAll((items) =>
				items.map((item) => item.getBoundingClientRect().width),
			),
		).toEqual(widths);
	}
});
