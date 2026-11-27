/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import {
	ControlledSegmentedControl,
	ExampleSegmentedControl,
} from './segmented-control.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('selects one option at a time', async ({ mount, page }) => {
	await mount(<ExampleSegmentedControl />);
	const group = page.getByRole('radiogroup', { name: 'View mode' });
	const list = group.getByRole('radio', { name: 'List' });
	const grid = group.getByRole('radio', { name: 'Grid' });

	await expect(list).toBeChecked();
	await grid.click();
	await expect(grid).toBeChecked();
	await expect(list).not.toBeChecked();
});

test('updates controlled selection through onSelectionChange', async ({
	mount,
	page,
}) => {
	await mount(<ControlledSegmentedControl />);
	const selection = page.getByRole('status', { name: 'Selected view' });

	await expect(selection).toHaveText('list');
	await page.getByRole('radio', { name: 'Grid' }).click();
	await expect(selection).toHaveText('grid');
	await expect(page.getByRole('radio', { name: 'Grid' })).toBeChecked();
});
