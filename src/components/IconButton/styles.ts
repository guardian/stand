import type { ButtonTheme, PartialButtonTheme } from '../Button/styles';
import { buttonStyles, defaultButtonTheme } from '../Button/styles';

export type IconButtonTheme = ButtonTheme;
export type PartialIconButtonTheme = PartialButtonTheme;

export const defaultIconButtonTheme: ButtonTheme = defaultButtonTheme;

export const iconButtonStyles = buttonStyles;
