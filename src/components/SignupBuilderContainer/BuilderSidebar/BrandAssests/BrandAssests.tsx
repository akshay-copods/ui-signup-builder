import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import {
  ContentMainContainer,
  TestimonalWrapper,
  LoginTitle,
  LogoImageStyling,
} from "../../..";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";

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
const rootSubmenuKeys = [signup_builder_sidebar.COMPANY_LOGO, signup_builder_sidebar.SIGN_UP_BOX_TITLE, signup_builder_sidebar.CONTENT];

export const BrandAssests = ({
  setEditMenuOpen,
  setActiveContent,
}: {
  setEditMenuOpen: (e: boolean) => void;
  setActiveContent: (e: string) => void;
}) => {
  const [openKeys, setOpenKeys] = useState([signup_builder_sidebar.COMPANY_LOGO]);

  const items: MenuItem[] = [
    getItem(signup_builder_sidebar.COMPANY_LOGO, signup_builder_sidebar.COMPANY_LOGO, "", [getItem(<LogoImageStyling />, "1")]),
    getItem(signup_builder_sidebar.SIGN_UP_BOX_TITLE, signup_builder_sidebar.SIGN_UP_BOX_TITLE, "", [getItem(<LoginTitle />, "2")]),
    getItem(signup_builder_sidebar.CONTENT, signup_builder_sidebar.CONTENT, "", [
      getItem(
        <ContentMainContainer
          setActiveContent={setActiveContent}
          setEditMenuOpen={setEditMenuOpen}
        />,
        "3"
      ),
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
