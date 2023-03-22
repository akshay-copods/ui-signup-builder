export enum Alignment {
  "LEFT" = "LEFT",
  "CENTER" = "CENTER",
  "RIGHT" = "RIGHT",
}
export enum Shape {
  "SQUARE" = "SQUARE",
  "CIRCLE" = "CIRCLE",
}
export type Testimonial = {
  personImage: {
    shape: Shape;
    imageUrl: string;
    size: number;
  };
  personDetails: {
    personName: string;
    personDesignation: string;
    fontColor: string;
  };
  personCompany: string;
  personQuote: string;
};
export type Logo = {
  imageUrl: string;
  alignment: Alignment;
};
export type BrandAssetStoreState = {
  logoImage: {
    imageUrl: string;
    alignment: Alignment;
  };
  welcomeMessage: string;

  setWelcomeMessage: (message: string) => void;
  setLogoImage: (logo: Logo) => void;
  getLogoImage: () => Logo;
  getWelcomeMessage: () => string;
  getBrandAssets: () => {
    logoImage: {
      imageUrl: string;
      alignment: Alignment;
    };
    welcomeMessage: string;
  };
};
