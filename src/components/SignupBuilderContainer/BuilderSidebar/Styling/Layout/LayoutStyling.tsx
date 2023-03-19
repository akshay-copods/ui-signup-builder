import { Colorpicker } from "antd-colorpicker";
import React, { useState } from "react";
import { useLayoutStore } from "../../../../../store";
import { Grid } from "../../../../../types/LayoutStoreTypes";
export const LayoutStyling = () => {
  const [color, setColor] = useState("#000000");
  const { gridLayout, setGrid, contentBackground, setContentBackground } =
    useLayoutStore();
  return (
    <div className='p-5 pt-0 flex flex-col gap-4 text-black'>
      <div className='flex justify-between'>
        <span>Grid</span>
        <div className='flex gap-2'>
          <span
            className={`${
              gridLayout === Grid.SPLIT ? "text-geekblue-500" : ""
            }`}
            onClick={() => setGrid(Grid.SPLIT)}>
            Split
          </span>
          <span
            className={`${
              gridLayout === Grid.SINGLE ? "text-geekblue-500" : ""
            }`}
            onClick={() => setGrid(Grid.SINGLE)}>
            Full
          </span>
        </div>
      </div>
      <div>
        <div className='flex justify-between'>
          <span className='text-black'>Background</span>
          <div className='flex'></div>
        </div>
        <div className='flex items-center gap-1.5'>
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
