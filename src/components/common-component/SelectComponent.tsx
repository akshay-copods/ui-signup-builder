import {  Select, SelectProps } from "antd";
import React from "react";
import "../SignupBuilderContainer/BuilderSidebar/sidebar.css";
export const SelectComponent = ({
  label,
  defaultValue,
  onChange,
  options,
}: {
  label?: string;
  defaultValue: string;
  onChange: (e:any)=>void;
  options: SelectProps[] | undefined;
}) => {

  return (
    <div className="flex items-center">
      {label && (
        <span className="text-xs w-2/4  text-[#00000073]">{label}</span>
      )}
      <div className={` ${label?"w-2/4":"w-full"} flex gap-2 items-center`}>
        <Select
          className="w-full"
          defaultValue={defaultValue}
          onChange={onChange}
          options={options}
          style={{ borderRadius: "2px" }}
        />
      </div>
    </div>
  );
};
