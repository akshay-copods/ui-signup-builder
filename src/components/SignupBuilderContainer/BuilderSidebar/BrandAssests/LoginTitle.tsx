import { Input } from "antd";
import React from "react";
import { useBrandAssetStore } from "../../../../store/BrandAssetStore";
import { signup_builder_sidebar } from "../../../../constants/signup_builder_constants";
export const LoginTitle = () => {
    const {setWelcomeMessage,getWelcomeMessage}= useBrandAssetStore()
  return (
    <div className="px-5 pb-5">
      {" "}
      <div className={`flex gap-2 items-center flex-col`}>
        <label className="self-start">{signup_builder_sidebar.SIGN_UP_TITLE}</label>
        <Input
          title="j"
          placeholder="type here to change the title"
          value={getWelcomeMessage()}
          onChange={(e) => setWelcomeMessage(e.target.value)}
        />
      </div>
    </div>
  );
};
