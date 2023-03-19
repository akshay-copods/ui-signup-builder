import React, { useEffect } from "react";
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
  const { getTypographyStyles, setTitleText } = useTypographyStore();
  const { getAllLoginTypes } = useLoginTypesStore();
  const { getLayoutData } = useLayoutStore();
  const [title, setTitle] = React.useState(getTypographyStyles().titleText);
  console.log(getTypographyStyles());
  const getEmittedValue = (e: any) => {
    console.log(title);
    setTitle(e.detail);
    // setTitleText(e.detail);
  };
  useEffect(() => {
    setTitleText(title);
  }, [title]);
  return (
    <div
      className={`${
        (getLayoutData().viewPort === "MOBILE" ||
          getLayoutData().viewPort === "TABLET") &&
        "self-center"
      }`}>
      <SignupComponent
        onMyChange={getEmittedValue}
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
