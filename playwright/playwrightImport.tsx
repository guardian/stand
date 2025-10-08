// This file is used to dynamically import the correct Playwright component testing library for the compatibility testing
const playwrightComponentTestReact = (await import(
	process.env.PLAYWRIGHT_CT_REACT_18 === 'true'
		? '@playwright/experimental-ct-react'
		: '@playwright/experimental-ct-react17'
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports -- playwright import type assertion
)) as typeof import('@playwright/experimental-ct-react17');

// eslint-disable-next-line import/no-default-export -- use default export for playwright
export default playwrightComponentTestReact;
