import { LuFolder } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgUserAdd } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export const teamData = [
  { icon: <AiOutlineAntDesign />, label: "Design" },
  { icon: <TbSpeakerphone />, label: "Marketing" },
  { icon: <FaCode />, label: "Development" },
];

export const treeData = [
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

export const otherData = [
  { icon: <CgUserAdd />, label: "Invite Teammates" },
  { icon: <IoMdHelpCircleOutline />, label: "Help and first steps" },
];
