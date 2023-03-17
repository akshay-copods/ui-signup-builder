import React from "react";
import { Tabs, TabsProps } from "antd";
import { SignupBuilderContainer } from '../index'
export const SignupBuilderWrapper = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Builder`,
        children: <SignupBuilderContainer />,
    },
    {
      key: "2",
      label: `Templates`,
      //   children: <TemplateContainer />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};
