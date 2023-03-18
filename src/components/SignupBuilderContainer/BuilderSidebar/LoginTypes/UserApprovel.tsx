import React, { useState } from "react";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
import { userApprovelOptions } from "../../../../stylingConfig";

export const UserApprovel = () => {
  const { getApprovals, setApprovals } = useLoginTypesStore();

  return (
    <div className="flex gap-3 p-6  flex-col">
      <h2 className="text-sm font-medium text-customBlack-600">
        User Approvels
      </h2>
      <div className="flex flex-col gap-5">
        {userApprovelOptions.map((data: any, index: number) => {
          return (
            <div key={data.value} className="flex items-center gap-3">
              <input
                className="w-4 h-4"
                onChange={() => {
                  setApprovals(data);
                }}
                value={data.name}
                checked={getApprovals()
                  .map((k) => k.name)
                  .includes(data.name)}
                type="checkbox"
                name={data.name}
              />
              <div className="flex items-center gap-1">
                <a href={data.link} className="font-normal text-xs">
                  {data.name}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
