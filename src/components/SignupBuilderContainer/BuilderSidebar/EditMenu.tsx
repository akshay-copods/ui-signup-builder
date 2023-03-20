import React from "react";
import  { DownOutlined } from '@ant-design/icons';
export const EditMenu=({setEditMenuOpen}:{setEditMenuOpen:(e:boolean)=>void})=>{
    return(
        <div className="p-5">
            <div className="flex justify-between items-center">
            <DownOutlined onClick={()=>setEditMenuOpen(false)} rotate={90} />
            <span>
                Testimonal
            </span>
            </div>
        </div>
    )
}
