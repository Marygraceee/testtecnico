import React from 'react'
import { Link } from 'react-router-dom'
import {BiTask, BiBriefcase} from "react-icons/bi"

const TopNav = () => {
  return (
    <section className="flex-[0_0_100px] flex xl:justify-end justify-center xl:flex-row flex-col items-center xl:px-12">
      
        <div className="text-sm flex justify-center items-center w-fit gap-5 p-2">
            <div className="leading-tight flex flex-col items-end">
            <p className="text-black font-bold">Mario Rossi</p>
            <p className="text-[#95A1AC]">Admin</p>
            </div>
            <img className="w-10 h-10 rounded-full shadow-lg" src="https://preview.redd.it/gi8p8u0nlps51.png?width=512&format=png&auto=webp&s=0d823622aa3e967c2e3cf8ac2549718bf00f6c86" alt="" />
        </div>
        <nav className="xl:hidden flex flex-col w-full items-start justify-center text-white p-2">
            <div className="text-[#222E3A]  px-5 py-2 flex justify-start items-center">
            <Link className="flex justify-start items-center gap-2 w-full h-full" to="/"><BiBriefcase/>Attività da completare</Link>
            </div>
           <div className="text-[#222E3A]  px-5 py-2 flex justify-start items-center">
           <Link className="flex justify-start items-center gap-2 w-full h-full" to="/completate"><BiTask/>Attività completate</Link>
           </div>
           
        </nav>
    </section>
  )
}

export default TopNav