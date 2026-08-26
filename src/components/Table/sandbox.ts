// Component Name
export const componentName = 'Table';

// Table - React sandbox example
export const componentTsx = /* javascript */ `import {
	Table,
	TableBody,
	TableCell,
	TableColumnHeader,
	TableHeader,
	TableRow,
} from '@guardian/stand/Table';

export const Component = () => (
	<Table
		aria-label="People"
		columns="minmax(160px, 2fr) 1fr auto"
		mobileColumns="1fr auto"
	>
		<TableHeader>
			<TableColumnHeader>Name</TableColumnHeader>
			<TableColumnHeader>Team</TableColumnHeader>
			<TableColumnHeader>Status</TableColumnHeader>
		</TableHeader>
		<TableBody>
			<TableRow>
				<TableCell isRowHeader>Alex Smith</TableCell>
				<TableCell mobileLabel="Team: ">Editorial tools</TableCell>
				<TableCell mobileLabel="Status: ">Active</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);
`;

// Table does not currently provide a generated custom-component stylesheet.
export const componentCss = '';
export const componentHtml = '';
export const componentJs = '';
