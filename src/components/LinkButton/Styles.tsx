import type { ButtonTheme, PartialButtonTheme } from '../Button/styles';
import { buttonStyles, defaultButtonTheme } from '../Button/styles';

export type LinkButtonTheme = ButtonTheme;
export type PartialLinkButtonTheme = PartialButtonTheme;

export const defaultLinkButtonTheme: ButtonTheme = defaultButtonTheme;

export const linkButtonStyles = buttonStyles;
