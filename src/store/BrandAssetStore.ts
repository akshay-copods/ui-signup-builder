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
    content: [
      { type: "STATEMENTS", name: "Statements", checked: true },
      { type: "TESTIMONALS", name: "Testimonals", checked: true },
    ],
    statements: {
      title: "Start your journey with us.",
      subtitle:
        "Discover the world’s best community of freelancers ad business owners.",
    },
    logos: [
  
    ],
    testimonials: {
      users: [
       
      ],
      styling: {
        position: Position.BOTTOM,
        imageShape: Shape.CIRCLE,
        fontColor: "#ffffff",
        backgroundColor: "#0B0E49",
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
        testimonials: get().testimonials,
        statements: get().statements,
        content: get().content,
        logos: get().logos,
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

    setStatementsTitle(title) {
      set((state) => ({
        statements: {
          ...state.statements,
          title: title,
        },
      }));
    },
    setStatementsSubtitle(subTitle) {
      set((state) => ({
        statements: {
          ...state.statements,
          subtitle: subTitle,
        },
      }));
    },
    editTestimonial(testimonial) {
      set((state) => ({
        testimonials: {
          ...state.testimonials,
          users: state.testimonials.users.map((user) =>
            user.id === testimonial.id ? testimonial : user
          ),
        },
      }));
    },
    editContentLogos(editLogo) {
      set((state) => ({
        ...state,
        logos: state.logos.map((logo) =>
          logo.id === editLogo.id ? editLogo : logo
        ),
      }));
    },
    deleteTestimonal(id) {
      const deleteId = get().testimonials.users.findIndex(
        (deleteTestimonal) => deleteTestimonal.id === id
      );
      get().testimonials.users.splice(deleteId as any, 1);
    },
    deleteLogos(id) {
      const deleteId = get().logos.findIndex(
        (deleteLogos) => deleteLogos.id === id
      );
      get().logos.splice(deleteId as any, 1);
    },
    getStatements() {
      return get().statements;
    },
    setContent(content) {
      const addNewContent = get().content.find(
        (addedContent) => addedContent.type === content.type
      );
      set((state) => ({
        ...state,
        content: addNewContent
          ? get().content.filter((i) => i.type !== addNewContent.type)
          : [...state.content, { ...content }],
      }));
    },
    getContent() {
      return get().content;
    },
    getLogos() {
      return get().logos;
    },
    setLogos(logo) {
      set((state) => ({
        logos: [...state.logos, logo],
      }));
    },
  })
);
