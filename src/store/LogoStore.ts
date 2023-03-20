import { create } from "zustand";
import { Alignment, LogoState } from "../types/LogoStoreTypes";


   
  export const useLogoStore = create<LogoState>()((set,get) => ({
        logoImage: '',
        alignment: Alignment.LEFT,
        
      setImage(logoImage) {
        set((state) => ({
            logoImage: logoImage,
        }));
      },
      setAlignment(alignment) {
        set((state) => ({
            alignment: alignment,
        }));
      },
      getLogoData() {
        return {
            logoImage: get().logoImage,
            alignment: get().alignment,
         
        };
      },
  }))