import React from "react";
import { ColorPickerComponent } from "../../../../common-component/ColorPicker";
import { useThemeStore } from "../../../../../store/ThemeStore";
import {signup_builder_sidebar} from '../../../../../constants/signup_builder_constants'
export const ColorsStyling = () => {
  const { changePrimaryColor, changeErrorColor, changeSecondaryColor, theme } =
    useThemeStore();

  return (
    <div className="px-5 pb-5 flex flex-col gap-5">
      <ColorPickerComponent
        label={signup_builder_sidebar.PRIMARY_COLOR}
        value={theme.primaryColor}
        popup={true}
        onChange={(value) => {
          changePrimaryColor(value.hex);
        }}
        fontColor={theme.primaryColor}
      />
      {/* <ColorPickerComponent
        label="Secondry Color"
        value={theme.secondaryColor}
        popup={true}
        onChange={(value) => {
          changeSecondaryColor(value.hex);
        }}
        fontColor={theme.secondaryColor}
      /> */}
      <ColorPickerComponent
        label={signup_builder_sidebar.ERROR_COLOR}
        value={theme.errorColor}
        popup={true}
        onChange={(value) => {
          changeErrorColor(value.hex);
        }}
        fontColor={theme.errorColor}
      />
    </div>
  );
};
