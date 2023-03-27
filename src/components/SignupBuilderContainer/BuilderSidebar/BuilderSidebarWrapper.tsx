import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import { BrandAssests, BuilderSidebar, EditMenu, LoginTypes, Statements, TestimonalWrapper } from "../..";
import { EditTestimonals } from "./BrandAssests/Content/EditTestimonals";
export const BuilderSidebarWrapper = ({
  setEditMenuOpen,
  editMenuOpen,
  setActiveContent,
  content
}: {
  setEditMenuOpen: (e: boolean) => void;
  editMenuOpen: boolean;
  setActiveContent:(e:string)=>void
  content:string
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
    {
      key: "3",
      label: `Brand assets`,
      children: <BrandAssests setEditMenuOpen={setEditMenuOpen} setActiveContent={setActiveContent} />,
    },
  ];
  const [activeState,setActiveState]=useState('1')
  return (
    <div>
      {editMenuOpen ? (
        <EditMenu setEditMenuOpen={setEditMenuOpen}  />
      ):content==='STATEMENTS'?(
        <Statements setActiveContent={setActiveContent} />
      ):content==='TESTIMONALS'?(
        <TestimonalWrapper setActiveState={setActiveState} setActiveContent={setActiveContent} />
      ):<Tabs activeKey={activeState} onChange={(e) => setActiveState(e)}  id="sidebar-tabs-container" defaultActiveKey="1" items={items} />
      }
    </div>
  );
};
