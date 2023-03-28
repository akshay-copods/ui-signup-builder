import { Button, Input, Select } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { SelectComponent } from "../../../..";
import { useTypographyStore } from "../../../../../store/TypographyStore";
import {
  fontsFamily,
  fontSizes,
  linkStyle,
  titleFontSizes,
} from "../../../../../stylingConfig";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { signup_builder_sidebar } from "../../../../../constants/signup_builder_constants";
export const TypographyStyling = () => {
  const {
    fontFamily,
    welcomeMessage,
    setFontFamily,
    title,
    normalText,
    subTitle,
    links,
    setSubTitle,
    setLinks,
    setTitle,
    setNormalText,
    getTypographyStyles,
  } = useTypographyStore();
  const styles = getTypographyStyles();

  return (
    <div className="p-5 pt-0 flex flex-col gap-3">
      <span className="text-xs text-customBlack-600 font-medium">
        {signup_builder_sidebar.REF_TEXT_SIZES}
      </span>
      <div className="flex flex-col gap-2">
        <span
          className="text-xs text-customBlack-600"
          tabIndex={0}
          aria-label={signup_builder_sidebar.FONT_URL}
        >
          {signup_builder_sidebar.FONT_URL}
        </span>
        <Search
          addonBefore="https://"
          placeholder="input search text"
          allowClear
          onSearch={undefined}
          style={{ width: 304 }}
        />
        <span className="text-customBlack-400 text-xs">
          {signup_builder_sidebar.FONT_URL_INSTRUCTION}
        </span>
        <div className="flex justify-between items-center gap-2">
          <hr className="h-px  w-full border-t border-dashed border-gray-300" />{" "}
          <div className={`text-xs w-full text-gray-600 text-center  `}>OR</div>{" "}
          <hr className="h-px  w-full border-t border-dashed border-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col border-dashed border-b border-[#0000000f] gap-2 y-4">
          <span
            tabIndex={0}
            aria-label={signup_builder_sidebar.SELECT_FONT}
            className="text-xs text-customBlack-600 font-medium"
          >
            {signup_builder_sidebar.SELECT_FONT}
          </span>
          <div className="flex flex-col pb-4 gap-1">
            <SelectComponent
              value={styles.fontFamily}
              onChange={(value) => {
                setFontFamily(value);
              }}
              options={fontsFamily}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
         
          <div className="flex items-center">
            <span
              tabIndex={0}
              aria-label={signup_builder_sidebar.TITLE}
              className="text-xs w-2/4 text-customBlack-400"
            >
              {signup_builder_sidebar.TITLE}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className={`text-sm text-customBlack-600 ${
                  styles.title.Bold && "bg-geekblue-300"
                }`}
                onClick={() =>
                  setTitle({
                    ...styles.title,
                    Bold: (title.Bold = !title.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={styles.title.fontSize}
                onChange={(value) =>
                  setTitle({
                    ...styles.title,
                    fontSize: (styles.title.fontSize = value),
                  })
                }
                options={titleFontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <span
              tabIndex={0}
              aria-label={signup_builder_sidebar.SUB_TITLE}
              className="text-xs w-2/4 text-customBlack-400"
            >
              {signup_builder_sidebar.SUB_TITLE}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className={`text-sm text-customBlack-600 ${
                  styles.subTitle.Bold && "bg-geekblue-300"
                }`}
                onClick={() =>
                  setSubTitle({
                    ...styles.subTitle,
                    Bold: (subTitle.Bold = !subTitle.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={styles.links.fontSize}
                onChange={(value) =>
                  setSubTitle({
                    ...styles.subTitle,
                    fontSize: (styles.subTitle.fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>

          <hr className="h-px w-full bg-[#0000000f]" />
          <div className="flex items-center">
            <span
              tabIndex={0}
              aria-label={signup_builder_sidebar.LINKS}
              className="text-xs w-2/4 text-customBlack-400"
            >
              {signup_builder_sidebar.LINKS}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className={`text-sm text-customBlack-600 ${
                  styles.links.Bold && "bg-geekblue-300"
                }`}
                onClick={() =>
                  setLinks({
                    ...styles.links,
                    Bold: (links.Bold = !links.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={styles.links.fontSize}
                onChange={(value) =>
                  setLinks({
                    ...styles.links,
                    fontSize: (styles.links.fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <span
              tabIndex={0}
              aria-label={signup_builder_sidebar.LINKS_STYLE}
              className="text-xs w-2/4 text-customBlack-400"
            >
              {signup_builder_sidebar.LINKS_STYLE}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Select
                value={styles.links.style}
                onChange={(value) =>
                  setLinks({
                    ...styles.links,
                    style: (styles.links.style = value),
                  })
                }
                options={linkStyle}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
