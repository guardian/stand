import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
	transform: {
		...tsJestTransformCfg,
	},
};
