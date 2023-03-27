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
import { signup_builder_sidebar } from "../../../constants/signup_builder_constants";
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
const rootSubmenuKeys = [
  signup_builder_sidebar.THEME,
  signup_builder_sidebar.LAYOUT,
  signup_builder_sidebar.BUTTONS,
  signup_builder_sidebar.COLORS,
  signup_builder_sidebar.INPUT_FIELD,
  signup_builder_sidebar.TYPOGRAPHY,
];

export const BuilderSidebar = ({
  setEditMenuOpen,
}: {
  setEditMenuOpen: (e: boolean) => void;
}) => {
  const [openKeys, setOpenKeys] = useState([signup_builder_sidebar.THEME]);
  const items: MenuItem[] = [
    getItem(signup_builder_sidebar.THEME, signup_builder_sidebar.THEME, "", [
      getItem(<Theme />, "1"),
    ]),
    getItem(signup_builder_sidebar.LAYOUT, signup_builder_sidebar.LAYOUT, "", [
      getItem(<LayoutStyling setEditMenuOpen={setEditMenuOpen} />, "2"),
    ]),
    getItem(
      signup_builder_sidebar.BUTTONS,
      signup_builder_sidebar.BUTTONS,
      "",
      [getItem(<ButtonStyling />, "3")]
    ),
    getItem(signup_builder_sidebar.COLORS, signup_builder_sidebar.COLORS, "", [
      getItem(<ColorsStyling />, "4"),
    ]),
    getItem(
      signup_builder_sidebar.INPUT_FIELD,
      signup_builder_sidebar.INPUT_FIELD,
      "",
      [getItem(<InputFieldStyling setEditMenuOpen={setEditMenuOpen} />, "5")]
    ),
    getItem(
      signup_builder_sidebar.TYPOGRAPHY,
      signup_builder_sidebar.TYPOGRAPHY,
      "",
      [getItem(<TypographyStyling />, "6")]
    ),
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
