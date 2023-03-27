import React from "react";
import { useLoginTypesStore } from "../../../../store/LoginTypesStore";
import { emailPassData } from "../../../../stylingConfig";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";
export const LoginMethod = () => {
  const { getLoginMethods, loginMethods, setLoginMethods } =
    useLoginTypesStore();
  return (
    <div className="flex gap-3 p-6  flex-col">
      <h2
        tabIndex={0}
        aria-label={signup_builder_sidebar.WORK_EMAIL_PASS_LESS_LOGIN}
        className="text-sm font-medium text-[#000000d9]"
      >
        {signup_builder_sidebar.WORK_EMAIL_PASS_LESS_LOGIN}
      </h2>
      <div className="flex flex-col gap-3">
        {emailPassData.map((data: any) => {
          return (
            <div key={data.value}>
              <label className="flex items-center gap-3 cursor-pointer max-w-max">
                <input
                  type="radio"
                  name="login-methods"
                  value={data.value}
                  checked={loginMethods === data.value}
                  onChange={() => setLoginMethods(data.value)}
                  tabIndex={0}
                  aria-label={data.label}
                />
                <span className="font-normal text-xs">{data.label}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
