import React from "react";
import { SignupComponent } from "react-wrapper";
import {
  useButtonStore,
  useInputFieldStore,
  useLoginTypesStore,
  useThemeStore,
  useTypographyStore,
} from "../../../../store";

export const SignupFormTemplate = () => {
  const { theme } = useThemeStore();
  const { socialButton, submitButton } = useButtonStore();
  const { getInputFieldData } = useInputFieldStore();
  const { getTypographyStyles } = useTypographyStore();
  const { getAllLoginTypes } = useLoginTypesStore();
  return (
    <div>
      <SignupComponent
        data={{
          theme,
          socialButton,
          submitButton,
          inputField: getInputFieldData(),
          typography: getTypographyStyles(),
          loginTypes: getAllLoginTypes(),
        }}
      />
    </div>
  );
};
