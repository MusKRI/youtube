import React from "react";

const LeftNavMenuItem = ({ itemLabel, itemIcon, action, classess }) => {
  return (
    <div
      onClick={action}
      className={`font-[500] text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${classess}`}
    >
      <span className="text-base mr-5">{itemIcon}</span>
      {itemLabel}
    </div>
  );
};

export default LeftNavMenuItem;
