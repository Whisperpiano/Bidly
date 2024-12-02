import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "../types/types";
import getSingleProfile from "../api/profiles/getSingleProfile";

interface AuthState {
  username: string | null;
  accessToken: string | null;
  profile: UserProfile | null;
  setAuth: (username: string, accessToken: string) => void;
  clearAuth: () => void;
  updateCredits: (amount: number) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      accessToken: null,
      profile: null,
      setAuth: async (username, accessToken) => {
        try {
          set({ username, accessToken });

          const profile = await getSingleProfile(username);

          if (profile?.data) {
            set({ profile: profile.data });
          } else {
            set({ profile: null });
          }
        } catch (error) {
          console.error("Error getting profile:", error);
          set({ username: null, accessToken: null, profile: null });
        }
      },
      clearAuth: () =>
        set({
          username: null,
          accessToken: null,
          profile: null,
        }),
      updateCredits: (amount: number) =>
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                credits: state.profile.credits - amount,
              }
            : null,
        })),
    }),
    {
      name: "auth",
    }
  )
);
