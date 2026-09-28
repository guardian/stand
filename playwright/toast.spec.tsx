import playwrightComponentTestReact from './playwrightImport';
import { DismissibleToast } from './toast.mock';

const { expect, test } = playwrightComponentTestReact;

test('announces its content through an accessible toast region', async ({
	mount,
	page,
}) => {
	await mount(<DismissibleToast />);

	const toast = page.getByRole('alert');
	await expect(toast).toContainText('Changes saved');
	await expect(toast).toContainText('Your updates are now available.');
	await expect(
		page.getByRole('region', { name: /notification/i }),
	).toBeVisible();
});

test('can be dismissed by the consumer', async ({ mount, page }) => {
	await mount(<DismissibleToast />);

	await page.getByRole('button', { name: 'Dismiss notification' }).click();

	await expect(page.getByRole('alert')).toHaveCount(0);
});