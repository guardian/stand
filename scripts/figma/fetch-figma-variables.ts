import * as fs from 'fs';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import type { Token, TokensFile } from './figma-utils';
import { spacingTokens, tokenFilesFromLocalVariables } from './figma-utils';

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
	},
	{
		id: 'H6Lze9W1D9o4zQZWVBqHo1',
		name: 'radius',
	},
	{
		id: 'H4NLEgB7dLSrW08YtEsIeO',
		name: 'sizing',
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

	if (response.status === 401) {
		throw new Error(
			'Unauthorized. Please check your FIGMA_TOKEN environment variable.',
		);
	}

	if (response.status === 403) {
		throw new Error(
			'Access forbidden. Please check your FIGMA_TOKEN environment variable.',
		);
	}

	if (response.status === 404) {
		throw new Error(
			`Resource not found at ${url}. Please check the Figma file ID and your access permissions.`,
		);
	}

	if (response.status === 429) {
		const retryAfter = response.headers.get('Retry-After');
		const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : 60000; // Default to 60s if header missing
		console.log(
			`Rate limited. Waiting ${waitTime / 1000} seconds before retrying...`,
		);
		await delay(waitTime);
		return figmaApi<T>(url); // Retry the request
	}

	if (!response.ok) {
		throw new Error(
			`Figma API request failed with status ${response.status}: ${response.statusText}`,
		);
	}

	return response.json() as Promise<T>;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Recursively generates rem equivalents for all px-based dimension tokens in base foundations.
 *
 * For each token ending in `-px`, this function:
 * 1. Extracts the numeric px value from the token
 * 2. Converts it to rem by dividing by 16 (assuming 16px = 1rem base font size)
 * 3. Creates a new sibling token with `-rem` suffix
 *
 * This dual-unit approach allows consumers to choose between px or rem units while
 * maintaining a single source of truth from Figma. Rem units are preferred for
 * accessibility and responsive design, as they respect user font size preferences.
 *
 * Example: `size-24-px: "24px"` → generates `size-24-rem: "1.5rem"`
 *
 * @param tokens - The base token collection to process (modified in place)
 */
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

/**
 * Recursively updates semantic tokens to reference base tokens with proper suffixes and types.
 *
 * For spacing tokens (identified via spacingTokens prefixes), this function:
 * 1. Appends `-rem` to the base token reference to use rem units instead of px
 * 2. Changes the `$type` from `number` to `dimension` to match the W3C Design Tokens spec
 *
 * This transformation is necessary because Figma variables use `number` type for dimensions,
 * but our design token system uses `dimension` type with explicit units (rem/px).
 * By referencing the -rem variants, we ensure consistent rem-based spacing throughout the system.
 *
 * @param tokens - The semantic token collection to transform
 * @param fileName - The name of the Figma file (used to construct base token references)
 * @returns A new TokensFile with updated references and types
 */
const updateTokenReferences = (
	tokens: TokensFile,
	fileName: string,
): TokensFile => {
	const updated: TokensFile = {};

	Object.entries(tokens).forEach(([key, value]) => {
		// If this is a token group (has nested properties), recurse
		if (typeof value === 'object' && !('$value' in value)) {
			updated[key] = updateTokenReferences(
				value as TokensFile,
				fileName,
			) as Record<string, Token>;
			return;
		}

		// If this is a token with a $value reference
		if (
			typeof value === 'object' &&
			'$value' in value &&
			typeof value.$value === 'string'
		) {
			const refMatch = value.$value.match(/^\{([^}]+)\}$/);
			if (refMatch) {
				const refPath = refMatch[1]!;
				const isSpacingToken = spacingTokens.some((token) =>
					refPath.includes(token.prefix),
				);

				if (isSpacingToken) {
					// Update to reference -rem variant and change $type to dimension
					updated[key] = {
						...value,
						$type: 'dimension',
						$value: `{base.${fileName}.${refPath}-rem}`,
					};
				} else {
					updated[key] = {
						...value,
						$value: `{base.${fileName}.${refPath}}`,
					};
				}
			} else {
				updated[key] = value;
			}
		} else {
			updated[key] = value;
		}
	});

	return updated;
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
								console.log(`Skipping semantic tokens for file: ${file.name}`);
								break;
							}

							foundations.semantic[file.name] = updateTokenReferences(
								collectionContent,
								file.name,
							);
						}
						break;
					default:
						console.warn(`Unknown collection name: ${collectionName}`);
						return; // Skip unknown collections
				}
			},
		);
	}

	// Add rem equivalents for all -px tokens in base foundations
	Object.values(foundations.base).forEach((collection) => {
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
