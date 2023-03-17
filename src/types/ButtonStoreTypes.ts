export interface ButtonStateTheme {
  backgroundColor: string;
  borderRadius: number;
  fontColor: string;
  fontSize: string;
  fontWeight: string;
}
export enum SocialMediaButtonLayout {
  "EQUAL_SPLIT" = "EQUAL_SPLIT",
  "ONE_PRIMARY" = "ONE_PRIMARY",
}
export interface ButtonStates {
  defaultState: ButtonStateTheme;
  activeState: ButtonStateTheme;
  disabledState: ButtonStateTheme;
  hoverState: ButtonStateTheme;
}
export enum CurrentButtonState {
  "DEFAULT" = "DEFAULT",
  "ACTIVE" = "ACTIVE",
  "DISABLED" = "DISABLED",
  "HOVER" = "HOVER",
}
export enum Position {
  "TOP" = "TOP",
  "BOTTOM" = "BOTTOM",
}
export interface ButtonTypes {
  submitButton: {
    styles: ButtonStates;
  };
  socialButton: {
    position: Position;
    layout: SocialMediaButtonLayout;
    styles: ButtonStates;
  };
  getSubmitButtonStateTheme: (
    currentState: CurrentButtonState
  ) => ButtonStateTheme;
  setSubmitButtonStateTheme: (
    currentState: CurrentButtonState,
    stateTheme: ButtonStateTheme
  ) => void;
  getSocialButtonStateTheme: (
    currentButtonState: CurrentButtonState
  ) => ButtonStateTheme;
  setSocialButtonStateTheme: (
    currentState: CurrentButtonState,
    stateTheme: ButtonStateTheme
  ) => void;
  setSocialButtonLayout: (layout: SocialMediaButtonLayout) => void;
  setSocialButtonPosition: (position: Position) => void;
}
