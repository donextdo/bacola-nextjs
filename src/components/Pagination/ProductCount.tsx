import { SetStateAction, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

export const ProductCount = () =>
  // { passCount }: any
  {
    const [count, setCount] = useState(12); // Set default value to 12
    const [showMenu, setShowMenu] = useState(false);
    const [sortBy, setSortBy] = useState("Sort by popularity");
    const [showSortMenu, setShowSordMenu] = useState(false);

    const router = useRouter();

    const handleDropdownClick = (value: any) => {
      setCount(value);
      setShowMenu(false);

      router.push({
        pathname: router.pathname,
        query: { ...router.query, perpage: value },
      });
    };

    const handleDropdownClickSort = (value: any) => {
      setSortBy(value);
      setShowSordMenu(false);
    };

    return (
      <div className="w-full h-12 bg-gray-100 mt-11 relative">
        <div className="flex flex-row justify-end">
          <div className="flex flex-row justify-end items-center py-3 mr-4 ">
            <span className="text-xs text-black"> {sortBy}</span>
            <div>
              <MdKeyboardArrowDown
                className="mx-2 text-xl text-gray-500 cursor-pointer"
                onClick={() => setShowSordMenu(!showSortMenu)}
              />
            </div>
          </div>
          {showSortMenu && (
            <div className="font-semibold absolute top-9 right-16 bg-white border border-gray-300 rounded-md shadow-md z-10 w-56 ">
              <div
                className="py-2 cursor-pointer text-gray-600 text-xs flexr pt-6 pl-6"
                onClick={() => handleDropdownClickSort("Sort by popularity")}
              >
                <span className="text-blue-800">Sort by popularity</span>
              </div>
              <div
                className="py-2 cursor-pointer text-gray-600 text-xs flex pl-6"
                onClick={() =>
                  handleDropdownClickSort("Sort by average rating")
                }
              >
                <span className="hover:text-cyan-400">
                  Sort by average rating
                </span>
              </div>

              <div
                className="py-2  cursor-pointer text-gray-600 text-xs flex pl-6"
                onClick={() => handleDropdownClickSort("Sort by latest")}
              >
                <span className="hover:text-cyan-400"> Sort by latest</span>
              </div>
              <div
                className="py-2  cursor-pointer text-gray-600 text-xs flex pl-6"
                onClick={() =>
                  handleDropdownClickSort("Sort by price: low to high")
                }
              >
                <span className="hover:text-cyan-400">
                  {" "}
                  Sort by price: low to high
                </span>
              </div>
              <div
                className="py-2  cursor-pointer text-gray-600 text-xs flex  pb-9 pl-6"
                onClick={() =>
                  handleDropdownClickSort("Sort by price: high to low")
                }
              >
                <span className="hover:text-cyan-400">
                  {" "}
                  Sort by price: high to low
                </span>
              </div>
            </div>
          )}

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
                className="py-2 cursor-pointer text-gray-600 text-xs flex justify-center pt-6"
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
      </div>
    );
  };
