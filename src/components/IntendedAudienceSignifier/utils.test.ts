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
		expect(mapTagsToSourceAndTarget([auTrackingTag])).toEqual({
			source: 'au',
			target: 'au',
		});
		expect(mapTagsToSourceAndTarget([ukTrackingTag])).toEqual({
			source: 'uk',
			target: 'uk',
		});
		expect(mapTagsToSourceAndTarget([usTrackingTag])).toEqual({
			source: 'us',
			target: 'us',
		});

		// Global
		expect(mapTagsToSourceAndTarget([globalTrackingTag])).toEqual({
			source: 'global',
			target: 'global',
		});

		// Domestic to global
		expect(
			mapTagsToSourceAndTarget([auTrackingTag, globalTrackingTag]),
		).toEqual({ source: 'au', target: 'global' });
		expect(
			mapTagsToSourceAndTarget([globalTrackingTag, ukTrackingTag]),
		).toEqual({ source: 'uk', target: 'global' });
		expect(
			mapTagsToSourceAndTarget([usTrackingTag, globalTrackingTag]),
		).toEqual({ source: 'us', target: 'global' });

		// No tags
		expect(mapTagsToSourceAndTarget([])).toBeUndefined();

		// No audience tags
		expect(mapTagsToSourceAndTarget([{ path: 'wat' }])).toBeUndefined();

		// Unrecognised audience tags
		expect(
			mapTagsToSourceAndTarget([{ path: '/tracking/audience/wat' }]),
		).toBeUndefined();
	});
});
