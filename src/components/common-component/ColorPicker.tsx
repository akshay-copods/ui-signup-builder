import React, { useState } from "react";
import { AnyColorFormat } from "antd-colorpicker";
import { Colorpicker } from "antd-colorpicker";

export const ColorPickerComponent = ({
  label,
  value,
  popup,
  onChange,
  fontColor
}: {
  label: string;
  value: string;
  popup: boolean;
  onChange: (e:any)=>void;
  fontColor:string
}) => {
  return (
    <div className="flex  items-center">
      <span className="text-xs w-2/4  text-customBlack-400">{label}</span>
      <div className="flex w-2/4 items-center gap-2">
        <Colorpicker
          blockStyles={{
            width: "24px",
            height: "24px",
          }}
          value={value}
          popup={true}
          onChange={onChange}
        />
        <span className="text-black">{fontColor}</span>
      </div>
    </div>
  );
};
