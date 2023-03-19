export type LayoutContentTestimonial = {
  order: number;
  personName: string;
  personImage: string;
  personDesignation: string;
  personCompany: string;
  personQuote: string;
};

export type LayoutContentLogo = {
  order: number;
  imageUrl: string;
};
export type LayoutContent = {
  order: number;
  type: string;
  content: LayoutContentTestimonial[] | LayoutContentLogo[];
};
export enum Grid {
  SINGLE = "SINGLE",
  SPLIT = "SPLIT",
}
export interface LayoutState {
  gridLayout: Grid;
  gridContentWidth: string;
  content: LayoutContent[];
  contentBackground: string;
  setGrid: (layout: Grid) => void;
  setGridContentWidth: (width: string) => void;
  setLayoutContent: (content: LayoutContent[]) => void;
  getLayoutContent: () => LayoutContent[];
  setContentBackground: (color: string) => void;
  getLayoutData: () => { gridLayout: Grid; contentBackground: string };
}
