import React from "react";
import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { Alignment, Position } from "../../../../../types/BrandAssetStoreTypes";
import { ColorPickerComponent, SelectComponent } from "../../../../index";
import { imageShape } from "../../../../../stylingConfig";
export const TestimonalStyling = () => {
  const { getTestimonialStyling, setTestiMonialStyling, testimonials } =
    useBrandAssetStore();
  return (
    <div className="px-5">
      <div className="flex-col flex gap-5">
        <div className="flex justify-between w-full ">
          <span className="text-xs w-2/4 text-customBlack-400">Position</span>
          <div className="flex gap-2 w-2/4 ">
            <VerticalAlignTopOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                getTestimonialStyling().position === "TOP"
                  ? "text-blue-600"
                  : ""
              }`}
              onClick={() =>
                setTestiMonialStyling({
                  ...testimonials,
                  ...testimonials.styling,
                  position: (testimonials.styling.backgroundColor =
                    Position.TOP),
                })
              }
            />
            <VerticalAlignBottomOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                getTestimonialStyling().position === "BOTTOM"
                  ? "text-blue-600"
                  : ""
              }`}
              onClick={() =>
                setTestiMonialStyling({
                  ...testimonials,
                  ...testimonials.styling,
                  position: (testimonials.styling.position = Position.BOTTOM),
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <span className="text-xs w-2/4 text-customBlack-400 font-medium ">
            Alignment
          </span>
          <div className="flex  w-2/4 gap-2 ">
            <AlignLeftOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                getTestimonialStyling().alignment === "LEFT"
                  ? "text-blue-600"
                  : ""
              }`}
              onClick={() =>
                setTestiMonialStyling({
                  ...testimonials,
                  ...testimonials.styling,
                  alignment: (testimonials.styling.alignment = Alignment.LEFT),
                })
              }
            />
            <AlignCenterOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                getTestimonialStyling().alignment === "CENTER"
                  ? "text-blue-600"
                  : ""
              }`}
              onClick={() =>
                setTestiMonialStyling({
                  ...testimonials,
                  ...testimonials.styling,
                  alignment: (testimonials.styling.alignment =
                    Alignment.CENTER),
                })
              }
            />

            <AlignRightOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                getTestimonialStyling().alignment === "RIGHT"
                  ? "text-blue-600"
                  : ""
              }`}
              onClick={() =>
                setTestiMonialStyling({
                  ...testimonials,
                  ...testimonials.styling,
                  alignment: (testimonials.styling.alignment = Alignment.RIGHT),
                })
              }
            />
          </div>
        </div>

        <ColorPickerComponent
          label="Background Color"
          value={testimonials.styling.backgroundColor}
          popup={true}
          onChange={(value) => {
            setTestiMonialStyling({
              ...testimonials,
              ...testimonials.styling,
              backgroundColor: value.hex,
            });
          }}
          fontColor={testimonials.styling.backgroundColor}
        />
        <ColorPickerComponent
          label="Font Color"
          value={testimonials.styling.fontColor}
          popup={true}
          onChange={(value) => {
            setTestiMonialStyling({
              ...testimonials,
              ...testimonials.styling,
              fontColor: value.hex,
            });
          }}
          fontColor={testimonials.styling.fontColor}
        />
        <SelectComponent
          label="Image Shape"
          value={testimonials.styling.imageShape}
          onChange={(value) => {
            setTestiMonialStyling({
              ...testimonials,
              ...testimonials.styling,
              imageShape: (testimonials.styling.imageShape = value),
            });
          }}
          options={imageShape}
        />
      </div>
    </div>
  );
};
