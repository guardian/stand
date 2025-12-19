import * as fs from 'fs';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import type { TokensFile } from './figma-utils';
import { tokenFilesFromLocalVariables } from './figma-utils';

type FigmaFile = {
	id: string;
	name: string;
	skipSemantic?: boolean;
};

const FigmaFiles: FigmaFile[] = [
	{
		id: 'wG6955GSVuE5ieuHMbBZSG',
		name: 'colors',
	},
	{
		id: 'sGUAN5t7uS05ZmCBI5KGTU',
		name: 'typography',
		skipSemantic: true,
	},
];

const FIGMA_API_OPTIONS = {
	headers: {
		'X-Figma-Token': process.env.FIGMA_TOKEN ?? '',
	},
};

const figmaApi = async <T>(url: string): Promise<T> => {
	const response = await fetch(
		`https://api.figma.com/v1/${url}`,
		FIGMA_API_OPTIONS,
	);
	return response.json() as Promise<T>;
};

void (async () => {
	const foundations: {
		base: Record<string, TokensFile>;
		semantic: Record<string, TokensFile>;
	} = {
		base: {},
		semantic: {},
	};

	for (const file of FigmaFiles) {
		const figmaResponse = await figmaApi<GetLocalVariablesResponse>(
			`files/${file.id}/variables/local`,
		);

		const tokenFiles = tokenFilesFromLocalVariables(figmaResponse);

		Object.entries(tokenFiles).forEach(
			([collectionName, collectionContent]) => {
				switch (collectionName.toLowerCase()) {
					case 'primitives':
					case 'base':
					case 'base font':
						foundations.base[file.name] = collectionContent;
						break;
					case 'semantic':
						{
							if (file.skipSemantic) {
								console.log(
									`Skipping semantic tokens for file: ${file.name}`,
								);
								break;
							}
							const jsonCollectionContent =
								JSON.stringify(collectionContent);
							const updatedJsonCollectionContent: TokensFile =
								JSON.parse(
									jsonCollectionContent.replace(
										/"\$value"\s*:\s*"\{([^}]+)\}"/g,
										(match, inner) => {
											return `"${'$value'}": "{base.${file.name}.${inner}}"`;
										},
									),
								) as TokensFile;

							foundations.semantic[file.name] =
								updatedJsonCollectionContent;
						}
						break;
					default:
						console.warn(
							`Unknown collection name: ${collectionName}`,
						);
						return; // Skip unknown collections
				}
			},
		);
	}

	const json = JSON.stringify(foundations, null, 2);

	fs.writeFileSync(`src/styleD/tokens/foundations/figma.json`, json);
	console.log(`Wrote src/styleD/tokens/foundations/figma.json`);
})();
