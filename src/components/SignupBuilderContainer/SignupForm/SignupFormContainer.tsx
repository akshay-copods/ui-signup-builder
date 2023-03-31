import {
  DesktopOutlined,
  FullscreenOutlined,
  MobileOutlined,
  RedoOutlined,
  TabletOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SecondTemplate } from "react-wrapper";
import { SignupFormTemplate } from "../..";
import { useLayoutStore } from "../../../store";
import { ViewPort } from "../../../types/LayoutStoreTypes";
import {
  AriaLabel,
  REDO_BUTTON,
  UNDO_BUTTON,
} from "../../../constants/signup_builder_constants";

export const SignupFormContainer = () => {
  const { setViewPort, viewPort } = useLayoutStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-geekblue-100 py-7 flex px-5 flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Tooltip title={REDO_BUTTON} color="black">
              <RedoOutlined className="cursor-pointer" />
            </Tooltip>
            <hr className="h-5 w-px bg-geekblue-300" />
            <Tooltip title={UNDO_BUTTON} color="black">
              <UndoOutlined className="cursor-pointer" />
            </Tooltip>
          </div>

          <div className="flex gap-4 items-center">
            <Tooltip title={ViewPort.MOBILE} color="black">
              <MobileOutlined
                tabIndex={0}
                aria-label={AriaLabel.MOBILE_VIEW}
                onClick={() => setViewPort(ViewPort.MOBILE)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") setViewPort(ViewPort.MOBILE);
                }}
                className={`${
                  viewPort === ViewPort.MOBILE && "text-blue-600"
                } cursor-pointer`}
              />
            </Tooltip>

            <hr className="h-5 w-px bg-geekblue-300" />
            <Tooltip title={ViewPort.TABLET} color="black">
              <TabletOutlined
                tabIndex={0}
                aria-label={AriaLabel.TABLET_VIEW}
                onClick={() => setViewPort(ViewPort.TABLET)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") setViewPort(ViewPort.TABLET);
                }}
                className={`${
                  viewPort === ViewPort.TABLET && "text-blue-600"
                } cursor-pointer`}
              />
            </Tooltip>
            <hr className="h-5 w-px bg-geekblue-300" />
            <Tooltip title={ViewPort.DESKTOP} color="black">
              <DesktopOutlined
                tabIndex={0}
                aria-label={AriaLabel.DESKTOP_VIEW_BUTTON}
                onClick={() => setViewPort(ViewPort.DESKTOP)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") setViewPort(ViewPort.DESKTOP);
                }}
                className={`${
                  viewPort === ViewPort.DESKTOP && "text-blue-600"
                } cursor-pointer`}
              />
            </Tooltip>
            <hr className="h-5 w-px bg-geekblue-300" />
            <div className="flex gap-1.5 items-center">
              <span
                className={`text-sm text-[#434343]
               `}
              >
                View Full Screen
              </span>

              <div className="flex items-center" onClick={() => setOpen(true)} onKeyUp={(e)=> {if(e.key==='Enter') setOpen(true)}}>
                <Tooltip title={ViewPort.FULLSCREEN} color="black">
                  <FullscreenOutlined
                    tabIndex={0}
                    aria-label={AriaLabel.FULL_SCREEN_VIEW}
                    onClick={() => setViewPort(ViewPort.FULLSCREEN)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") setViewPort(ViewPort.FULLSCREEN);
                    }}
                    className={`${
                      viewPort === ViewPort.FULLSCREEN && "text-blue-600"
                    }
                   cursor-pointer`}
                  />
                </Tooltip>
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
        title={AriaLabel.FULL_SCREEN_VIEW}
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
