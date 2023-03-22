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
import { useThemeStore } from "../../../../../store";
export const InputFieldStyling = ({setEditMenuOpen}:{setEditMenuOpen:(e:boolean)=>void}) => {
  const {
    getInputFieldStateTheme,
    setInputFieldStateTheme,
    getLabelTheme,
    setLabelTheme,
  } = useInputFieldStore();
 const{changeLabelColor,theme}= useThemeStore();
  // To store input state
  const [inputFieldState, setInputFieldState] =
    useState<CurrentInputFieldState>(CurrentInputFieldState.DEFAULT);

  // To store input field styles
  const styles = getInputFieldStateTheme(inputFieldState);

  return (
    <div className="flex flex-col px-5 gap-4">
      <span className="text-xs text-geekblue-600" onClick={()=>setEditMenuOpen(true)}>Add Input Field</span>
      <SelectComponent
        label={"Field State"}
        value={inputFieldState}
        onChange={(value) => setInputFieldState(value)}
        options={inputStates}
      />

      <SelectComponent
        label={"Font Size"}
        value={styles.fontSize}
        onChange={(value) =>
          setInputFieldStateTheme(inputFieldState, {
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
          setInputFieldStateTheme(inputFieldState, {
            ...styles,
            fontWeight: value,
          })
        }
        options={fontWeight}
      />

      <ColorPickerComponent
        label="Font Color"
        value={styles.fontColor}
        popup={true}
        onChange={(value) => {
          setInputFieldStateTheme(inputFieldState, {
            ...styles,
            fontColor: value.hex,
          });
        }}
        fontColor={styles.fontColor}
      />
      <ColorPickerComponent
        label="Backgroud Color"
        value={styles.backgroundColor}
        popup={true}
        onChange={(value) => {
          setInputFieldStateTheme(inputFieldState, {
            ...styles,
            backgroundColor: value.hex,
          });
        }}
        fontColor={styles.backgroundColor}
      />

      <div className="flex  items-center">
        <span className="text-xs w-2/4  text-customBlack-400">Box Border</span>
        <div className="flex items-center w-2/4 gap-2">
          <div className="flex border border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
            <MinusOutlined
              onClick={() =>
                setInputFieldStateTheme(inputFieldState, {
                  ...styles,
                  box: {
                    ...styles.box,
                    borderSize:
                      styles.box.borderSize > 0 ? styles.box.borderSize - 1 : 0,
                  },
                })
              }
              className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
            />
            <span className="flex items-center text-xs">
              {styles.box.borderSize > 0 && styles.box.borderSize < 10
                ? `0${styles.box.borderSize}`
                : styles.box.borderSize}
            </span>

            <PlusOutlined
              onClick={() =>
                setInputFieldStateTheme(inputFieldState, {
                  ...styles,
                  box: {
                    ...styles.box,
                    borderSize: styles.box.borderSize + 1,
                  },
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
                setInputFieldStateTheme(inputFieldState, {
                  ...styles,
                  box: {
                    ...styles.box,
                    borderRadius:
                      styles.box.borderRadius > 0
                        ? styles.box.borderRadius - 1
                        : 0,
                  },
                })
              }
              className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
            />

            <span className="flex items-center text-xs">
              {styles.box.borderRadius > 0 && styles.box.borderRadius < 10
                ? `0${styles.box.borderRadius}`
                : styles.box.borderRadius}
            </span>

            <PlusOutlined
              onClick={() =>
                setInputFieldStateTheme(inputFieldState, {
                  ...styles,
                  box: {
                    ...styles.box,
                    borderRadius: styles.box.borderRadius + 1,
                  },
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
        value={theme.labelColor}
        popup={true}
        onChange={(value) => {
          changeLabelColor(value.hex);
        }}
        fontColor={theme.labelColor}
      />
    </div>
  );
};
