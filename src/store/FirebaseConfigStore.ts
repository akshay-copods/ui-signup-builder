import { create } from "zustand";

export const useFirebaseConfigStore = create()((set, get:any) => ({
  firebseConfig: {},
  setConfig(storeConfig) {
    set((state) => ({
      firebseConfig: storeConfig,
    }));
  },
  getFirebaseConfig() {
    return get().firebseConfig;
  },
}));
