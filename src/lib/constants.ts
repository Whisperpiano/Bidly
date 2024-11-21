export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

export const THEME_TYPES = {
  THEME_DARK: "dark",
  THEME_LIGHT: "light",
} as const;

export const FILTER_USER_OPTIONS = [
  "More listings",
  "More wins",
  "More credits",
];

export const FILTER_LISTINGS_OPTIONS = [
  "Sort by newest",
  "Sort by oldest",
  "Most bids",
  "Fewest bids",
];
