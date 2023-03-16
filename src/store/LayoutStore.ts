import { create } from "zustand";

interface LayoutState {
  bears: number;
  increase: (by: number) => void;
}

export const useLayoutStore = create<LayoutState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
