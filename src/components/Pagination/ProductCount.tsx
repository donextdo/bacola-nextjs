import { SetStateAction, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ProductCount = ({ passCount }) => {
  const [count, setCount] = useState(12); // Set default value to 12
  const [showMenu, setShowMenu] = useState(false);

  const handleDropdownClick = (value: SetStateAction<number>) => {
    setCount(value);
    setShowMenu(false);
    passCount(value);
  };

  return (
    <div className="w-full h-12 bg-gray-100 mt-11 relative">
      <div className="flex flex-row justify-end items-center py-3 mr-4 ">
        <span className="text-xs text-gray-500">Show {count}</span>
        <div>
          <MdKeyboardArrowDown
            className="mx-2 text-xl text-gray-500 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      {showMenu && (
        <div className="font-semibold absolute top-9 right-5 bg-white border border-gray-300 rounded-md shadow-md z-10 w-20 ">
          <div
            className="py-2 cursor-pointer text-gray-600 text-xs flex justify-center pt-9"
            onClick={() => handleDropdownClick(12)}
          >
            <span className="text-blue-800">12</span>
          </div>

          <div
            className="py-2  cursor-pointer text-gray-600 text-xs flex justify-center"
            onClick={() => handleDropdownClick(24)}
          >
            <span className="hover:text-cyan-400"> 24</span>
          </div>
          <div
            className="py-2  cursor-pointer text-gray-600 text-xs flex justify-center"
            onClick={() => handleDropdownClick(36)}
          >
            <span className="hover:text-cyan-400"> 36</span>
          </div>
          <div
            className="py-2  cursor-pointer text-gray-600 text-xs flex justify-center pb-9 "
            onClick={() => handleDropdownClick(48)}
          >
            <span className="hover:text-cyan-400"> 48</span>
          </div>
        </div>
      )}
    </div>
  );
};
