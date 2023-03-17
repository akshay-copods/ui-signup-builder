import React from "react";
import { ColorPickerComponent } from "../../../../common-component/ColorPicker";
import { useThemeStore } from "../../../../../store/ThemeStore";

export const ColorsStyling = () => {
  const { changePrimaryColor, changeErrorColor, changeSecondaryColor, theme } =
    useThemeStore();

  return (
    <div className="px-5">
      <ColorPickerComponent
        label="Primary Color"
        value={theme.primaryColor}
        popup={true}
        onChange={(value) => {
          changePrimaryColor(value.hex);
        }}
        fontColor={theme.primaryColor}
      />
      <ColorPickerComponent
        label="Secondry Color"
        value={theme.secondaryColor}
        popup={true}
        onChange={(value) => {
          changeSecondaryColor(value.hex);
        }}
        fontColor={theme.secondaryColor}
      />
      <ColorPickerComponent
        label="Error Color"
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
