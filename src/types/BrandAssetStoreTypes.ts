export enum Alignment {
  "LEFT" = "LEFT",
  "CENTER" = "CENTER",
  "RIGHT" = "RIGHT",
}
export enum Position {
  "TOP" = "TOP",
  "BOTTOM" = "BOTTOM",
}
export enum Shape {
  "SQUARE" = "SQUARE",
  "CIRCLE" = "CIRCLE",
}
export type User = {
  id: string;
  personImage: string;
  personDetails: string;
  personDesignation: string;
  personQuote: string;
};
export type TestimonialStyling = {
  postion: Position;
  imageShape: Shape;
  fontColor: string;
  backgroundColor: string;
  alignment: Alignment;
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
  testimonials: {
    users: User[];
    styling: TestimonialStyling;
  };
  statements: {
    title: string;
    subtitle: string;
  };

  setWelcomeMessage: (message: string) => void;
  setLogoImage: (logo: string) => void;
  setLogoAlignment: (alignment: Alignment) => void;
  getLogoImage: () => Logo;
  getWelcomeMessage: () => string;
  setTestimonial: (testimonial: User) => void;
  setTestiMonialStyling: (styling: TestimonialStyling) => void;
  getTestimonial: () => User[];
  getTestimonialStyling: () => TestimonialStyling;
  setStatements: (statements: { title: string; subtitle: string }) => void;
  getBrandAssets: () => {
    logoImage: {
      imageUrl: string;
      alignment: Alignment;
    };
    welcomeMessage: string;
  };
};
