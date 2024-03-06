import React, { useState } from "react";
// import "./Tree.css";

// Component for individual tree node
function TreeNode({ node, defaultOpen }) {
  // Destructuring properties from the node object
  const { children, label, icon } = node;

  // State to track whether children should be displayed
  const [showChildren, setShowChildren] = useState(defaultOpen);
  // State to track whether the node label is clicked
  const [isLabelClicked, setIsLabelClicked] = useState(defaultOpen);

  // Handle click event on the tree node label
  const handleClick = () => {
    // Toggle display of children if they exist
    if (children) {
      setShowChildren(!showChildren);
    }
    // Toggle the label click state
    setIsLabelClicked(!isLabelClicked);
  };

  // Render the tree node
  return (
    <div className="node">
      {/* Render special case for "Add new sub" label */}
      {label === "Add new sub" ? (
        <div className={`label font-semibold cursor-pointer flex items-center`}>
          <div className="flex flex-row w-full px-2 py-1 font-normal text-gray-500 items-center">
            <span className="icon pr-2">{icon}</span>
            <span>{label}</span>
          </div>
        </div>
      ) : (
        // Render regular tree node
        <div
          className={`label font-semibold cursor-pointer flex flex-row items-center hover:bg-slate-200 rounded-lg my-1 ${
            isLabelClicked ? "selected border-2 rounded-lg bg-slate-200" : ""
          }`}
          onClick={handleClick}
        >
          {icon && <span className="icon pl-2">{icon}</span>}
          <div className="flex flex-row justify-between w-full px-2 py-1">
            <span>{label}</span>
            {/* Render '+' or '-' based on whether children are displayed */}
            {children && <span>{showChildren ? "-" : "+"}</span>}
          </div>
        </div>
      )}
      {/* Render children if they exist and should be displayed */}
      {children && showChildren && (
        <div className="tree border-l-2 ml-2 pl-2">
          {/* Recursive call to Tree component for nested children */}
          <Tree treeData={children} />
        </div>
      )}
    </div>
  );
}

// Component for the entire tree structure
function Tree({ treeData }) {
  return (
    <div>
      {/* Map through treeData and render TreeNode for each node */}
      {treeData?.map((node, index) => (
        <TreeNode key={node.label} node={node} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

export default Tree;
