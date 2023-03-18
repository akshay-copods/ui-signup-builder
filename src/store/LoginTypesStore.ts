import { create } from "zustand";
import { LoginMethods, LoginTypesStore } from "../types/LoginTypesStoreTypes";
1;
export const useLoginTypesStore = create<LoginTypesStore>()((set, get) => ({
  socialLoginTypes: [
    {
      icon: "logos:google-icon",
      name: "Google",
    },
  ],
  loginMethods: LoginMethods.MAGIC_LINK,
  approvals: [
    {
      name: "Terms of Use",
      link: "https://www.google.com",
    },
    {
      name: "Privacy Policy",
      link: "https://www.google.com",
    },
  ],
  setSocialLoginTypes: (socialLoginType) => {
    set((state) => ({
      ...state,
      socialLoginTypes: [...state.socialLoginTypes, socialLoginType],
    }));
  },
  setLoginMethods(loginMethod) {
    set((state) => ({
      ...state,
      loginMethods: loginMethod,
    }));
  },
  setApprovals(approval) {
    set((state) => ({
      ...state,
      approvals: [...state.approvals, approval],
    }));
  },
  getSocialLoginTypes() {
    return get().socialLoginTypes;
  },
  getApprovals() {
    return get().approvals;
  },
  getLoginMethods() {
    return get().loginMethods;
  },
}));
