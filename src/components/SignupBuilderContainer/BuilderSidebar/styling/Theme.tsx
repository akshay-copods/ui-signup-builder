import React from "react";
import { useThemeStore } from "../../../../store/ThemeStore";

export const Theme =()=>{
    const theme = useThemeStore((state) => state.theme);
    
    const themeBox = [
        {
          bg: "bg-white",
          value: "light",
          text: "Light",
        },
        {
          bg: "bg-black",
          value: "dark",
          text: "Dark",
        },
        {
          bg: "bg-gray-400",
          value: "texture",
          text: "Texture",
        },
    ];
    
    return(
        <div className="flex px-5 gap-2 items-center">
        {themeBox.map((data: any) => {
          return (
            <div key={data.value}>
              <div
                
                className={`flex gap-4 h-[88px]  w-24  p-1 items-start border border-gray-300 rounded ${data.bg}`}
              >
                <input
                  type="radio"
                  value={data.value}
                //   checked={signUpState.state.theme.color===data.value}
                //   onChange={onSiteChanged}
                  
                />
              </div>
              <span className="text-xs  text-[#00000073]">{data.text}</span>
            </div>
          );
        })}
      </div>
    )
}