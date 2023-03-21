export enum Alignment {
  "LEFT" = "LEFT",
  "CENTER" = "CENTER",
  "RIGHT" = "RIGHT",
}

export interface LogoState {
  logoImage: string;
  alignment: Alignment;
  setImage: (logoImage: string) => void;
  setAlignment: (alignment: Alignment) => void;
  getLogoData: () => {
    logoImage: string;
    alignment: Alignment;
  };
}
