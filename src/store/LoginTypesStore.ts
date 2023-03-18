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
      icon: "logos:github-icon",
      name: "Git",
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
    const socialLogin = get().socialLoginTypes.find(
      (loginType) => loginType.name === socialLoginType.name
    );
    set((state) => ({
      ...state,
      socialLoginTypes: socialLogin
        ? get().socialLoginTypes.filter((i) => i.name !== socialLogin.name)
        : [...state.socialLoginTypes, { ...socialLoginType }],
    }));
  },
  setLoginMethods(loginMethod) {
    set((state) => ({
      ...state,
      loginMethods: loginMethod,
    }));
  },
  setApprovals(approvalType) {
    const approval = get().approvals.find(
      (currentApproval) => currentApproval.name === approvalType.name
    );
    set((state) => ({
      ...state,
      approvals: approval
        ? get()
            .getApprovals()
            .filter((i) => i.name !== approval.name)
        : [...state.approvals, { ...approvalType }],
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
  getAllLoginTypes() {
    return {
      socialLoginTypes: get().socialLoginTypes,
      loginMethods: get().loginMethods,
      approvals: get().approvals,
    };
  },
}));
