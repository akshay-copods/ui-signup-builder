import React, { useEffect, useState } from "react";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { customLayoutData } from "../../../../../stylingConfig";
import { EditOutlined } from "@ant-design/icons";
import { Content } from "../../../../../types/BrandAssetStoreTypes";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
import { Tooltip } from "antd";

export const ContentMainContainer = ({
  setEditMenuOpen,
  setActiveContent,
}: {
  setEditMenuOpen: (e: boolean) => void;
  setActiveContent: (e: string) => void;
}) => {
  const { getContent, setContent, content } = useBrandAssetStore();
  return (
    <div className="px-5 flex flex-col gap-4">
      <div className="flex gap-1 flex-col">
        <h2 className="text-customBlack-600 text-sm">
          {signup_builder_sidebar.CUSTOM_LAYOUT_FOR_CONTENT}
        </h2>
        <span className="text-customBlack-400 text-xs">
          {signup_builder_sidebar.LAYOUT_SELECT_INSTRUCTOIN}
        </span>
      </div>
      <div className="flex border-dashed border-b border-[#0000000f] pb-5 flex-wrap gap-3">
        {customLayoutData.map((data: any, index: number) => {
          return (
            <div key={data.type} className="flex flex-col gap-3 max-w-min">
              <div
                onClick={() => {
                  setContent(data);
                }}
                tabIndex={0}
                className={`w-88 h-88 ${
                  data.checked ? "border-blue-600" : "border-gray-100"
                } border-gray-100 border ${"cursor-pointer"} shadow-md rounded relative`}
              >
                <input
                  className={` border-gray-300 ${"cursor-pointer"} absolute top-1.5 ${
                    getContent()
                      .map((k) => k.type)
                      .includes(data.type)
                      ? "visible"
                      : "invisible"
                  } left-1.5 bg-gray-200`}
                  value={data.type}
                  onChange={() => setContent(data)}
                  checked={getContent()
                    .map((k) => k.type)
                    .includes(data.type)}
                  type="checkbox"
                  name={data.type}
                />
              </div>
              <div className="gap-1 flex items-center">
                {" "}
                <span className="font-normal whitespace-normal text-xs text-customBlack-400">
                  {data.name}
                </span>
                <Tooltip
                  title={signup_builder_sidebar.EDIT_BUTTON}
                  color="black"
                >
                  <EditOutlined
                    tabIndex={0}
                    aria-label={signup_builder_sidebar.EDIT_BUTTON}
                    onClick={(e) => setActiveContent(data.type)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") setActiveContent(data.type);
                    }}
                    className="text-geekblue-600"
                  />
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
