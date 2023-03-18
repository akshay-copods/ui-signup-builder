import React, { useEffect, useState } from "react";
// import googleIcon from '../../..'
import { Icon } from "@iconify/react";
import { socialButtonOptions } from "../../../../stylingConfig";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
export const SocialLogin = () => {
  // Add/Remove checked item from list
  const { getSocialLoginTypes, setSocialLoginTypes, socialLoginTypes } =
    useLoginTypesStore();
  const [checked, setChecked]: any = useState(socialButtonOptions);
  const updateCheckStatus = (index: any) => {
    setChecked(
      checked.map((checked: any, currentIndex: any) =>
        currentIndex === index
          ? { ...checked, checked: !checked.checked }
          : checked
      )
    );
  };
  const filterData = checked.filter((data: any) => {
    return data.checked === true;
  });
 
  

  return (
    <div className="flex p-6  flex-col gap-3">
      <div>
        <h2 className="text-sm font-medium text-[#000000d9]">
          Social Logins ({filterData.length}/4)
        </h2>
        <span className="text-xs font-normal text=[#00000073]">
          You can select only 4 social logins.
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {checked.map((data: any, index: number) => {
          return (
            <div key={data.name} className="flex items-center gap-3">
              <input
                className="w-4 h-4"
                onChange={() => updateCheckStatus(index)}
                value={data.name}
                checked={data.checked}
                type="checkbox"
                name={data.name}
             
              />
              <div className="flex items-center gap-1">
                <Icon className="w-5 h-5" icon={data.icon} />
                <span className="font-normal text-xs">{data.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
