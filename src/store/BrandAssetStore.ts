import { create } from "zustand";
import {
  Alignment,
  BrandAssetStoreState,
  Position,
  Shape,
} from "../types/BrandAssetStoreTypes";
export const useBrandAssetStore = create<BrandAssetStoreState>()(
  (set, get) => ({
    logoImage: {
      imageUrl: "",
      alignment: Alignment.LEFT,
    },
    statements: {
      title: "Title",
      subtitle: "Subtitle",
    },
    testimonials: {
      users: [
        {
          id: "1",
          personImage: "",
          personDetails: "",
          personDesignation: "",
          personQuote: "",
        },
      ],
      styling: {
        postion: Position.BOTTOM,
        imageShape: Shape.CIRCLE,
        fontColor: "#000000",
        backgroundColor: "#ffffff",
        alignment: Alignment.LEFT,
      },
    },
    welcomeMessage: "Welcome to Company Name!",
    setWelcomeMessage(message) {
      set((state) => ({
        welcomeMessage: message,
      }));
    },
    setLogoImage(logo) {
      set((state) => ({
        logoImage: {
          ...state.logoImage,
          imageUrl: logo,
        },
      }));
    },
    setLogoAlignment(alignment) {
      set((state) => ({
        logoImage: {
          ...state.logoImage,
          alignment: alignment,
        },
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
    setTestimonial(User) {
      set((state) => ({
        testimonials: {
          ...state.testimonials,
          users: [...state.testimonials.users, User],
        },
      }));
    },
    setTestiMonialStyling(styling) {
      set((state) => ({
        testimonials: {
          ...state.testimonials,
          styling: styling,
        },
      }));
    },
    getTestimonial() {
      return get().testimonials.users;
    },
    getTestimonialStyling() {
      return get().testimonials.styling;
    },
    setStatements(statements) {
      set((state) => ({
        statements: statements,
      }));
    },
    getStatements() {
      return get().statements;
    },
  })
);
