import { create } from "zustand";

interface ThemeState {
  theme: {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    errorColor: string;
  };
  setTheme: (theme: ThemeState["theme"]) => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: {
    backgroundColor: "white",
    primaryColor: "#2f54eb",
    secondaryColor: "red",
    textColor: "black",
    errorColor: "red",
  },
  setTheme(theme) {
    set((state) => ({
      theme: {
        ...state.theme,
        ...theme,
      },
    }));
  },
}));
