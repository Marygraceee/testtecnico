import React from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="max-h-screen min-h-screen flex w-full">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
