import { z } from 'zod';

const specification = z.object({
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

const cropAsset = z.object({
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

const cropData = z.object({
	id: z.string(),
	specification: specification.optional(),
	master: cropAsset.optional(),
	assets: z.optional(cropAsset.array()),
});
export type CropData = z.infer<typeof cropData>;

const gridImageData = z.object({
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
export type GridImageData = z.infer<typeof gridImageData>;

const gridImage = z.object({
	uri: z.string().optional(),
	data: gridImageData.optional(),
});

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
