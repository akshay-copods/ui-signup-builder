import { create } from "zustand";
import { LoginMethods, LoginTypesStore } from "../types/LoginTypesStoreTypes";
1;
export const useLoginTypesStore = create<LoginTypesStore>()((set, get) => ({
  socialLoginTypes: [
    {
      icon: "logos:google-icon",
      name: "Google",
    },
    {
      icon: "logos:google-icon",
      name: "Git",
    },
  ],
  loginMethods: LoginMethods.MAGIC_LINK,
  approvals: [
    {
      isSelected:true,
      name: "Terms of Use",
      link: "https://www.google.com",
    },
    {isSelected:true,
      name: "Privacy Policy",
      link: "https://www.google.com",
    },
  ],
  setSocialLoginTypes: (socialLoginType) => {
    const present = get().socialLoginTypes.find(i=>i.name===socialLoginType.name)
    set((state) => ({
      ...state,
      socialLoginTypes: present?get().socialLoginTypes.filter(i=>i.name!==present.name):[...state.socialLoginTypes, {...socialLoginType}],
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
