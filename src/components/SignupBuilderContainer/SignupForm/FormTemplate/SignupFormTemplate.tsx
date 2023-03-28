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
import { useBrandAssetStore } from "../../../../store/BrandAssetStore";
import { ViewPort } from "../../../../types/LayoutStoreTypes";

export const SignupFormTemplate = () => {
  const { theme } = useThemeStore();
  const { socialButton, submitButton } = useButtonStore();
  const { getInputFieldData } = useInputFieldStore();
  const { getTypographyStyles, setTitleText } = useTypographyStore();
  const { getAllLoginTypes } = useLoginTypesStore();
  const { getLayoutData } = useLayoutStore();
  const { getBrandAssets } = useBrandAssetStore();
  const [title, setTitle] = React.useState(getTypographyStyles().titleText);

  const getEmittedValue = (e: any) => {
    setTitle(e.detail);
  };
  useEffect(() => {
    setTitleText(title);
  }, [title]);
  return (
    <div
      className={`${
        (getLayoutData().viewPort === ViewPort.MOBILE ||
          getLayoutData().viewPort === ViewPort.TABLET) &&
        "self-center"
      }`}
    >
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
          brandAssests: getBrandAssets(),
        }}
      />
    </div>
  );
};
