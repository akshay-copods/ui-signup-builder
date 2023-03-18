import React, { useState } from "react";
import { customLayoutData } from "../../../../../stylingConfig";
import { Colorpicker } from "antd-colorpicker";

export const LayoutStyling = () => {
  const [checked, setChecked]: any = useState(customLayoutData);
  const updateCheckStatus = (index: any) => {
    setChecked(
      checked.map((checked: any, currentIndex: any) =>
        currentIndex === index
          ? { ...checked, checked: !checked.checked }
          : checked
      )
    );
  };
  const filterData = checked.filter((data: any) => {
    return data.checked === true;
  });
  return (
    <div className="p-5 pt-0 flex flex-col gap-4">
      <div className="gap-1 flex flex-col">
        <span className="text-sm font-normal text-customBlack-600">
          Custom Layouts for Content
        </span>
        <span className="text-xs text-customBlack-400">
          You can select up-to 2 layouts.
        </span>
      </div>
      <div className="flex border-dashed border-b border-[#0000000f] pb-5 flex-wrap gap-3">
        {checked.map((data: any, index: number) => {
          return (
            <div key={data.value} className="flex    flex-col gap-3">
              <div
                onClick={() => updateCheckStatus(index)}
                className={`w-88 h-88 ${
                  data.checked ? "border-blue-600" : "border-gray-100"
                } border-gray-100 border shadow-md rounded relative`}
              >
                <input
                  className=" border-gray-300 absolute top-1.5 left-1.5 bg-gray-200"
                  value={data.value}
                  checked={data.checked}
                  type="checkbox"
                  name={data.value}
                />
              </div>
              <div className="gap-1 flex items-center">
                {" "}
                <span className="font-normal whitespace-normal text-xs text-customBlack-400">
                  {data.label}
                </span>
                <span className="text-[#1890FF]">{data.logo}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex justify-between"><span>Background</span><div>icons </div></div>
        <div className="flex items-center gap-1.5">
          <Colorpicker
            value={"#ffffff"}
            onChange={() => ""}
            fontColor={""}
            popup={true}
            blockStyles={{ width: "24px" }}
          />
          <span>color value</span>
        </div>
      </div>
    </div>
  );
};
