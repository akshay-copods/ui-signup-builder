import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { EditTestimonalWrapper, TestimonalStyling } from "../../../..";
import { DownOutlined } from "@ant-design/icons";
import "./../../sidebar.css";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

export const TestimonalWrapper = ({
  setActiveContent,
  setActiveState,
}: {
  setActiveContent: (e: string) => void;
  setActiveState: (e: string) => void;
}) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const items: MenuItem[] = [
    getItem("Testimonal Styling", "sub1", "", [
      getItem(<TestimonalStyling />, "1"),
    ]),
    getItem("Edit-Add Testimonal", "sub2", "", [
      getItem(<EditTestimonalWrapper />, "2"),
    ]),
  ];

  const onOpenChange: MenuProps["onOpenChange"] = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="pt-5" id="edit-testimonal">
      <div className="flex gap-3 items-center pl-5">
        <DownOutlined
          tabIndex={0}
          onClick={() => {
            setActiveContent(""), setActiveState("3");
          }}
          rotate={90}
        />
        <span>Testimonal</span>
      </div>

      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: "auto", fontSize: "14px" }}
        items={items}
      />
    </div>
  );
};
