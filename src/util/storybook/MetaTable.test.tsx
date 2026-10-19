import { getByRole, getByText, queryByText } from '@testing-library/dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { MetaTable } from './MetaTable';

jest.mock('../../Tooltip', () => ({ Tooltip: 'span' }));
jest.mock('../../LinkButton', () => ({ LinkButton: 'a' }));

describe('MetaTable', () => {
	it('shows design-system membership separately from verified status', () => {
		const container = document.createElement('div');
		container.innerHTML = renderToStaticMarkup(
			<MetaTable designSystemTeamVerified />,
		);

		const collectionLink = getByRole(container, 'link', {
			name: 'Tools Design System',
		});
		expect(collectionLink).toHaveAttribute(
			'href',
			'?path=/docs/stand-tools-design-system-introduction--docs',
		);
		expect(collectionLink).toHaveAttribute('target', '_top');
		expect(
			getByText(container, 'Verified by the Design Systems Team'),
		).toBeTruthy();
	});

	it('does not imply that design-system membership means verified', () => {
		const container = document.createElement('div');
		container.innerHTML = renderToStaticMarkup(
			<MetaTable designSystemTeamVerified={false} />,
		);

		expect(
			getByRole(container, 'link', { name: 'Tools Design System' }),
		).toBeTruthy();
		expect(
			getByText(container, 'Not yet verified by the Design Systems Team'),
		).toBeTruthy();
	});

	it('shows that verification is not required for the sharable collection', () => {
		const container = document.createElement('div');
		container.innerHTML = renderToStaticMarkup(
			<MetaTable collection="Sharable non-Design System Components" />,
		);

		expect(
			getByRole(container, 'link', {
				name: 'Sharable non-Design System Components',
			}),
		).toHaveAttribute(
			'href',
			'?path=/docs/stand-sharable-non-design-system-components-introduction--docs',
		);
		expect(
			getByText(container, 'Not required for this collection'),
		).toBeTruthy();
		expect(
			queryByText(container, 'Not yet verified by the Design Systems Team'),
		).toBeNull();
	});

	it('preserves optional design and React Aria links', () => {
		const container = document.createElement('div');
		container.innerHTML = renderToStaticMarkup(
			<MetaTable
				designSystemTeamVerified
				figmaLink="https://www.figma.com/design/example"
				reactAriaLink="https://react-aria.adobe.com/Button"
			/>,
		);

		expect(
			getByRole(container, 'link', { name: 'View in Figma' }),
		).toHaveAttribute('href', 'https://www.figma.com/design/example');
		expect(
			getByRole(container, 'link', { name: 'View in React Aria Docs' }),
		).toHaveAttribute('href', 'https://react-aria.adobe.com/Button');
	});
});
