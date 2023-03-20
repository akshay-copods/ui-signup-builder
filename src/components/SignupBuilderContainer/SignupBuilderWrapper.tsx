import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import { SignupBuilderContainer } from "../index";
import { TemplateContainer } from "./Template/TemplateContainer";
export const SignupBuilderWrapper = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Builder`,
      children: <SignupBuilderContainer  />,
    },
    {
      key: "2",
      label: `Templates`,
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
