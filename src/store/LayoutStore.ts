import { create } from "zustand";
import { Grid, LayoutState, ViewPort } from "../types/LayoutStoreTypes";

export const useLayoutStore = create<LayoutState>()((set, get) => ({
  gridLayout: Grid.SPLIT,
  gridContentWidth: "40",
  contentBackground: "#120338",
  viewPort: ViewPort.DESKTOP,
  content: [
    
    {
      order: 1,
      type: "TESTIMONALS",
      name: "Testimonals",
      checked:true,
      content: [
        {
          order: 1,
          imageUrl:
            "",
        },
      ],
    },
    {
      order:21,
      type: "STATEMENTS",
      name: "Statements",
      checked:true,
      content: [
        {
          order: 2,
          imageUrl:
            "",
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
      viewPort:get().viewPort,
      content:get().content,
      gridContentWidth: get().gridContentWidth,
    };
  },
  setViewPort(viewPort) {
    set((state) => ({
      viewPort,
    }));
  },
}));
