import React from 'react';
import {AiFillCalendar, AiFillHome, AiFillTool} from "react-icons/ai";
import {FaMoneyBillTrendUp} from "react-icons/fa6";

const Menu = () =>
{
    const menuNames =[
        {id:1,title:"Dashboard",icon:<AiFillHome fill="#007bff"/>},
        {id:2,title:"Tables",icon:<AiFillCalendar fill="#007bff"/>},
        {id:3,title:"Billing",icon:<FaMoneyBillTrendUp fill="#007bff"/>},
        {id:4,title:"RTL",icon:<AiFillTool fill="#007bff"/>}
    ]



    return (
        <div className="text-white  h-[500px] pr-[24px]">
            <div className="flex flex-row">
                <img src="" alt=""/>
                <h1>Custom Menu</h1>
                <hr/>
            </div>

            <div className="flex flex-col gap-[8px] mt-[24px]">
                {
                    menuNames.map(menuName =>(
                        <div key={menuName.id} className="flex flex-row items-center gap-[8px] cursor-pointer">
                            <div className="p-[8px] rounded-[12px] bg-[#1D1E35]">
                                {menuName.icon}
                            </div>
                            <span>{menuName.title}</span>
                        </div>
                    ))
                }
            </div>


            
        </div>
    );
};

export default Menu;