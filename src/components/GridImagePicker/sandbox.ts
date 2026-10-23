// Component Name
export const componentName = 'GridImagePicker';

// React sandbox example
export const componentTsx = /* javascript */ `import { GridImagePicker } from '@guardian/stand/GridImagePicker';

export const Component = () => (
	<>
		{/* default example */}
		<GridImagePicker 
    		gridUri: 'https://media.test.dev-gutools.co.uk',
        handleCropData(data) {
          console.log(data);
        } 
      />
);

`;
