import { Colorpicker } from "antd-colorpicker";
import React, { useEffect, useState } from "react";
import { useLayoutStore, useThemeStore } from "../../../../../store";
import { Grid } from "../../../../../types/LayoutStoreTypes";
import { Icon } from "@iconify/react";
import { customLayoutData } from "../../../../../stylingConfig";
export const LayoutStyling = ({
  setEditMenuOpen,
}: {
  setEditMenuOpen: (e: boolean) => void;
}) => {
  const [color, setColor] = useState("#000000");
  const [sliderValue, setSldierValue] = useState(50);
  const {
    gridLayout,
    gridContentWidth,
    setGrid,
    setGridContentWidth,
    setLayoutContent,
    getLayoutData,
  } = useLayoutStore();
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
      <div className="flex flex-col w-full border-dashed border-b border-[#0000000f] pb-5">
        <div className="flex">
          <input
            type="range"
            name="slider"
            className="flex-1"
            min={0}
            max={100}
            step={10}
            value={gridContentWidth}
            onChange={(e) =>
              Number(e.target.value) <= 60 &&
              Number(e.target.value) >= 30 &&
              setGridContentWidth(e.target.value)
            }
          />
          <span>{gridContentWidth}</span>
        </div>
        <span className="text-customBlack-400 text-xs whitespace-normal">
          Adjust the width with the slider to customize the spacing to the
          respective sections
        </span>
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
