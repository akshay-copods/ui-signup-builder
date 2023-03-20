import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  ButtonStyling,
  ColorsStyling,
  EditMenu,
  InputFieldStyling,
  LogoImageStyling,
  Theme,
  TypographyStyling,
} from "../..";
import "./sidebar.css";
import { LayoutStyling } from "./Styling/Layout/LayoutStyling";
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

export const BuilderSidebar = ({setEditMenuOpen}:{setEditMenuOpen:(e:boolean)=>void}) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const items: MenuItem[] = [
    getItem("Theme", "sub1", "", [getItem(<Theme />, "1")]),
    getItem("Layout", "sub2", "", [
      getItem(<LayoutStyling setEditMenuOpen={setEditMenuOpen} />, "2"),
    ]),
    getItem("Buttons", "sub3", "", [getItem(<ButtonStyling />, "3")]),
    getItem("Logo Image", "sub4", "", [getItem(<LogoImageStyling />, "4")]),
    getItem("Colors", "sub5", "", [getItem(<ColorsStyling />, "5")]),
    getItem("Input Field", "sub6", "", [getItem(<InputFieldStyling />, "6")]),
    getItem("Typography", "sub7", "", [getItem(<TypographyStyling />, "7")]),
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
    <div>
     
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
