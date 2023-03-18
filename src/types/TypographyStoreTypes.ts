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
  subTitle: TextTypography;
  links: TextTypography;
  normalText: TextTypography;
  setFontFamily: (fontFamily: FontFamily) => void;
  setSubTitle: (subTitle: TextTypography) => void;
  setLinks: (links: TextTypography) => void;
  setNormalText: (normalText: TextTypography) => void;
}
