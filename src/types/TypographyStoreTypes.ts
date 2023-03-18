export enum FontFamily {
  Roboto = "Roboto",
  OpenSans = "Open Sans",
  Lato = "Lato",
  Montserrat = "Montserrat",
  Inter = "Inter",
}
export interface TypographyTypes {
  fontFamily: FontFamily;
  setFontFamily: (fontFamily: FontFamily) => void;
}
