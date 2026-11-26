import { createJsWithTsPreset } from 'ts-jest';

const tsJestTransformCfg = createJsWithTsPreset().transform;

/** @type {import("jest").Config} **/
export default {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
	transform: {
		...tsJestTransformCfg,
	},
	moduleNameMapper: {
		'\\.css\\?inline$': '<rootDir>/mocks/mockInlineCss.js',
	},
	modulePathIgnorePatterns: ['playwright'],
};
