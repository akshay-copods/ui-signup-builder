export type InputLabelTheme = {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
};

export type InputBoxTheme = {
  borderColor: string;
  borderSize: number;
  borderRadius: number;
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
  box: InputBoxTheme;
};
export interface InputFieldState {
  label: InputLabelTheme;
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
  getLabelTheme: () => InputLabelTheme;
  setLabelTheme: (labelTheme: InputLabelTheme) => void;
  getInputFieldData: () => {
    label: InputLabelTheme;
    defaultState: InputStateTheme;
    activeState: InputStateTheme;
    disabledState: InputStateTheme;
    errorState: InputStateTheme;
    hoverState: InputStateTheme;
    focusState: InputStateTheme;
  };
}
