import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { AddInputField } from "../../..";
export const EditMenu = ({
  setEditMenuOpen,children,
}: {
  setEditMenuOpen?: any
  children:any
}) => {
  console.log(children,'children')
  return (
    <div className="p-5">
      <div className="flex gap-3 items-center">
        <DownOutlined onClick={() => setEditMenuOpen(false)} rotate={90} />
        <span>Add Input Field</span>
      </div>
      <AddInputField/>
    </div>
  );
};
