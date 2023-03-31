import React, { useState } from "react";
import { useThemeStore } from "../../../../../store/ThemeStore";

export const Theme = () => {
  const { setTheme,theme } = useThemeStore();

  const themeBox = [
    {
      bg: "bg-white",
      value: "light",
      text: "Light",
      config: {
        backgroundColor: "white",
        primaryColor: "#2f54eb",
        secondaryColor: "#00000099",
        textColor: "#000000",
        labelColor:'#00000099'
      },
    },
    {
      bg: "bg-black",
      value: "dark",
      text: "Dark",
      config: {
        backgroundColor: "black",
        primaryColor: "#2f54eb",
        secondaryColor: "#ffffff",
        textColor: "#ffffff",
        labelColor:'#ffffff'
      },
    },

    {
      bg: "bg-gray-400",
      value: "texture",
      text: "Texture",
      config: {
        backgroundColor: "darkgrey",
        primaryColor: "#2f54eb",
        secondaryColor: "#00000099",
        textColor: "#ffffff",
        labelColor:'#ffffff'
      },
    },
  ];
  const [themeState, setThemeState] = useState({
    value: "light",
    config: theme,
  });
  return (
    <div className='flex px-5 gap-2 items-center'>
      {themeBox.map((data: any) => {
        return (
          <div key={data.value}>
            <div
              className={`flex gap-4 h-88  w-24  p-1 items-start border border-gray-300 rounded ${data.bg}`}
              onClick={() => {
                setThemeState({ value: data.value, config: data.config });
                setTheme(data.config);
              }}>
              <input
              className={`${themeState.config.backgroundColor === data.config.backgroundColor?'visible':'invisible'}`}
                type='radio'
                onChange={() => {
                  setThemeState({ value: data.value, config: data.config });
                }}
                value={data.value}
                checked={themeState.config.backgroundColor === data.config.backgroundColor}
              />
            </div>
            <span className='text-xs  text-customBlack-400'>{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
