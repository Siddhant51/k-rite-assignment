import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSortAscending } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
import { PiArchiveBoxBold } from "react-icons/pi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { tableData } from "../assets/tabledata";

const Table = () => {
  // State for brand filter input
  const [filterBrand, setFilterBrand] = useState("");

  // State for selected items count
  const [selectedCount, setSelectedCount] = useState(0);

  // State for table data
  const [items, setItems] = useState(tableData);

  // Filter items based on brand
  const filteredItems = items.filter((item) =>
    item.brand.toLowerCase().includes(filterBrand.toLowerCase())
  );

  // State for selected items and all items selection
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Update selectAll state based on selectedItems
  useEffect(() => {
    setSelectAll(selectedItems.length === items.length);
  }, [selectedItems, items]);

  // Handle checkbox change for individual items
  const handleCheckboxChange = (item) => {
    const selectedSet = new Set(selectedItems);

    if (selectedSet.has(item)) {
      selectedSet.delete(item);
    } else {
      selectedSet.add(item);
    }

    const newSelectedItems = Array.from(selectedSet);
    setSelectedItems(newSelectedItems);
    setSelectedCount(newSelectedItems.length);
  };

  // Handle select all checkbox change
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([]);
      setSelectedCount(0); // Set selected count to 0 when deselecting all
    } else {
      const allItems = items.map((item) => item.brand);
      setSelectedItems(allItems);
      setSelectedCount(allItems.length); // Set selected count to all items count when selecting all
    }

    setSelectAll(!selectAll);
  };

  // Function to render members with icons
  const handleMembers = (members) => {
    return (
      <div className="flex flex-row items-center">
        {members.map((member, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: member }}
            style={{ marginRight: index < members.length - 1 ? "-11px" : "0" }}
          ></div>
        ))}
      </div>
    );
  };

  // Function to render categories with styling
  const handleCategories = (items) => {
    return (
      <div className=" space-x-1">
        {items.map((item, index) => (
          <span
            className=" border-2 rounded-lg p-1 bg-gray-200 text-xs"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  // Function to render next meeting with different colors based on content
  const handleNextMeeting = (item) => {
    return item.includes("in") ? (
      <span className="border-2 rounded-lg p-1 bg-green-200 text-sm">
        {item}
      </span>
    ) : item.includes("Tomorrow") ? (
      <span className="border-2 rounded-lg p-1 bg-blue-200 text-sm">
        {item}
      </span>
    ) : item.includes("No") ? (
      <span className="border-2 rounded-lg p-1 bg-red-200 text-sm">{item}</span>
    ) : item.includes("Next") ? (
      <span className="border-2 rounded-lg p-1 bg-yellow-200 text-sm">
        {item}
      </span>
    ) : null;
  };

  return (
    <div className=" flex flex-col h-full justify-between">
      <div>
        {/* Table header with search and filter */}
        <div className=" border-2 font-semibold rounded-lg px-2 flex flex-row items-center justify-between bg-slate-100 h-14">
          <span className=" text-xl font-semibold px-2 py-2">Products</span>
          <label className=" border-2 rounded-xl flex items-center">
            <span className="icon p-2">
              <FaSearch />
            </span>
            <input
              className="px-2"
              type="text"
              placeholder="Search here..."
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
            />
          </label>
        </div>
        <div className=" p-2">
          {/* Table filter and sort options */}
          <div className=" flex flex-row justify-between">
            <div className=" h-10 flex space-x-2">
              <select className=" border-2 rounded-lg font-semibold hover:bg-slate-200 cursor-pointer">
                <option>All brands</option>
              </select>
              <select className=" border-2 rounded-lg font-semibold hover:bg-slate-200 cursor-pointer">
                <option>Desk</option>
              </select>
              <select className=" border-2 rounded-lg font-semibold hover:bg-slate-200 cursor-pointer">
                <option>Tags</option>
              </select>
              <div className=" flex flex-row items-center border-2 rounded-lg p-1 text-gray-500 hover:bg-slate-200 cursor-pointer">
                <span className="icon pr-1">
                  <IoFilter />
                </span>
                <span>Filter</span>
              </div>
              <div className=" flex flex-row items-center border-2 rounded-lg p-1 text-gray-500 hover:bg-slate-200 cursor-pointer">
                <span className="icon pr-1">
                  <AiOutlineSortAscending />
                </span>
                <span>Sort</span>
              </div>
            </div>
            <div className=" flex flex-row space-x-2">
              {/* Additional action buttons */}
              <div className=" flex flex-row items-center border-2 rounded-lg p-1 font-semibold hover:bg-slate-200 cursor-pointer">
                <span className="icon pr-1">
                  <MdOutlineAddCircleOutline />
                </span>
                <span>Meeting</span>
              </div>
              <div className=" flex flex-row items-center border-2 rounded-lg p-1 font-semibold hover:bg-slate-200 cursor-pointer">
                <span className="icon pr-1">
                  <TbFileExport />
                </span>
                <span>Import/Export</span>
              </div>
            </div>
          </div>
          {/* Table content */}
          <table className=" w-full text-gray-500 border-2 border-collapse mt-2">
            <thead>
              <tr>
                {/* Table header columns */}
                <td className="pl-2 border-x-2 py-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    className=" cursor-pointer"
                  />
                </td>
                <td className="pl-2 border-x-2">Brand</td>
                <td className="pl-2 border-x-2">Description</td>
                <td className="pl-2 border-x-2">Members</td>
                <td className="pl-2 border-x-2">Categories</td>
                <td className="pl-2 border-x-2">Tags</td>
                <td className="pl-2 border-x-2">Next Meeting</td>
                <td className="pl-2 border-x-2">+</td>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr className=" font-semibold border-2" key={item.brand}>
                  {/* Table row content */}
                  <td className=" pl-2 border-x-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.brand)}
                      onChange={() => handleCheckboxChange(item.brand)}
                      className=" cursor-pointer"
                    />
                  </td>
                  <td className=" flex flex-row items-center py-1 pl-2">
                    {item.icon}
                    <span className=" pl-1 font-bold">{item.brand}</span>
                  </td>
                  <td className="pl-2 border-x-2 max-w-56 whitespace-nowrap overflow-x-hidden">
                    {item.description}
                  </td>
                  <td className="pl-2 border-x-2">
                    {handleMembers(item.members)}
                  </td>
                  <td className="pl-2 border-x-2 max-w-56 whitespace-nowrap overflow-x-hidden">
                    {handleCategories(item.categories)}
                  </td>
                  <td className="pl-2 border-x-2  max-w-56 whitespace-nowrap overflow-x-hidden">
                    {handleCategories(item.tags)}
                  </td>
                  <td className="pl-2 border-x-2">
                    {handleNextMeeting(item.next_meeting)}
                  </td>
                  <td className="pl-2 border-x-2"></td>
                </tr>
              ))}
              {/* Additional row for summary or actions */}
              <tr>
                <td className="pl-2 border-x-2"></td>
                <td className="pr-2 border-x-2 text-right">10 count</td>
                <td className="pr-2 border-x-2 text-right">
                  + Add calculation
                </td>
                <td className="pr-2 border-x-2 text-right">
                  + Add calculation
                </td>
                <td className="pr-2 border-x-2 text-right">
                  + Add calculation
                </td>
                <td className="pr-2 border-x-2 text-right">
                  + Add calculation
                </td>
                <td className="pl-2 border-x-2"></td>
                <td className="pl-2 border-x-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Selection and action controls */}
      <div className=" w-full flex justify-center">
        <div className="flex flex-row font-semibold">
          <div className=" flex flex-row border-2 rounded-lg py-1 px-2 hover:bg-slate-200 cursor-pointer">
            <span className=" mr-1">{selectedCount}</span>
            <sapn>Selected</sapn>
          </div>
          <div className=" flex flex-row items-center border-2 rounded-lg py-1 px-2 hover:bg-slate-200 cursor-pointer">
            <spam className=" mr-1">
              <PiArchiveBoxBold />
            </spam>
            <sapn>Archive</sapn>
          </div>
          <div className=" flex flex-row items-center border-2 rounded-lg py-1 px-2 hover:bg-slate-200 cursor-pointer">
            <spam className=" mr-1">
              <MdOutlineDeleteForever />
            </spam>
            <sapn>Delete</sapn>
          </div>
          <div className=" flex flex-row items-center border-2 rounded-lg py-1 px-2 hover:bg-slate-200 cursor-pointer">
            <sapn>More</sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
