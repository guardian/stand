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

const checkAspect = (
	crop: CropData,
	aspectRatio: AspectRatio,
	aspectX: number,
	aspectY: number,
) => {
	const { specification, master } = crop;
	if (specification?.aspectRatio) {
		return specification.aspectRatio === aspectRatio;
	}
	const { width, height } = master?.dimensions ?? {};
	if (!width || !height) {
		return undefined;
	}

	return Math.abs(width / height - aspectX / aspectY) < 0.05;
};

export const checkCropHasAllowedAspectRatio = (
	crop: CropData,
	allowedAspectRatios?: AspectRatio[],
): boolean => {
	if (!allowedAspectRatios) {
		return true;
	}
	if (allowedAspectRatios.includes('5:4') && checkAspect(crop, '5:4', 5, 4)) {
		return true;
	}
	if (allowedAspectRatios.includes('4:5') && checkAspect(crop, '4:5', 4, 5)) {
		return true;
	}
	if (allowedAspectRatios.includes('1:1') && checkAspect(crop, '1:1', 1, 1)) {
		return true;
	}
	if (allowedAspectRatios.includes('5:3') && checkAspect(crop, '5:3', 5, 3)) {
		return true;
	}
	if (
		allowedAspectRatios.includes('16:9') &&
		checkAspect(crop, '16:9', 16, 9)
	) {
		return true;
	}
	return false;
};
