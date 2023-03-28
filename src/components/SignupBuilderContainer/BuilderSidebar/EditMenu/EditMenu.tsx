import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { AddInputField } from "../../..";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";
export const EditMenu = ({ setEditMenuOpen }: { setEditMenuOpen: (e:boolean)=>void }) => {
  return (
    <div className="p-5">
      <div className="flex gap-3 items-center">
        <DownOutlined
          tabIndex={0}
          aria-label={signup_builder_sidebar.BACK_BUTTON}
          onClick={() => setEditMenuOpen(false)}
          onKeyUp={(e) => {
            if (e.key === "Enter") setEditMenuOpen(false);
          }}
          rotate={90}
        />
        <span tabIndex={0} aria-label={signup_builder_sidebar.ADD_INPUT_FIELD}>
          {signup_builder_sidebar.ADD_INPUT_FIELD}
        </span>
      </div>
      <AddInputField />
    </div>
  );
};
