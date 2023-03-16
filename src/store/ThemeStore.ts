import { create } from "zustand";

interface ThemeState {
  theme: {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  };
  changeBackgroundColor: (color: string) => void;
  changePrimaryColor: (color: string) => void;
  changeSecondaryColor: (color: string) => void;
  changeTextColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: {
    backgroundColor: "white",
    primaryColor: "#2f54eb",
    secondaryColor: "red",
    textColor: "black",
  },
  changeBackgroundColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        backgroundColor: color,
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
  changeSecondaryColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        secondaryColor: color,
      },
    }));
  },
  changeTextColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        textColor: color,
      },
    }));
  },
}));
