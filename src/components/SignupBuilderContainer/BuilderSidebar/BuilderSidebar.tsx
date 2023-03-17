import React, { useState } from "react";
import { MenuProps, Menu } from "antd";
import './sidebar.css'
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

 export const BuilderSidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const items: MenuItem[] = [
    getItem("Theme", "sub1", "", [getItem("theme", "1")]),
    getItem("Layout", "sub2", "", [getItem("layout", "2")]),
    getItem("Buttons", "sub3", "", [getItem("button", "3")]),
    getItem("Logo Image", "sub4", "", [getItem("logoimage", "4")]),
    getItem("Colors", "sub5", "", [getItem("colors", "5")]),
    getItem("Input Field", "sub6", "", [getItem("inputfield", "6")]),
    getItem("Typography", "sub7", "", [getItem("typo", "7")]),
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
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: "auto", fontSize: "14px" }}
      items={items}
    />
  );
};
