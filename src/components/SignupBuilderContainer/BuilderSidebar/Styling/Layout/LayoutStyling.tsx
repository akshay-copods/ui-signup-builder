import { Colorpicker } from "antd-colorpicker";
import React, { useState } from "react";
import { useLayoutStore } from "../../../../../store";
import { Grid } from "../../../../../types/LayoutStoreTypes";
import { Icon } from "@iconify/react";

export const LayoutStyling = () => {
  const [color, setColor] = useState("#000000");
  const { gridLayout, setGrid, contentBackground, setContentBackground } =
    useLayoutStore();
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
            value={contentBackground}
            popup={true}
            onChange={(value) => {
              setContentBackground(value.hex);
            }}
          />
          <div>{contentBackground}</div>
        </div>
      </div>
    </div>
  );
};
