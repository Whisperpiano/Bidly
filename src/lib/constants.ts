export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

export const THEME_TYPES = {
  THEME_DARK: "dark",
  THEME_LIGHT: "light",
} as const;
