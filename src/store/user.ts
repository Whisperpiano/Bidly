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

          const profile = await getSingleProfile({ username });

          if (!profile) {
            set({ profile: null });
            return;
          }
          if ("data" in profile) {
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
      onRehydrateStorage: () => () => {
        syncStateAcrossTabs();
      },
    }
  )
);

function syncStateAcrossTabs() {
  window.addEventListener("storage", async (event) => {
    if (event.key === "auth") {
      const newState = JSON.parse(event.newValue || "{}");
      await useAuthStore.setState(newState.state);
      if (newState.state.username) {
        const profile = await getSingleProfile({
          username: newState.state.username,
        });
        if (profile && "data" in profile) {
          useAuthStore.setState({ profile: profile.data });
        } else {
          useAuthStore.setState({ profile: null });
        }
      }
    }
  });

  window.addEventListener("beforeunload", async () => {
    const state = useAuthStore.getState();
    if (state.username) {
      const profile = await getSingleProfile({ username: state.username });
      if (profile && "data" in profile) {
        useAuthStore.setState({ profile: profile.data });
      } else {
        useAuthStore.setState({ profile: null });
      }
    }
  });
}
