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
    <div className="flex items-center">
      {label && <span tabIndex={0} aria-label={label} className="text-xs w-2/4 text-customBlack-400">{label}</span>}
      <div className={`${label ? "w-2/4" : "w-full"} flex gap-2 items-center`}>
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
