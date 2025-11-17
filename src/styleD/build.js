// eslint-disable-next-line import/no-unresolved -- not sure why it's unresolved
import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('config.js');
await sd.buildAllPlatforms();
