import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill, BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { useRouter } from "next/router";
import { BiSortAlt2 } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import SidebarFilter from "./SidebarFilter";

export const ProductCount = ({ passgrid }: any) => {
  const [count, setCount] = useState(12);
  const [showMenu, setShowMenu] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by popularity");
  const [showSortMenu, setShowSordMenu] = useState(false);
  const [isClick, setIsClick] = useState<string>();
  const [showFilter, setShowFilter] = useState(false);


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
    switch (value) {
      case "Sort by popularity":
        router.push({
          pathname: router.pathname,
          query: { ...router.query, orderby: "popularity" },
        });
        break;
      case "Sort by average rating":
        router.push({
          pathname: router.pathname,
          query: { ...router.query, orderby: "rating" },
        });
        break;
      case "Sort by latest":
        router.push({
          pathname: router.pathname,
          query: { ...router.query, orderby: "date" },
        });
        break;
      case "Sort by price: low to high":
        router.push({
          pathname: router.pathname,
          query: { ...router.query, orderby: "price" },
        });
        break;
      case "Sort by price: high to low":
        router.push({
          pathname: router.pathname,
          query: { ...router.query, orderby: "price-desc" },
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (router.query.perpage == undefined) {
      setCount(12);
    } else {
      setCount(parseInt(router.query.perpage as string));
    }
    const value = router.query.orderby;
    switch (value) {
      case "popularity":
        setSortBy("Sort by popularity");
        break;
      case "rating":
        setSortBy("Sort by average rating");
        break;
      case "date":
        setSortBy("Sort by latest");
        break;
      case "price":
        setSortBy("Sort by price: low to high");
        break;
      case "price-desc":
        setSortBy("Sort by price: high to low");
        break;
      default:
        break;
    }
  }, [router.query]);

  const handleGrid = (gridType: any) => {
    setIsClick(gridType);
    localStorage.setItem("gridType", gridType);
    passgrid(gridType);
  };

  useEffect(() => {
    const getItem: string | null = localStorage.getItem("gridType");
    setIsClick(getItem || "");
    if (!getItem) {
      setIsClick("layoutGrid");
    }

  }, []);

  const handleFilterSiderbar = () => {
    setShowFilter(!showFilter)
  }
  return (
    <div className="w-full h-14 bg-gray-100 mt-11 relative">
      <div className="flex flex-row items-center  justify-between py-2">
        <div>
          <button className="lg:hidden ml-3 flex items gap-2" onClick={handleFilterSiderbar}>
            <div className="text-md"><FiFilter /></div>
            <div className="text-[13px]">Filter Products</div>
          </button>
          <div className="hidden lg:block">
            <div className="flex flex-row items-center ml-3 ">
              <div className="flex mx-2">
                <BsList
                  className={`text-2xl stroke-[2] ${isClick === "list" ? "text-black" : "text-gray-300"
                    } cursor-pointer hover:text-black`}
                  onClick={() => handleGrid("list")}
                ></BsList>
              </div>
              <div className="flex mx-2">
                <BsFillGridFill
                  className={`text-xl ${isClick === "fillGrid" ? "text-black" : "text-gray-300"
                    } cursor-pointer hover:text-black`}
                  onClick={() => handleGrid("fillGrid")}
                ></BsFillGridFill>
              </div>
              <div className="flex mx-2">
                <BsGrid3X3GapFill
                  className={`text-xl ${isClick === "grid3X3Gap" ? "text-black" : "text-gray-300"
                    } cursor-pointer hover:text-black`}
                  onClick={() => handleGrid("grid3X3Gap")}
                ></BsGrid3X3GapFill>
              </div>
              <div className="flex mx-2">
                <TfiLayoutGrid4Alt
                  className={`text-xl ${isClick === "layoutGrid" ? "text-black" : "text-gray-300"
                    } cursor-pointer hover:text-black`}
                  onClick={() => handleGrid("layoutGrid")}
                ></TfiLayoutGrid4Alt>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:hidden mr-3 flex items-center py-3 gap-2">
          <div className="text-xs text-[#9b9bb4]">Sort by</div>
            <div className="text-xl"><BiSortAlt2 /> </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center py-3 mr-4  ">
              <span className="text-xs text-black font-medium"> {sortBy}</span>
              <div>
                <MdKeyboardArrowDown
                  className="mx-2 text-xl text-gray-500 cursor-pointer"
                  onClick={() => setShowSordMenu(!showSortMenu)}
                />
              </div>
              {/* </div> */}
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

              <span className="text-xs text-gray-500">Show </span>
              <span className="text-xs text-black font-medium pl-2">{count}</span>
              <div>
                <MdKeyboardArrowDown
                  className="mx-2 text-xl text-gray-500 cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                />
              </div>
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
      {
        showFilter && (
          <SidebarFilter handleFilterSiderbar={handleFilterSiderbar}/>
        )
      }
    </div>
  );
};
