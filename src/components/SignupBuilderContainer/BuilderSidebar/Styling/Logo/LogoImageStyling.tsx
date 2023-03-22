import React, { useState } from "react";
import { Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { logoAlignments } from "../../../../../stylingConfig";
import { SelectComponent } from "../../../..";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { InboxOutlined } from "@ant-design/icons";

export const LogoImageStyling = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { setLogoAlignment, setLogoImage, getLogoImage } = useBrandAssetStore();
  const onChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
    file,
  }) => {
    setFileList(newFileList);
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    setLogoImage(image.src);
  };
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className="flex px-5 flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <span className="text-xs w-2/4  text-[#00000073]">Upload Logo</span>
        <Upload
          className="w-2/4"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && (
            <div className="flex flex-col items-center justify-center gap-4">
              <InboxOutlined style={{fontSize:26,color:'#1890FF'}} />
              <div className="flex flex-col w-56 gap-1">
                <span className="text-customBlack-600 text-xs">
                  Click or drag file to this area to upload
                </span>
                <span className="text-customBlack-400 text-xs whitespace-normal">
                  Support JPEG, PNG, SVG, ICO Max file size: 1.0 MB
                </span>
              </div>
            </div>
          )}
        </Upload>
      </div>
      <SelectComponent
        label={"Alignment"}
        value={getLogoImage().alignment}
        onChange={(value) => setLogoAlignment(value)}
        options={logoAlignments}
      />
    </div>
  );
};
