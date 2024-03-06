import React, { useState } from "react";
import Tree from "./Tree";
import { BiAtom } from "react-icons/bi";
import { LuFolder } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgUserAdd } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import pic from "../assets/test.jpg";

const teamData = [
  { icon: <AiOutlineAntDesign />, label: "Design" },
  { icon: <TbSpeakerphone />, label: "Marketing" },
  { icon: <FaCode />, label: "Development" },
];

const treeData = [
  {
    icon: <LuFolder />,
    label: "Products",
    children: [
      {
        label: "Roadmap",
      },
      {
        label: "Feedback",
      },
      {
        label: "Performance",
      },
      {
        label: "Team",
      },
      {
        label: "Analytics",
      },
      {
        icon: <MdOutlineAddCircleOutline />,
        label: "Add new sub",
      },
    ],
  },
  {
    icon: <LuFolder />,
    label: "Sales",
    children: [
      { label: "Client Management" },
      { label: "Lead Generation" },
      { label: "Sales Analytics" },
    ],
  },
  {
    icon: <LuFolder />,
    label: "Design",
    children: [
      { label: "UI/UX Design" },
      { label: "Graphic Design" },
      { label: "Prototyping" },
    ],
  },
  {
    icon: <LuFolder />,
    label: "Office",
  },
  {
    icon: <LuFolder />,
    label: "Legal",
  },
];

const otherData = [
  { icon: <CgUserAdd />, label: "Invite Teammates" },
  { icon: <IoMdHelpCircleOutline />, label: "Help and first steps" },
];

const SideBar = () => {
  const [selectedTeam, setSelectedTeam] = useState("Design");

  const handleTeamClick = (teamLabel) => {
    setSelectedTeam(selectedTeam === teamLabel ? null : teamLabel);
  };

  return (
    <div className="sidebar flex flex-col justify-between h-full">
      <div>
        <div className="top border-2 font-semibold rounded-lg px-2 flex flex-row items-center justify-between bg-slate-100">
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
        <div>
          {teamData.map((team, index) => (
            <div
              key={team.label}
              className={`label font-semibold cursor-pointer flex items-center hover:bg-slate-100 rounded-lg ${
                selectedTeam === team.label
                  ? "selected border-2 rounded-lg bg-slate-100"
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
      <div>
        {otherData.map((data) => (
          <div
            key={data.label}
            className={`label font-semibold cursor-pointer flex items-center hover:bg-slate-100 rounded-lg ${
              selectedTeam === data.label
                ? "selected border-2 rounded-lg bg-slate-100"
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
      </div>
    </div>
  );
};

export default SideBar;
