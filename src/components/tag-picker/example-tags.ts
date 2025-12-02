import type { TagManagerObjectData } from './types';

const worldNewsSection: TagManagerObjectData['section'] = {
	id: 342,
	name: 'World news',
	slug: 'world',
	pathPrefix: 'world',
	sectionTagId: 9234,
};

const lifeAndStyleSection: TagManagerObjectData['section'] = {
	id: 196,
	name: 'Life and style',
	slug: 'lifeandstyle',
	pathPrefix: 'lifeandstyle',
	sectionTagId: 8857,
};

const globalSection: TagManagerObjectData['section'] = {
	id: 281,
	name: 'Global',
	pathPrefix: 'global',
	slug: 'global',
	sectionTagId: 14821,
};

const booksSection: TagManagerObjectData['section'] = {
	id: 187,
	name: 'Books',
	pathPrefix: 'books',
	slug: 'books',
	sectionTagId: 8802,
};

const chickenTag: TagManagerObjectData = {
	id: 58843,
	path: 'lifeandstyle/chicken',
	type: 'Topic',
	internalName: 'Chicken (food and drink)',
	externalName: 'Chicken',
	slug: 'chicken',
	section: lifeAndStyleSection,
	parents: [],
	externalReferences: [],
	contributorInformation: null,
};
const riceTag: TagManagerObjectData = {
	id: 60180,
	path: 'lifeandstyle/rice',
	type: 'Topic',
	internalName: 'Rice',
	externalName: 'Rice',
	slug: 'rice',
	section: lifeAndStyleSection,
	parents: [],
	externalReferences: [],
	contributorInformation: null,
};

const boliviaTag: TagManagerObjectData = {
	id: 19843,
	path: 'world/bolivia',
	type: 'Topic',
	internalName: 'Bolivia (News)',
	externalName: 'Bolivia',
	slug: 'bolivia',
	section: worldNewsSection,
	parents: [],
	externalReferences: [],
	contributorInformation: null,
};

const weLoveSeriesTag: TagManagerObjectData = {
	id: 71519,
	path: 'lifeandstyle/series/we-love',
	type: 'Series',
	internalName: 'We love (series)',
	externalName: 'We love',
	slug: 'we-love',
	section: lifeAndStyleSection,
	parents: [],
	externalReferences: [],
	contributorInformation: null,
};

const reviewTag: TagManagerObjectData = {
	id: 19805,
	path: 'tone/reviews',
	type: 'Tone',
	internalName: 'Review (Tone)',
	externalName: 'Reviews',
	slug: 'reviews',
	section: globalSection,
	parents: [],
	externalReferences: [],
	contributorInformation: null,
};

const worldNewsTag: TagManagerObjectData = {
	id: 9234,
	type: 'Keyword',
	internalName: 'World news',
	externalName: 'World news',
	slug: 'world',
	section: worldNewsSection,
	parents: [],
	externalReferences: [],
	path: 'world/world',
	contributorInformation: null,
};

const paidContentTestTag: TagManagerObjectData = {
	id: 73671,
	type: 'PaidContent',
	internalName: 'paid content test',
	externalName: 'paid content test',
	slug: 'paid-content-test',
	section: globalSection,
	parents: [],
	externalReferences: [],
	path: 'paid-content-test',
	contributorInformation: null,
};

const adFeaturesToneTag: TagManagerObjectData = {
	id: 61349,
	type: 'Tone',
	internalName: 'Advertisement feature (Tone)',
	externalName: 'Advertisement features',
	slug: 'advertisement-features',
	section: globalSection,
	parents: [],
	externalReferences: [],
	path: 'tone/advertisement-features',
	contributorInformation: null,
};

const blockAdsTag: TagManagerObjectData = {
	id: 73886,
	type: 'Keyword',
	internalName: 'Block Ads, Please',
	externalName: 'Block Ads, Please',
	slug: 'block-ads--please',
	section: {
		id: 5378,
		name: 'Australia news 123',
		pathPrefix: 'australia-news',
		sectionTagId: 65774,
		slug: 'australia-news',
	},
	parents: [],
	externalReferences: [],
	path: 'australia-news/block-ads--please',
	contributorInformation: null,
	adBlockingLevel: 'SUGGEST',
	contributionBlockingLevel: 'NONE',
};

