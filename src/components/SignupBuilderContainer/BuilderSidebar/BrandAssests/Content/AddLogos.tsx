import { UploadFile } from "antd";
import Upload, { RcFile, UploadProps } from "antd/es/upload";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
export const AddLogos = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { getLogos, editContentLogos } = useBrandAssetStore();
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
    <div>
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
            <InboxOutlined style={{ fontSize: 26, color: "#1890FF" }} />
            <div className="flex flex-col w-56 gap-1">
              <span className="text-customBlack-600 text-xs">
                {signup_builder_sidebar.CLICK_AND_DRAG_FILE}
              </span>
              <span className="text-customBlack-400 text-xs whitespace-normal">
                {signup_builder_sidebar.UPLOAD_IMAGE_SUPPORT_SIZE_INSTRUCTION}
              </span>
            </div>
          </div>
        )}
      </Upload>
    </div>
  );
};