import React from "react";
import Table from "../components/Table";
import SideBar from "../components/SideBar";

const Page1 = () => {
  return (
    <div className="page p-1 flex lg:flex-row w-full h-screen md:flex-row">
      <div className="side-div hidden lg:block md:block lg:w-2/12 md:w-3/12 border-r-2 p-3">
        <SideBar />
      </div>
      <div className="main-div w-full lg:w-10/12 md:w-9/12 p-3">
        <Table />
      </div>
    </div>
  );
};

export default Page1;
