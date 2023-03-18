export enum FontFamily {
  Roboto = "'Roboto', sans-serif",
  OpenSans = "Open Sans",
  Lato = "Lato",
  Montserrat = "Montserrat",
  Inter = "'Open Sans', sans-serif",
}
export interface TextTypography {
  fontSize: string;
  Bold: boolean;
}
export interface LinkTypography {
  fontSize: string;
  Bold: boolean;
  style:string
}
export interface TypographyTypes {
  fontFamily: FontFamily;
  title: TextTypography;
  subTitle: TextTypography;
  links: LinkTypography;
  normalText: TextTypography;
  getTypographyStyles:()=> {
    fontFamily: FontFamily;
    title: TextTypography;
    subTitle: TextTypography;
    links: LinkTypography;
    normalText: TextTypography;
  }
  getNormalText:() => TextTypography;
  getSubTitle:() => TextTypography;
  getTitleText:() => TextTypography;
  getLinkText:() => LinkTypography;
  setFontFamily: (fontFamily: FontFamily) => void;
  setTitle: (title: TextTypography) => void;
  setSubTitle: (subTitle: TextTypography) => void;
  setLinks: (links: LinkTypography) => void;
  setNormalText: (normalText: TextTypography) => void;
}
