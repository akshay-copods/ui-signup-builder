import { create } from "zustand";
import {
  FontFamily,
  LinkTypography,
  TextTypography,
  TypographyTypes,
} from "../types/TypographyStoreTypes";
export const useTypographyStore = create<TypographyTypes>()((set, get) => ({
  fontFamily: FontFamily.Roboto,
  title: {
    fontSize: '16px',
    Bold: false,
  },
  subTitle: {
    fontSize: '16px',
    Bold: false,
  },
  links: {
    fontSize: '16px',
    Bold: false,
    style:'underline'
  },
  normalText: {
    fontSize: '16px',
    Bold: false,
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
}));
