/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import type { BylineModel } from '../src';
import { Byline } from '../src/byline/Byline';
import { BylineWithMockSearchContributors } from './byline.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('displays placeholder text when no content is present', async ({
	mount,
	page,
}) => {
	await mount(
		<Byline
			placeholder="My placeholder"
			handleSave={() => {}}
			allowUntaggedContributors
		/>,
	);

	const placeholder = page.locator('text=My placeholder');
	await expect(placeholder).toBeInViewport();

	const editor = page.getByRole('combobox');
	await editor.fill('Test');

	await expect(placeholder).not.toBeInViewport();
});

test('shows dropdown with untagged contributor suggestion, hides when click away', async ({
	mount,
	page,
}) => {
	await mount(<Byline handleSave={() => {}} allowUntaggedContributors />);

	const editor = page.getByRole('combobox');
	await editor.fill('Test');

	const dropdown = page.getByRole('listbox');
	await expect(dropdown).toHaveText('Add "Test" as untagged contributor');
	await page.click('body', {
		position: { x: 0, y: 0 },
	});
	await expect(dropdown).not.toBeVisible();
});

test('hides dropdown with escape key', async ({ mount, page }) => {
	await mount(<Byline handleSave={() => {}} allowUntaggedContributors />);

	const editor = page.getByRole('combobox');
	await editor.fill('Test');

	const dropdown = page.getByRole('listbox');
	await expect(dropdown).toHaveText('Add "Test" as untagged contributor');
	await page.keyboard.press('Escape');
	await expect(dropdown).not.toBeVisible();
});

test('adds a chip from the dropdown', async ({ mount, page }) => {
	await mount(
		<Byline
			placeholder="My placeholder"
			handleSave={() => {}}
			allowUntaggedContributors
		/>,
	);

	const editor = page.getByRole('combobox');
	await editor.fill('Test');

	const dropdown = page.getByRole('listbox');
	await expect(dropdown).toHaveText('Add "Test" as untagged contributor');

	await page.getByRole('option').click();
	await expect(dropdown).not.toBeVisible();

	const chip = page.locator('css=chip[data-label="Test"]');

	await expect(chip).toBeVisible();
	await expect(chip).toHaveText(/Test/);
});

test('deletes a chip when clicking x', async ({ mount, page }) => {
	await mount(<Byline handleSave={() => {}} allowUntaggedContributors />);

	const editor = page.getByRole('combobox');
	await editor.fill('Test');

	await page.getByRole('option').click();

	const chip = page.locator('css=chip[data-label="Test"]');
	await expect(chip).toBeVisible();

	await page.getByTitle('Delete Test').click();
	await expect(chip).not.toBeVisible();
});

test('renders search options in dropdown', async ({ mount, page }) => {
	await mount(<BylineWithMockSearchContributors />);

	const editor = page.getByRole('combobox');
	// search for Mahesh Makani
	await editor.fill('Ma');

	const mahesh = page.getByText(/Mahesh Makani/);
	await expect(mahesh).toBeVisible();

	await editor.fill('A');
	const andrew = page.getByText(/Andrew Howe-Ely/);
	await expect(andrew).toBeVisible();
});

test('moves the selected option in dropdown with arrow keys', async ({
	mount,
	page,
}) => {
	await mount(<BylineWithMockSearchContributors />);

	const editor = page.getByRole('combobox');
	// Type "J" to match both "Jane Smith" and "John Doe"
	await editor.fill('J');
	await page.keyboard.press('ArrowDown');

	const options = page.getByRole('option');
	await expect(options.last()).toHaveAttribute('aria-selected', 'true');
});

test('adds a chip with the Enter key', async ({ mount, page }) => {
	await mount(<BylineWithMockSearchContributors />);

	const editor = page.getByRole('combobox');
	await editor.fill('Andrew');

	await page.keyboard.press('Enter');

	const chip = page.locator('css=chip[data-label="Andrew Howe-Ely"]');

	await expect(chip).toBeVisible();
	await expect(chip).toHaveText(/Andrew Howe-Ely/);
});

