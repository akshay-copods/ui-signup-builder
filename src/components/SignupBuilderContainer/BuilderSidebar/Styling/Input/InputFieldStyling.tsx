import React, { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { ColorPickerComponent, SelectComponent } from "../../../..";
import {
  fontSizes,
  fontWeight,
  inputStates,
} from "../../../../../stylingConfig";
import { CurrentInputFieldState } from "../../../../../types/InputStoreTypes";
import { useInputFieldStore } from "../../../../../store/InputFieldStore";
export const InputFieldStyling = () => {
  const {
    getInputFieldStateTheme,
    setInputFieldStateTheme,
    getLabelTheme,
    setLabelTheme,
    setBoxTheme,
    getBoxTheme,
  } = useInputFieldStore();

  // To store input state
  const [inputFieldState, setInputFieldState] =
    useState<CurrentInputFieldState>(CurrentInputFieldState.DEFAULT);

  // To store current input styles
  const [currentInputStyles, setCurrentInputStyles] = useState(
    getInputFieldStateTheme(inputFieldState)
  );

  // To get global input Styles
  useEffect(() => {
    setCurrentInputStyles(getInputFieldStateTheme(inputFieldState));
  }, [inputFieldState]);

  // To update global input Styles
  useEffect(
    () => setInputFieldStateTheme(inputFieldState, currentInputStyles),
    [currentInputStyles]
  );

  return (
    <div className="flex flex-col px-5 gap-4">
      <SelectComponent
        label={"Field State"}
        value={inputFieldState}
        onChange={(value) => setInputFieldState(value)}
        options={inputStates}
      />

      <SelectComponent
        label={"Font Size"}
        value={currentInputStyles.fontSize}
        onChange={(value) =>
          setCurrentInputStyles({
            ...currentInputStyles,
            fontSize: value,
          })
        }
        options={fontSizes}
      />
      <SelectComponent
        label={"Font Weight"}
        value={currentInputStyles.fontWeight}
        onChange={(value) =>
          setCurrentInputStyles({
            ...currentInputStyles,
            fontWeight: value,
          })
        }
        options={fontWeight}
      />

      <ColorPickerComponent
        label="Font Color"
        value={currentInputStyles.fontColor}
        popup={true}
        onChange={(value) => {
          setCurrentInputStyles({
            ...currentInputStyles,
            fontColor: value.hex,
          });
        }}
        fontColor={currentInputStyles.fontColor}
      />
      <ColorPickerComponent
        label="Backgroud Color"
        value={currentInputStyles.backgroundColor}
        popup={true}
        onChange={(value) => {
          setCurrentInputStyles({
            ...currentInputStyles,
            backgroundColor: value.hex,
          });
        }}
        fontColor={currentInputStyles.backgroundColor}
      />

      <div className="flex  items-center">
        <span className="text-xs w-2/4  text-customBlack-400">Box Border</span>
        <div className="flex items-center w-2/4 gap-2">
          <div className="flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              onClick={() =>
                setBoxTheme({
                  ...getBoxTheme(),
                  borderSize:
                    getBoxTheme().borderSize > 0
                      ? getBoxTheme().borderSize - 1
                      : 0,
                })
              }
              className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
            />
            <span className="flex items-center text-xs">
              {getBoxTheme().borderSize > 0 && getBoxTheme().borderSize < 10
                ? `0${getBoxTheme().borderSize}`
                : getBoxTheme().borderSize}
            </span>

            <PlusOutlined
              onClick={() =>
                setBoxTheme({
                  ...getBoxTheme(),
                  borderSize: getBoxTheme().borderSize + 1,
                })
              }
              className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center">
        <span className="text-xs w-2/4  text-customBlack-400">
          Border Radius
        </span>
        <div className="flex w-2/4 items-center gap-2">
          <div className="flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              onClick={() =>
                setBoxTheme({
                  ...getBoxTheme(),
                  borderRadius:
                    getBoxTheme().borderRadius > 0
                      ? getBoxTheme().borderRadius - 1
                      : 0,
                })
              }
              className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
            />

            <span className="flex items-center text-xs">
              {getBoxTheme().borderRadius > 0 && getBoxTheme().borderRadius < 10
                ? `0${getBoxTheme().borderRadius}`
                : getBoxTheme().borderRadius}
            </span>

            <PlusOutlined
              onClick={() =>
                setBoxTheme({
                  ...getBoxTheme(),
                  borderRadius: getBoxTheme().borderRadius + 1,
                })
              }
              className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
            />
          </div>
        </div>
      </div>
      <SelectComponent
        label={"Label Font State"}
        value={getLabelTheme().fontSize}
        onChange={(value) =>
          setLabelTheme({
            ...getLabelTheme(),
            fontSize: (getLabelTheme().fontSize = value),
          })
        }
        options={fontSizes}
      />

      <SelectComponent
        label={"Label Font Weight"}
        value={getLabelTheme().fontWeight}
        onChange={(value) =>
          setLabelTheme({
            ...getLabelTheme(),
            fontWeight: (getLabelTheme().fontWeight = value),
          })
        }
        options={fontWeight}
      />
      <ColorPickerComponent
        label="Label Color"
        value={getLabelTheme().fontColor}
        popup={true}
        onChange={(value) =>
          setLabelTheme({
            ...getLabelTheme(),
            fontColor: (getLabelTheme().fontColor = value.hex),
          })
        }
        fontColor={getLabelTheme().fontColor}
      />
    </div>
  );
};
