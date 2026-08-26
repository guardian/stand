import { getByRole, within } from '@testing-library/dom';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
	Table,
	TableBody,
	TableCell,
	TableColumnHeader,
	TableHeader,
	TableRow,
} from './Table';

describe('Table', () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	});

	it('uses React Aria table semantics and preserves compact labels', () => {
		act(() => {
			ReactDOM.render(
				<Table aria-label="Sent alerts" columns={{ lg: '2fr 1fr' }}>
					<TableHeader>
						<TableColumnHeader isRowHeader>Alert</TableColumnHeader>
						<TableColumnHeader>Status</TableColumnHeader>
					</TableHeader>
					<TableBody>
						<TableRow id="alert-1">
							<TableCell>Spain win World Cup</TableCell>
							<TableCell compactLabel="Status: ">Sent</TableCell>
						</TableRow>
					</TableBody>
				</Table>,
				container,
			);
		});

		const table = getByRole(container, 'grid', { name: 'Sent alerts' });
		expect(table.tagName).toBe('TABLE');
		expect(within(table).getAllByRole('row')).toHaveLength(2);
		expect(within(table).getAllByRole('columnheader')).toHaveLength(2);
		expect(within(table).getByRole('rowheader')).toHaveTextContent(
			'Spain win World Cup',
		);
		expect(within(table).getByRole('gridcell')).toHaveTextContent(
			'Status: Sent',
		);
		expect(within(table).getByText('Status:')).toHaveAttribute(
			'aria-hidden',
			'true',
		);
	});
});
