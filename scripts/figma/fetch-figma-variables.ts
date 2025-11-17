import * as fs from 'fs';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { tokenFilesFromLocalVariables } from './figma-utils';

const FIGMA_FILE_KEY = 'wG6955GSVuE5ieuHMbBZSG';

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
	const figmaResponse = await figmaApi<GetLocalVariablesResponse>(
		`files/${FIGMA_FILE_KEY}/variables/local`,
	);

	const tokenFiles = tokenFilesFromLocalVariables(figmaResponse);
	console.log(tokenFiles);

	Object.entries(tokenFiles).forEach(([fileName, fileContent]) => {
		fs.writeFileSync(
			`src/styleD/tokens/${fileName}`,
			JSON.stringify(fileContent, null, 2),
		);
		console.log(`Wrote ${fileName}`);
	});
})();
