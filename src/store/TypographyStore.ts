import { create } from "zustand";
import {
  FontFamily,
  TextTypography,
  TypographyTypes,
} from "../types/TypographyStoreTypes";
export const useThemeStore = create<TypographyTypes>()((set, get) => ({
  fontFamily: FontFamily.Roboto,
  subTitle: {
    fontSize: 16,
    Bold: false,
  },
  links: {
    fontSize: 16,
    Bold: false,
  },
  normalText: {
    fontSize: 16,
    Bold: false,
  },
  setFontFamily: (fontFamily: FontFamily) => set({ fontFamily }),
  setSubTitle: (subTitle: TextTypography) => set({ subTitle }),
  setLinks: (links: TextTypography) => set({ links }),
  setNormalText: (normalText: TextTypography) => set({ normalText }),
}));
