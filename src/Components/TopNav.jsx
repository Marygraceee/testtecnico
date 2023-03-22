import React from 'react'

const TopNav = () => {
  return (
    <nav className="flex-[0_0_112px] flex justify-end items-center px-12">
        <div className="text-sm flex justify-center items-center w-fit gap-5">
            <div className="leading-tight flex flex-col items-end">
            <p className="text-black font-bold">Mario Rossi</p>
            <p className="text-[#95A1AC]">Admin</p>
            </div>
            <img className="w-10 h-10 rounded-full shadow-lg" src="https://preview.redd.it/gi8p8u0nlps51.png?width=512&format=png&auto=webp&s=0d823622aa3e967c2e3cf8ac2549718bf00f6c86" alt="" />
        </div>
    </nav>
  )
}

export default TopNav