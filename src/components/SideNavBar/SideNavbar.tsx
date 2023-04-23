import Link from "next/link";
import React, { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { MdKeyboardArrowDown, MdOutlineBakeryDining } from "react-icons/md";

import Image from "next/image";
import Allcategories from "../AllCategories/Allcategories";
import AllcategoriesSideNavbar from "../AllCategories/AllCategoriesSideNavbar";

const SideNavBar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(!homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 grid overflow-y-auto bg-opacity-10 place-items-left bg-slate-900">
        <div className="relative flex flex-col w-full  py-6 bg-white rounded-md shadow-md sm:w-[380px] gap-6">
          <div>
            <div className="pl-5 py-1">
              <Image
                src="/images/bacola-logo.png"
                alt="Header Image"
                className="w-[164px] h-[40px]"
                width={500}
                height={50}
              />
            </div>
            {/* Location */}
            <div>
              {/* <Allcategories /> */}
            </div>
            {/* <div>
              <AllcategoriesSideNavbar />
            </div> */}
            <nav>
              <div>
                <div className="px-5 text-[#d3d4d7] mt-10">
                  <p className="text-[13px]">Site Navigation</p>
                </div>

                {/* Home */}
                <hr className="my-[10px] md:my-[20px]" />
                <div className="px-5 ">
                  <button onClick={toggleHome}>
                    <div>
                      <Link
                        href="#"
                        className="font-ff-headings text-gray-800 text-[15px] font-semibold flex "
                      >
                        HOME
                        <MdKeyboardArrowDown className="text-xl ml-[280px] text-[#d3d4d7]" />
                      </Link>
                    </div>
                  </button>
                  {homeOpen && (
                    <div className="text-[13px] absolute w-24 py-2 ml-60 mt-2 shadow-md font-medium ">
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Home 1
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Home 2
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Home 3
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Home 4
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Home 5
                      </Link>
                    </div>
                  )}
                </div>
                <hr className="my-[10px] md:my-[20px]" />

                {/* Shop */}
                <div className="px-5 font-semibold ">
                  <button onClick={toggleShop}>
                    <div>
                      <Link
                        href="#"
                        className=" flex text-black text-[15px]  font-ff-headings"
                      >
                        SHOP
                        <MdKeyboardArrowDown className="text-xl ml-[280px] text-[#d3d4d7]" />
                      </Link>
                    </div>
                  </button>

                  {/* Shop DropDown */}
                  {shopOpen && (
                    <div className="text-[13px] absolute w-24 py-2 ml-60 mt-2 shadow-md font-medium ">
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Shop 1
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Shop 2
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Shop 3
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Shop 4
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-gray-800 ">
                        Shop 5
                      </Link>
                    </div>
                  )}
                </div>
                <hr className="my-[10px] md:my-[20px]" />

                {/* Meats & SeaFood */}
                <div className="px-5 font-semibold font-ff-headings ">
                  <button>
                    <div>
                      <Link href="#" className="text-black  flex text-[15px]">
                        <GiChickenOven className="mr-5 text-xl text-[#d3d4d7]" />
                        MEATS & SEAFOOD
                      </Link>
                    </div>
                  </button>
                </div>
                <hr className="my-[10px] md:my-[20px]" />

                {/* Bakery */}
                <div className="px-5 font-semibold font-ff-headings ">
                  <button>
                    <div>
                      <Link href="#" className="text-black flex text-[15px]">
                        <MdOutlineBakeryDining className="mr-5 text-xl text-[#d3d4d7]" />
                        BAKERY
                      </Link>
                    </div>
                  </button>
                </div>

                <hr className="my-[10px] md:my-[20px]" />

                {/* Beverages */}
                <div className="px-5 font-semibold font-ff-headings ">
                  <button>
                    <div>
                      <Link href="#" className="text-black flex text-[15px]">
                        <FaMugHot className="mr-5 text-xl text-[#d3d4d7]" />
                        BEVERAGES
                      </Link>
                    </div>
                  </button>
                </div>
                <hr className="my-[10px] md:my-[20px]" />

                {/* Blog */}
                <div className="px-5 font-semibold font-ff-headings ">
                  <button>
                    <Link href="#" className="text-black ">
                      BLOG
                    </Link>
                  </button>
                </div>
                <hr className="my-[10px] md:my-[20px]" />
                {/* Contact */}
                <div className="px-5 font-semibold font-ff-headings ">
                  <button>
                    <Link href="#" className="text-black ">
                      CONTACT
                    </Link>
                  </button>
                </div>
                <hr className="my-[10px] md:my-[20px]" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
