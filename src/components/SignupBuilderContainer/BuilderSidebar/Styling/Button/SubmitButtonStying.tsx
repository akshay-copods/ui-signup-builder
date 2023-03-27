import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { ColorPickerComponent, SelectComponent } from "../../../..";
import { useButtonStore } from "../../../../../store/ButtonStore";
import { useThemeStore } from "../../../../../store/ThemeStore";
import {
  buttonStates,
  fontSizes,
  fontWeight,
} from "../../../../../stylingConfig";
import { CurrentButtonState } from "../../../../../types/ButtonStoreTypes";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
import { Tooltip } from "antd";
export const SubmitButtonStying = () => {
  const { getSubmitButtonStateTheme, setSubmitButtonStateTheme } =
    useButtonStore();
  const { theme } = useThemeStore();
  // To store accordion state
  const [currentAccordion, setCurrentAccordion] = useState(false);

  // To store button state
  const [submitButtonState, setSubmitButtonState] =
    useState<CurrentButtonState>(CurrentButtonState.DEFAULT);
  const styles = getSubmitButtonStateTheme(submitButtonState);

  return (
    <div className="flex py-5  border-t-2 border-dashed border-natural-5 flex-col gap-5">
      <div
        className="flex gap-2 items-center"
        onKeyUp={(e) => {
          if (e.key === "Enter") setCurrentAccordion(!currentAccordion);
        }}
        onClick={() => {
          setCurrentAccordion(!currentAccordion);
        }}
      >
        <span tabIndex={0} aria-label={signup_builder_sidebar.SUBMIT_BUTTON_STYLING} className="text-xs text-customBlack-600 font-medium">
          {signup_builder_sidebar.SUBMIT_BUTTON_STYLING}
        </span>
        {currentAccordion ? (
          <UpOutlined tabIndex={0} aria-label={signup_builder_sidebar.TOP_ALIGN} style={{ fontSize: "10px" }} className="text-black" />
        ) : (
          <DownOutlined tabIndex={0} aria-label={signup_builder_sidebar.BOTTOM_ALIGN} style={{ fontSize: "10px" }} className="text-black" />
        )}
      </div>
      {/* {position} */}
      <div
        className={
          "overflow-auto flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordion ? "h-full" : "max-h-0")
        }
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-xs text-customBlack-600 font-medium">
            {signup_builder_sidebar.STYLING}
          </h2>
          {/* {testing values} */}
          <div className="flex  flex-col gap-4">
            <SelectComponent
              value={submitButtonState}
              onChange={(value) => setSubmitButtonState(value)}
              options={buttonStates}
            />
            <SelectComponent
              label={signup_builder_sidebar.FONT_SIZE}
              value={styles.fontSize}
              onChange={(value) =>
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  fontSize: value,
                })
              }
              options={fontSizes}
            />
            <SelectComponent
              label={signup_builder_sidebar.FONT_WEIGHT}
              value={styles.fontWeight}
              onChange={(value) =>
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  fontWeight: value,
                })
              }
              options={fontWeight}
            />
            <ColorPickerComponent
              label={signup_builder_sidebar.FONT_COLOR}
              value={styles.fontColor}
              popup={true}
              onChange={(value) => {
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  fontColor: value.hex,
                });
              }}
              fontColor={styles.fontColor}
            />
            <ColorPickerComponent
              label={signup_builder_sidebar.BACKGROUND_COLOR}
              value={styles.backgroundColor}
              popup={true}
              onChange={(value) => {
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  backgroundColor: value.hex,
                });
              }}
              fontColor={styles.backgroundColor}
            />
            <div className="flex items-center">
              <span className="text-xs w-2/4 text-customBlack-400">
                {signup_builder_sidebar.BORDER_RADIUS}
              </span>
              <div className="flex items-center w-2/4 gap-2">
                <div className="flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
                  <Tooltip
                    title={signup_builder_sidebar.MINUS_BUTTON}
                    color="geekblue"
                  >
                    <MinusOutlined
                      tabIndex={0}
                      aria-label={signup_builder_sidebar.MINUS_BUTTON}
                      className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
                      onClick={() =>
                        setSubmitButtonStateTheme(submitButtonState, {
                          ...styles,
                          borderRadius:
                            styles.borderRadius > 0
                              ? styles.borderRadius - 1
                              : 0,
                        })
                      }
                      onKeyUp={(e) => {
                        if (e.key === "Enter")
                          setSubmitButtonStateTheme(submitButtonState, {
                            ...styles,
                            borderRadius:
                              styles.borderRadius > 0
                                ? styles.borderRadius - 1
                                : 0,
                          });
                      }}
                    />
                  </Tooltip>
                  <span tabIndex={0} className="flex items-center text-xs">
                    {styles.borderRadius > 0 && styles.borderRadius < 10
                      ? `0${styles.borderRadius}`
                      : styles.borderRadius}
                  </span>
                  <Tooltip
                    title={signup_builder_sidebar.PLUS_BUTTON}
                    color="geekblue"
                  >
                    <PlusOutlined
                      tabIndex={0}
                      aria-label={signup_builder_sidebar.PLUS_BUTTON}
                      onClick={() =>
                        setSubmitButtonStateTheme(submitButtonState, {
                          ...styles,
                          borderRadius: styles.borderRadius + 1,
                        })
                      }
                      onKeyUp={(e) => {
                        if (e.key === "Enter")
                          setSubmitButtonStateTheme(submitButtonState, {
                            ...styles,
                            borderRadius: styles.borderRadius + 1,
                          });
                      }}
                      className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
