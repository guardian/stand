// Component Name
export const componentName = 'TextListInput';

// React sandbox example
export const componentTsx = /* javascript */ `import { TextListInput } from '@guardian/stand/TextListInput';

export const Component = () => (
	<>
		{/* default example */}
		<TextListInput
			label="Text list"
			onChange={(values) => console.log('Text list values: ', values)}
		/>

		{/* with initial item data */}
		<TextListInput
			label="Text list"
			initialData={['Item 1', 'Item 2']}
			onChange={(values) => console.log('Text list values: ', values)}
		/>
	</>
);
`;
