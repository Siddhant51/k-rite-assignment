import React, { useState } from "react";
import Tree from "./Tree";
import { BiAtom } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import pic from "../assets/test.jpg";
import { otherData, teamData, treeData } from "../assets/sideBarData";

const SideBar = () => {
  const [selectedTeam, setSelectedTeam] = useState("Design");

  const handleTeamClick = (teamLabel) => {
    setSelectedTeam(selectedTeam === teamLabel ? null : teamLabel);
  };

  return (
    <div className="sidebar flex flex-col justify-between h-full overflow-y-auto">
      <div>
        <div className="top border-2 font-semibold rounded-lg px-2 flex flex-row items-center justify-between bg-slate-200 h-14">
          <div className="flex flex-row items-center">
            <span className="icon text-white bg-black text-xl">
              <BiAtom />
            </span>
            <span className="px-2 py-3">InnovateHub</span>
          </div>
          <div className="pic">
            <img
              src={pic}
              alt="Peter"
              className="rounded-full w-7 h-7 object-cover"
            />
          </div>
        </div>
        <div className=" mt-2">
          {teamData.map((team, index) => (
            <div
              key={team.label}
              className={`label font-semibold cursor-pointer flex items-center hover:bg-slate-200 rounded-lg my-1 ${
                selectedTeam === team.label
                  ? "selected border-2 rounded-lg bg-slate-200"
                  : ""
              }`}
              onClick={() => handleTeamClick(team.label)}
            >
              {team.icon && <span className="icon pl-2">{team.icon}</span>}
              <div className=" flex flex-row justify-between w-full px-2 py-1">
                <span>{team.label}</span>
              </div>
            </div>
          ))}
          <div
            className={`label font-semibold cursor-pointer flex items-center`}
          >
            <div className=" flex flex-row w-full px-2 py-1 font-normal text-gray-500 items-center">
              <span className="icon pr-2">
                <MdOutlineAddCircleOutline />
              </span>
              <span>Create a team</span>
            </div>
          </div>
        </div>
        <div className={`label font-semibold cursor-pointer flex items-center`}>
          <div className=" flex flex-row justify-between w-full px-2 py-1 font-normal text-gray-500">
            <span>Folders</span>
            <span className=" font-normal">+</span>
          </div>
        </div>
        <Tree treeData={treeData} />
      </div>
      <div className=" mt-16">
        {otherData.map((data) => (
          <div
            key={data.label}
            className={`label font-semibold cursor-pointer flex items-center hover:bg-slate-200 rounded-lg my-1 ${
              selectedTeam === data.label
                ? "selected border-2 rounded-lg bg-slate-200"
                : ""
            }`}
            onClick={() => handleTeamClick(data.label)}
          >
            {data.icon && <span className="icon pl-2">{data.icon}</span>}
            <div className=" flex flex-row justify-between w-full px-2 py-1">
              <span>{data.label}</span>
            </div>
          </div>
        ))}
        <div
          className={`label font-semibold cursor-pointer flex items-center hover:bg-slate-200 rounded-lg`}
        >
          <div className=" flex flex-row justify-between w-full px- py-1 items-center">
            <div>
              <span className="icon pl-2">7 </span>
              <span>days left on trial</span>
            </div>
            <span className=" py-1 px-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-600">
              Add biling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
