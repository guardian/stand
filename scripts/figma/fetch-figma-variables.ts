import * as fs from 'fs';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import type { TokensFile } from './figma-utils';
import { tokenFilesFromLocalVariables } from './figma-utils';

const FigmaFiles = [
	{
		id: 'wG6955GSVuE5ieuHMbBZSG',
		name: 'colors',
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
	console.log('response', response);
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
		console.log('tokenFiles', tokenFiles);

		Object.entries(tokenFiles).forEach(
			([collectionName, collectionContent]) => {
				if (collectionName.toLowerCase() === 'primitives') {
					foundations.base[file.name] = collectionContent;
				}

				if (collectionName.toLowerCase() === 'semantic') {
					const jsonCollectionContent =
						JSON.stringify(collectionContent);
					const updatedJsonCollectionContent: TokensFile = JSON.parse(
						jsonCollectionContent.replace(
							/"\$value"\s*:\s*"\{([^}]+)\}"/g,
							(match, inner) =>
								`"${'$value'}": "{base.${file.name}.${inner}}"`,
						),
					) as TokensFile;

					foundations.semantic[file.name] =
						updatedJsonCollectionContent;
				}
			},
		);
	}

	const json = JSON.stringify(foundations, null, 2);

	fs.writeFileSync(`src/styleD/tokens/foundations.json`, json);
	console.log(`Wrote foundations.json`);
})();
