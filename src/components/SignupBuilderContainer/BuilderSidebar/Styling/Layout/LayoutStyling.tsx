import { Colorpicker } from "antd-colorpicker";
import React, { useState } from "react";
import { useLayoutStore, useThemeStore } from "../../../../../store";
import { Grid } from "../../../../../types/LayoutStoreTypes";
import { Icon } from "@iconify/react";
import { customLayoutData } from "../../../../../stylingConfig";

export const LayoutStyling = () => {
  const [color, setColor] = useState("#000000");
  const { gridLayout, setGrid, contentBackground } = useLayoutStore();
  const {
    theme: { backgroundColor },
    changeBackgroundColor,
  } = useThemeStore();
  return (
    <div className="p-5 pt-0 flex flex-col gap-4 text-black">
      <div className="flex justify-between">
        <span>Grid</span>
        <div className="flex gap-2 items-center">
          <Icon
            className="w-7 h-7"
            onClick={() => setGrid(Grid.SPLIT)}
            icon="material-symbols:splitscreen-outline"
            rotate={1}
            color={gridLayout === Grid.SPLIT ? "#597ef7" : "#d9d9d9"}
          />
          <Icon
            className="w-7 h-7"
            onClick={() => setGrid(Grid.SINGLE)}
            icon="material-symbols:rectangle-rounded"
            color={gridLayout === Grid.SINGLE ? "#597ef7" : "#d9d9d9"}
          />
        </div>
      </div>
      <div className="flex border-dashed border-b border-[#0000000f] pb-5 flex-wrap gap-3">
        {customLayoutData.map((data: any, index: number) => {
          return (
            <div key={data.value} className="flex flex-col gap-3 max-w-min">
              <div
                // onClick={() => updateCheckStatus(index)}
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
        <div className="flex justify-between">
          <span className="text-black">Background</span>
          <div className="flex"></div>
        </div>
        <div className="flex items-center gap-1.5">
          <Colorpicker
            blockStyles={{
              width: "24px",
              height: "24px",
            }}
            value={backgroundColor}
            popup={true}
            onChange={(value) => {
              changeBackgroundColor(value.hex);
            }}
          />
          <div>{backgroundColor}</div>
        </div>
      </div>
    </div>
  );
};
