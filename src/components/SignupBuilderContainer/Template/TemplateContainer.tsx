import { FileImageOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { TemplateOne } from "../../../svgComponent/templateOne";
import TemplateTwo from "../../../svgComponent/TemplateTwo";
;
export const TemplateContainer = ({
  setActiveKey,
}: {
  setActiveKey: (string) => void;
}) => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">Your Templates</h3>
        <div className="gap-6 flex items-center">
          <Link
            onClick={() => setActiveKey("1")}
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
            to={"/template1"}
          >
            <TemplateOne />
            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Stealth SaaS Default Template</span>
            </div>
          </Link>

          <Link
            onClick={() => setActiveKey("1")}
            to={"/template2"}
            className="w-fit rounded-lg border cursor-pointer border-[#D9D9D9]"
          >
            <TemplateTwo/>
            <div className="flex gap-3 px-6 border-t border-b py-4 items-center ">
              <FileImageOutlined className="text-blue-600" />
              <span className="text-xs">Secound Sign-up Template</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
