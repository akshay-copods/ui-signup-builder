import { FileImageOutlined } from "@ant-design/icons";
import React from "react";
//@ts-ignore
export const TemplateContainer = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Your Templates</h3>
        <div className="gap-6 flex items-center">
          <a
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
            href={"/template1"}
          >

            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Stealth SaaS Default Template</span>
            </div>
          </a>

          <a
            href={"/template2"}
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
          >

            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Stealth SaaS Default Template</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};