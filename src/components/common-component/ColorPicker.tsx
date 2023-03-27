import { Colorpicker } from "antd-colorpicker";
import React from "react";

export const ColorPickerComponent = ({
  label,
  value,
  popup,
  onChange,
  fontColor,
}: {
  label?: string;
  value: string;
  popup: boolean;
  onChange: (e: any) => void;
  fontColor: string;
}) => {
  return (
    <div className='flex  items-center'>
      {label && (
        <span tabIndex={0} aria-label={label} className='text-xs w-2/4  text-customBlack-400'>{label}</span>
      )}
      <div className='flex w-2/4 items-center gap-2'>
        <Colorpicker
          blockStyles={{
            width: "24px",
            height: "24px",
          }}
          value={value}
          popup={true}
          onChange={onChange}
        
        />
        <span tabIndex={0} aria-label={fontColor} className='text-black'>{fontColor}</span>
      </div>
    </div>
  );
};

