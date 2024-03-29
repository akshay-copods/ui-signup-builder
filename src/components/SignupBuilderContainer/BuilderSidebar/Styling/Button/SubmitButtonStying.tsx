import React, { useEffect, useState } from "react";
import { useButtonStore } from "../../../../../store/ButtonStore";
import { CurrentButtonState } from "../../../../../types/ButtonStoreTypes";
import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { ColorPickerComponent, SelectComponent } from "../../../..";
import {
  buttonStates,
  fontSizes,
  fontWeight,
} from "../../../../../stylingConfig";
export const SubmitButtonStying = () => {
  const { getSubmitButtonStateTheme, setSubmitButtonStateTheme } =
    useButtonStore();

  // To store accordian state
  const [currentAccordian, setCurrentAccordian] = useState(1);

  // To store button state
  const [submitButtonState, setSubmitButtonState] =
    useState<CurrentButtonState>(CurrentButtonState.DEFAULT);

  // To store current button state styles
  const [currentSocialButtonStyles, setCurrentSocialButtonStyles] = useState(
    getSubmitButtonStateTheme(submitButtonState)
  );

  // To get global submit Button Styles
  useEffect(() => {
    setCurrentSocialButtonStyles(getSubmitButtonStateTheme(submitButtonState));
  }, [submitButtonState]);

  // To update global submit Button Styles
  useEffect(
    () =>
      setSubmitButtonStateTheme(submitButtonState, currentSocialButtonStyles),
    [currentSocialButtonStyles]
  );

  return (
    <div className="flex py-5  border-t-2 border-dashed border-natural-5 flex-col gap-5">
      <div
        className="flex gap-2 items-center"
        onKeyUp={(e) => {
          if (e.key === "Enter")
            setCurrentAccordian(
              currentAccordian === 1 ? -1 : currentAccordian === -1 ? 1 : -1
            );
        }}
        onClick={() => {
          setCurrentAccordian(
            currentAccordian === 1 ? -1 : currentAccordian === -1 ? 1 : -1
          );
        }}
      >
        <span className="text-xs text-customBlack-600 font-medium">
          Submit Button Styling
        </span>
        {currentAccordian === 1 ? (
          <UpOutlined style={{ fontSize: '10px'}} className="text-black" />
        ) : (
          <DownOutlined style={{ fontSize: '10px'}} className="text-black" />
        )}
      </div>
      {/* {position} */}
      <div
        className={
          "overflow-scroll flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordian === 1 ? "h-full" : "max-h-0")
        }
      >
        <div className="flex flex-col gap-2">
          <h4 className="text-xs text-customBlack-600 font-medium">Styling</h4>
          {/* {testing values} */}
          <div className="flex  flex-col gap-4">
            <SelectComponent
              value={submitButtonState}
              onChange={(value) => setSubmitButtonState(value)}
              options={buttonStates}
            />
            <SelectComponent
              label={"Font Size"}
              value={currentSocialButtonStyles.fontSize}
              onChange={(value) =>
                setCurrentSocialButtonStyles({
                  ...currentSocialButtonStyles,
                  fontSize: value,
                })
              }
              options={fontSizes}
            />
            <SelectComponent
              label={"Font Weight"}
              value={currentSocialButtonStyles.fontWeight}
              onChange={(value) =>
                setCurrentSocialButtonStyles({
                  ...currentSocialButtonStyles,
                  fontWeight: value,
                })
              }
              options={fontWeight}
            />
            <ColorPickerComponent
              label="Font Color"
              value={currentSocialButtonStyles.fontColor}
              popup={true}
              onChange={(value) => {
                setCurrentSocialButtonStyles({
                  ...currentSocialButtonStyles,
                  fontColor: value.hex,
                });
              }}
              fontColor={currentSocialButtonStyles.fontColor}
            />
            <ColorPickerComponent
              label="Background Color"
              value={currentSocialButtonStyles.backgroundColor}
              popup={true}
              onChange={(value) => {
                setCurrentSocialButtonStyles({
                  ...currentSocialButtonStyles,
                  backgroundColor: value.hex,
                });
              }}
              fontColor={currentSocialButtonStyles.backgroundColor}
            />
            <div className="flex items-center">
              <span className="text-xs w-2/4 text-customBlack-400">
                Border Radius
              </span>
              <div className="flex items-center w-2/4 gap-2">
                <div className="flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
                  <MinusOutlined
                    className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
                    onClick={() =>
                      setSubmitButtonStateTheme(submitButtonState, {
                        ...getSubmitButtonStateTheme(submitButtonState),
                        borderRadius:
                        getSubmitButtonStateTheme(submitButtonState).borderRadius
                        > 0
                        ? getSubmitButtonStateTheme(submitButtonState).borderRadius
                           - 1
                        : 0,
                      })
                    }
                  />
                  <span className="flex items-center text-xs">
                    {getSubmitButtonStateTheme(submitButtonState).borderRadius >
                      0 &&
                    getSubmitButtonStateTheme(submitButtonState).borderRadius <
                      10
                      ? `0${
                          getSubmitButtonStateTheme(submitButtonState)
                            .borderRadius
                        }`
                      : getSubmitButtonStateTheme(submitButtonState)
                          .borderRadius}
                  </span>

                  <PlusOutlined
                    onClick={() =>
                      setSubmitButtonStateTheme(submitButtonState, {
                        ...getSubmitButtonStateTheme(submitButtonState),
                        borderRadius:
                          getSubmitButtonStateTheme(submitButtonState)
                            .borderRadius + 1,
                      })
                    }
                    className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
