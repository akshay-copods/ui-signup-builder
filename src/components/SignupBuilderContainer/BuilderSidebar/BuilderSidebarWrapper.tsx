import { Tabs, TabsProps } from "antd";
import React from "react";
import { BuilderSidebar, EditMenu, LoginTypes } from "../..";
export const BuilderSidebarWrapper = ({
  setEditMenuOpen,
  editMenuOpen,
}: {
  setEditMenuOpen: (e: boolean) => void;
  editMenuOpen: boolean;
}) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login Types`,
      children: <LoginTypes />,
    },
    {
      key: "2",
      label: `Styling`,
      children: <BuilderSidebar setEditMenuOpen={setEditMenuOpen} />,
    },
  ];
  return (
    <div>
      {editMenuOpen ? (
        <EditMenu setEditMenuOpen={setEditMenuOpen} />
      ) : (
        <Tabs id="sidebar-tabs-container" defaultActiveKey="1" items={items} />
      )}
    </div>
  );
};
