import { create } from "zustand";
import { GridLayout, LayoutState } from "../types/LayoutStoreTypes";

export const useLayoutStore = create<LayoutState>()((set, get) => ({
  gridLayout: GridLayout.SINGLE,
  gridContentWidth: "100%",
  content: [
    {
      order: 1,
      type: "LOGO",
      content: [
        {
          order: 1,
          imageUrl:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
      ],
    },
  ],
  setGridLayout(layout) {
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
}));
