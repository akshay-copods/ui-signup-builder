import React from "react";
import { LoginMethod, SocialLogin, UserApprovel } from "../../..";

export const LoginTypes = () => {
  return (
    <div className="flex flex-col">
      <SocialLogin />
      <hr className="h-px w-full bg-[#0000000f]" />
      <LoginMethod />
      <hr className="h-px w-full bg-[#0000000f]" />
      <UserApprovel />
    </div>
  );
};