const foodSafetyTag: TagManagerObjectData = {
	id: 44419,
	type: 'Keyword',
	internalName: 'Food safety',
	externalName: 'Food safety',
	slug: 'food-safety',
	section: worldNewsSection,
	parents: [
		{
			uri: 'https://tagmanager.code.dev-gutools.co.uk/hyper/tags/8958',
			links: [],
		},
		{
			uri: 'https://tagmanager.code.dev-gutools.co.uk/hyper/tags/8857',
			links: [],
		},
	],
	externalReferences: [],
	path: 'world/food-safety',
	contributorInformation: null,
};

const foodAndDrinkTag: TagManagerObjectData = {
	id: 8958,
	type: 'Keyword',
	internalName: 'Food and drink (Life and style)',
	externalName: 'Food & drink',
	slug: 'food-and-drink',
	section: lifeAndStyleSection,
	parents: [],
	externalReferences: [
		{ type: 'BOOK_SHOP', token: 'FoodAndDrink' },
		{
			type: 'SHOPPING_READER_OFFERS',
			token: 'FoodAndDrink',
		},
	],
	path: 'lifeandstyle/food-and-drink',
	contributorInformation: null,
};

const lifeAndStyleTag: TagManagerObjectData = {
	id: 8857,
	type: 'Keyword',
	internalName: 'Life and style',
	externalName: 'Life and style',
	slug: 'lifeandstyle',
	section: lifeAndStyleSection,
	parents: [],
	externalReferences: [
		{ type: 'JOBS_BOX_CAMPAIGN', token: 'INTCMP=ILCLIFTXT194' },
		{ type: 'TWITTER_ACCOUNTS', token: 'lifeandstyle' },
	],
	path: 'lifeandstyle/lifeandstyle',
	contributorInformation: null,
};

const williamGibsonTag: TagManagerObjectData = {
	id: 24562,
	type: 'Keyword',
	internalName: 'William Gibson (Author)',
	externalName: 'William Gibson',
	slug: 'williamgibson',
	section: booksSection,
	parents: [],
	externalReferences: [],
	path: 'books/williamgibson',
	contributorInformation: null,
};

const blogpostTag: TagManagerObjectData = {
	id: 24335,
	type: 'Tone',
	internalName: 'Blogpost (Tone)',
	externalName: 'Blogposts',
	slug: 'blogpost',
	section: globalSection,
	parents: [],
	externalReferences: [],
	path: 'tone/blog',
	contributorInformation: null,
};

const minuteByMinuteTag: TagManagerObjectData = {
	id: 22394,
	type: 'Tone',
	internalName: 'Minute by minute (Tone)',
	externalName: 'Minute by minutes',
	slug: 'minutebyminute',
	section: globalSection,
	parents: [],
	externalReferences: [],
	path: 'tone/minutebyminute',
	contributorInformation: null,
};

const nanotechnologyTag: TagManagerObjectData = {
	id: 11650,
	type: 'Keyword',
	internalName: 'Nanotechnology',
	externalName: 'Nanotechnology',
	slug: 'nanotechnology',
	section: {
		id: 206,
		name: 'Science',
		pathPrefix: 'science',
		slug: 'science',
		sectionTagId: 9444,
	},
	parents: [],
	externalReferences: [],
	path: 'science/nanotechnology',
	contributorInformation: null,
};

const badgersTag: TagManagerObjectData = {
	id: 43865,
	type: 'Keyword',
	internalName: 'Badgers (environment)',
	externalName: 'Badgers',
	slug: 'badgers',
	section: {
		id: 199,
		name: 'Environment',
		pathPrefix: 'environment',
		slug: 'environment',
		sectionTagId: 9046,
	},
	parents: [
		{ uri: 'https://tag.guardianapis.com/tags/13141' },
		{ uri: 'https://tag.guardianapis.com/tags/29638' },
	],
	externalReferences: [],
	path: 'environment/badgers',
	contributorInformation: null,
};

export const exampleTags: TagManagerObjectData[] = [
	chickenTag,
	riceTag,
	boliviaTag,
	weLoveSeriesTag,
	reviewTag,
	worldNewsTag,
	paidContentTestTag,
	adFeaturesToneTag,
	blockAdsTag,
	foodSafetyTag,
	foodAndDrinkTag,
	lifeAndStyleTag,
	badgersTag,
	williamGibsonTag,
	blogpostTag,
	minuteByMinuteTag,
	nanotechnologyTag,
];
