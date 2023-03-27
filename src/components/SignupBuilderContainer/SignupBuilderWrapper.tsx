import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import { SignupBuilderContainer } from "../index";
import { TemplateContainer } from "./Template/TemplateContainer";
import { BUILDER, TEMPLATES } from "../../constants/signup_builder_constants";
export const SignupBuilderWrapper = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: BUILDER, 
      children: <SignupBuilderContainer  />,
    },
    {
      key: "2",
      label: TEMPLATES, 
      children: <TemplateContainer setActiveKey={setActiveKey} />,
    },
  ];
  return (
    <Tabs
      activeKey={activeKey}
      onChange={(e) => setActiveKey(e)}
      defaultActiveKey="1"
      items={items}
    />
  );
};
