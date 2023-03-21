import { create } from "zustand";
import { Grid, LayoutState, ViewPort } from "../types/LayoutStoreTypes";

export const useLayoutStore = create<LayoutState>()((set, get) => ({
  gridLayout: Grid.SPLIT,
  gridContentWidth: "40",
  contentBackground: "#120338",
  viewPort: ViewPort.DESKTOP,
  content: [
    {
      order: 2,
      type: "STATEMENTS",
      name: "Statements",
      checked: true,
      content: {
        order: 1,
        title: "Welcome to Company Name!",
        subTitle: "Start your journey with us.",
      },
    },
    {
      order: 1,
      type: "TESTIMONALS",
      name: "Testimonals",
      checked: true,
      content: [
        {
          order: 1,
          personName: "John Doe",
          personImage: "xyz",
          personDesignation: "Engineer",
          personCompany: "Company Name",
          personQuote: "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly." 
        },
        {
          order: 2,
          personName: "ashu ",
          personImage: "xyz",
          personDesignation: "Engineer",
          personCompany: "Copods",
          personQuote: "GOAT" 
        },
        
      ],
    },
  ],
  setContentBackground(color) {
    set((state) => ({
      contentBackground: color,
    }));
  },
  setGrid(layout) {
    set((state) => ({
      gridLayout: layout,
    }));
  },
  setGridContentWidth(width) {
    set((state) => ({
      gridContentWidth: width,
    }));
  },
  setLayoutContent(content) {
    set((state) => ({
      content: content,
    }));
  },
  getLayoutContent() {
    return get().content;
  },
  getLayoutData() {
    return {
      gridLayout: get().gridLayout,
      contentBackground: get().contentBackground,
      viewPort: get().viewPort,
      content: get().content,
      gridContentWidth: get().gridContentWidth,
    };
  },
  setViewPort(viewPort) {
    set((state) => ({
      viewPort,
    }));
  },
}));
