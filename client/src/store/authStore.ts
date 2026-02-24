import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthStore = {
  token: string;
  username: string;
  role: "host" | "guest" | null;

  setToken: (token: string) => void;
  setUsername: (username: string) => void;
  setRole: (role: "host" | "guest" | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: "",
      username: "",
      role: null,

      setRole: (role) => set((state) => ({ role: role, username: state.username })),
      // if role is null that means user is not in a quiz
      setToken: (token) => {
        set({ token });
        localStorage.setItem("Authorization", `Bearer ${token}`);
      },

      setUsername(username) {
        set({ username });
        // important: set object, not raw string
      },

      logout: () => {
        set({ token: "", username: "", role: null });
        localStorage.removeItem("Authorization");
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.token,
        username: state.username,
        role: state.role,
      }),
      onRehydrateStorage: (state) => {
        if (state?.token) {
          localStorage.setItem("Authorization", `Bearer ${state.token}`);
        }
      },
    },
  ),
);
