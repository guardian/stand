import { intersperse } from './intersperse';

describe('intersperse', () => {
	test('intersperses delimter between elements', () => {
		const elements = ['a', 'b', 'c'];
		expect(Array.from(intersperse(elements, 'x'))).toEqual([
			'a',
			'x',
			'b',
			'x',
			'c',
		]);
	});

	test('does not add delimiter into list with a single item', () => {
		const elements = ['a'];
		expect(Array.from(intersperse(elements, 'x'))).toEqual(['a']);
	});

	test('does not add delimiter into an empty list', () => {
		const elements: string[] = [];
		expect(Array.from(intersperse(elements, 'x'))).toEqual([]);
	});
});
