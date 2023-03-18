import { create } from "zustand";
import {
  CurrentInputFieldState,
  InputFieldState,
} from "../types/InputStoreTypes";

export const useInputFieldStore = create<InputFieldState>()((set, get) => ({
  label: { fontColor: "black", fontSize: "14px", fontWeight: "500" },
  defaultState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
  },
  activeState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
  },
  disabledState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
  },
  errorState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
  },
  hoverState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
  },
  focusState: {
    backgroundColor: "white",
    fontColor: "black",
    fontSize: "14px",
    fontWeight: "500",
    box: {
      borderColor: "black",
      borderSize: 1,
      borderRadius: 0,
      width: "100%",
    },
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
  getLabelTheme() {
    return get().label;
  },
  setLabelTheme(labelTheme) {
    set({ label: labelTheme });
  },
  getInputFieldData() {
    return {
      defaultState: get().defaultState,
      activeState: get().activeState,
      disabledState: get().disabledState,
      errorState: get().errorState,
      hoverState: get().hoverState,
      focusState: get().focusState,
      label: get().label,
    };
  },
}));
