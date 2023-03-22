import React from 'react'
import { useLocation } from 'react-router-dom';
import ActiveActivities from './ActiveActivities'
import CompletedActivities from './CompletedActivities'
import TopNav from './TopNav';

const Content = () => {
    const location = useLocation();
  return (
    <section className="w-[80%] flex flex-col h-screen">
      <TopNav />
      <div className=" bg-[#E6EBEF] flex justify-center items-start flex-1">
      {location.pathname === "/" && <ActiveActivities />}
      {location.pathname === "/completate" && <CompletedActivities />}
      </div>
      
    </section>
  )
}

export default Content