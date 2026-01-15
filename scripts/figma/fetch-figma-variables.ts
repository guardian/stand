import * as fs from 'fs';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import type { Token, TokensFile } from './figma-utils';
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
	{
		id: 'uetPMWv7o6OdHG9lQH6B1r',
		name: 'spacing',
		skipSemantic: true,
	},
	{
		id: 'H6Lze9W1D9o4zQZWVBqHo1',
		name: 'radius',
		skipSemantic: true,
	},
	{
		id: 'H4NLEgB7dLSrW08YtEsIeO',
		name: 'sizing',
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

	if (response.status === 429) {
		const retryAfter = response.headers.get('Retry-After');
		const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : 60000; // Default to 60s if header missing
		console.log(
			`Rate limited. Waiting ${waitTime / 1000} seconds before retrying...`,
		);
		await delay(waitTime);
		return figmaApi<T>(url); // Retry the request
	}

	return response.json() as Promise<T>;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const addRemTokens = (tokens: TokensFile): void => {
	Object.entries(tokens).forEach(([key, value]) => {
		// If this is a token group (has nested properties), recurse
		if (typeof value === 'object' && !('$value' in value)) {
			addRemTokens(value as TokensFile);
			return;
		}

		// If this is a token ending in -px, create a -rem equivalent
		if (
			key.endsWith('-px') &&
			typeof value === 'object' &&
			'$value' in value &&
			typeof value.$value === 'string'
		) {
			const pxMatch = value.$value.match(/^(-?\d+(?:\.\d+)?)px$/);
			if (pxMatch) {
				const pxValue = parseFloat(pxMatch[1]!);
				const remValue = pxValue / 16;
				const remKey = key.replace(/-px$/, '-rem');

				// Add the rem token at the same level
				(tokens as Record<string, Token>)[remKey] = {
					$type: value.$type,
					$value: `${remValue}rem`,
				};
			}
		}
	});
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
		console.log(`Fetching variables for ${file.name}...`);
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
					case 'spacing':
					case 'radius':
					case 'height':
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

	// Add rem equivalents for all -px tokens
	Object.values(foundations.base).forEach((collection) => {
		addRemTokens(collection);
	});
	Object.values(foundations.semantic).forEach((collection) => {
		addRemTokens(collection);
	});

	const json = JSON.stringify(foundations, null, 2);

	if (process.env.FIGMA_DRY_RUN === 'true') {
		console.log('DRY RUN - not writing figma.json file');
		console.log(json);
		return;
	}

	fs.writeFileSync(`src/styleD/tokens/foundations/figma.json`, json);
	console.log(`Wrote src/styleD/tokens/foundations/figma.json`);
})();
