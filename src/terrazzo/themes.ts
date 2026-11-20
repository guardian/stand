/**
 * The themes and modes defined in this file must be kept in sync with the
 * resolver in order for Terrazzo to correctly build all permutations
 */

export const themes = [
	'blue',
	'coolPurple',
	'cyan',
	'magenta',
	'orange',
	'teal',
	'warmPurple',
] as const;

export const modes = ['light', 'dark'] as const;

export type Theme = (typeof themes)[number];
export type Mode = (typeof modes)[number];
