import { Icon } from "@iconify/react";
import { Input, Select, Upload, UploadFile, UploadProps } from "antd";
import { Colorpicker } from "antd-colorpicker";
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
import { useBrandAssetStore } from "../../../../store/BrandAssetStore";
import { RcFile } from "antd/es/upload";
const { TextArea } = Input;
export const EditTestimonals = ({setActiveContent}:{setActiveContent:(e:string)=>void}) => {
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
    <div className='flex flex-col p-5'>
      <div className='flex justify-between'>
        <h1 className='text-sm font-semibold'>Add Testimonal</h1>
        <span>Close</span>
      </div>
      <div>
        <div className='flex flex-col gap-4'>
          <span className='text-xs'>Image</span>
          <div>
            <Icon icon='' />
            <Icon icon='' />
          </div>
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
          <div className='flex items-center justify-between gap-4'>
            <span>Variant Shape</span>
            <Select
              className='w-48'
              value={imageShapeData[0].label}
              onChange={(e) => 1 + 2}
              options={imageShapeData}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <span>Variant Size</span>
            <Select
              className='w-48'
              value={imageSizes[0].label}
              onChange={(e) => 1 + 2}
              options={imageSizes}
            />
          </div>
        </div>
      </div>
      <hr className='mt-5 mb-5' />
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-xs'>Name</span>
          <Input
            className='w-48'
            type='text'
          />
        </div>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-xs'>Designation</span>
          <Input
            className='w-48'
            type='text'
          />
        </div>
        <div className='flex items-center justify-between gap-4'>
          <span>Variant Size</span>
          <Select
            className='w-48'
            value={imageSizes[0].label}
            onChange={(e) => 1 + 2}
            options={imageSizes}
          />
        </div>
        <div className='flex'>
          <span className='text-xs'>Alignment</span>
          <div className='flex'>
            <Icon icon='' />
            <Icon icon='' />
            <Icon icon='' />
          </div>
        </div>
        <div className='flex justify-between'>
          <span>Font Color</span>
          <div className='w-48 flex items-center gap-2'>
            <Colorpicker
              blockStyles={{
                width: "24px",
                height: "24px",
              }}
              popup
              fontColor='ds'
              onChange={(e) => 1 + 2}
              value=''
            />
            <span>value</span>
          </div>
        </div>
      </div>
      <hr className='mt-5 mb-5' />
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between gap-4'>
          <label htmlFor=''>Quote</label>
          <TextArea className='w-48' />
        </div>
        <div className='flex items-center justify-between gap-4'>
          <span>Variant Size</span>
          <Select
            className='w-48'
            value={imageSizes[0].label}
            onChange={(e) => 1 + 2}
            options={imageSizes}
          />
        </div>
        <div className='flex justify-between'>
          <span className='text-xs'>Alignment</span>
          <div className='flex w-48 gap-7'>
            <Icon
              width='26'
              height='26'
              icon='ant-design:align-left-outlined'
            />

            <Icon
              width='26'
              height='26'
              icon='ant-design:align-center-outlined'
            />

            <Icon
              width='26'
              height='26'
              icon='ant-design:align-right-outlined'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <span>Font Color</span>
          <div className='w-48 flex items-center gap-2'>
            <Colorpicker
              blockStyles={{
                width: "24px",
                height: "24px",
              }}
              popup
              fontColor='ds'
              onChange={(e) => 1 + 2}
              value=''
            />
            <span>value</span>
          </div>
        </div>
      </div>
    </div>
  );
};
