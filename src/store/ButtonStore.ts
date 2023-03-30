import { create } from "zustand";
import {
  ButtonTypes,
  CurrentButtonState,
  Position,
  SocialMediaButtonLayout,
} from "../types/ButtonStoreTypes";

export const useButtonStore = create<ButtonTypes>()((set, get) => ({
  submitButton: {
    styles: {
      defaultState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 2,
      },
      activeState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 2,
      },
      disabledState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#FFFFFF",
        backgroundColor: "#070930",
        borderRadius: 2,
      },
      hoverState: {
        fontSize: "14px",
        fontWeight: "600",
        fontColor: "#000000",
        backgroundColor: "#4096ff",
        borderRadius: 2,
      },
    },
  },
  socialButton: {
    position: Position.BOTTOM,
    layout: SocialMediaButtonLayout.EQUAL_SPLIT,
    styles: {
      defaultState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
      },
      activeState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
      },
      hoverState: {
        fontSize: "14px",
        fontWeight: "600",
        fontColor: "#000000",
        backgroundColor: "#4096ff",
        borderRadius: 2,
      },
      disabledState: {
        fontSize: "14px",
        fontWeight: "500",
        fontColor: "#00000040",
        backgroundColor: "#0000000a",
        borderRadius: 2,
      },
    },
  },
  setSocialButtonStyles(styles){
     set((state) => ({
      ...state,
      socialButton: {
        ...state.socialButton,
        styles,
      },
    }));
  },
  setSubmitButtonStyles(styles){
    set((state) => ({
     ...state,
     submitButton: {
       ...state.submitButton,
       styles,
     },
   }));
 }
  ,
  changeSubmitButtonState: (currentState) => {
    set((state) => ({
      ...state,
      submitButton: {
        ...state.submitButton,
        currentButtonState: currentState,
      },
    }));
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
  getSubmitButtonStateTheme(currentState) {
    switch (currentState) {
      case CurrentButtonState.DEFAULT:
        return get().submitButton.styles.defaultState;
      case CurrentButtonState.ACTIVE: {
        return get().submitButton.styles.activeState;
      }
      case CurrentButtonState.DISABLED: {
        return get().submitButton.styles.disabledState;
      }
      case CurrentButtonState.HOVER: {
        return get().submitButton.styles.hoverState;
      }
      default: {
        return get().submitButton.styles.defaultState;
      }
    }
  },
  getSocialButtonStateTheme(currentButtonState) {
    switch (currentButtonState) {
      case CurrentButtonState.DEFAULT:
        return get().socialButton.styles.defaultState;
      case CurrentButtonState.ACTIVE:
        return get().socialButton.styles.activeState;
      case CurrentButtonState.DISABLED:
        return get().socialButton.styles.disabledState;
      case CurrentButtonState.HOVER:
        return get().socialButton.styles.hoverState;
      default:
        return get().socialButton.styles.defaultState;
    }
  },
  setSocialButtonStateTheme(currentState, stateTheme) {
    switch (currentState) {
      case CurrentButtonState.DEFAULT:
        set((state) => ({
          ...state,
          socialButton: {
            ...state.socialButton,
            styles: {
              ...state.socialButton.styles,
              defaultState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.ACTIVE:
        set((state) => ({
          ...state,
          socialButton: {
            ...state.socialButton,
            styles: {
              ...state.socialButton.styles,
              activeState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.DISABLED:
        set((state) => ({
          ...state,
          socialButton: {
            ...state.socialButton,
            styles: {
              ...state.socialButton.styles,
              disabledState: stateTheme,
            },
          },
        }));
        break;
      case CurrentButtonState.HOVER:
        set((state) => ({
          ...state,
          socialButton: {
            ...state.socialButton,
            styles: {
              ...state.socialButton.styles,
              hoverState: stateTheme,
            },
          },
        }));
        break;
      default:
        set((state) => ({
          ...state,
          socialButton: {
            ...state.socialButton,
            styles: {
              ...state.socialButton.styles,
              defaultState: stateTheme,
            },
          },
        }));
        break;
    }
  },
  setSocialButtonLayout(layout) {
    set((state) => ({
      ...state,
      socialButton: {
        ...state.socialButton,
        layout,
      },
    }));
  },
  setSocialButtonPosition(position) {
    set((state) => ({
      ...state,
      socialButton: {
        ...state.socialButton,
        position,
      },
    }));
  },
}));
