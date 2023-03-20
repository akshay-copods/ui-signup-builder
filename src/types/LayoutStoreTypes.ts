export type LayoutContentTestimonial = {
  order: number;
  personName: string;
  personImage: string;
  personDesignation: string;
  personCompany: string;
  personQuote: string;
};
export type LayoutStatement = {
  order: number;
  title: string;
  subTitle: string;
};
export type LayoutContentLogo = {
  order: number;
  imageUrl: string;
};
export type LayoutContent = {
  order: number;
  type: string;
  name: string;
  content: LayoutContentTestimonial[] | LayoutContentLogo[] | LayoutStatement;
};
export enum Grid {
  SINGLE = "SINGLE",
  SPLIT = "SPLIT",
}
export enum ViewPort {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
  FULLSCREEN = "FULLSCREEN",
}
export interface LayoutState {
  gridLayout: Grid;
  gridContentWidth: string;
  viewPort: ViewPort;
  content: LayoutContent[];
  contentBackground: string;
  setGrid: (layout: Grid) => void;
  setGridContentWidth: (width: string) => void;
  setLayoutContent: (content: LayoutContent[]) => void;
  getLayoutContent: () => LayoutContent[];
  setContentBackground: (color: string) => void;
  getLayoutData: () => {
    gridLayout: Grid;
    contentBackground: string;
    gridContentWidth: string;
    viewPort: ViewPort;
    content: LayoutContent[];
  };
  setViewPort: (viewPort: ViewPort) => void;
}
