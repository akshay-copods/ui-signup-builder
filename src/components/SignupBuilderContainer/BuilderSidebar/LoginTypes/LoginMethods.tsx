import React from "react";
import { Icon } from "@iconify/react";
import { emailPassData } from "../../../../stylingConfig";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
export const LoginMethod = () => {
  const {getLoginMethods,loginMethods,setLoginMethods} = useLoginTypesStore();
  
  return (
    <div className="flex gap-3 p-6  flex-col">
      <h2 className="text-sm font-medium text-[#000000d9]">
        Work Email & Password-less Logins
      </h2>
      <div className="flex flex-col gap-3">
        {emailPassData.map((data: any) => {
          return (
            <div key={data.value}>
              <div
                className="flex items-center gap-3"
              >
                <input
                  type="radio"
                  value={data.value}
                  checked={loginMethods === data.value}
                  onChange={()=>setLoginMethods(data.value)}
                />
                <span className="font-normal text-xs">{data.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
