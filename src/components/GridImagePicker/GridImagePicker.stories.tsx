import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridImagePicker } from './GridImagePicker';

const meta = {
	title: 'Stand/Editorial Components/GridImagePicker',
	component: GridImagePicker,
	parameters: {},
	args: {
		gridUri: 'https://media.test.dev-gutools.co.uk',
		handleCropData(data) {
			console.log(data);
		},
	},
} satisfies Meta<typeof GridImagePicker>;

type Story = StoryObj<typeof GridImagePicker>;

export const Default: Story = {};

export const WithFiveFourCrop: Story = {
	args: {
		initialValues: {
			imageAssetUrl:
				'https://media.guimcode.co.uk/e1bdc4fc148e012a55c33ac709d8bb6c35c424ad/0_0_3000_2398/140.jpg',
			imageId: 'e1bdc4fc148e012a55c33ac709d8bb6c35c424ad',
			cropId: '0_0_3000_2398',
		},
	},
};
export const WithExtremeCrop: Story = {
	args: {
		initialValues: {
			imageAssetUrl:
				'https://media.guimcode.co.uk/e1bdc4fc148e012a55c33ac709d8bb6c35c424ad/1003_0_1189_3665/162.jpg',
			imageId: 'e1bdc4fc148e012a55c33ac709d8bb6c35c424ad',
			cropId: '1003_0_1189_3665',
		},
	},
};

export default meta;
