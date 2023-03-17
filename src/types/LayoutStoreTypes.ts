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
export enum GridLayout {
  SINGLE = "SINGLE",
  SPLIT = "SPLIT",
}
export interface LayoutState {
  gridLayout: GridLayout;
  gridContentWidth: string;
  content: LayoutContent[];
  setGridLayout: (layout: GridLayout) => void;
  setGridContentWidth: (width: string) => void;
  setLayoutContent: (content: LayoutContent[]) => void;
  getLayoutContent: () => LayoutContent[];
}
