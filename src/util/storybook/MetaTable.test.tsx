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
			'./?path=/docs/stand-tools-design-system-introduction--docs',
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

	it('shows that verification is not required for the shareable collection', () => {
		const container = document.createElement('div');
		container.innerHTML = renderToStaticMarkup(
			<MetaTable collection="Shareable non-Design System Components" />,
		);

		expect(
			getByRole(container, 'link', {
				name: 'Shareable non-Design System Components',
			}),
		).toHaveAttribute(
			'href',
			'./?path=/docs/stand-shareable-non-design-system-components-introduction--docs',
		);
		expect(
			getByText(container, 'Not required for this collection'),
		).toBeTruthy();
		expect(
			queryByText(container, 'Not yet verified by the Design Systems Team'),
		).toBeNull();
	});

	it.each([
		['http://localhost:6007/', 'Tools Design System'],
		['http://localhost:6007/', 'Shareable non-Design System Components'],
		['https://guardian.github.io/stand/', 'Tools Design System'],
		[
			'https://guardian.github.io/stand/',
			'Shareable non-Design System Components',
		],
	] as const)(
		'resolves %s collection links to the manager for %s',
		(base, collection) => {
			const container = document.createElement('div');
			container.innerHTML = renderToStaticMarkup(
				collection === 'Tools Design System' ? (
					<MetaTable designSystemTeamVerified />
				) : (
					<MetaTable collection={collection} />
				),
			);
			const link = getByRole<HTMLAnchorElement>(container, 'link', {
				name: collection,
			});
			const resolved = new URL(
				link.getAttribute('href') ?? '',
				`${base}iframe.html?id=component--docs&viewMode=docs`,
			);
			const route =
				collection === 'Tools Design System'
					? '/docs/stand-tools-design-system-introduction--docs'
					: '/docs/stand-shareable-non-design-system-components-introduction--docs';

			expect(`${resolved.origin}${resolved.pathname}`).toBe(base);
			expect(resolved.searchParams.get('path')).toBe(route);
			expect(resolved.searchParams.has('id')).toBe(false);
			expect(link).toHaveAttribute('target', '_top');
		},
	);

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
