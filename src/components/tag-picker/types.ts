// for use in tagautocomplete
export type Tag = { id: number; internalName: string };

// for use in tagtable
export type TagRow = Tag & {
	type: string;
	section: {
		name: string;
	};
};

// for use in tests only
export type TagManagerObjectData = {
	id: number;
	type: string;
	internalName: string;
	externalName: string;
	slug: string;
	section: {
		id: number;
		name: string;
		pathPrefix: string;
		sectionTagId: number;
		slug: string;
	};
	parents: Array<{
		uri: string;
		data?: unknown;
		links?: Array<{
			rel: string;
			href: string;
			description?: string;
		}>;
	}>;
	externalReferences: Array<{
		type: string;
		token?: string | undefined;
	}>;
	path: string;
	contributorInformation: {
		lastName?: string | undefined;
		firstName?: string | undefined;
		twitterHandle?: string | undefined;
		rcsId?: string | undefined;
		contactEmail?: string | undefined;
		bylineImage?:
			| {
					imageId: string;
					assets: Array<{
						imageUrl: string;
						width: number;
						height: number;
						mimeType: string;
					}>;
			  }
			| undefined;
		largeBylineImage?:
			| {
					imageId: string;
					assets: Array<{
						imageUrl: string;
						width: number;
						height: number;
						mimeType: string;
					}>;
			  }
			| undefined;
	} | null;
	adBlockingLevel?: 'NONE' | 'SUGGEST' | 'FORCE' | undefined;
	contributionBlockingLevel?: 'NONE' | 'SUGGEST' | 'FORCE' | undefined;
};
