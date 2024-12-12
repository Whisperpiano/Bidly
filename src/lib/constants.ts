export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

export const THEME_TYPES = {
  THEME_DARK: "dark",
  THEME_LIGHT: "light",
} as const;

export const FILTER_USER_OPTIONS = ["More credits", "Less credits"];

export const FILTER_LISTINGS_OPTIONS = [
  "Sort by newest",
  "Sort by oldest",
  "Sort by title A-Z",
  "Sort by title Z-A",
];

export const FILTER_PROFILE_OPTIONS = [
  "Sort by newest",
  "Sort by oldest",
  "Only active",
  "Only finished",
];

const NOROFF_API_URL_BASE = "https://v2.api.noroff.dev";

export const NOROFF_API = {
  auth: {
    login: `${NOROFF_API_URL_BASE}/auth/login`,
    register: `${NOROFF_API_URL_BASE}/auth/register`,
  },
  auctions: {
    profiles: `${NOROFF_API_URL_BASE}/auction/profiles`,
    listings: `${NOROFF_API_URL_BASE}/auction/listings`,
  },
};

// Here you can personalize the hero banner for different seasons
export const HERO_BANNER = {
  account: "bidlychristmas",
  img: "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Jingle bids, jingle bids, jingle all the way!",
  subtitle: "Unwrap the joy of Christmas with our exclusive festive offers.",
  buttonText: "Shop deals",
  season: "Christmas",
};
