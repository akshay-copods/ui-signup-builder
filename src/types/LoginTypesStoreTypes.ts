export interface SocialLoginButton {
  icon: string;
  name: string;
}
export interface Approval {
  name: string;
  link: string;
}
export enum LoginMethods {
  MAGIC_LINK = "magic_link",
  MAGIC_CODE = "magic_code",
  PASSWORD = "password",
}
export interface LoginTypesStore {
  socialLoginTypes: SocialLoginButton[];
  loginMethods: LoginMethods;
  approvals: Approval[];
  setSocialLoginTypes: (socialLoginType: SocialLoginButton) => void;
  setLoginMethods: (loginMethod: LoginMethods) => void;
  setApprovals: (approval: Approval) => void;
  getSocialLoginTypes: () => SocialLoginButton[];
  getApprovals: () => Approval[];
  getLoginMethods: () => LoginMethods;
  getAllLoginTypes: () => {
    socialLoginTypes: SocialLoginButton[];
    loginMethods: LoginMethods;
    approvals: Approval[];
  };
}
