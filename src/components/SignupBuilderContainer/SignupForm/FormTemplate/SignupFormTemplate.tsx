import React from "react";
import { SignupComponent } from "react-wrapper";
import { useButtonStore, useInputFieldStore, useThemeStore } from "../../../../store";

export const SignupFormTemplate = () => {
  const { theme } = useThemeStore();
  const {socialButton, submitButton} = useButtonStore()
  const { getInputFieldData } = useInputFieldStore();

  return (
    <div>
      <SignupComponent
        data={{ theme, socialButton, submitButton, inputField: getInputFieldData() }}
      />
    </div>
  );
};
