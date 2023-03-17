import React from "react";
import {
  DesktopOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MobileOutlined,
  RedoOutlined,
  TabletOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { SignupFormTemplate } from "../..";
import { Navigate, Route, Routes } from "react-router-dom";
export const SignupFormContainer = () => {
  return (
      <div className="w-full">
        <div className="bg-geekblue-100 py-7 flex px-5 flex-col gap-7">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <RedoOutlined />
              <hr className="h-5 w-px bg-geekblue-300" />
              <UndoOutlined />
            </div>
            <div className="flex gap-4 items-center">
              <MobileOutlined
                tabIndex={0}
                aria-label="mobile view button"
                //   onClick={mobileChange}
                //   onKeyUp={(e) => {
                //     if (e.key === "Enter") mobileChange();
                //   }}
                //   className={`${
                //     signUpState.state.viewPort.mobile && "text-blue-600"
                //   }`}
              />
              <hr className="h-5 w-px bg-geekblue-300" />
              <TabletOutlined
                tabIndex={0}
                aria-label="tablet view button"
                //   onClick={tabletChange}
                //   onKeyDown={(e) => {
                //     if (e.key === "Enter") tabletChange();
                //   }}
                //   className={`${
                //     signUpState.state.viewPort.tablet && "text-blue-600"
                //   }`}
              />
              <hr className="h-5 w-px bg-geekblue-300" />
              <DesktopOutlined
                tabIndex={0}
                aria-label="desktop view button"
                //   onClick={desktopChange}
                //   onKeyUp={(e) => {
                //     if (e.key=== "Enter") desktopChange();
                //   }}
                //   className={`${
                //     signUpState.state.viewPort.desktop && "text-blue-600"
                //   } pointer`}
              />
              <hr className="h-5 w-px bg-geekblue-300" />
              <div className="flex gap-1.5 items-center">
                <span
                // className={`text-sm ${
                //   signUpState.state.viewPort.fullScreen
                //     ? "text-blue-600"
                //     : "text-[#434343]"
                // }  `}
                >
                  View Full Screen
                </span>
                {/* {signUpState.state.viewPort.fullScreen ? (
                <FullscreenExitOutlined
                  tabIndex={0}
                  aria-label="fullscreen view"
                  onClick={ExitFullScreenChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") ExitFullScreenChange();
                  }}
                  className="cursor-pointer"
                />
              ) : (
                <FullscreenOutlined
                  tabIndex={0}
                  aria-label="exit fullscreen view"
                  onClick={fullScreenChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") fullScreenChange();
                  }}
                  className="cursor-pointer"
                />
              )} */}
              </div>
            </div>
          </div>
          <Routes>
          <Route path="/" element={<Navigate to="/template1" />} />
          <Route path="template1" element={<SignupFormTemplate />} />
          
        </Routes>
        </div>
      </div>
  );
};
