// Component Name
export const componentName = 'SearchInput';

// SearchInput - React sandbox example
export const componentTsx = /* javascript */ `import { SearchInput } from '@guardian/stand/SearchInput';

export const Component = () => (
	<>
		<SearchInput
			label="Medium search"
			description="This is a description for the search input."
		/>

		<div>&nbsp;</div>

		<SearchInput
			size="sm"
			label="Small search"
			isInvalid
			defaultValue="guardian_user"
			error="This is an error message"
		/>

		<div>&nbsp;</div>

		<SearchInput 
			label="Disabled search"
			isDisabled
			defaultValue="This search is disabled"
		/>

		<div>&nbsp;</div>
	</>
);
`;
