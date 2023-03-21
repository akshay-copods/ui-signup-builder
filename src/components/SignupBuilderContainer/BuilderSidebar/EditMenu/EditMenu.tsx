import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { AddInputField } from "../../..";
export const EditMenu = ({
  setEditMenuOpen,
}: {
  setEditMenuOpen: (e: boolean) => void;
}) => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <DownOutlined onClick={() => setEditMenuOpen(false)} rotate={90} />
        <span>Add Input Fields</span>
      </div>
      <AddInputField/>
    </div>
  );
};
