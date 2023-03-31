import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
export const Statements = ({
  setActiveContent,
}: {
  setActiveContent: (e: string) => void;
}) => {
    const {setStatementsTitle,getStatements,setStatementsSubtitle}=useBrandAssetStore()
  return (
    <div className="p-5">
      <div className="flex gap-3 items-center">
        <DownOutlined onClick={() => setActiveContent("")} rotate={90} />
        <span>{signup_builder_sidebar.EDIT_STATEMENT}</span>
      </div>
      <div className="flex flex-col py-5 gap-5">
        <div className={`flex gap-2 items-center flex-col`}>
          <label className="self-start text-xs w-2/4 text-customBlack-400">{signup_builder_sidebar.STATEMENT_TITLE}</label>
          <Input
            title={signup_builder_sidebar.STATEMENT_TITLE}
            placeholder="type here to change the title"
            value={getStatements().title}
            onChange={(e) => setStatementsTitle(e.target.value)}
          />
        </div>
        <div className={`flex gap-2 items-center flex-col`}>
          <label className="self-start text-xs w-2/4 text-customBlack-400">{signup_builder_sidebar.STATEMENT_SUB_TITLE}</label>
          <Input
            title={signup_builder_sidebar.STATEMENT_SUB_TITLE}
            placeholder="type here to change the Sub-Title"
            value={getStatements().subtitle}
            onChange={(e) => setStatementsSubtitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
