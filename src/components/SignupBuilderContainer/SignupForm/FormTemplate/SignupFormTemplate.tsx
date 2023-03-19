import React from "react";
import { SignupComponent } from "react-wrapper";

import {
  useButtonStore,
  useInputFieldStore,
  useLayoutStore,
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
  const { getLayoutData } = useLayoutStore();

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
          layout: getLayoutData(),
        }}
      />
    </div>
  );
};
