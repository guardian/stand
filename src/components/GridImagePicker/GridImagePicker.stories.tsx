import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridImagePicker } from './GridImagePicker';

const meta = {
	title: 'Stand/Editorial Components/GridImagePicker',
	component: GridImagePicker,
	parameters: {},
	args: {
		gridUri: 'https://media.test.dev-gutools.co.uk',
		gridImageSourceDomain: 'https://media.guimcode.co.uk',
		handleCropData(data) {
			console.log(data);
		},
	},
} satisfies Meta<typeof GridImagePicker>;

type Story = StoryObj<typeof GridImagePicker>;

const fiveFourCrop = {
	imageId: 'e1bdc4fc148e012a55c33ac709d8bb6c35c424ad',
	cropId: '0_0_3000_2398',
	imageSize: 500,
};

const extremeCrop = {
	assetUrl:
		'https://media.guimcode.co.uk/e1bdc4fc148e012a55c33ac709d8bb6c35c424ad/1003_0_1189_3665/162.jpg',
	imageId: 'e1bdc4fc148e012a55c33ac709d8bb6c35c424ad',
	cropId: '1003_0_1189_3665',
};

const largeCropTheme = {
	container: {
		width: '525px',
	},
	imagePreview: {
		maxHeight: '400px',
		maxWidth: '500px',
	},
};

export const Default: Story = {};

export const WithNoDisabledControls: Story = {
	args: {
		hideDisabledButtons: true,
	},
};

export const WithNoLinkButtons: Story = {
	args: {
		noPageUrlButton: true,
	},
};

export const WithFiveFourCrop: Story = {
	args: {
		initialValues: fiveFourCrop,
	},
};

export const EmptyWithNoThumbnail: Story = {
	args: {
		noThumbnail: true,
	},
};

export const WithFiveFourCropNoThumbnail: Story = {
	args: {
		noThumbnail: true,
		initialValues: fiveFourCrop,
	},
};

export const WithFiveFourCropLargePreview: Story = {
	args: {
		initialValues: fiveFourCrop,
		theme: largeCropTheme,
	},
};
export const WithLargePreview: Story = {
	args: {
		theme: largeCropTheme,
	},
};

export const WithExtremeCrop: Story = {
	args: {
		initialValues: extremeCrop,
	},
};
export const WithExtremeCropAndLargePreview: Story = {
	args: {
		initialValues: extremeCrop,
		theme: largeCropTheme,
	},
};

export const WithFailure: Story = {
	args: {
		initialFailure: 'Please select crop with the right aspect rato (5:4)',
	},
};

export default meta;
