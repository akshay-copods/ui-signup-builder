import { create } from "zustand";
import {
  CurrentInputFieldState,
  InputFieldState,
} from "../types/InputStoreTypes";

export const useInputFieldStore = create<InputFieldState>()((set, get) => ({
  label: { fontColor: "black", fontSize: "14px", fontWeight: "500" },
  box: {
    borderColor: "black",
    borderSize: "1px",
    borderRadius: "0px",
    width: "100%",
  },
  defaultState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  activeState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  disabledState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  errorState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  hoverState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  focusState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
  },
  getInputFieldStateTheme(currentState) {
    switch (currentState) {
      case CurrentInputFieldState.DEFAULT:
        return get().defaultState;
      case CurrentInputFieldState.ACTIVE:
        return get().activeState;
      case CurrentInputFieldState.DISABLED:
        return get().disabledState;
      case CurrentInputFieldState.ERROR:
        return get().errorState;
      default:
        return get().defaultState;
    }
  },
  setInputFieldStateTheme(currentState, stateTheme) {
    switch (currentState) {
      case CurrentInputFieldState.DEFAULT:
        set({ defaultState: stateTheme });
        break;
      case CurrentInputFieldState.ACTIVE:
        set({ activeState: stateTheme });
        break;
      case CurrentInputFieldState.DISABLED:
        set({ disabledState: stateTheme });
        break;
      case CurrentInputFieldState.ERROR:
        set({ errorState: stateTheme });
        break;
      default:
        set({ defaultState: stateTheme });
        break;
    }
  },
  getBoxTheme() {
    return get().box;
  },
  setBoxTheme(boxTheme) {
    set({ box: boxTheme });
  },
  getLabelTheme() {
    return get().label;
  },
  setLabelTheme(labelTheme) {
    set({ label: labelTheme });
  },
}));
