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
    onClick={() => setIsHovered(!isHovered)}
    className={`group cursor-pointer relative after:origin-left after:scale-x-0 flex h-full after:top-full after:left-0  after:z-50 after:absolute hover:after:scale-x-100 after:transition-all after:duration-300 after:bg-blue-600 after:h-1 after:inset-1 after:w-full flex-col transition-all duration-300 items-center capitalize font-bold hover:text-blue-700 text-black`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className=' relative flex items-center'>
        {item.name}
        {item.subMenu.length > 0 && (isHovered ? <FiChevronUp /> : <FiChevronDown />)}</div>
        {/* <div className={` absolute flex flex-col gap-1`}>
        {item.subMenu.length > 0 && (isHovered && (item.subMenu.map((item) => (<MenuItem zIndex={zIndex+10} item={item} />))))}
        </div> */}
    </div>
  );
};

export default MenuItem
