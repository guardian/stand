export const sortEntriesByValue = <T extends [string, string]>(entries: T[]) =>
	entries.sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]));
