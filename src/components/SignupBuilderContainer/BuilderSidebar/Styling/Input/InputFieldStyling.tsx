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
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
import { Tooltip } from "antd";
export const InputFieldStyling = ({
  setEditMenuOpen,
}: {
  setEditMenuOpen: (e: boolean) => void;
}) => {
  const {
    getInputFieldStateTheme,
    setInputFieldStateTheme,
    getLabelTheme,
    setLabelTheme,
  } = useInputFieldStore();
  const { changeLabelColor, theme } = useThemeStore();
  // To store input state
  const [inputFieldState, setInputFieldState] =
    useState<CurrentInputFieldState>(CurrentInputFieldState.DEFAULT);

  // To store input field styles
  const styles = getInputFieldStateTheme(inputFieldState);

  return (
    <div className="flex flex-col px-5 gap-5 pb-5">
      <span
        className="text-xs text-geekblue-600"
        tabIndex={0}
        aria-label={signup_builder_sidebar.ADD_INPUT_FIELD}
        onClick={() => setEditMenuOpen(true)}
        onKeyUp={(e) =>{ if (e.key === "Enter")setEditMenuOpen(true)}}
      >
        {signup_builder_sidebar.ADD_INPUT_FIELD}
      </span>
      <SelectComponent
        label={signup_builder_sidebar.FIELD_STATE}
        value={inputFieldState}
        onChange={(value) => setInputFieldState(value)}
        options={inputStates}
      />

      <SelectComponent
        label={signup_builder_sidebar.FONT_SIZE}
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
        label={signup_builder_sidebar.FONT_WEIGHT}
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
        label={signup_builder_sidebar.FONT_COLOR}
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
        label={signup_builder_sidebar.BACKGROUND_COLOR}
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

      <div className="flex  flex-col gap-2">
        <span className="text-xs  text-customBlack-400">
          {signup_builder_sidebar.BOX_BORDER}
        </span>
        <div className="flex items-center  gap-2">
          <div className="flex border border-natural-5 rounded-md	 bg-white py-1.5 px-3 gap-6 items-center">
            <Tooltip
              title={signup_builder_sidebar.MINUS_BUTTON}
              color="black"
            >
              <MinusOutlined
                onClick={() =>
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderSize:
                        styles.box.borderSize > 0
                          ? styles.box.borderSize - 1
                          : 0,
                    },
                  })
                }
                onKeyUp={(e) =>
               {   if (e.key === "Enter")
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderSize:
                        styles.box.borderSize > 0
                          ? styles.box.borderSize - 1
                          : 0,
                    },
                  })}
                }
                tabIndex={0}
                aria-label={signup_builder_sidebar.MINUS_BUTTON}
                className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
              />
            </Tooltip>
            <span className="flex items-center text-xs">
              {styles.box.borderSize >= 0 && styles.box.borderSize < 10
                ? `0${styles.box.borderSize}`
                : styles.box.borderSize}
            </span>
            <Tooltip
              title={signup_builder_sidebar.PLUS_BUTTON}
              color="black"
            >
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
                onKeyUp={(e) =>
                 { if (e.key === "Enter")
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderSize: styles.box.borderSize + 1,
                    },
                  })}
                }
                tabIndex={0}
                aria-label={signup_builder_sidebar.PLUS_BUTTON}
                className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs   text-customBlack-400">
          {signup_builder_sidebar.BORDER_RADIUS}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex border rounded-md	 border-natural-5 bg-white py-1.5 px-3 gap-6 items-center">
            <Tooltip
              title={signup_builder_sidebar.MINUS_BUTTON}
              color="black"
            >
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
                onKeyUp={(e) =>
                 { if (e.key === "Enter")
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderRadius:
                        styles.box.borderRadius > 0
                          ? styles.box.borderRadius - 1
                          : 0,
                    },
                  })}
                }
                tabIndex={0}
                aria-label={signup_builder_sidebar.MINUS_BUTTON}
                className="border flex justify-center items-center rounded-50 h-5 w-5 bg-geekblue-100"
              />
            </Tooltip>

            <span tabIndex={0} className="flex items-center text-xs">
              {styles.box.borderRadius >=0 && styles.box.borderRadius < 10
                ? `0${styles.box.borderRadius}`
                : styles.box.borderRadius}
            </span>
            <Tooltip
              title={signup_builder_sidebar.PLUS_BUTTON}
              color="black"
            >
              <PlusOutlined
                tabIndex={0}
                aria-label={signup_builder_sidebar.MINUS_BUTTON}
                onClick={() =>
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderRadius: styles.box.borderRadius + 1,
                    },
                  })
                }
                onKeyUp={(e) =>
                  {if (e.key === "Enter")
                  setInputFieldStateTheme(inputFieldState, {
                    ...styles,
                    box: {
                      ...styles.box,
                      borderRadius: styles.box.borderRadius + 1,
                    },
                  })}
                }
                className="border rounded-50 flex justify-center items-center h-5 w-5 bg-geekblue-100"
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <SelectComponent
        label={signup_builder_sidebar.LABEL_FONT_STATE}
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
        label={signup_builder_sidebar.LABEL_FONT_WEIGHT}
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
        label={signup_builder_sidebar.LABEL_COLOR}
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
