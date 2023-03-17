export type InputLabelTheme = {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
};

export type InputBoxTheme = {
  borderColor: string;
  borderSize: string;
  borderRadius: string;
  width: string;
};
export enum CurrentInputFieldState {
  DEFAULT = "DEFAULT",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
}

export type InputStateTheme = {
  backgroundColor: string;
  fontColor: string;
  fontSize: string;
  fontWeight: string;
};
export interface InputFieldState {
  label: InputLabelTheme;
  box: InputBoxTheme;
  defaultState: InputStateTheme;
  activeState: InputStateTheme;
  disabledState: InputStateTheme;
  errorState: InputStateTheme;
  hoverState: InputStateTheme;
  focusState: InputStateTheme;
  getInputFieldStateTheme: (
    currentState: CurrentInputFieldState
  ) => InputStateTheme;
  setInputFieldStateTheme: (
    currentState: CurrentInputFieldState,
    stateTheme: InputStateTheme
  ) => void;
  getBoxTheme: () => InputBoxTheme;
  setBoxTheme: (boxTheme: InputBoxTheme) => void;
  getLabelTheme: () => InputLabelTheme;
  setLabelTheme: (labelTheme: InputLabelTheme) => void;
}
