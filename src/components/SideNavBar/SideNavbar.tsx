import Link from "next/link";
import React, { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { MdKeyboardArrowDown, MdOutlineBakeryDining } from "react-icons/md";
import logo from "../../../assets/logo/buntalk.png";

import Image from "next/image";
import Allcategories from "../AllCategories/Allcategories";
import AllcategoriesSideNavbar from "../AllCategories/AllCategoriesSideNavbar";
import { Location } from "../Location/Location";
import SideLocation from "./SideLocation";
import { IoCloseSharp } from "react-icons/io5";

const SideNavBar = ({ setShowSideNavbar, handleSideNavbar }: any) => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(!homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  };

  const handleClose = () => {
    setShowSideNavbar(false);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 grid overflow-y-auto bg-opacity-10 place-items-left bg-slate-900">
        <div className="relative flex flex-col w-full py-6 bg-white rounded-md shadow-md sm:w-[380px] ">
          <div className="flex justify-between mx-6">
            <div className="h-[55px] w-auto">
              <Image
                src={logo}
                alt="item1"
                style={{
                  objectFit: "contain",
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                }}
                width={450}
                height={400}
              />
            </div>
            <div>
              <button
                className=" border bg-[#c2c2d3] rounded-full p-1"
                onClick={handleClose}
              >
                <IoCloseSharp className="text-md font-semibold text-white" />
              </button>
            </div>
          </div>
          {/* Location */}
          <div className="mx-6 mt-4">
            <SideLocation />
          </div>

          <div>{/* <Allcategories /> */}</div>
          <div className="mx-4 mt-4">
            <AllcategoriesSideNavbar setShowSideNavbar={setShowSideNavbar} />
          </div>
          <nav>
            <div>
              <div className="px-5 text-[#d3d4d7] mt-10">
                <p className="text-[13px]">Site Navigation</p>
              </div>

              {/* Home */}
              <hr className="my-[10px] md:my-[20px]" />
              <div className="">
                <div className="flex justify-between px-6" onClick={toggleHome}>
                  <Link href="/" onClick={handleSideNavbar}>
                    {" "}
                    <div className="font-ff-headings text-gray-800 text-[15px] font-semibold ">
                      HOME
                    </div>
                  </Link>
                  <div>
                    <MdKeyboardArrowDown className="text-xl text-[#d3d4d7]" />
                  </div>
                </div>
              </div>
              <hr className="my-[10px] md:my-[20px]" />

              {/* Shop */}
              <div className="">
                <div className="flex justify-between px-6" onClick={toggleShop}>
                  <Link href="/shop" onClick={handleSideNavbar}>
                    <div className="font-ff-headings text-gray-800 text-[15px] font-semibold ">
                      SHOP
                    </div>
                  </Link>
                  <div>
                    <MdKeyboardArrowDown className="text-xl text-[#d3d4d7]" />
                  </div>
                </div>
              </div>
              <hr className="my-[10px] md:my-[20px]" />

              {/* Meats & SeaFood */}
              <div className="px-5 font-semibold font-ff-headings ">
                <button>
                  <div>
                    <Link
                      href="/filterProduct?categoryId=6450a82507245756e38fe70a"
                      onClick={handleSideNavbar}
                      className="text-black  flex text-[15px]"
                    >
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
                    <Link
                      href="/shop"
                      className="text-black flex text-[15px]"
                      onClick={handleSideNavbar}
                    >
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
                    <Link
                      href="/shop"
                      className="text-black flex text-[15px]"
                      onClick={handleSideNavbar}
                    >
                      <FaMugHot className="mr-5 text-xl text-[#d3d4d7]" />
                      BEVERAGES
                    </Link>
                  </div>
                </button>
              </div>
              <hr className="my-[10px] md:my-[20px]" />

              {/* Contact */}
              <div
                className="px-5 font-semibold font-ff-headings "
                onClick={handleSideNavbar}
              >
                <button>
                  <Link href="/contact" className="text-black ">
                    CONTACT
                  </Link>
                </button>
              </div>
              <hr className="my-[10px] md:my-[20px]" />
            </div>
          </nav>

          <div className="mx-6 mt-6 text-[#d9d9e3] text-sm">
            Copyright 2022 © BunTalk WordPress Theme. All rights reserved.
            Powered by BuntalkTheme.
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
