import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MenuItem = ({ item, onClickFn, zIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
    className={`group cursor-pointer relative after:origin-left after:scale-x-0 flex h-full after:top-full after:left-0  after:z-50 after:absolute ${item.subMenu.length > 0 && 'hover:after:scale-x-100'} after:transition-all after:duration-300 after:bg-blue-600 after:h-1 after:inset-1 after:w-full flex-col transition-all duration-300 items-center capitalize font-bold hover:text-blue-700 text-black`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className=' relative flex items-center'>
        {item.name}
        {item.subMenu.length > 0 && (isHovered ? <FiChevronUp /> : <FiChevronDown />)}</div>
    </div>
  );
};

export default MenuItem
