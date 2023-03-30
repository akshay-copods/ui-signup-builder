import { create } from "zustand";
import {
  FontFamily,
  LinkTypography,
  TextTypography,
  TypographyTypes,
} from "../types/TypographyStoreTypes";
export const useTypographyStore = create<TypographyTypes>()((set, get) => ({
  fontFamily: FontFamily.Roboto,
  titleText: "Start your journey with us.",
  welcomeMessage: "Welcome to Company Name!",
  title: {
    fontSize: "20px",
    Bold: false,
  },
  subTitle: {
    fontSize: "14px",
    Bold: false,
  },
  links: {
    fontSize: "12px",
    Bold: false,
    style: "none",
  },
  normalText: {
    fontSize: "14px",
    Bold: false,
  },
  getTypographyStyles() {
    return {
      fontFamily: get().fontFamily,
      title: get().title,
      subTitle: get().subTitle,
      titleText: get().titleText,
      links: get().links,
      normalText: get().normalText,
      welcomeMessage: get().welcomeMessage,
    };
  },
  getNormalText() {
    return get().normalText;
  },
  getSubTitle() {
    return get().subTitle;
  },
  getTitleText() {
    return get().title;
  },
  getLinkText() {
    return get().links;
  },
 
  setFontFamily: (fontFamily: FontFamily) => set({ fontFamily }),
  setTitle: (title: TextTypography) => set({ title }),
  setSubTitle: (subTitle: TextTypography) => set({ subTitle }),
  setLinks: (links: LinkTypography) => set({ links }),
  setNormalText: (normalText: TextTypography) => set({ normalText }),
  setTitleText: (titleText: string) => set({ titleText }),
  setWelcomeText: (welcomeMessage: string) => set({ welcomeMessage }),
}));
