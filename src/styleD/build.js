import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('config.js');
await sd.buildAllPlatforms();
