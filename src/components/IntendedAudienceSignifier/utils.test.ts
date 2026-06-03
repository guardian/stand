import { mapTagsToSourceAndTarget, type Tag } from './utils';

const auTrackingTag: Tag = {
	path: 'tracking/audience/au',
};

const globalTrackingTag: Tag = {
	path: 'tracking/audience/global',
};

const ukTrackingTag: Tag = {
	path: 'tracking/audience/uk',
};

const usTrackingTag: Tag = {
	path: 'tracking/audience/us',
};

describe('mapTagsToSourceAndTarget', () => {
	it('should map tags into props that can be used by the signifier component', () => {
		// Domestic
		expect(mapTagsToSourceAndTarget([auTrackingTag])).toEqual(['au', 'au']);
		expect(mapTagsToSourceAndTarget([ukTrackingTag])).toEqual(['uk', 'uk']);
		expect(mapTagsToSourceAndTarget([usTrackingTag])).toEqual(['us', 'us']);

		// Global
		expect(mapTagsToSourceAndTarget([globalTrackingTag])).toEqual([
			'global',
			'global',
		]);

		// Domestic to global
		expect(
			mapTagsToSourceAndTarget([auTrackingTag, globalTrackingTag]),
		).toEqual(['au', 'global']);
		expect(
			mapTagsToSourceAndTarget([globalTrackingTag, ukTrackingTag]),
		).toEqual(['uk', 'global']);
		expect(
			mapTagsToSourceAndTarget([usTrackingTag, globalTrackingTag]),
		).toEqual(['us', 'global']);

		// No tags
		expect(mapTagsToSourceAndTarget([])).toEqual([undefined, undefined]);

		// No audience tags
		expect(mapTagsToSourceAndTarget([{ path: 'wat' }])).toEqual([
			undefined,
			undefined,
		]);

		// Unrecognised audience tags
		expect(
			mapTagsToSourceAndTarget([{ path: '/tracking/audience/wat' }]),
		).toEqual([undefined, undefined]);
	});
});
