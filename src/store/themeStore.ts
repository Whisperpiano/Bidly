import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES, ThemeType } from "../lib/constants";

interface ThemeState {
  theme: ThemeType;
  toggleTheme: () => void;
}

const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: THEME_DARK,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "theme",
    }
  )
);
