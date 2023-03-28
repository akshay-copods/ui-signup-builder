import { Icon } from "@iconify/react";
import { Input, Select, Upload, UploadFile, UploadProps } from "antd";
import { Colorpicker } from "antd-colorpicker";
import React, { useEffect, useState } from "react";
const imageShapeData = [
  { label: "Circular", value: "circle" },
  { label: "Square", value: "square" },
];
const imageSizes = [
  { label: "32 px", value: "32" },
  { label: "30 px", value: "30" },
];
import { InboxOutlined } from "@ant-design/icons";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { RcFile } from "antd/es/upload";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
import { User } from "../../../../../types/BrandAssetStoreTypes";
const { TextArea } = Input;
export const EditTestimonals = ({
  setCurrentAccordion,
  data,
}: {
  setCurrentAccordion: (e: boolean) => void;
  data: User;
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {
    setTestimonial,
    testimonials,
    getTestimonial,
    deleteTestimonal,
    editTestimonial,
  } = useBrandAssetStore();
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
    editTestimonial({
      ...data,
      personImage: image.src,
    });
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
    <div className="flex flex-col p-5 bg-natural-3 ">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-semibold text-customBlack-600">
          {signup_builder_sidebar.EDIT_TESTIMONAL}
        </h1>
        <span
          tabIndex={0}
          className="text-primary-6 text-xs cursor-pointer"
          onClick={() => setCurrentAccordion(false)}
        >
          {signup_builder_sidebar.CLOSE}
        </span>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <span className="text-xs w-2/4  text-customBlack-400">{signup_builder_sidebar.IMAGE}</span>
          <div>
            <Icon icon="" />
            <Icon icon="" />
          </div>

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
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-customBlack-600">{signup_builder_sidebar.NAME}</span>
          <Input
            onChange={(e) => {
              editTestimonial({
                ...data,
                personDetails: e.target.value,
              });
            }}
            value={data.personDetails}
            className="w-48"
            type="text"
            maxLength={80}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-customBlack-600">{signup_builder_sidebar.DESIGNATION}</span>
          <Input
            onChange={(e) => {
              editTestimonial({
                ...data,
                personDesignation: e.target.value,
              });
            }}
            value={data.personDesignation}
            className="w-48"
            type="text"
            maxLength={50}
          />
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <label htmlFor="" className="text-customBlack-600 text-xs">
            {signup_builder_sidebar.QUOTE}
          </label>
          <TextArea
            value={data.personQuote}
            onChange={(e) => {
              editTestimonial({
                ...data,
                personQuote: e.target.value,
              });
            }}
            maxLength={150}
            className="w-48 h-28"
          />
        </div>
      </div>
    </div>
  );
};
