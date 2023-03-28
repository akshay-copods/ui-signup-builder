import { Icon } from "@iconify/react";
import { Input, Upload, UploadFile, UploadProps } from "antd";
import React, { useState } from "react";
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
import { User } from "../../../../../types/BrandAssetStoreTypes";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
const { TextArea } = Input;
export const AddTestimonal = ({
  setAddTestimonal,
}: {
  setAddTestimonal: (e: boolean) => void;
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {
    setTestimonial,
    testimonials,
    getTestimonial,
    deleteTestimonal,
    editTestimonial,
  } = useBrandAssetStore();
  const newArray = testimonials.users.slice(-1).pop() as User;
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
      ...newArray,
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
        <h1
          tabIndex={0}
          aria-label={signup_builder_sidebar.ADD_TESTIMONAL}
          className="text-sm font-semibold text-customBlack-600"
        >
          {signup_builder_sidebar.ADD_TESTIMONAL}
        </h1>
        <span
          onClick={() => setAddTestimonal(false)}
          tabIndex={0}
          aria-label={signup_builder_sidebar.CLOSE}
          className="text-primary-6 text-xs"
        >
          {signup_builder_sidebar.CLOSE}
        </span>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <span
            tabIndex={0}
            aria-label={signup_builder_sidebar.IMAGE}
            className="text-xs w-2/4  text-customBlack-400"
          >
            {signup_builder_sidebar.IMAGE}
          </span>
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
                    {
                      signup_builder_sidebar.UPLOAD_IMAGE_SUPPORT_SIZE_INSTRUCTION
                    }
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
          <span
            tabIndex={0}
            aria-label={signup_builder_sidebar.NAME}
            className="text-xs text-customBlack-600"
          >
            {signup_builder_sidebar.NAME}
          </span>
          <Input
            className="w-48"
            type="text"
            maxLength={80}
            onChange={(e) => {
              editTestimonial({
                ...newArray,
                personDetails: e.target.value,
              });
            }}
            value={testimonials.users?.slice(-1)?.pop()?.personDetails}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <span
            tabIndex={0}
            aria-label={signup_builder_sidebar.DESIGNATION}
            className="text-xs text-customBlack-600"
          >
            {signup_builder_sidebar.DESIGNATION}
          </span>
          <Input
            value={testimonials.users?.slice(-1)?.pop()?.personDesignation}
            className="w-48"
            onChange={(e) => {
              editTestimonial({
                ...newArray,
                personDesignation: e.target.value,
              });
            }}
            type="text"
            maxLength={50}
          />
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <label
            tabIndex={0}
            aria-label={signup_builder_sidebar.QUOTE}
            htmlFor=""
            className="text-customBlack-600 text-xs"
          >
            {signup_builder_sidebar.QUOTE}
          </label>
          <TextArea
           onChange={(e) => {
            editTestimonial({
              ...newArray,
              personQuote: e.target.value,
            });
          }}
            value={testimonials.users?.slice(-1)?.pop()?.personQuote}
            maxLength={150}
            className="w-48 h-28"
          />
        </div>
      </div>
    </div>
  );
};
