/**
 *
 * Generator that intersperses a fixed delimiter between each item in an iterable
 *
 * @param iterable
 * @param delimiter
 */
export function* intersperse<T>(iterable: Iterable<T>, delimiter: T) {
	let first = true;
	for (const i of iterable) {
		if (!first) {
			yield delimiter;
		}
		yield i;
		first = false;
	}
}
