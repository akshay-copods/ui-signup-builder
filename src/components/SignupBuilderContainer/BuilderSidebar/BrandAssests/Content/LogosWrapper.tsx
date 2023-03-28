import React, { useEffect, useState } from "react";
import {
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { AddLogos, EditLogos } from "../../../..";
import "../../sidebar.css";

export const LogosWrapper = ({
  setActiveContent,
}: {
  setActiveContent: (e: string) => void;
}) => {
  const { getLogos, deleteLogos, setLogos, logos } = useBrandAssetStore();
  const [currentAccordion, setCurrentAccordion] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [openAddLogos, setAddLogo] = useState(false);
  const [id, setId] = useState("");
  console.log(getLogos(),'getlogos')
  return (
    <div className="flex flex-col gap-5 " id="edit-logos">
      <div className="flex px-5 pt-5 gap-3 items-center">
        <DownOutlined
          tabIndex={0}
          aria-label={signup_builder_sidebar.BACK_BUTTON}
          onClick={() => setActiveContent("3")}
          onKeyUp={(e) => {
            if (e.key === "Enter") setActiveContent("3");
          }}
          rotate={90}
        />
        <span tabIndex={0} aria-label={signup_builder_sidebar.ADD_LOGO}>
          {signup_builder_sidebar.ADD_LOGO}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {getLogos().map((data) => {
          return (
            <div
              key={data.id}
              className={`flex flex-col min-h-20 gap-1  ${
                data.id !== logos.slice(-1).pop()?.id &&
                "border-borderColor-1 border-b"
              } `}
            >
              <div
                className={`flex  px-11 justify-between items-center hover:bg-gray-100 py-3`}
                onMouseEnter={() => {
                  setOpenAction(true);
                }}
                onMouseLeave={() => setOpenAction(false)}
              >
                <div className="flex gap-3 items-center">
                  <img
                    style={{ borderRadius: "50%" }}
                    className="w-10"
                    src={data.imageUrl}
                    alt=""
                  />
                </div>
                {openAction && (
                  <div className={`flex gap-2.5 items-center`}>
                    <DeleteOutlined
                      onClick={() => deleteLogos(data.id)}
                      className="text-customBlack-400"
                    />
                    <hr className="h-3 w-px bg-gray-400" />
                    <EditOutlined
                      onKeyUp={(e) => {
                        if (e.key === "Enter")
                          setAddLogo(false),
                            setCurrentAccordion(!currentAccordion);
                      }}
                      onClick={() => {
                        setAddLogo(false),
                          setCurrentAccordion(!currentAccordion);
                        setId(data.id);
                      }}
                      className="text-customBlack-400"
                    />
                  </div>
                )}
              </div>

              {data.id === id && currentAccordion && (
                <EditLogos
                  data={data}
                  setCurrentAccordion={setCurrentAccordion}
                />
              )}
            </div>
          );
        })}
        {logos.length < 6 && !openAddLogos && (
          <div
            onClick={() => {
              setAddLogo(true),
                setLogos({
                  id: Date.now().toString(),
                  imageUrl:
                    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
                });
            }}
            tabIndex={0}
            aria-label={signup_builder_sidebar.ADD_LOGO}
            className="flex gap-1.5 border-borderColor-1 border-t cursor-pointer items-center pt-5 pl-5 text-xs text-geekblue-600"
          >
            <PlusOutlined style={{ fontSize: "12px" }} />
            <span>{signup_builder_sidebar.ADD_LOGO}</span>
          </div>
        )}
        {openAddLogos && <AddLogos setAddLogo={setAddLogo} />}
        {logos.length >= 6 && (
          <span className="px-5 text-xs">you can add maximum 6 logo</span>
        )}
      </div>
    </div>
  );
};
