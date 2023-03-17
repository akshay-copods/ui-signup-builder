import React, { useState } from "react";
import { useThemeStore } from "../../../../store/ThemeStore";

export const Theme = () => {
  const {
    changeBackgroundColor,
    changePrimaryColor,
    changeTextColor,
    changeSecondaryColor,
  } = useThemeStore();

  const themeBox = [
    {
      bg: "bg-white",
      value: "light",
      text: "Light",
      config: {
        backgroundColor: "white",
        primaryColor: "#2f54eb",
        secondaryColor: "red",
        textColor: "black",
      },
    },
    {
      bg: "bg-black",
      value: "dark",
      text: "Dark",
      config: {
        backgroundColor: "black",
        primaryColor: "#2f54eb",
        secondaryColor: "red",
        textColor: "white",
      },
    },

    {
      bg: "bg-gray-400",
      value: "texture",
      text: "Texture",
      config: {
        backgroundColor: "darkgrey",
        primaryColor: "#2f54eb",
        secondaryColor: "red",
        textColor: "white",
      },
    },
  ];
  const [state, setState] = useState({
    value: "light",
    config: {
      backgroundColor: "black",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "white",
    },
  });
  return (
    <div className="flex px-5 gap-2 items-center">
      {themeBox.map((data: any) => {
        return (
          <div key={data.value}>
            <div
              className={`flex gap-4 h-88  w-24  p-1 items-start border border-gray-300 rounded ${data.bg}`}
              onClick={() => {
                setState({ value: data.value, config: data.config });
                changePrimaryColor(data.config.primaryColor);
                changeBackgroundColor(data.config.backgroundColor);
                changeSecondaryColor(data.config.secondaryColor);
                changeTextColor(data.config.textColor);
              }}
            >
              <input
                type="radio"
                value={data.value}
                checked={state.value === data.value}
              />
            </div>
            <span className="text-xs  text-[#00000073]">{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
