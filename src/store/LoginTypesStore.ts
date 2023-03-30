import { create } from "zustand";
import { LoginMethods, LoginTypesStore } from "../types/LoginTypesStoreTypes";
1;
export const useLoginTypesStore = create<LoginTypesStore>()((set, get) => ({
  socialLoginTypes: [
    
  ],
  loginMethods: LoginMethods.PASSWORD,
  approvals: [
   
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
  setUserApprovalLink(link) {
    set((state) => ({
      ...state,
      approvals: state.approvals.map((approval) => {
        if (approval.name === "Terms of Use") {
          return {
            ...approval,
            link,
          };
        }
        if (approval.name === "Privacy Policy") {
          return {
            ...approval,
            link,
          };
        }
        return approval;
      }),
    }));
  },
  getAllLoginTypes() {
    return {
      socialLoginTypes: get().socialLoginTypes,
      loginMethods: get().loginMethods,
      approvals: get().approvals,
    };
  },
}));
