import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('config.js', {
	verbosity: 'verbose',
});
await sd.buildAllPlatforms();
