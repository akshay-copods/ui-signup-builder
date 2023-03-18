import { create } from "zustand";
import { FontFamily, TypographyTypes } from "../types/TypographyStoreTypes";
export const useThemeStore = create<TypographyTypes>()((set, get) => ({
  fontFamily: FontFamily.Roboto,
  setFontFamily: (fontFamily: FontFamily) => set({ fontFamily }),
}));
