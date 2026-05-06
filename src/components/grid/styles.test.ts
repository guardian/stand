import { componentGrid } from '../../styleD/build/typescript/component/grid';
import { itemStyles } from './styles';

const theme = componentGrid;
const numericSizeExpr = (size: number): string =>
	`calc(((100% - (${theme.shared.columns} - 1) * ${theme.shared.gap}) * ${size} / ${theme.shared.columns}) + (${size} - 1) * ${theme.shared.gap})`;

const numericOffsetExpr = (offset: number): string =>
	`calc(((100% - (${theme.shared.columns} - 1) * ${theme.shared.gap}) * ${offset} / ${theme.shared.columns}) + ${offset} * ${theme.shared.gap})`;

describe('Grid - itemStyles', () => {
	it('serializes a numeric column span', () => {
		const styles = itemStyles(theme, { size: 6 }).styles;

		expect(styles).toContain('min-width: 0;');
		expect(styles).toContain(`flex-basis: ${numericSizeExpr(6)};`);
		expect(styles).toContain(`max-width: ${numericSizeExpr(6)};`);
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

	it('serializes responsive breakpoint sizes', () => {
		const styles = itemStyles(theme, { size: { sm: 12, md: 6, lg: 4 } }).styles;

		expect(styles).toContain('@media (min-width: 0px)');
		expect(styles).toContain('@media (min-width: 600px)');
		expect(styles).toContain('@media (min-width: 1024px)');
		expect(styles).toContain(`flex-basis: ${numericSizeExpr(12)};`);
		expect(styles).toContain(`flex-basis: ${numericSizeExpr(6)};`);
		expect(styles).toContain(`flex-basis: ${numericSizeExpr(4)};`);
	});

	it('serializes a numeric offset as margin-left', () => {
		const styles = itemStyles(theme, { offset: 3 }).styles;

		expect(styles).toContain(`margin-left: ${numericOffsetExpr(3)};`);
	});

	it('clamps numeric size above theme.shared.columns', () => {
		const styles = itemStyles(theme, { size: 13 }).styles;

		expect(styles).toContain(
			`flex-basis: ${numericSizeExpr(theme.shared.columns)};`,
		);
		expect(styles).not.toContain(`flex-basis: ${numericSizeExpr(13)};`);
	});

	it('clamps numeric offset above theme.shared.columns', () => {
		const styles = itemStyles(theme, { offset: 13 }).styles;

		expect(styles).toContain(
			`margin-left: ${numericOffsetExpr(theme.shared.columns)};`,
		);
		expect(styles).not.toContain(`margin-left: ${numericOffsetExpr(13)};`);
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
		expect(styles).toContain('@media (min-width: 600px)');
		expect(styles).toContain('@media (min-width: 1024px)');
		expect(styles).toContain(`margin-left: ${numericOffsetExpr(2)};`);
		expect(styles).toContain(`margin-left: ${numericOffsetExpr(3)};`);
	});

	it('does not emit offset styles when offset is undefined', () => {
		const styles = itemStyles(theme, { size: 6 }).styles;

		expect(styles).not.toContain('margin-left');
	});
});
