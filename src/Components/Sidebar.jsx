import React from 'react'
import { Link } from 'react-router-dom'
import {BiTask, BiBriefcase} from "react-icons/bi"


const Sidebar = () => {
  return (
    <div className=" bg-[#2A3948] w-[20%] xl:block hidden">
        <div className="flex justify-center items-center bg-[#3D4B59] h-[100px]">
            <h1 className="text-white text-3xl leading-loose tracking-[1.05rem] font-semibold">LOGO</h1>
        </div>
        <nav className="flex flex-col text-white my-5">
            <div className="hover:bg-[#222E3A] hover:border-[#A10C0F] border-transparent border-l-[6px] px-5 h-[5rem] flex justify-start items-center text-[#95A1AC] hover:text-white">
            <Link className="flex justify-start items-center gap-2 w-full h-full" to="/"><BiBriefcase/>Attività da completare</Link>
            </div>
           <div className="hover:bg-[#222E3A] hover:border-[#A10C0F] border-transparent border-l-[6px] px-5 h-[5rem] flex justify-start items-center text-[#95A1AC] hover:text-white">
           <Link className="flex justify-start items-center gap-2 w-full h-full" to="/completate"><BiTask/>Attività completate</Link>
           </div>
           
        </nav>
    </div>
  )
}

export default Sidebar