test('executes save on every keypress', async ({ mount, page }) => {
	let saveCounter = 0;
	await mount(
		<Byline
			handleSave={() => {
				saveCounter++;
			}}
		/>,
	);

	const editor = page.getByRole('combobox');
	await editor.click();
	await page.keyboard.type('test');

	expect(saveCounter).toBe(4);
});

test('executes save with correct input on every keypress', async ({
	mount,
	page,
}) => {
	const saveLog: BylineModel[] = [];
	const mockHandleSave = (value: BylineModel) => {
		saveLog.push(value);
	};
	await mount(<Byline handleSave={mockHandleSave} />);

	const editor = page.getByRole('combobox');
	await editor.click();
	await page.keyboard.type('T');
	await page.keyboard.type('e');
	await page.keyboard.type('s');
	await page.keyboard.type('t');

	expect(saveLog.at(0)?.pop()?.value).toBe('T');
	expect(saveLog.at(1)?.pop()?.value).toBe('Te');
	expect(saveLog.at(2)?.pop()?.value).toBe('Tes');
	expect(saveLog.at(3)?.pop()?.value).toBe('Test');
});

test('passes * character to search function', async ({ mount, page }) => {
	await mount(<BylineWithMockSearchContributors />);

	const editor = page.getByRole('combobox');
	await editor.fill('*');

	const options = page.getByRole('option');
	await expect(options).toHaveCount(4);
});

test('starts tracking input when typing from start', async ({
	mount,
	page,
}) => {
	await mount(
		<BylineWithMockSearchContributors
			initialValue={[
				{ type: 'text', value: 'Existing content and more text' },
			]}
		/>,
	);

	const editor = page.getByRole('combobox');
	await editor.focus();
	await page.keyboard.press('Home');
	await page.keyboard.type('J');

	await expect(
		page.getByText('JExisting content and more text'),
	).toBeVisible();

	await expect(page.getByRole('listbox')).toBeVisible();
	await expect(page.getByText(/Jane Smith/)).toBeVisible();
	await expect(page.getByText(/John Doe/)).toBeVisible();

	await page.keyboard.type('ohn');

	page.getByText('JohnExisting content and more text');
	await expect(page.getByText(/Jane Smith/)).not.toBeVisible();
	await expect(page.getByText(/John Doe/)).toBeVisible();

	await page.getByText(/John Doe/).click();

	const chip = page.locator('css=chip[data-label="John Doe"]');
	await expect(chip).toBeVisible();

	await expect(
		page.getByText('Existing content and more text'),
	).toBeVisible();
});

test('handles backspace correctly within inputs tracked range', async ({
	mount,
	page,
}) => {
	await mount(
		<BylineWithMockSearchContributors
			initialValue={[
				{ type: 'text', value: 'Existing content and more text' },
			]}
		/>,
	);

	const editor = page.getByRole('combobox');
	await editor.focus();
	await page.keyboard.press('Home');
	await page.keyboard.type('John');

	await expect(page.getByRole('listbox')).toBeVisible();
	await expect(page.getByText(/John Doe/)).toBeVisible();

	await page.keyboard.press('Backspace');
	await page.keyboard.press('Backspace');

	// should still be tracking (within range) and show contributors starting with "Jo"
	await expect(page.getByRole('listbox')).toBeVisible();
	await expect(page.getByText(/John Doe/)).toBeVisible();

	// backspace and edit name
	await page.keyboard.press('Backspace');
	await page.keyboard.type('ane');

	await expect(
		page.getByText('JaneExisting content and more text'),
	).toBeVisible();

	await expect(page.getByRole('listbox')).toBeVisible();
	await expect(page.getByText(/Jane Smith/)).toBeVisible();
	await expect(page.getByText(/John Doe/)).not.toBeVisible();

	await page.getByText(/Jane Smith/).click();
	const chip = page.locator('css=chip[data-label="Jane Smith"]');
	await expect(chip).toBeVisible();

	await expect(
		page.getByText('Existing content and more text'),
	).toBeVisible();
});
