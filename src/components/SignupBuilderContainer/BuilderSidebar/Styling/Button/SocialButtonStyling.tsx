import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useButtonStore } from "../../../../../store/ButtonStore";
import "../../sidebar.css";

import { ColorPickerComponent, SelectComponent } from "../../../..";
import {
  buttonStates,
  fontSizes,
  fontWeight,
  layoutType,
} from "../../../../../stylingConfig";
import {
  CurrentButtonState,
  Position,
} from "../../../../../types/ButtonStoreTypes";

export const SocialButtonStyling = () => {
  const {
    socialButton,
    setSocialButtonPosition,
    setSocialButtonLayout,
    getSocialButtonStateTheme,
    setSocialButtonStateTheme,
  } = useButtonStore();
  // To store accordion state
  const [currentAccordion, setCurrentAccordion] = useState(false);

  // To store button state
  const [socialButtonState, setSocialButtonState] =
    useState<CurrentButtonState>(CurrentButtonState.DEFAULT);

  // To store button state theme
  const styles = getSocialButtonStateTheme(socialButtonState);

  return (
    <div className='flex flex-col pb-5 gap-5'>
      <div
        className='flex gap-2 items-center'
        onKeyUp={(e) => {
          if (e.key === "Enter") setCurrentAccordion(!currentAccordion);
        }}
        onClick={() => {
          setCurrentAccordion(!currentAccordion);
        }}>
        <span className='text-xs text-customBlack-600 font-medium'>
          Social Button Styling
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
        <div className='flex justify-between w-full items-center'>
          <span className='text-xs text-customBlack-600 font-medium'>
            Position
          </span>
          <div className='flex gap-2 items-center'>
            <VerticalAlignTopOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                socialButton.position === "TOP" ? "text-blue-600" : ""
              }`}
              onClick={() => setSocialButtonPosition(Position.TOP)}
            />
            <VerticalAlignBottomOutlined
              className={`w-1 h-1 cursor-pointer text-black ${
                socialButton.position === "BOTTOM" ? "text-blue-600" : ""
              }`}
              onClick={() => setSocialButtonPosition(Position.BOTTOM)}
            />
          </div>
        </div>
        {/* {Layout} */}
        <div className='flex flex-col gap-2'>
          <span className='text-xs text-customBlack-600 font-medium'>
            Layout
          </span>
          <div className='flex gap-2 items-center'>
            {layoutType.map((data: any) => {
              return (
                <div key={data.layout}>
                  <div
                    className={`flex gap-4 h-88 relative justify-center items-center  w-24 p-1  border border-gray-300 rounded`}
                    onClick={() => setSocialButtonLayout(data.layout)}>
                    <input
                      className='absolute top-2 left-2'
                      type='radio'
                      value={data.layout}
                      checked={socialButton.layout === data.layout}
                      onChange={(e: any) =>
                        setSocialButtonLayout(e.target.value)
                      }
                    />
                    {data.image}
                  </div>
                  <span className='text-gray-400'>{data.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xs text-customBlack-600 font-medium'>Styling</h4>
          <div className='flex  flex-col gap-4'>
            <SelectComponent
              label='Social Button State'
              value={socialButtonState}
              onChange={(value) => setSocialButtonState(value)}
              options={buttonStates}
            />
            <SelectComponent
              label='Font Size'
              value={styles.fontSize}
              onChange={(value) => {
                setSocialButtonStateTheme(socialButtonState, {
                  ...styles,
                  fontSize: value,
                });
              }}
              options={fontSizes}
            />
            <SelectComponent
              label='Font Weight'
              value={styles.fontWeight}
              onChange={(value) =>
                setSocialButtonStateTheme(socialButtonState, {
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
                setSocialButtonStateTheme(socialButtonState, {
                  ...styles,
                  fontColor: value.hex,
                });
              }}
              fontColor={styles.fontColor}
            />
            <ColorPickerComponent
              label='Background Color'
              value={styles.backgroundColor}
              popup={true}
              onChange={(value) => {
                setSocialButtonStateTheme(socialButtonState, {
                  ...styles,
                  backgroundColor: value.hex,
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
                    onClick={() => {
                      setSocialButtonStateTheme(socialButtonState, {
                        ...styles,
                        borderRadius:
                          styles.borderRadius > 0 ? styles.borderRadius - 1 : 0,
                      });
                    }}
                  />

                  <span className='flex items-center text-xs'>
                    {styles.borderRadius > 0 && styles.borderRadius < 10
                      ? `0${styles.borderRadius}`
                      : styles.borderRadius}
                  </span>

                  <PlusOutlined
                    onClick={() => {
                      setSocialButtonStateTheme(socialButtonState, {
                        ...styles,
                        borderRadius: styles.borderRadius + 1,
                      });
                    }}
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
