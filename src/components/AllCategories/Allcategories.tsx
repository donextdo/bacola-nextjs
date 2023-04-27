import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiApple } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { GiChickenOven, GiThreeLeaves } from "react-icons/gi";
import {
  MdKeyboardArrowDown,
  MdOutlineBakeryDining,
  MdOutlineFastfood,
  MdOutlineStorage,
} from "react-icons/md";
import { BsCupHot, BsEgg } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { FilterSideBar } from "../FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";

const Allcategories = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [viewCategory, setviewCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isClicked, setIsClicked] = useState(true);

  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const toggleHome = () => {
    setHomeOpen(!homeOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/categories`);
      setviewCategory(response.data);
    };
    fetchData();
  }, []);

  const handleCategoryHover = (categoryId) => {
    //console.log(categoryId);
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const handleSubCategoryHover = (subcategory) => {
    //console.log(subcategory);
  };

  const getProductByCategory = async (categoryId) => {
    sessionStorage.clear();
    setHomeOpen(false);
    router.push({
      pathname: "/filterProduct",
      query: { categoryId: categoryId },
    });
  };
  useEffect(() => {
    // Detect current URL and set homeOpen state
    if (router.pathname === "/") {
      setHomeOpen(true);
    } else {
      setHomeOpen(false);
    }
  }, [router.pathname]);
  return (
    <>
      <div>
        <button
          className="w-[214px] h-[50px] rounded-full bg-[#2bbef9] "
          onClick={toggleHome}
        >
          <div>
            <Link
              href="#"
              className="font-ff-headings text-white justify-between px-3 py-4 text-[15px] font-semibold flex "
            >
              {" "}
              <div>
                <MdOutlineStorage className="mx-2 text-xl " />
              </div>
              ALL CATEGORIES
              <div>
                <MdKeyboardArrowDown className="mx-2 text-xl " />
              </div>
            </Link>
          </div>
        </button>

        {homeOpen && (
          <div className="text-[13px] w-64 py-2 min-w-[17rem] min-h-[32rem]  bg-white mt-5 border border-gray m-auto absolute p-3 z-10">
            <ul className="relative">
              {viewCategory.map((category, index) => {
                return (
                  <li key={index} className="list-item w-full flex-row pt-3">
                    <a
                      href="#"
                      className={`block px-2 py-2  hover:text-[#2bbef9] group ${
                        activeCategory === category._id && isHover
                          ? "text-[#2bbef9]"
                          : "text-gray-500"
                      }`}
                      onMouseEnter={() => handleCategoryHover(category?._id)}
                      onClick={() => getProductByCategory(category?._id)}
                    >
                      <div className=" flex flex-row items-center justify-between">
                        <div>{category?.name} </div>
                        {category?.subcategories?.length > 0 && (
                          <div>
                            {activeCategory === category._id ? (
                              <IoIosArrowForward className=" text-gray-500  group-hover:text-[#2bbef9]  "></IoIosArrowForward>
                            ) : (
                              <IoIosArrowForward className="  text-gray-500  group-hover:text-[#2bbef9]  "></IoIosArrowForward>
                            )}
                          </div>
                        )}
                      </div>
                    </a>
                    {activeCategory === category._id &&
                    category.subcategories.length > 0 ? (
                      <ul
                        className="text-[13px] py-2  p-3  bg-white border border-gray absolute ml-[258px] top-[-0.52rem] z-10 min-w-[17rem] min-h-[32.5rem]"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                      >
                        {category.subcategories.map((subcategory, index) => (
                          <li key={index}>
                            {" "}
                            <a
                              href="#"
                              className="block px-2 py-2 pt-5 text-gray-500 hover:text-[#2bbef9]  "
                              key={subcategory.id}
                              onMouseEnter={() =>
                                handleSubCategoryHover(subcategory?._id)
                              }
                              onClick={() =>
                                getProductByCategory(subcategory?._id)
                              }
                            >
                              {subcategory.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <hr className="my-2" />

            <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9] ">Value Of the Day</p>
            </div>
            <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9]">Top 100 Offers</p>
            </div>
            <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9]">New Arrivals</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Allcategories;
