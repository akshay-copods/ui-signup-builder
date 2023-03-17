import { Button, Select } from "antd";
import React from "react";
import '../SignupBuilderContainer/BuilderSidebar/sidebar.css'
export const SelectComponent = ({
  label,
  defaultValue,
  onChange,
  options,
  bold
}: {
  label?: string;
  defaultValue: any;
  onChange: any;
  options: any;
  bold?:any
}) => {
  return (
    <div className="flex items-center">
      {label && (
        <span className="text-xs w-2/4  text-[#00000073]">{label}</span>
      )}
      <div  className={` flex gap-2 items-center ${bold&&"w-full"} ${label&&!bold ? "w-2/4" : "w-full"}`}>
        {
          bold&&  <Button className="text-sm text-[#000000d9]" onClick={bold}>B</Button>
        }
      
      <Select
       className="w-full"
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        style={{borderRadius:'2px'}}
      />
      </div>
   
    </div>
  );
};