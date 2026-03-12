import type { ButtonTheme, PartialButtonTheme } from '../button/styles';
import { buttonStyles, defaultButtonTheme } from '../button/styles';

export type LinkButtonTheme = ButtonTheme;
export type PartialLinkButtonTheme = PartialButtonTheme;

export const defaultLinkButtonTheme: ButtonTheme = defaultButtonTheme;

export const linkButtonStyles = buttonStyles;
