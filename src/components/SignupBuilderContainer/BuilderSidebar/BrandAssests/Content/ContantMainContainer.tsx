import React, { useEffect, useState } from "react";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { customLayoutData } from "../../../../../stylingConfig";
import { EditOutlined } from "@ant-design/icons";
import { Content } from "../../../../../types/BrandAssetStoreTypes";

export const ContentMainContainer = ({
  setEditMenuOpen,
  setActiveContent,
}: {
  setEditMenuOpen: (e: boolean) => void;
  setActiveContent: (e: string) => void;
}) => {
  const { getContent, setContent,content } = useBrandAssetStore();
  return (
    <div className="px-5 flex flex-col gap-4">
      <div className="flex gap-1 flex-col">
        <h4 className="text-customBlack-600 text-sm">
          Custom Layouts for Content
        </h4>
        <span className="text-customBlack-400 text-xs">
          You can select up-to 2 layouts.
        </span>
      </div>
      <div className="flex border-dashed border-b border-[#0000000f] pb-5 flex-wrap gap-3">
        {customLayoutData.map((data: any, index: number) => {
          return (
            <div key={data.type} className="flex flex-col gap-3 max-w-min">
              <div
                onClick={() => {
                  setContent(data)
                }}
                className={`w-88 h-88 ${
                  data.checked ? "border-blue-600" : "border-gray-100"
                } border-gray-100 border ${
                  index >= 2 ? "cursor-not-allowed" : "cursor-pointer"
                } shadow-md rounded relative`}
              >
                <input
                  className={` border-gray-300 ${
                    index >= 2 ? "cursor-not-allowed" : "cursor-pointer"
                  } absolute top-1.5 left-1.5 bg-gray-200`}
                  value={data.type}
                  onChange={()=>setContent(data)}
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
                <EditOutlined onClick={(e)=>setActiveContent(data.type)} className="text-geekblue-600" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
