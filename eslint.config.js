import guardian from "@guardian/eslint-config";

export default [
    {
        ignores: ["dist"],
    },
    ...guardian.configs.recommended,
    ...guardian.configs.jest,
    ...guardian.configs.react,
];
