import React from "react";
// import googleIcon from '../../..'
import { Icon } from "@iconify/react";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
import { socialButtonOptions } from "../../../../stylingConfig";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";
export const SocialLogin = () => {
  // Add/Remove checked item from list
  const { getSocialLoginTypes, setSocialLoginTypes, socialLoginTypes } =
    useLoginTypesStore();
  return (
    <div className="flex p-6  flex-col gap-3">
      <div>
        <h2 className="text-sm font-medium text-[#000000d9]">
          {signup_builder_sidebar.SOCIAL_LOGINS} ({getSocialLoginTypes().length}
          /4)
        </h2>
        <span className="text-xs font-normal text=[#00000073]">
          {signup_builder_sidebar.LOGINS_LIMIT}
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {socialButtonOptions.map((data: any) => {
          return (
            <div key={data.name}>
              <label className="flex items-center gap-3 cursor-pointer max-w-max">
                <input
                  className="w-4 h-4 cursor-pointer"
                  onChange={() => setSocialLoginTypes(data)}
                  value={data.name}
                  checked={getSocialLoginTypes()
                    .map((k) => k.name)
                    .includes(data.name)}
                  type="checkbox"
                  name={data.name}
                />
                <div className="flex items-center gap-1">
                  <Icon className="w-5 h-5" icon={data.icon} />
                  <span className="font-normal text-xs">{data.name}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
