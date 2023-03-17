import {
  DownOutlined,
  MinusOutlined,
  PlusOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useButtonStore } from "../../../../store/ButtonStore";
import "../sidebar.css";

import { AnyColorFormat } from "antd-colorpicker";
import { ColorPickerComponent, SelectComponent } from "../../..";
import {
  buttonStates,
  fontSizes,
  fontWeight,
  layoutType,
} from "../../../../stylingConfig";
import {
  CurrentButtonState,
  Position,
} from "../../../../types/ButtonStoreTypes";

export const SocialButtonStyling = () => {
  const {
    socialButton,
    setSocialButtonPosition,
    setSocialButtonLayout,
    getSocialButtonStateTheme,
    setSocialButtonStateTheme,
  } = useButtonStore();
  const [socialButtonState, setSocialButtonState] =
    useState<CurrentButtonState>(CurrentButtonState.DEFAULT);

  const [socialButtonFontColor, setSocialButtonFontColor] = useState(
    getSocialButtonStateTheme(socialButtonState).fontColor
  );
  const [bgColor, setBgColor] = useState();
  const [color1, setColorFont] = useState<AnyColorFormat>({
    hex: "#000000",
  });
  const [color2, setColorBg] = useState<AnyColorFormat>({
    hex: "#FFFFFF",
  });
  const onFontChnage = (colors: AnyColorFormat) => {
    setColorFont(colors), setSocialButtonFontColor(colors.hex);
  };
  const onBgChange = (colors: AnyColorFormat) => {
    setColorBg(colors), setBgColor(colors.hex);
  };

  // const handleFontWeight = (value: string) => {
  //   signUpState.setState({
  //     ...signUpState.state,
  //     buttons: {
  //       ...signUpState.state.buttons,
  //       socialButtons: {
  //         ...signUpState.state.buttons.socialButtons,
  //         fontWeight: (signUpState.state.buttons.socialButtons.fontWeight =
  //           value),
  //       },
  //     },
  //   });
  // };
  // useEffect(() => {
  //   signUpState.setState({
  //     ...signUpState.state,
  //     buttons: {
  //       ...signUpState.state.buttons,
  //       socialButtons: {
  //         ...signUpState.state.buttons.socialButtons,
  //         socialButtonFontColor: (signUpState.state.buttons.socialButtons.socialButtonFontColor =
  //           socialButtonFontColor),
  //       },
  //     },
  //   });
  //   signUpState.setState({
  //     ...signUpState.state,
  //     buttons: {
  //       ...signUpState.state.buttons,
  //       socialButtons: {
  //         ...signUpState.state.buttons.socialButtons,
  //         backgroundColor:
  //           (signUpState.state.buttons.socialButtons.backgroundColor = bgColor),
  //       },
  //     },
  //   });
  // }, [socialButtonFontColor, setsocialButtonFontColor, bgColor, setBgColor]);

  console.log(getSocialButtonStateTheme(socialButtonState).fontSize, "get");
  const [currentAccordian, setCurrentAccordian] = useState(1);
  
  return (
    <div className="flex flex-col pb-5 gap-5">
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
        <span className="text-xs text-[#000000d9] font-medium">
          Social Button Styling
        </span>

        {currentAccordian === 1 ? (
          <UpOutlined  className="text-black" />
        ) : (
          <DownOutlined className="text-black" />
        )}
      </div>
      {/* {position} */}
      <div
        className={
          "overflow-scroll flex flex-col gap-5 text-gray-600 transition-all " +
          (currentAccordian === 1 ? "h-full" : "max-h-0")
        }
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-xs text-[#000000d9] font-medium">Position</span>

          <div className={`flex  gap-2 items-center`}>
            <VerticalAlignTopOutlined
              className={`w-4 h-4 cursor-pointer
                    "text-black"
                `}
              onClick={() => setSocialButtonPosition(Position.TOP)}
            />
            <VerticalAlignBottomOutlined
              className={`w-4 h-4 cursor-pointer 
                    "text-black"
                `}
              onClick={() => setSocialButtonPosition(Position.BOTTOM)}
            />
          </div>
        </div>
        {/* {Layout} */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-customBlack-600 font-medium">
            Layout
          </span>
          <div className="flex gap-2 items-center">
            {layoutType.map((data: any) => {
              return (
                <div key={data.layout}>
                  <div
                    className={`flex gap-4 h-88 relative justify-center items-center  w-24 p-1  border border-gray-300 rounded`}
                    onClick={() => setSocialButtonLayout(data.layout)}
                  >
                    <input
                      className="absolute top-2 left-2"
                      type="radio"
                      value={data.layout}
                      checked={socialButton.layout === data.layout}
                      onChange={(e: any) =>
                        setSocialButtonLayout(e.target.value)
                      }
                    />
                    {data.image}
                  </div>

                  <span className="text-gray-400">{data.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xs text-customBlack-600 font-medium">Styling</h4>
          {/* {testing values} */}
          <div className="flex  flex-col gap-4">
            <SelectComponent
              value={socialButtonState}
              onChange={(value) => setSocialButtonState(value)}
              options={buttonStates}
            />

            <SelectComponent
              label={"Font Size"}
              value={
                getSocialButtonStateTheme(socialButtonState).fontSize
              }
              onChange={(value) =>
               { console.log(value),
                setSocialButtonStateTheme(socialButtonState, {
                  ...getSocialButtonStateTheme(socialButtonState),
                  fontSize: value,
                })}
              }
              options={fontSizes}
            />
            <SelectComponent
              label={"Font Weight"}
              value={
                getSocialButtonStateTheme(socialButtonState).fontWeight
              }
              onChange={(value) =>
                setSocialButtonStateTheme(socialButtonState, {
                  ...getSocialButtonStateTheme(socialButtonState),
                  fontWeight: value,
                })
              }
              options={fontWeight}
            />
            <ColorPickerComponent
              label="Font Color"
              value={color1}
              popup={true}
              onChange={onFontChnage}
              fontColor={socialButtonFontColor}
            />
            <ColorPickerComponent
              label="Background Color"
              value={color2}
              popup={true}
              onChange={onBgChange}
              fontColor={bgColor}
            />

            <div className="flex  items-center">
              <span className="text-xs w-2/4  text-customBlack-400">
                Border Radius
              </span>
              <div className="flex items-center w-2/4 gap-2">
                <div className="flex border border-100 bg-white py-1.5 px-3 gap-6 items-center">
                  <MinusOutlined className="border flex justify-center items-center rounded-[50px] h-5 w-5 bg-white-100" />

                  <span className="flex items-center text-xs">0</span>

                  <PlusOutlined className="border rounded-[50px] flex justify-center items-center h-5 w-5 bg-white-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
