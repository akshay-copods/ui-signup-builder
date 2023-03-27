import {
  DesktopOutlined,
  FullscreenOutlined,
  MobileOutlined,
  RedoOutlined,
  TabletOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SecondTemplate } from "react-wrapper";
import { SignupFormTemplate } from "../..";
import { useLayoutStore } from "../../../store";
import { ViewPort } from "../../../types/LayoutStoreTypes";

export const SignupFormContainer = () => {
  const { setViewPort, viewPort } = useLayoutStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-geekblue-100 py-7 flex px-5 flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <RedoOutlined className="cursor-pointer" title="redo button" />
            <hr className="h-5 w-px bg-geekblue-300" />
            <UndoOutlined className="cursor-pointer" title="undo button" />
          </div>

          <div className="flex gap-4 items-center">
            <MobileOutlined
              tabIndex={0}
              title={ViewPort.MOBILE}
              aria-label="mobile view button" // Use Constant and use tooltip
              onClick={() => setViewPort(ViewPort.MOBILE)}
              onKeyUp={(e) => {
                if (e.key === "Enter") setViewPort(ViewPort.MOBILE);
              }}
              className={`${
                viewPort === ViewPort.MOBILE && "text-blue-600"
              } cursor-pointer`}
            />
            <hr className="h-5 w-px bg-geekblue-300" />
            <TabletOutlined
              tabIndex={0}
              title={ViewPort.TABLET}
              aria-label="tablet view button" // Use Constant and use tooltip
              onClick={() => setViewPort(ViewPort.TABLET)}
              onKeyUp={(e) => {
                if (e.key === "Enter") setViewPort(ViewPort.TABLET);
              }}
              className={`${
                viewPort === ViewPort.TABLET && "text-blue-600"
              } cursor-pointer`}
            />
            <hr className="h-5 w-px bg-geekblue-300" />
            <DesktopOutlined
              tabIndex={0}
              title={ViewPort.DESKTOP}
              aria-label="desktop view button" // Use Constant and use tooltip
              onClick={() => setViewPort(ViewPort.DESKTOP)}
              onKeyUp={(e) => {
                if (e.key === "Enter") setViewPort(ViewPort.DESKTOP);
              }}
              className={`${
                viewPort === ViewPort.DESKTOP && "text-blue-600"
              } cursor-pointer`}
            />
            <hr className="h-5 w-px bg-geekblue-300" />
            <div className="flex gap-1.5 items-center">
              <span
                className={`text-sm text-[#434343]
               `}
              >
                View Full Screen
              </span>

              <div className="flex items-center" onClick={() => setOpen(true)}>
                <FullscreenOutlined
                  tabIndex={0}
                  aria-label="fullscreen view"
                  onClick={() => setViewPort(ViewPort.FULLSCREEN)}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") setViewPort(ViewPort.FULLSCREEN);
                  }}
                  title={ViewPort.FULLSCREEN}
                  className={`${
                    viewPort === ViewPort.FULLSCREEN && "text-blue-600"
                  }
                   cursor-pointer`}
                />
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/template1" />} />
          <Route path="template1" element={<SignupFormTemplate />} />
          <Route path="template2" element={<SecondTemplate />} />
        </Routes>
      </div>
      <Modal
        title="Template Full Screen View" // Use Constant and use tooltip
        centered
        open={open}
        onOk={() => {
          setOpen(false), setViewPort(ViewPort.DESKTOP);
        }}
        onCancel={() => {
          setOpen(false), setViewPort(ViewPort.DESKTOP);
        }}
        width={"100%"}
      >
        <SignupFormTemplate />
      </Modal>
    </div>
  );
};
