import { create } from "zustand";

interface ThemeState {
  theme: {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    errorColor: string;
    labelColor: string;
  };
  setTheme: (theme: ThemeState["theme"]) => void;
  changePrimaryColor: (color: string) => void;
  changeErrorColor: (color: string) => void;
  changeLabelColor: (color: string) => void;
  changeSecondaryColor: (color: string) => void;
  changeBackgroundColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: {
    backgroundColor: "#ffffff",
    primaryColor: "#2f54eb",
    secondaryColor: "#00000099",
    textColor: "black",
    errorColor: "red",
    labelColor:'#00000099'
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
  changeLabelColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        labelColor: color,
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
  changeBackgroundColor(color) {
    set((state) => ({
      theme: {
        ...state.theme,
        backgroundColor: color,
      },
    }));
  },
}));
