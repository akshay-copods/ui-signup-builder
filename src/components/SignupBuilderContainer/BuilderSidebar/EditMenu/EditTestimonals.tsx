import { Icon } from "@iconify/react";
import { Input, Select } from "antd";
import { Colorpicker } from "antd-colorpicker";
import React from "react";
const imageShapeData = [
  { label: "Circular", value: "circle" },
  { label: "Square", value: "square" },
];
const imageSizes = [
  { label: "32 px", value: "32" },
  { label: "30 px", value: "30" },
];
const { TextArea } = Input;
export const EditTestimonals = () => {
  return (
    <div className='flex flex-col'>
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
          <div className='h-40 border bg-geekblue-100 border-dashed flex flex-col justify-center items-center'>
            <Icon
              width='26'
              height='26'
              icon='ant-design:upload-outlined'
            />
            <div className='text-center'>
              <p>Click to this area to upload image</p>
              <p>Support JPEG, PNG, SVG, ICO</p>
              <p>Max file size: 1.0 MB</p>
            </div>
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
