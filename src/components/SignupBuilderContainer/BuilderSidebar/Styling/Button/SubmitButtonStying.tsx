import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { ColorPickerComponent, SelectComponent } from "../../../..";
import { useButtonStore } from "../../../../../store/ButtonStore";
import {
  buttonStates,
  fontSizes,
  fontWeight,
} from "../../../../../stylingConfig";
import { CurrentButtonState } from "../../../../../types/ButtonStoreTypes";
export const SubmitButtonStying = () => {
  const { getSubmitButtonStateTheme, setSubmitButtonStateTheme } =
    useButtonStore();

  // To store accordion state
  const [currentAccordion, setCurrentAccordion] = useState(false);

  // To store button state
  const [submitButtonState, setSubmitButtonState] =
    useState<CurrentButtonState>(CurrentButtonState.DEFAULT);
  const styles = getSubmitButtonStateTheme(submitButtonState);

  return (
    <div className='flex py-5  border-t-2 border-dashed border-natural-5 flex-col gap-5'>
      <div
        className='flex gap-2 items-center'
        onKeyUp={(e) => {
          if (e.key === "Enter") setCurrentAccordion(!currentAccordion);
        }}
        onClick={() => {
          setCurrentAccordion(!currentAccordion);
        }}>
        <span className='text-xs text-customBlack-600 font-medium'>
          Submit Button Styling
        </span>
        {currentAccordion ? (
          <UpOutlined className='text-black' />
        ) : (
          <DownOutlined className='text-black' />
        )}
      </div>
      {/* {position} */}
      <div
        className={
          "overflow-auto flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordion ? "h-full" : "max-h-0")
        }>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xs text-customBlack-600 font-medium'>Styling</h4>
          {/* {testing values} */}
          <div className='flex  flex-col gap-4'>
            <SelectComponent
              value={submitButtonState}
              onChange={(value) => setSubmitButtonState(value)}
              options={buttonStates}
            />
            <SelectComponent
              label={"Font Size"}
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
              label={"Font Weight"}
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
              label='Font Color'
              value={styles.fontColor}
              popup={true}
              onChange={(value) => {
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  fontColor: value,
                });
              }}
              fontColor={styles.fontColor}
            />
            <ColorPickerComponent
              label='Background Color'
              value={styles.backgroundColor}
              popup={true}
              onChange={(value) => {
                setSubmitButtonStateTheme(submitButtonState, {
                  ...styles,
                  backgroundColor: value,
                });
              }}
              fontColor={styles.backgroundColor}
            />
            <div className='flex items-center'>
              <span className='text-xs w-2/4 text-customBlack-400'>
                Border Radius
              </span>
              <div className='flex items-center w-2/4 gap-2'>
                <div className='flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center'>
                  <MinusOutlined
                    className='border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100'
                    onClick={() =>
                      setSubmitButtonStateTheme(submitButtonState, {
                        ...styles,
                        borderRadius:
                          styles.borderRadius > 0 ? styles.borderRadius - 1 : 0,
                      })
                    }
                  />
                  <span className='flex items-center text-xs'>
                    {styles.borderRadius > 0 && styles.borderRadius < 10
                      ? `0${styles.borderRadius}`
                      : styles.borderRadius}
                  </span>

                  <PlusOutlined
                    onClick={() =>
                      setSubmitButtonStateTheme(submitButtonState, {
                        ...styles,
                        borderRadius: styles.borderRadius + 1,
                      })
                    }
                    className='border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100'
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
