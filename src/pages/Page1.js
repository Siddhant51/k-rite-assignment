import React from "react";
import Table from "../components/Table";
import SideBar from "../components/SideBar";

const Page1 = () => {
  return (
    <div className="page lg:flex lg:flex-row lg:w-full lg:h-screen">
      <div className="side-div lg:w-1/6 border-2 p-3">
        <SideBar />
      </div>
      <div className="main-div lg:w-3/4 border-2 p-3">
        <Table />
      </div>
    </div>
  );
};

export default Page1;
