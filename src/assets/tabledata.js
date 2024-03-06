// Importing icons from various libraries
import { FaWix } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { FaIntercom } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";

// Data representing table entries with information about different brands
export const tableData = [
  {
    // Styling for brand icon using React Icons and custom classes
    icon: (
      <span className="text-2xl text-white bg-slate-700 rounded-lg p-1">
        <FaWix />
      </span>
    ),
    brand: "Wix",
    description: "Website builder platform",
    members: [
      // Members represented with custom HTML in strings
      '<div class="w-7 h-7 rounded-full bg-blue-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-green-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-yellow-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-red-500 border-white border-2"></div>',
    ],
    categories: ["Web Development", "Website Builder"],
    tags: ["#Design", "#E-commerce"],
    next_meeting: "in 30 minutes",
  },
  {
    // Styling for brand icon using React Icons and custom classes
    icon: (
      <span className="text-2xl text-white bg-lime-500 rounded-lg p-1">
        <FaShopify />
      </span>
    ),
    brand: "Shopify",
    description: "E-commerce platform",
    members: [
      // Members represented with custom HTML in strings
      '<div class="w-7 h-7 rounded-full bg-orange-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-purple-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-teal-500 border-white border-2"></div>',
    ],
    categories: ["E-commerce", "Online Store"],
    tags: ["#ShoppingCart", "#Retail"],
    next_meeting: "Tomorrow",
  },
  // ... (similar entries for other brands)
  {
    icon: (
      <span className="text-2xl text-slate-800 bg-yellow-300 rounded-lg p-1">
        <FaMailchimp />
      </span>
    ),
    brand: "MailChimp",
    description: "Marketing automation platform",
    members: [
      '<div class="w-7 h-7 rounded-full bg-red-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-sky-500 border-white border-2"></div>',
    ],
    categories: ["Email Marketing", "Automation"],
    tags: ["#Campaigns", "#Subscribers"],
    next_meeting: "Tomorrow",
  },
  {
    icon: (
      <span className="text-2xl text-slate-800 bg-yellow-300 rounded-lg p-1">
        <FaPaypal />
      </span>
    ),
    brand: "PayPal",
    description: "Online payment platform",
    members: [
      '<div class="w-7 h-7 rounded-full bg-cyan-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-teal-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-fuchsia-500 border-white border-2"></div>',
    ],
    categories: ["Payment Processing", "Financial"],
    tags: ["#Transactions", "#Business"],
    next_meeting: "in 6 hours",
  },
  {
    icon: (
      <span className="text-2xl text-white bg-cyan-800 rounded-lg p-1">
        <TbBrandDisney />
      </span>
    ),
    brand: "Disney",
    description: "Entertainment company",
    members: [
      '<div class="w-7 h-7 rounded-full bg-red-500 border-white border-2"></div>',
    ],
    categories: ["Entertainment", "Media"],
    tags: ["#Movies", "#ThemeParks"],
    next_meeting: "No contact",
  },
  {
    icon: (
      <span className="text-2xl text-white bg-sky-400 rounded-lg p-1">
        <FaIntercom />
      </span>
    ),
    brand: "Intercom",
    description: "Customer messaging platform",
    members: [
      '<div class="w-7 h-7 rounded-full bg-indigo-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-lime-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-red-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-yellow-500 border-white border-2"></div>',
    ],
    categories: ["Communication", "Customer Support"],
    tags: ["#Messaging", "#Support"],
    next_meeting: "in 1 hour",
  },
  {
    icon: (
      <span className="text-2xl text-slate-800 bg-yellow-300 rounded-lg p-1">
        <FaGoogle />
      </span>
    ),
    brand: "Google",
    description: "Technology company",
    members: [
      '<div class="w-7 h-7 rounded-full bg-blue-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-green-500 border-white border-2"></div>',
    ],
    categories: ["Technology", "Search Engine"],
    tags: ["#Search", "#OnlineServices"],
    next_meeting: "in 30 minutes",
  },
  {
    icon: (
      <span className="text-2xl text-white bg-emerald-500 rounded-lg p-1">
        <FaEvernote />
      </span>
    ),
    brand: "Evernote",
    description: "Note-taking app",
    members: [
      '<div class="w-7 h-7 rounded-full bg-orange-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-purple-500 border-white border-2"></div>',
    ],
    categories: ["Productivity", "Note-Taking"],
    tags: ["#Organization", "#Digital Notes"],
    next_meeting: "Next month",
  },
  {
    icon: (
      <span className="text-2xl text-white bg-sky-400 rounded-lg p-1">
        <FaMicrosoft />
      </span>
    ),
    brand: "Microsoft",
    description: "Technology company",
    members: [
      '<div class="w-7 h-7 rounded-full bg-red-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-teal-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-orange-500 border-white border-2"></div>',
    ],
    categories: ["Technology", "Software"],
    tags: ["#Productivity", "#Operating Systems"],
    next_meeting: "No contact",
  },
  {
    icon: (
      <span className="text-2xl text-white bg-red-500 rounded-lg p-1">
        <FaInvision />
      </span>
    ),
    brand: "Invision",
    description: "Digital product design platform",
    members: [
      '<div class="w-7 h-7 rounded-full bg-cyan-500 border-white border-2"></div>',
      '<div class="w-7 h-7 rounded-full bg-teal-500 border-white border-2"></div>',
    ],
    categories: ["Design", "Prototyping"],
    tags: ["#Collaboration", "#UX/UI"],
    next_meeting: "Next month",
  },
];
