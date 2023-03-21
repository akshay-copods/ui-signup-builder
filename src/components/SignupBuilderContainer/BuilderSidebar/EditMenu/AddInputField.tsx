import React from "react";
import { useInputFieldStore } from "../../../../store";
import { addInputFieldsData } from "../../../../stylingConfig";
import { EditMenu } from "../../..";

export const AddInputField = () => {
  const { addNewInputField, getAddedInputFields } = useInputFieldStore();
  return (
   
      <div className="flex flex-col py-6  gap-5">
        {addInputFieldsData.map((data: any) => {
          return (
            <div className="flex flex-col gap-2" key={data.label}>
              <label className="flex items-center gap-3 cursor-pointer max-w-max">
                <input
                  className="w-4 h-4"
                  onChange={() => addNewInputField(data)}
                  value={data.name}
                  checked={getAddedInputFields()
                    .map((k) => k.name)
                    .includes(data.name)}
                  type="checkbox"
                  name={data.name}
                />
                <div className="flex items-center gap-1">
                  <span className="font-normal text-xs">{data.label}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>
  );
};
