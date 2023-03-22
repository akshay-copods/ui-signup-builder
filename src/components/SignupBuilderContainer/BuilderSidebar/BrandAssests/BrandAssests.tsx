import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { LogoImageStyling } from "../../..";

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

export const BrandAssests = ({setEditMenuOpen}:{setEditMenuOpen:(e:boolean)=>void}) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const items: MenuItem[] = [
    getItem("Company Logo", "sub1", "", [getItem(<LogoImageStyling />, "1")]),
   
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
