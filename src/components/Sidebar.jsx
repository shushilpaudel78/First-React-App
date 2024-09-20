import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import React from 'react'

export default function Sidebar() {
  return (

    <div className='w-full h-[100%]  bg-[#F7F7F7 ]  py-4 '>
    


      <ul className='flex flex-wrap  flex-col gap-5 font-poppins text-sm text-customPurple '>
        
        <li> <Link to="/overview" className='flex gap-4'> <FiEye />  Overview </Link></li>
        <li> <Link to="/user"className='flex gap-4' > <FaUserAlt /> User</Link></li>
        <li> <Link to="/newuser" className='flex gap-4'> <LuMessagesSquare /> New User</Link></li>
        <li> <Link to="/message" className='flex gap-4' > <BiMessageDetail /> Messages</Link></li>
        <li> <Link to="/transition" className='flex gap-4' > <AiOutlineTransaction /> Transition</Link></li>
        <li> <Link to="/statistics" className='flex gap-4'> <IoStatsChartSharp />Statistics</Link></li>
        <li> <Link to="/setting" className='flex gap-4'> <IoSettingsOutline />Setting</Link></li>
      </ul>

    

    </div>

  )
}
