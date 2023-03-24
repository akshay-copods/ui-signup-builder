import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {  TestimonalStyling } from "../../../..";
import { DownOutlined } from "@ant-design/icons";
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
  setActiveContent
}: {
  setActiveContent:(e:string)=>void
}) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const items: MenuItem[] = [
    getItem("Testimonal Styling", "sub1", "", [getItem(<TestimonalStyling/>, "1")]),
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
    <div className="pt-5">
      <div className="flex gap-3 items-center pl-5">
        <DownOutlined onClick={() => setActiveContent("")} rotate={90} />
        <span >Testimonal</span>
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
