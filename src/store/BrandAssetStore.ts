import { create } from "zustand";
import { Alignment, BrandAssetStoreState } from "../types/BrandAssetStoreTypes";
export const useBrandAssetStore = create<BrandAssetStoreState>()(
  (set, get) => ({
    logoImage: {
      imageUrl: "",
      alignment: Alignment.LEFT,
    },
    welcomeMessage: "Welcome to Company Name!",
    setWelcomeMessage(message) {
      set((state) => ({
        welcomeMessage: message,
      }));
    },
    setLogoImage(logo) {
      set((state) => ({
        logoImage: logo,
      }));
    },
    getLogoImage() {
      return get().logoImage;
    },
    getWelcomeMessage() {
      return get().welcomeMessage;
    },
    getBrandAssets() {
      return {
        logoImage: get().logoImage,
        welcomeMessage: get().welcomeMessage,
      };
    },
  })
);
