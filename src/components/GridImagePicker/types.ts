import type { DefaultProps } from '../../util/types';
import type { CropAsset, CropData, ImageData } from './gridModel';
import type { GridImagePickerTheme } from './styles';

export type CropPickData = {
	asset: CropAsset;
	crop: CropData;
	image: ImageData;
	cropPageUrl: string;
	imageAssetUrl: string;
};

export type ImageAndCrop = {
	crop: CropData;
	image: ImageData;
};

export type AspectRatio = '5:4';

export type ImageAssetParams = {
	imageId: string;
	cropId: string;
	imageSize?: number;
	assetUrl?: string;
};

export type GridImagePickerProps = DefaultProps<GridImagePickerTheme> & {
	handleCropData: (data: CropPickData) => void;
	gridUri: string;
	allowedAspectRatios?: AspectRatio[];
	initialValues?: ImageAssetParams;
	noThumbnail?: boolean;
	gridImageSourceDomain?: string;
	hideDisabledButtons?: boolean;
	noPageUrlButton?: boolean;
	initialFailure?: string;
	maximumAssetSize?: number;
	minimumAssetSize?: number;
};
