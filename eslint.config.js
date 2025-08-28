// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import guardian from "@guardian/eslint-config";

export default [{
    ignores: ["dist"],
}, ...guardian.configs.recommended, ...guardian.configs.jest, ...guardian.configs.react, ...storybook.configs["flat/recommended"]];
