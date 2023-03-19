import React, { useState } from "react";
import { useThemeStore } from "../../../../../store/ThemeStore";

export const Theme = () => {
  const { setTheme } = useThemeStore();

  const themeBox = [
    {
      bg: "bg-white",
      value: "light",
      text: "Light",
      config: {
        backgroundColor: "white",
        primaryColor: "#2f54eb",
        secondaryColor: "#00000099",
        textColor: "black",
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
        secondaryColor: "white",
        textColor: "white",
        labelColor:'white'
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
        textColor: "white",
        labelColor:'white'
      },
    },
  ];
  const [themeState, setThemeState] = useState({
    value: "light",
    config: {
      backgroundColor: "#ffffff",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "black",
      labelColor:'#00000099'
    },
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
                type='radio'
                onChange={() => {
                  setThemeState({ value: data.value, config: data.config });
                }}
                value={data.value}
                checked={themeState.value === data.value}
              />
            </div>
            <span className='text-xs  text-customBlack-400'>{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};
