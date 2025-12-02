import { Node } from 'prosemirror-model';
import { detectNameInText, hasHitContributorLimit } from './lib';
import { bylineEditorSchema } from './schema';

describe('hasHitContributorLimit', () => {
	it('returns false when the limit does not exist', () => {
		const testDoc = new Node();

		const result = hasHitContributorLimit(testDoc, undefined);

		expect(result).toBe(false);
	});
	it('returns false when there are fewer nodes than the limit', () => {
		const testDoc = bylineEditorSchema.nodes.doc.create({}, [
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 1' }),
			bylineEditorSchema.text('Test'),
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 2' }),
		]);

		const result = hasHitContributorLimit(testDoc, 3);

		expect(result).toBe(false);
	});
	it('returns true when there are as many nodes as the limit', () => {
		const testDoc = bylineEditorSchema.nodes.doc.create({}, [
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 1' }),
			bylineEditorSchema.text('Test'),
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 2' }),
		]);

		const result = hasHitContributorLimit(testDoc, 2);

		expect(result).toBe(true);
	});
	it('returns true when there are more nodes than the limit', () => {
		const testDoc = bylineEditorSchema.nodes.doc.create({}, [
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 1' }),
			bylineEditorSchema.text('Test'),
			bylineEditorSchema.nodes.chip.create({ label: 'Test Chip 2' }),
		]);

		const result = hasHitContributorLimit(testDoc, 2);

		expect(result).toBe(true);
	});
});

describe('detectNameInText', () => {
	it('matches basic names with spaces', () => {
		const text = 'John Smith and Mary Jane Watson';

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('John Smith');
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(11);

		const result2 = detectNameInText(text, 15);
		expect(result2?.name).toBe('Mary Jane Watson');
		expect(result2?.startIndex).toBe(15);
		expect(result2?.endIndex).toBe(31);
	});

	it('matches names with periods (initials)', () => {
		const text = 'A.C Skinner and J.R.R Tolkien';

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('A.C Skinner');
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(12);

		const result2 = detectNameInText(text, 16);
		expect(result2?.name).toBe('J.R.R Tolkien');
		expect(result2?.startIndex).toBe(16);
		expect(result2?.endIndex).toBe(29);
	});

	it('matches names with apostrophes (both straight and curly)', () => {
		const text = "A'Name B Surname and M.D O’Neill";

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe("A'Name B Surname");
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(17);

		const result2 = detectNameInText(text, 21);
		expect(result2?.name).toBe('M.D O’Neill');
		expect(result2?.startIndex).toBe(21);
		expect(result2?.endIndex).toBe(32);
	});

	it('matches names with ampersands', () => {
		const text = 'Waz&Lenny';

		const result = detectNameInText(text, 0);
		expect(result?.name).toBe('Waz&Lenny');
		expect(result?.startIndex).toBe(0);
		expect(result?.endIndex).toBe(9);
	});

	it('matches names with hyphens', () => {
		const text = 'Mary-Jane Watson played by Jean-Claude Van Damme';

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('Mary-Jane Watson');
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(17);

		const result2 = detectNameInText(text, 27);
		expect(result2?.name).toBe('Jean-Claude Van Damme');
		expect(result2?.startIndex).toBe(27);
		expect(result2?.endIndex).toBe(48);
	});

	it('handles multiple names in a string correctly when there is a . followed by a space', () => {
		const text = 'A.C Skinner. J.R.R Tolkien';
		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('A.C Skinner');
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(11);

		const result2 = detectNameInText(text, 13);
		expect(result2?.name).toBe('J.R.R Tolkien');
		expect(result2?.startIndex).toBe(13);
		expect(result2?.endIndex).toBe(26);
	});

	it('handles complex combinations', () => {
		const text =
			"A.B.C D’Artagnan-Jones. E.F.G Huckleberry Finn and H'G Wells";

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('A.B.C D’Artagnan-Jones');
		expect(result1?.startIndex).toBe(0);
		expect(result1?.endIndex).toBe(22);

		const result2 = detectNameInText(text, 24);
		expect(result2?.name).toBe('E.F.G Huckleberry Finn');
		expect(result2?.startIndex).toBe(24);
		expect(result2?.endIndex).toBe(47);

		const result3 = detectNameInText(text, 51);
		expect(result3?.name).toBe("H'G Wells");
		expect(result3?.startIndex).toBe(51);
		expect(result3?.endIndex).toBe(60);
	});

	it('does not match lowercase starting words', () => {
		const result1 = detectNameInText(
			'a.b.c d’artagnan-jones. e.f.g huckleberry finn and john smith',
			0,
		);
		expect(result1).toBeUndefined();
	});

	it('returns undefined when cursor is not within a name', () => {
		const text = 'A.C Skinner. And then';
		const result = detectNameInText(text, 12);
		expect(result).toBeUndefined();
	});

	it('handles cursor at different positions within the same name', () => {
		const text = 'John Smith and Jane Doe';

		const result1 = detectNameInText(text, 0);
		expect(result1?.name).toBe('John Smith');

		const result2 = detectNameInText(text, 5);
		expect(result2?.name).toBe('John Smith');

		const result3 = detectNameInText(text, 10);
		expect(result3?.name).toBe('John Smith');

		const result4 = detectNameInText(text, 12);
		expect(result4?.name).toBeUndefined();

		const result5 = detectNameInText(text, 15);
		expect(result5?.name).toBe('Jane Doe');
	});
});
