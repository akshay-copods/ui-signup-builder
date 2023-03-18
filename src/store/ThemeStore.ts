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
  changePrimaryColor: (color: string) => void;
  changeErrorColor: (color: string) => void;
  changeSecondaryColor: (color: string) => void;
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
  changePrimaryColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        primaryColor: color,
      },
    }));
  },
  changeErrorColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        errorColor: color,
      },
    }));
  },
  changeSecondaryColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        secondaryColor: color,
      },
    }));
  },
}));
