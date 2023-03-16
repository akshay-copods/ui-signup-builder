import { create } from "zustand";
interface ButtonStateTheme {
  backgroundColor: string;
  borderRadius: number;
  fontColor: string;
  fontSize: string;
  fontWeight: string;
}
enum SocialMediaButtonLayout {
  "EQUAL_SPLIT" = "EQUAL_SPLIT",
  "ONE_PRIMARY" = "ONE_PRIMARY",
}
interface ButtonStates {
  defaultState: ButtonStateTheme;
  activeState: ButtonStateTheme;
  disabledState: ButtonStateTheme;
  hoverState: ButtonStateTheme;
}
enum CurrentButtonState {
  "DEFAULT" = "DEFAULT",
  "ACTIVE" = "ACTIVE",
  "DISABLED" = "DISABLED",
  "HOVER" = "HOVER",
}
interface SubmitButtonType {}
interface ButtonTypes {
  submitButton: {
    currentButtonState: CurrentButtonState;
    styles: ButtonStates;
  };
  socialButton: {
    position: boolean;
    layout: SocialMediaButtonLayout;
    styles: ButtonStates;
  };
  changeSubmitButtonState: (currentState: CurrentButtonState) => void;
  changeSocialButtonState: (currentState: CurrentButtonState) => void;
  getSubmitButtonStateTheme: (
    currentState: CurrentButtonState
  ) => ButtonStateTheme;
  setSubmitButtonStateTheme: (
    currentState: CurrentButtonState,
    stateTheme: ButtonStateTheme
  ) => void;
}
export const useButtonStore = create<ButtonTypes>()((set, get) => ({
  submitButton: {
    currentButtonState: CurrentButtonState.DEFAULT,
    styles: {
      defaultState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 0,
      },
      activeState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 0,
      },
      disabledState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 0,
      },
      hoverState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 0,
      },
    },
  },
  socialButton: {
    currentButtonState: CurrentButtonState.DEFAULT,
    position: false,
    layout: SocialMediaButtonLayout.EQUAL_SPLIT,
    styles: {
      defaultState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
      },
      activeState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
      },
      hoverState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#4096ff",
        borderRadius: 0,
      },
      disabledState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#00000040",
        backgroundColor: "#0000000a",
        borderRadius: 0,
      },
    },
  },
  changeSubmitButtonState: (currentState) => {
    set((state) => ({
      ...state,
      submitButton: {
        ...state.submitButton,
        currentButtonState: currentState,
      },
    }));
  },
  changeSocialButtonState(currentState) {
    set((state) => ({
      ...state,
      socialButton: {
        ...state.socialButton,
        currentButtonState: currentState,
      },
    }));
  },
  getSubmitButtonStateTheme(currentState) {
    switch (currentState) {
      case CurrentButtonState.DEFAULT:
        return get().submitButton.styles.defaultState;
      case CurrentButtonState.ACTIVE:
        return get().submitButton.styles.activeState;
      case CurrentButtonState.DISABLED:
        return get().submitButton.styles.disabledState;
      case CurrentButtonState.HOVER:
        return get().submitButton.styles.hoverState;
      default:
        return get().submitButton.styles.defaultState;
    }
  },
  setSubmitButtonStateTheme(currentState, stateTheme) {
    switch (currentState) {
      case CurrentButtonState.DEFAULT:
        set((state) => ({
          ...state,
          submitButton: {
            ...state.submitButton,
            styles: {
              ...state.submitButton.styles,
              defaultState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.ACTIVE:
        set((state) => ({
          ...state,
          submitButton: {
            ...state.submitButton,
            styles: {
              ...state.submitButton.styles,
              activeState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.DISABLED:
        set((state) => ({
          ...state,
          submitButton: {
            ...state.submitButton,
            styles: {
              ...state.submitButton.styles,
              disabledState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.HOVER:
        set((state) => ({
          ...state,
          submitButton: {
            ...state.submitButton,
            styles: {
              ...state.submitButton.styles,
              hoverState: stateTheme,
            },
          },
        }));
        break;
      default:
        set((state) => ({
          ...state,
          submitButton: {
            ...state.submitButton,
            styles: {
              ...state.submitButton.styles,
              defaultState: stateTheme,
            },
          },
        }));
        break;
    }
  },
}));
