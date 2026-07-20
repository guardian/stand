import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { useFigmaToDTCG } from '@tfk-samf/figma-to-dtcg';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

void (async () => {
	// colors: wG6955GSVuE5ieuHMbBZSG
	// typography: sGUAN5t7uS05ZmCBI5KGTU
	// spacing: uetPMWv7o6OdHG9lQH6B1r
	// radius: H6Lze9W1D9o4zQZWVBqHo1
	// sizing: H4NLEgB7dLSrW08YtEsIeO
	// grid:  aZigs0F88LxByBMkBWhir2

	const fileId = 'aZigs0F88LxByBMkBWhir2';

	const response = await figmaApi<GetLocalVariablesResponse>(
		`files/${fileId}/variables/local`,
	);

	const { tokens } = await useFigmaToDTCG({
		api: 'rest',
		response,
	});

	console.dir(tokens, { depth: null });
})();
