import { type CropAsset, type CropData, gridImageResponse } from './gridModel';
import type { AspectRatio, ImageAndCrop } from './types';

export const validateGridData = (
	messageData: unknown,
): { data?: ImageAndCrop } => {
	const responseParse = gridImageResponse.safeParse(messageData);
	if (responseParse.success) {
		const cropData = responseParse.data.crop?.data;
		const imageData = responseParse.data.image?.data;
		if (cropData && imageData) {
			const payload: ImageAndCrop = {
				crop: cropData,
				image: imageData,
			};
			return { data: payload };
		}
	}
	return {};
};

export const extractAsset = (
	crop: CropData,
	minimumSize: number | undefined,
	maximumSize: number | undefined,
): CropAsset | undefined => {
	const assetsSmallestFirst = crop.assets?.sort(
		(assetA, assetB) =>
			(assetA.dimensions?.width ?? 0) - (assetB.dimensions?.width ?? 0),
	);
	const matchingAsset = assetsSmallestFirst?.find(
		(asset) =>
			asset.dimensions?.width &&
			asset.dimensions.width >= (minimumSize ?? 200) &&
			asset.dimensions.width <= (maximumSize ?? Infinity),
	);

	if (matchingAsset) {
		return matchingAsset;
	}

	if (minimumSize && !maximumSize) {
		return assetsSmallestFirst?.pop();
	}

	return assetsSmallestFirst?.shift();
};

export const isFiveFourCrop = (crop: CropData): boolean | undefined => {
	const { specification, master } = crop;
	if (specification?.aspectRatio) {
		return specification.aspectRatio === '5:4';
	}

	const { width, height } = master?.dimensions ?? {};
	if (!width || !height) {
		return undefined;
	}
	const aspectRatio = width / height;
	return Math.abs(aspectRatio - 5 / 4) < 0.05;
};

export const checkCropHasAllowedAspectRatio = (
	crop: CropData,
	allowedAspectRatios?: AspectRatio[],
): boolean => {
	if (!allowedAspectRatios) {
		return true;
	}

	// TO DO - add more
	if (allowedAspectRatios.includes('5:4') && isFiveFourCrop(crop)) {
		return true;
	}

	return false;
};
