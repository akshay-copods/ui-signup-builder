import { create } from "zustand";
import { Grid, LayoutState, ViewPort } from "../types/LayoutStoreTypes";

export const useLayoutStore = create<LayoutState>()((set, get) => ({
  gridLayout: Grid.SPLIT,
  gridContentWidth: "50",
  contentBackground: "#120338",
  viewPort: ViewPort.DESKTOP,
  content: [
    {
      order: 1,
      type: "LOGO",
      name:'logo',
      content: [
        {
          order: 1,
          imageUrl:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
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
