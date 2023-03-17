import React from "react";
import { Tabs, TabsProps } from "antd";
import { BuilderSidebar } from "../..";
export const BuilderSidebarWrapper = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login Types`,
      //   children: <LoginTypes />,
    },
    {
      key: "2",
      label: `Styling`,
        children: <BuilderSidebar />,
    },
  ];
  return (
    <Tabs  id="sidebar-tabs-container" defaultActiveKey="1" items={items} />
  );
};
