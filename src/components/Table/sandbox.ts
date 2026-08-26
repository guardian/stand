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
		columns={{
			sm: '1fr',
			md: '1fr auto',
			lg: 'minmax(160px, 2fr) 1fr auto',
		}}
	>
		<TableHeader>
			<TableColumnHeader isRowHeader>Name</TableColumnHeader>
			<TableColumnHeader>Team</TableColumnHeader>
			<TableColumnHeader>Status</TableColumnHeader>
		</TableHeader>
		<TableBody>
			<TableRow id="alex-smith">
				<TableCell>Alex Smith</TableCell>
				<TableCell compactLabel="Team: ">Editorial tools</TableCell>
				<TableCell compactLabel="Status: ">Active</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);
`;

// Table design tokens for custom styling.
export const componentCss = /* css */ `@import '@guardian/stand/component/table.css';`;
export const componentHtml = '';
export const componentJs = '';
