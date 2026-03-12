import type { ButtonTheme, PartialButtonTheme } from '../button/styles';
import { buttonStyles, defaultButtonTheme } from '../button/styles';

export type IconButtonTheme = ButtonTheme;
export type PartialIconButtonTheme = PartialButtonTheme;

export const defaultIconButtonTheme: ButtonTheme = defaultButtonTheme;

export const iconButtonStyles = buttonStyles;
