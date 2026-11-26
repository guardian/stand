/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import { NumberInput } from '../src/NumberInput';
import {
	ControlledNumberInput,
	NumberInputForm,
	RequiredNumberInputForm,
} from './numberInput.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('associates the label and description and provides named steppers', async ({
	mount,
	page,
}) => {
	await mount(
		<NumberInput
			label="Quantity"
			description="Choose a quantity."
			defaultValue={4}
		/>,
	);
	const input = page.locator('.react-aria-Input');
	await expect(input).toHaveAccessibleName('Quantity');
	await expect(input).toHaveAccessibleDescription('Choose a quantity.');
	await expect(input).toHaveValue('4');
	await expect(page.getByRole('button', { name: /Decrease/ })).toBeVisible();
	await expect(page.getByRole('button', { name: /Increase/ })).toBeVisible();
});

test('increments and decrements an uncontrolled value', async ({
	mount,
	page,
}) => {
	await mount(<NumberInput label="Quantity" defaultValue={4} />);
	await page.getByRole('button', { name: /Increase/ }).click();
	await expect(page.locator('.react-aria-Input')).toHaveValue('5');
	await page.getByRole('button', { name: /Decrease/ }).click();
	await expect(page.locator('.react-aria-Input')).toHaveValue('4');
});

test('commits typed values and clamps them to bounds on blur', async ({
	mount,
	page,
}) => {
	await mount(<NumberInput label="Quantity" minValue={2} maxValue={10} />);
	const input = page.locator('.react-aria-Input');
	await input.fill('7');
	await input.blur();
	await expect(input).toHaveValue('7');
	await input.fill('99');
	await input.blur();
	await expect(input).toHaveValue('10');
	await input.fill('1');
	await input.blur();
	await expect(input).toHaveValue('2');
});

test('disables steppers at their respective bounds without disabling the field', async ({
	mount,
	page,
}) => {
	await mount(
		<NumberInput label="Quantity" defaultValue={0} minValue={0} maxValue={1} />,
	);
	const increment = page.getByRole('button', { name: /Increase/ });
	const decrement = page.getByRole('button', { name: /Decrease/ });
	await expect(decrement).toBeDisabled();
	await expect(page.locator('.react-aria-Input')).toBeEnabled();
	await increment.click();
	await expect(increment).toBeDisabled();
	await expect(decrement).toBeEnabled();
	await expect(page.getByRole('group')).not.toHaveAttribute('data-disabled');
});

test('uses fractional steps starting at the minimum', async ({
	mount,
	page,
}) => {
	await mount(
		<NumberInput
			label="Distance"
			defaultValue={1.5}
			minValue={0.5}
			step={0.5}
			formatOptions={{ maximumFractionDigits: 1 }}
		/>,
	);
	const input = page.locator('.react-aria-Input');
	await page.getByRole('button', { name: /Increase/ }).click();
	await expect(input).toHaveValue('2');
	await page.getByRole('button', { name: /Decrease/ }).click();
	await expect(input).toHaveValue('1.5');
	await input.fill('1.8');
	await input.blur();
	await expect(input).toHaveValue('2');
});

test('supports arrow keys and Home and End', async ({ mount, page }) => {
	await mount(
		<NumberInput
			label="Quantity"
			defaultValue={4}
			minValue={0}
			maxValue={10}
			step={2}
		/>,
	);
	const input = page.locator('.react-aria-Input');
	await input.press('ArrowUp');
	await expect(input).toHaveValue('6');
	await input.press('ArrowDown');
	await expect(input).toHaveValue('4');
	await input.press('End');
	await expect(input).toHaveValue('10');
	await input.press('Home');
	await expect(input).toHaveValue('0');
});

test('supports controlled updates and reports an empty value as NaN', async ({
	mount,
	page,
}) => {
	await mount(<ControlledNumberInput />);
	const input = page.locator('.react-aria-Input');
	await page.getByRole('button', { name: /Increase/ }).click();
	await expect(page.getByTestId('value')).toHaveText('5');
	await page.getByRole('button', { name: 'Set value to eight' }).click();
	await expect(input).toHaveValue('8');
	await input.fill('');
	await input.blur();
	await expect(page.getByTestId('value')).toHaveText('empty');
	await expect(input).toHaveValue('');
});

test('rejects non-numeric characters', async ({ mount, page }) => {
	await mount(<NumberInput label="Quantity" defaultValue={4} />);
	const input = page.locator('.react-aria-Input');
	await input.press('End');
	await input.press('a');
	await input.press('b');
	await input.blur();
	await expect(input).toHaveValue('4');
});

test('disables the input and both steppers', async ({ mount, page }) => {
	await mount(<NumberInput label="Quantity" defaultValue={4} isDisabled />);
	await expect(page.locator('.react-aria-Input')).toBeDisabled();
	await expect(page.getByRole('button', { name: /Increase/ })).toBeDisabled();
	await expect(page.getByRole('button', { name: /Decrease/ })).toBeDisabled();
	await expect(page.getByRole('group')).toHaveAttribute('data-disabled');
});

test('read-only values cannot be changed by keyboard or steppers', async ({
	mount,
	page,
}) => {
	await mount(<NumberInput label="Quantity" defaultValue={4} isReadOnly />);
	const input = page.locator('.react-aria-Input');
	await expect(input).toHaveAttribute('readonly');
	await input.press('ArrowUp');
	await expect(input).toHaveValue('4');
	await expect(page.getByRole('button', { name: /Increase/ })).toBeDisabled();
	await expect(page.getByRole('button', { name: /Decrease/ })).toBeDisabled();
});

test('exposes invalid state and an associated error message', async ({
	mount,
	page,
}) => {
	await mount(
		<NumberInput label="Quantity" isInvalid error="Enter a valid quantity." />,
	);
	await expect(page.locator('.react-aria-Input')).toHaveAttribute(
		'aria-invalid',
		'true',
	);
	await expect(page.getByRole('group')).toHaveAttribute('data-invalid');
	await expect(page.getByText('Enter a valid quantity.')).toBeVisible();
});

test('shows native required validation with invalid styling on submit', async ({
	mount,
	page,
}) => {
	await mount(<RequiredNumberInputForm />);
	await page.getByRole('button', { name: 'Submit' }).click();
	await expect(page.getByText('Enter a quantity.')).toBeVisible();
	await expect(page.getByRole('group')).toHaveAttribute('data-invalid');
});

test('steppers do not submit their parent form', async ({ mount, page }) => {
	await mount(<NumberInputForm />);
	await page.getByRole('button', { name: /Increase/ }).click();
	await expect(page.getByTestId('submitted')).toHaveText('false');
	await expect(
		page.locator('input[type="hidden"][name="quantity"]'),
	).toHaveValue('5');
	await page.getByRole('button', { name: 'Submit', exact: true }).click();
	await expect(page.getByTestId('submitted')).toHaveText('true');
});

for (const [size, height] of [
	['md', '40px'],
	['sm', '32px'],
] as const) {
	test(`uses the ${size} control height`, async ({ mount, page }) => {
		await mount(<NumberInput label="Quantity" size={size} />);
		await expect(page.getByRole('group')).toHaveCSS('height', height);
	});
}
