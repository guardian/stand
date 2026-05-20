import type { ButtonTheme, PartialButtonTheme } from '../Button/styles';
import { buttonStyles, defaultButtonTheme } from '../Button/styles';

export type IconLinkButtonTheme = ButtonTheme;
export type PartialIconLinkButtonTheme = PartialButtonTheme;

export const defaultIconLinkButtonTheme: ButtonTheme = defaultButtonTheme;

export const iconLinkButtonStyles = buttonStyles;
