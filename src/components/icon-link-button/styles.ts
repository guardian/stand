import type { ButtonTheme, PartialButtonTheme } from '../button/styles';
import { buttonStyles, defaultButtonTheme } from '../button/styles';

export type IconLinkButtonTheme = ButtonTheme;
export type PartialIconLinkButtonTheme = PartialButtonTheme;

export const defaultIconLinkButtonTheme: ButtonTheme = defaultButtonTheme;

export const iconLinkButtonStyles = buttonStyles;
