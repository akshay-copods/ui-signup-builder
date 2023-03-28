import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import {
  BrandAssests,
  BuilderSidebar,
  EditMenu,
  LoginTypes,
  LogosWrapper,
  Statements,
  TestimonalWrapper,
} from "../..";
import { signup_builder_sidebar } from "../../../constants/signup_builder_constants";
export const BuilderSidebarWrapper = ({
  setEditMenuOpen,
  editMenuOpen,
  setActiveContent,
  content,
}: {
  setEditMenuOpen: (e: boolean) => void;
  editMenuOpen: boolean;
  setActiveContent: (e: string) => void;
  content: string;
}) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: signup_builder_sidebar.LOGIN_TYPES,
      children: <LoginTypes />,
    },
    {
      key: "2",
      label: signup_builder_sidebar.STYLING,
      children: <BuilderSidebar setEditMenuOpen={setEditMenuOpen} />,
    },
    {
      key: "3",
      label: signup_builder_sidebar.BRAND_ASSESSTS,
      children: (
        <BrandAssests
          setEditMenuOpen={setEditMenuOpen}
          setActiveContent={setActiveContent}
        />
      ),
    },
  ];
  const [activeState, setActiveState] = useState("1");
  return (
    <div>
      {editMenuOpen ? (
        <EditMenu setEditMenuOpen={setEditMenuOpen} />
      ) : content === "STATEMENTS" ? (
        <Statements setActiveContent={setActiveContent} />
      ) : content === "TESTIMONALS" ? (
        <TestimonalWrapper
          setActiveState={setActiveState}
          setActiveContent={setActiveContent}
        />
      ): content === "LOGO" ? (
        <LogosWrapper setActiveContent={setActiveContent} />
      ) : (
        <Tabs
          activeKey={activeState}
          onChange={(e) => setActiveState(e)}
          id="sidebar-tabs-container"
          defaultActiveKey="1"
          items={items}
        />
      )}
    </div>
  );
};
