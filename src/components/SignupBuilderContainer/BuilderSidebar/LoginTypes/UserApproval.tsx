import { Input } from "antd";
import React from "react";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
import { userApprovalOptions } from "../../../../stylingConfig";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";

export const UserApproval = () => {
  const { getApprovals, setApprovals, setUserApprovalLink } =
    useLoginTypesStore();
  return (
    <div className="flex p-6  flex-col gap-3">
      <div>
        <h2
          tabIndex={0}
          aria-label={signup_builder_sidebar.USER_APPROVELS}
          className="text-sm font-medium text-[#000000d9]"
        >
          {signup_builder_sidebar.USER_APPROVELS}
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {userApprovalOptions.map((data: any) => {
          return (
            <div className="flex flex-col gap-2" key={data.name}>
              <label className="flex items-center gap-3 cursor-pointer max-w-max">
                <input
                  className="w-4 h-4"
                  onChange={() => setApprovals(data)}
                  value={data.name}
                  checked={getApprovals()
                    .map((k) => k.name)
                    .includes(data.name)}
                  type="checkbox"
                  name={data.name}
                  tabIndex={0}
                  aria-label={data.name}
                />
                <div className="flex items-center gap-1">
                  <span className="font-normal text-xs">{data.name}</span>
                </div>
              </label>
              {getApprovals()
                ?.map((k) => k.name)
                ?.includes(data.name) && (
                <Input
                  value={getApprovals().find((k) => k.name === data.name)?.link}
                  onChange={(e) => setUserApprovalLink(e.target.value)}
                  placeholder={`Enter ${data.name} URL here`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
