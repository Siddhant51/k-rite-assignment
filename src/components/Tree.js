import React, { useState } from "react";
// import "./Tree.css";

function TreeNode({ node, defaultOpen }) {
  const { children, label, icon } = node;

  const [showChildren, setShowChildren] = useState(defaultOpen);
  const [isLabelClicked, setIsLabelClicked] = useState(defaultOpen);

  const handleClick = () => {
    if (children) {
      setShowChildren(!showChildren);
    }
    setIsLabelClicked(!isLabelClicked);
  };

  return (
    <div className="node">
      {label === "Add new sub" ? (
        <div className={`label font-semibold cursor-pointer flex items-center`}>
          <div className="flex flex-row w-full px-2 py-1 font-normal text-gray-500 items-center">
            <span className="icon pr-2">{icon}</span>
            <span>{label}</span>
          </div>
        </div>
      ) : (
        <div
          className={`label font-semibold cursor-pointer flex flex-row items-center hover:bg-slate-200 rounded-lg my-1 ${
            isLabelClicked ? "selected border-2 rounded-lg bg-slate-200" : ""
          }`}
          onClick={handleClick}
        >
          {icon && <span className="icon pl-2">{icon}</span>}
          <div className="flex flex-row justify-between w-full px-2 py-1">
            <span>{label}</span>
            {children && <span>{showChildren ? "-" : "+"}</span>}
          </div>
        </div>
      )}
      {children && showChildren && (
        <div className="tree border-l-2 ml-2 pl-2">
          <Tree treeData={children} />
        </div>
      )}
    </div>
  );
}

function Tree({ treeData }) {
  return (
    <div>
      {treeData?.map((node, index) => (
        <TreeNode key={node.label} node={node} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

export default Tree;
