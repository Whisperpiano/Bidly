import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string | null;
  accessToken: string | null;
  setAuth: (username: string, accessToken: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      accessToken: null,
      setAuth: (username, accessToken) =>
        set({
          username,
          accessToken,
        }),
      clearAuth: () =>
        set({
          username: null,
          accessToken: null,
        }),
    }),
    {
      name: "auth",
    }
  )
);
