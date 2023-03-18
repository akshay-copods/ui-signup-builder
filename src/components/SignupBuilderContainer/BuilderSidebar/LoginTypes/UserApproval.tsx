import React from "react";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
import { userApprovalOptions } from "../../../../stylingConfig";

export const UserApproval = () => {
  const { getApprovals, setApprovals } = useLoginTypesStore();
  console.log(getApprovals());
  return (
    <div className='flex p-6  flex-col gap-3'>
      <div>
        <h2 className='text-sm font-medium text-[#000000d9]'>User Approvals</h2>
      </div>
      <div className='flex flex-col gap-5'>
        {userApprovalOptions.map((data: any) => {
          return (
            <div
              key={data.name}
              className='flex items-center gap-3'>
              <input
                className='w-4 h-4'
                onChange={() => setApprovals(data)}
                value={data.name}
                checked={getApprovals()
                  .map((k) => k.name)
                  .includes(data.name)}
                type='checkbox'
                name={data.name}
              />
              <div className='flex items-center gap-1'>
                <span className='font-normal text-xs'>{data.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
