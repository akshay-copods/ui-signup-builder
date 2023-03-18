import React from "react";
import { logoAlignments } from "../../../../../stylingConfig";
import { SelectComponent } from "../../../..";

export const LogoImageStyling = () => {
  return (
    <div className="px-5 pb-5">
      <SelectComponent
        label={"Image Alignment"}
        value={''}
        onChange={()=>console.log()}
        options={logoAlignments as any}
      />
    </div>
  );
};
