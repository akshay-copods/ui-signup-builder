export enum FontFamily {
  Roboto = "Roboto",
  OpenSans = "Open Sans",
  Lato = "Lato",
  Montserrat = "Montserrat",
  Inter = "Inter",
}
export interface TextTypography {
  fontSize: number;
  Bold: boolean;
}
export interface TypographyTypes {
  fontFamily: FontFamily;
  title: TextTypography;
  subTitle: TextTypography;
  links: TextTypography;
  normalText: TextTypography;
  setFontFamily: (fontFamily: FontFamily) => void;
  setTitle: (title: TextTypography) => void;
  setSubTitle: (subTitle: TextTypography) => void;
  setLinks: (links: TextTypography) => void;
  setNormalText: (normalText: TextTypography) => void;
}
