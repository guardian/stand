/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import {
	ControlledSegmentedControl,
	DesignReferenceSelector,
	ExampleSegmentedControl,
	LabelledNumericSelector,
	ThemedSelector,
} from './segmented-control.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('supports uncontrolled single selection and clearing an optional choice', async ({
	mount,
	page,
}) => {
	const changes: Array<Array<string | number>> = [];
	await mount(
		<ExampleSegmentedControl
			onSelectedValuesChange={(keys) => changes.push(keys)}
		/>,
	);
	const group = page.getByRole('radiogroup', { name: 'View mode' });
	const first = group.getByRole('radio', { name: 'List' });
	const last = group.getByRole('radio', { name: 'Board' });

	await expect(last).toBeChecked();
	await first.click();
	await expect(first).toBeChecked();
	await expect(last).not.toBeChecked();
	expect(changes).toEqual([['list']]);

	await first.click();
	await expect(first).not.toBeChecked();
	expect(changes).toEqual([['list'], []]);
});

test('allows starting with no selection', async ({ mount, page }) => {
	await mount(<ExampleSegmentedControl defaultSelectedKeys={[]} />);
	await expect(page.getByRole('radio', { checked: true })).toHaveCount(0);
	await page.getByRole('radio', { name: 'Gallery' }).click();
	await expect(page.getByRole('radio', { name: 'Gallery' })).toBeChecked();
});

test('prevents clearing a required choice', async ({ mount, page }) => {
	const changes: Array<Array<string | number>> = [];
	await mount(
		<ExampleSegmentedControl
			disallowEmptySelection
			onSelectedValuesChange={(keys) => changes.push(keys)}
		/>,
	);
	const last = page.getByRole('radio', { name: 'Board' });
	await last.click();
	await expect(last).toBeChecked();
	expect(changes.every((keys) => keys.includes('board'))).toBe(true);

	await page.getByRole('radio', { name: 'Gallery' }).click();
	await expect(last).not.toBeChecked();
	expect([...(changes.at(-1) ?? [])]).toEqual(['gallery']);
});

test('supports controlled selection and external updates', async ({
	mount,
	page,
}) => {
	await mount(<ControlledSegmentedControl />);
	await page.getByRole('radio', { name: 'Gallery' }).click();
	await expect(page.getByRole('status', { name: 'Selection' })).toHaveText(
		'gallery',
	);
	await page.getByRole('button', { name: 'Reset selection' }).click();
	await expect(page.getByRole('radio', { name: 'List' })).toBeChecked();
	await expect(page.getByRole('radio', { name: 'Gallery' })).not.toBeChecked();
});

test('preserves arrow navigation, skips disabled items and selects with Space or Enter', async ({
	mount,
	page,
}) => {
	await mount(
		<ExampleSegmentedControl disallowEmptySelection disabledItem="grid" />,
	);
	const first = page.getByRole('radio', { name: 'List' });
	const third = page.getByRole('radio', { name: 'Gallery' });
	const last = page.getByRole('radio', { name: 'Board' });

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
	const component = await mount(
		<ExampleSegmentedControl disabledItem="grid" />,
	);
	const disabled = page.getByRole('radio', { name: 'Grid' });
	await expect(disabled).toBeDisabled();
	await expect(disabled).toHaveCSS('color', 'rgb(153, 153, 153)');
	await disabled.dispatchEvent('click');
	await expect(disabled).not.toBeChecked();
	await expect(page.getByRole('radio', { name: 'Board' })).toBeChecked();

	await component.update(<ExampleSegmentedControl isDisabled />);
	await expect(page.getByRole('radio')).toHaveCount(4);
	for (const button of await page.getByRole('radio').all()) {
		await expect(button).toBeDisabled();
	}
	await page.getByRole('radio', { name: 'List' }).dispatchEvent('click');
	await expect(page.getByRole('radio', { name: 'Board' })).toBeChecked();
});

test('keeps a disabled selected item visible and permits selecting an enabled alternative', async ({
	mount,
	page,
}) => {
	await mount(
		<ExampleSegmentedControl
			defaultSelectedKeys={['grid']}
			disabledItem="grid"
			disallowEmptySelection
		/>,
	);
	const disabled = page.getByRole('radio', { name: 'Grid' });
	await expect(disabled).toBeDisabled();
	await expect(disabled).toBeChecked();
	await expect(disabled).toHaveCSS('background-color', 'rgb(220, 220, 220)');
	await page.getByRole('radio', { name: 'Gallery' }).click();
	await expect(disabled).not.toBeChecked();
	await expect(page.getByRole('radio', { name: 'Gallery' })).toBeChecked();
});

test('supports visible group labels, numeric values, fragments and React Aria render functions', async ({
	mount,
	page,
}) => {
	await mount(<LabelledNumericSelector />);
	const group = page.getByRole('radiogroup', { name: 'Display density' });
	await expect(group.getByRole('radio', { name: 'Compact' })).toBeChecked();
	const comfortable = group.getByRole('radio', { name: 'Comfortable' });
	await comfortable.click();
	await expect(comfortable).toBeChecked();
	await expect(comfortable).toHaveClass(/selected-item/);
	await expect(
		page.getByRole('status', { name: 'Numeric selection' }),
	).toHaveText('2');
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
	await expect(page.getByRole('radio', { name: 'List' })).toHaveCSS(
		'color',
		'rgb(84, 84, 84)',
	);
});

test('renders connected 32px segments with rounded outer corners and state styles', async ({
	mount,
	page,
}, testInfo) => {
	await mount(<ExampleSegmentedControl />);
	const group = page.getByRole('radiogroup', { name: 'View mode' });
	const first = group.getByRole('radio', { name: 'List' });
	const last = group.getByRole('radio', { name: 'Board' });
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
			.getByRole('radio', { name: 'Gallery' })
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
	await expect(group.getByRole('radio', { name: 'Grid' })).toHaveCSS(
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
