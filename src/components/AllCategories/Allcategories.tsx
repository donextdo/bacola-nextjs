import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineStorage } from "react-icons/md";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

interface Category {
  _id: string;
  name: string;
  subcategories: any;
  // any other properties
}

const Allcategories = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [viewCategory, setviewCategory] = useState<Array<Category>>([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const toggleHome = () => {
    setHomeOpen(!homeOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/categories`);
      setviewCategory(response.data);
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  };

  const handleCategoryHover = (_id: any) => {
    setActiveCategory(_id);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const handleSubCategoryHover = (_id: any) => {
    setActiveSubCategory(_id);
  };

  const getProductByCategory = async (categoryId: any) => {
    sessionStorage.clear();
    setHomeOpen(false);
    router.push({
      pathname: "/filterProduct",
      query: { categoryId: categoryId },
    });
  };
  useEffect(() => {
    if (router.pathname === "/") {
      setHomeOpen(true);
      handleCategoryLeave();
    } else {
      setHomeOpen(false);
      handleCategoryLeave();
    }
  }, [router.pathname]);

  return (
    <>
      <div className="">
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
          <div
            className="text-[13px] w-64 py-2 min-w-[17rem] min-h-[32rem]  bg-white mt-[30px] border border-gray m-auto absolute p-3 z-30"
            onMouseLeave={handleCategoryLeave}
          >
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
                        className="text-[13px] py-2  p-3  bg-white border border-gray absolute ml-[258px] top-[-0.52rem] z-30 min-w-[17rem] min-h-[32.5rem]"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={handleCategoryLeave}
                      >
                        {category.subcategories.map(
                          (subcategory: any, index: any) => (
                            <li key={index}>
                              {" "}
                              <a
                                href="#"
                                className={`block px-2 py-2 pt-5 text-gray-500 hover:text-[#2bbef9] ${
                                  activeSubCategory === category._id && isHover
                                    ? "text-[#2bbef9]"
                                    : "text-gray-500"
                                } `}
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
                          )
                        )}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <hr className="my-2" />

            {/* <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9] ">Value Of the Day</p>
            </div>
            <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9]">Top 100 Offers</p>
            </div>
            <div className="py-2 px-2">
              <p className="hover:text-[#2bbef9]">New Arrivals</p>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Allcategories;
