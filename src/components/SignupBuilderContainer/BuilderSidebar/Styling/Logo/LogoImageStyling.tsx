import React, { useState } from "react";
import { Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { logoAlignments } from "../../../../../stylingConfig";
import { SelectComponent } from "../../../..";
import { useLogoStore } from "../../../../../store";
export const LogoImageStyling = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { logoImage, setImage, alignment, setAlignment } = useLogoStore();
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
    setImage(image.src);
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
      <div className="flex items-center">
        <span className="text-xs w-2/4  text-[#00000073]">Upload Logo</span>
        <Upload
          className="w-2/4"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </div>
      <SelectComponent
        label={"Alignment"}
        value={alignment}
        onChange={(value) => setAlignment(value)}
        options={logoAlignments}
      />
    </div>
  );
};
