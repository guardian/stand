import { z } from 'zod';

export const specification = z.object({
	aspectRatio: z.string().optional(),
	bounds: z
		.object({
			x: z.number().optional(),
			y: z.number().optional(),
			width: z.number(),
			height: z.number(),
		})
		.optional(),
});
export type Specification = z.infer<typeof specification>;

export const cropAsset = z.object({
	secureUrl: z.string().optional(),
	file: z.string(),
	mimeType: z.string().optional(),
	dimensions: z
		.object({
			width: z.number().optional(),
			height: z.number().optional(),
		})
		.optional(),
});
export type CropAsset = z.infer<typeof cropAsset>;

export const cropData = z.object({
	id: z.string(),
	specification: specification.optional(),
	master: cropAsset.optional(),
	assets: z.optional(cropAsset.array()),
});
export type CropData = z.infer<typeof cropData>;

export const imageData = z.object({
	id: z.string(),
	metadata: z
		.object({
			title: z.string().optional(),
			description: z.string().optional(),
			byline: z.string().optional(),
			credit: z.string().optional(),
			copyrightNotice: z.string().optional(),
			suppliersReference: z.string().optional(),
			imageType: z.string().optional(),
		})
		.optional(),
	usageRights: z
		.object({
			category: z.string().optional(),
		})
		.optional(),
	identifiers: z
		.object({
			picdarUrn: z.string().optional(),
		})
		.optional(),
	exports: z.optional(cropData.array()),
});
export type ImageData = z.infer<typeof imageData>;

export const gridImage = z.object({
	uri: z.string().optional(),
	data: imageData.optional(),
});
export type GridImage = z.infer<typeof gridImage>;

export const gridImageResponse = z
	.object({
		image: gridImage.optional(),
		crop: z
			.object({
				data: cropData.optional(),
			})
			.optional(),
	})
	.strict();
export type GridImageResponse = z.infer<typeof gridImageResponse>;

export const gridImageCollectionResponse = z.object({
	images: gridImageResponse.array(),
});

export const gridDataTransfer = z.object({
	'text/plain': z.string().optional(),
	'text/uri-list': z.string().optional(),
	'text/html': z.string().optional(),
	'application/vnd.mediaservice.kahuna.image': z.string().optional(),
	'application/vnd.asset-handle+json': z.string().optional(),
	'application/vnd.mediaservice.image+json': z.string().optional(),
	'application/vnd.mediaservice.kahuna.uri': z.string().optional(),
	'application/vnd.mediaservice.crops+json': z.string().optional(),
});
