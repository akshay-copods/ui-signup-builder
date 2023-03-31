import { Select, SelectProps } from "antd";
import React from "react";
import "../SignupBuilderContainer/BuilderSidebar/sidebar.css";
export const SelectComponent = ({
  label,
  value,
  onChange,
  options,
}: {
  label?: string;
  value: string;
  onChange: (e: any) => void;
  options: SelectProps[];
}) => {
  return (
    <div className="flex gap-2 flex-col">
      {label && <span tabIndex={0} aria-label={label} className="text-xs  text-customBlack-400">{label}</span>}
      <div className={`w-full flex gap-2 items-center`}>
        <Select
          className="w-full"
          value={value}
          onChange={onChange}
          options={options}
          style={{ borderRadius: "6px" }}
        />
      </div>
    </div>
  );
};
