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
		const styles = itemStyles(theme, { size: 6 }).styles.replaceAll(/\s/g, '');
		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}`,
		);
	});

	it('serializes auto sizing', () => {
		const styles = itemStyles(theme, { size: 'auto' }).styles.replaceAll(
			/\s/g,
			'',
		);

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-basis:auto;flex-grow:0;flex-shrink:0;width:auto;max-width:none;;;}@media(min-width:830px){flex-basis:auto;flex-grow:0;flex-shrink:0;width:auto;max-width:none;;;}@media(min-width:1056px){flex-basis:auto;flex-grow:0;flex-shrink:0;width:auto;max-width:none;;;}`,
		);
	});

	it('serializes grow sizing', () => {
		const styles = itemStyles(theme, { size: 'grow' }).styles.replaceAll(
			/\s/g,
			'',
		);

		expect(styles).toBe(
			'min-width:0;@media(min-width:0px){flex-basis:0;flex-grow:1;max-width:100%;;;}@media(min-width:830px){flex-basis:0;flex-grow:1;max-width:100%;;;}@media(min-width:1056px){flex-basis:0;flex-grow:1;max-width:100%;;;}',
		);
	});

	it('defaults undefined size to full column span', () => {
		const styles = itemStyles(theme, {}).styles.replaceAll(/\s/g, '');

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}`,
		);
	});

	it('serializes responsive breakpoint sizes', () => {
		const styles = itemStyles(theme, {
			size: { sm: 12, md: 6, lg: 4 },
		}).styles.replaceAll(/\s/g, '');

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*4/12)+(4-1)*16px);width:calc(((100%-(12-1)*16px)*4/12)+(4-1)*16px);max-width:calc(((100%-(12-1)*16px)*4/12)+(4-1)*16px);;;}`,
		);
	});

	it('serializes a numeric offset as margin-left', () => {
		const styles = itemStyles(theme, { offset: 3 }).styles.replaceAll(
			/\s/g,
			'',
		);

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*3/12)+3*16px);;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*3/12)+3*16px);;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*3/12)+3*16px);;}`,
		);
	});

	it('clamps numeric size above theme.shared.columns', () => {
		const styles = itemStyles(theme, { size: 13 }).styles.replaceAll(/\s/g, '');

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;;}`,
		);
	});

	it('clamps numeric offset above theme.shared.columns', () => {
		const styles = itemStyles(theme, { offset: 13 }).styles.replaceAll(
			/\s/g,
			'',
		);

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*12/12)+12*16px);;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*12/12)+12*16px);;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*12/12)+12*16px);;}`,
		);
	});

	it('serializes offset=auto as margin-left: auto', () => {
		const styles = itemStyles(theme, { offset: 'auto' }).styles.replaceAll(
			/\s/g,
			'',
		);

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:auto;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:auto;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:auto;;}`,
		);
	});

	it('serializes responsive offsets with media queries', () => {
		const styles = itemStyles(theme, {
			offset: { sm: 0, md: 2, lg: 3 },
		}).styles.replaceAll(/\s/g, '');

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*0/12)+0*16px);;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*2/12)+2*16px);;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);max-width:calc(((100%-(12-1)*16px)*12/12)+(12-1)*16px);;margin-left:calc(((100%-(12-1)*16px)*3/12)+3*16px);;}`,
		);
	});

	it('does not emit offset styles when offset is undefined', () => {
		const styles = itemStyles(theme, { size: 6 }).styles.replaceAll(/\s/g, '');

		expect(styles).toBe(
			`min-width:0;@media(min-width:0px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}@media(min-width:830px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}@media(min-width:1056px){flex-grow:0;flex-basis:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);max-width:calc(((100%-(12-1)*16px)*6/12)+(6-1)*16px);;;}`,
		);
	});
});
