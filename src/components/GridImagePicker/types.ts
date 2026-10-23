import type { DefaultProps } from '../../util/types';
import type { CropAsset, CropData, GridImageData } from './gridModel';
import type { GridImagePickerTheme } from './styles';

type CropPickData = {
	asset: CropAsset;
	crop: CropData;
	image: GridImageData;
	cropPageUrl: string;
	imageAssetUrl: string;
};

export type ImageAndCrop = {
	crop: CropData;
	image: GridImageData;
};

export type AspectRatio = '5:4' | '5:3' | '4:5' | '1:1' | '16:9';

type ImageAssetParams = {
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
