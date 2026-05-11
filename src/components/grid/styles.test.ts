import { componentGrid } from '../../styleD/build/typescript/component/grid';
import { gridStyles, itemStyles } from './styles';

const theme = componentGrid;

describe('Grid - gridStyles', () => {
	it('always serializes width: 100%', () => {
		const styles = gridStyles(theme).styles;

		expect(styles).toContain('width: 100%;');
	});
});

describe('Grid - itemStyles', () => {
	it('serializes a numeric column span', () => {
		const styles = itemStyles(theme, { size: 6 }).styles;

		expect(styles).toContain('min-width: 0;');
		expect(styles).toContain(
			`calc(((100% - (12 - 1) * 8px) * 6 / 12) + (6 - 1) * 8px)`,
		);
		expect(styles).toContain(
			`calc(((100% - (12 - 1) * 8px) * 6 / 12) + (6 - 1) * 8px)`,
		);
	});

	it('serializes auto sizing', () => {
		const styles = itemStyles(theme, { size: 'auto' }).styles;

		expect(styles).toContain('flex-basis: auto;');
		expect(styles).toContain('flex-grow: 0;');
		expect(styles).toContain('flex-shrink: 0;');
		expect(styles).toContain('width: auto;');
		expect(styles).toContain('max-width: none;');
	});

	it('serializes grow sizing', () => {
		const styles = itemStyles(theme, { size: 'grow' }).styles;

		expect(styles).toContain('flex-basis: 0;');
		expect(styles).toContain('flex-grow: 1;');
		expect(styles).toContain('max-width: 100%;');
	});

	it('defaults undefined size to full column span', () => {
		const styles = itemStyles(theme, {}).styles;

		expect(styles).toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 12 / 12) + (12 - 1) * 8px);`,
		);
		expect(styles).toContain(
			`max-width: calc(((100% - (12 - 1) * 8px) * 12 / 12) + (12 - 1) * 8px);`,
		);
	});

	it('serializes responsive breakpoint sizes', () => {
		const styles = itemStyles(theme, { size: { sm: 12, md: 6, lg: 4 } }).styles;

		expect(styles).toContain('@media (min-width: 0px)');
		expect(styles).toContain('@media (min-width: 830px)');
		expect(styles).toContain('@media (min-width: 1056px)');
		expect(styles).toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 12 / 12) + (12 - 1) * 8px);`,
		);
		expect(styles).toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 6 / 12) + (6 - 1) * 8px);`,
		);
		expect(styles).toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 4 / 12) + (4 - 1) * 8px);`,
		);
	});

	it('serializes a numeric offset as margin-left', () => {
		const styles = itemStyles(theme, { offset: 3 }).styles;

		expect(styles).toContain(
			`margin-left: calc(((100% - (12 - 1) * 8px) * 3 / 12) + 3 * 8px);`,
		);
	});

	it('clamps numeric size above theme.shared.columns', () => {
		const styles = itemStyles(theme, { size: 13 }).styles;

		expect(styles).toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 12 / 12) + (12 - 1) * 8px);`,
		);
		expect(styles).not.toContain(
			`flex-basis: calc(((100% - (12 - 1) * 8px) * 13 / 12) + (13 - 1) * 8px);`,
		);
	});

	it('clamps numeric offset above theme.shared.columns', () => {
		const styles = itemStyles(theme, { offset: 13 }).styles;

		expect(styles).toContain(
			`calc(((100% - (12 - 1) * 8px) * 12 / 12) + 12 * 8px);`,
		);
		expect(styles).not.toContain(
			`calc(((100% - (12 - 1) * 8px) * 13 / 12) + 13 * 8px);`,
		);
	});

	it('serializes offset=auto as margin-left: auto', () => {
		const styles = itemStyles(theme, { offset: 'auto' }).styles;

		expect(styles).toContain('margin-left: auto;');
	});

	it('serializes responsive offsets with media queries', () => {
		const styles = itemStyles(theme, {
			offset: { sm: 0, md: 2, lg: 3 },
		}).styles;

		expect(styles).toContain('@media (min-width: 0px)');
		expect(styles).toContain('@media (min-width: 830px)');
		expect(styles).toContain('@media (min-width: 1056px)');
		expect(styles).toContain(
			`margin-left: calc(((100% - (12 - 1) * 8px) * 0 / 12) + 0 * 8px);`,
		);
		expect(styles).toContain(
			`margin-left: calc(((100% - (12 - 1) * 8px) * 2 / 12) + 2 * 8px);`,
		);
		expect(styles).toContain(
			`margin-left: calc(((100% - (12 - 1) * 8px) * 3 / 12) + 3 * 8px);`,
		);
	});

	it('does not emit offset styles when offset is undefined', () => {
		const styles = itemStyles(theme, { size: 6 }).styles;

		expect(styles).not.toContain('margin-left');
	});
});
