export const getCropPageUrl = (
	gridUri: string,
	imageId: string,
	cropId: string,
) => `${gridUri}/images/${imageId}?crop=${cropId}`;

export const getImageOrCropPageUrl = (
	gridUri: string,
	imageId: string,
	cropId?: string,
) =>
	cropId
		? getCropPageUrl(gridUri, imageId, cropId)
		: `${gridUri}/images/${imageId}`;

export const getGridImageUrl = (
	imageSourceDomain: string,
	imageId: string,
	cropId: string,
	imageSize = 140,
) => `${imageSourceDomain}/${imageId}/${cropId}/${imageSize}.jpg`;

export const getCropSelectPage = (gridUri: string, imageId: string) =>
	`${gridUri}/images/${imageId}?cropType=all&defaultCropType=landscape`;

export const getImageSearchPage = (gridUri: string) =>
	`${gridUri}/search?cropType=all&defaultCropType=landscape`;
