/* eslint-disable @typescript-eslint/unbound-method -- playwright mount */
import { OpenDialogWithHeader } from './modal.mock';
import playwrightComponentTestReact from './playwrightImport';

const { expect, test } = playwrightComponentTestReact;

test('renders a Dialog containing a Dialog.Header without throwing', async ({
	mount,
	page,
}) => {
	const pageErrors: Error[] = [];
	page.on('pageerror', (error) => pageErrors.push(error));

	await mount(<OpenDialogWithHeader />);

	await expect(page.getByRole('dialog')).toBeVisible();
	await expect(page.getByText('Dialog title')).toBeVisible();
	await expect(page.getByText('Dialog body')).toBeVisible();
	expect(pageErrors).toEqual([]);
});

test('Dialog.Header provides the accessible name of the Dialog', async ({
	mount,
	page,
}) => {
	await mount(<OpenDialogWithHeader />);

	await expect(
		page.getByRole('dialog', { name: 'Dialog title' }),
	).toBeVisible();
});
