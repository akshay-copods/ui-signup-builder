import React from "react";
import { SelectComponent } from "../../../..";
import {
  fontsFamily,
  fontSizes,
  linkStyle,
} from "../../../../../stylingConfig";
import { useTypographyStore } from "../../../../../store/TypographyStore";
import Search from "antd/es/input/Search";
import { Button, Select } from "antd";
export const TypographyStyling = () => {
  const {
    fontFamily,
    setFontFamily,
    getNormalText,
    getLinkText,
    getTitleText,
    getSubTitle,
    title,
    normalText,
    subTitle,
    links,
    setSubTitle,
    setLinks,
    setTitle,
    setNormalText,
  } = useTypographyStore();

  return (
    <div className="p-5 pt-0 flex flex-col gap-3">
      <span className="text-xs text-customBlack-600 font-medium">
        Reference text Sizes
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-customBlack-600">Font URL</span>
        <Search
          addonBefore="https://"
          placeholder="input search text"
          allowClear
          onSearch={undefined}
          style={{ width: 304 }}
        />
        <div className="flex justify-between items-center gap-2">
          <hr className="h-px  w-full border-t border-dashed border-gray-300" />{" "}
          <div className={`text-xs w-full text-gray-600 text-center  `}>OR</div>{" "}
          <hr className="h-px  w-full border-t border-dashed border-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col border-dashed border-b border-[#0000000f] gap-2 y-4">
          <span className="text-xs text-customBlack-600 font-medium">
            Select Font
          </span>
          <div className="flex flex-col pb-4 gap-1">
            <SelectComponent
              value={fontFamily}
              onChange={(value) => {
                setFontFamily(value);
              }}
              options={fontsFamily}
            />
            <span className="text-customBlack-400 text-xs">
              This URL must be a woff or woff2 font file type
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <span className="text-xs w-2/4 text-customBlack-400">
              {"Normal Text"}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className="text-sm text-customBlack-600"
                onClick={() =>
                  setNormalText({
                    ...getNormalText(),
                    Bold: (normalText.Bold = !normalText.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={getNormalText().fontSize}
                onChange={(value) =>
                  setNormalText({
                    ...getNormalText(),
                    fontSize: (getNormalText().fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs w-2/4 text-customBlack-400">
              {"Title"}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className="text-sm text-customBlack-600"
                onClick={() =>
                  setTitle({
                    ...getTitleText(),
                    Bold: (title.Bold = !title.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={getTitleText().fontSize}
                onChange={(value) =>
                  setTitle({
                    ...getTitleText(),
                    fontSize: (getTitleText().fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs w-2/4 text-customBlack-400">
              {"Sub-Title"}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className="text-sm text-customBlack-600"
                onClick={() =>
                  setSubTitle({
                    ...getSubTitle(),
                    Bold: (subTitle.Bold = !subTitle.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={getSubTitle().fontSize}
                onChange={(value) =>
                  setSubTitle({
                    ...getSubTitle(),
                    fontSize: (getSubTitle().fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>

          <hr className="h-px w-full bg-[#0000000f]" />
          <div className="flex items-center">
            <span className="text-xs w-2/4 text-customBlack-400">
              {"Links"}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Button
                className="text-sm text-customBlack-600"
                onClick={() =>
                  setLinks({
                    ...getLinkText(),
                    Bold: (links.Bold = !links.Bold),
                  })
                }
              >
                B
              </Button>
              <Select
                value={getLinkText().fontSize}
                onChange={(value) =>
                  setLinks({
                    ...getLinkText(),
                    fontSize: (getLinkText().fontSize = value),
                  })
                }
                options={fontSizes}
                style={{ borderRadius: "2px", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs w-2/4 text-customBlack-400">
              {"Links"}
            </span>
            <div className={` w-2/4 flex gap-2 items-center`}>
              <Select
                value={getLinkText().style}
                onChange={(value) =>
                  setLinks({
                    ...getLinkText(),
                    style: (getLinkText().style = value),
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
