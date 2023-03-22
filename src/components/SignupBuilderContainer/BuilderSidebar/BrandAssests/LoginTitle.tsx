import { Input } from "antd";
import React from "react";
import { useBrandAssetStore } from "../../../../store/BrandAssetStore";
export const LoginTitle = () => {
    const {setWelcomeMessage,getWelcomeMessage}= useBrandAssetStore()
  return (
    <div className="px-5 pb-5">
      {" "}
      <div className={`flex gap-2 items-center flex-col`}>
        <label className="self-start">Sign Up Title</label>
        <Input
          title="j"
          placeholder="Basic usage"
          value={getWelcomeMessage()}
          onChange={(e) => setWelcomeMessage(e.target.value)}
        />
      </div>
    </div>
  );
};
