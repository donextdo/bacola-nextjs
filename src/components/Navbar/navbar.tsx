import Link from "next/link";
import React, { useState } from "react";

//icons  icons
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FaMugHot } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Allcategories from "../AllCategories/Allcategories";

const Navbar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(shopOpen);
  };
  return (
    <div>
      <div className="">
        <nav className="hidden px-4 xl:block xl:py-5 xl:px-16 ">
          <div className="xl:justify-between xl:items-center xl:flex">
            <div>
              <Allcategories />
            </div>
            <ul className="xl:space-x-1 xl:flex">
              {/* Home */}
              <li className="hoverable hover:bg-[#F0FAFF] hover:rounded-full ">
                <button className="xl:py-2 xl:px-5" onMouseEnter={toggleHome}>
                  <div>
                    <Link
                      href="#"
                      className="font-ff-headings text-gray-800 text-[15px] font-semibold flex hover:text-[#2bbef9]"
                    >
                      HOME
                      <MdKeyboardArrowDown className="mx-2 text-xl " />
                    </Link>
                  </div>
                </button>
                {/*  */}
                {homeOpen && (
                  <div className="text-[13px] absolute w-40 py-2 mt-2 shadow-md font-medium bg-white rounded-lg ">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                    >
                      Home 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                    >
                      Home 2
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                    >
                      Home 3
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                    >
                      Home 4
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                    >
                      Home 5
                    </Link>
                  </div>
                )}
              </li>

              {/* Shop */}
              <li className="font-semibold hoverable xl:py-2 xl:px-5 hover:rounded-full  hover:bg-[#F0FAFF] ">
                <button onMouseEnter={toggleShop} className="">
                  <div>
                    <Link
                      href="#"
                      className="hover:text-[#2bbef9] flex text-black text-[15px]  font-ff-headings"
                    >
                      SHOP
                      <MdKeyboardArrowDown className="mx-2 text-xl" />
                    </Link>
                  </div>
                </button>
              </li>

              {/* Meats & SeaFood */}
              <li className="font-semibold font-ff-headings">
                <button className="xl:py-2 xl:px-5 hover:rounded-full  hover:bg-[#F0FAFF]">
                  <div>
                    <Link
                      href="#"
                      className="text-black hover:text-[#2bbef9] flex text-[15px]"
                    >
                      <GiChickenOven className="mr-2 text-xl " />
                      MEATS & SEAFOOD
                    </Link>
                  </div>
                </button>
              </li>

              {/* Bakery */}
              <li className="font-semibold font-ff-headings">
                <button className="xl:py-2 xl:px-5 hover:rounded-full  hover:bg-[#F0FAFF]">
                  <div>
                    <Link
                      href="#"
                      className="text-black hover:text-[#2bbef9] flex text-[15px]"
                    >
                      <MdOutlineBakeryDining className="mr-2 text-xl" />
                      BAKERY
                    </Link>
                  </div>
                </button>
              </li>

              {/* Beverages */}
              <li className="font-semibold font-ff-headings">
                <button className="xl:py-2 xl:px-5 hover:rounded-full  hover:bg-[#F0FAFF]">
                  <div>
                    <Link
                      href="#"
                      className="text-black hover:text-[#2bbef9] flex text-[15px]"
                    >
                      <FaMugHot className="mr-2 text-xl " />
                      BEVERAGES
                    </Link>
                  </div>
                </button>
              </li>

              {/* Blog */}
              <li className="font-semibold font-ff-headings">
                <button className="xl:py-2 xl:px-5 hover:rounded-full  hover:bg-[#F0FAFF]">
                  <Link href="#" className="text-black hover:text-[#2bbef9]">
                    BLOG
                  </Link>
                </button>
              </li>

              {/* Contact */}
              <li className="font-semibold font-ff-headings">
                <button className="xl:py-2 xl:px-5 hover:rounded-full hover:bg-[#F0FAFF]">
                  <Link
                    href="/contact"
                    className="text-black hover:text-[#2bbef9] "
                  >
                    CONTACT
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Shop DropDown */}
        {shopOpen && (
          <div className="w-full xl:px-16 text-[13px] grid grid-flow-col py-2 mt-2 font-medium  rounded-lg grid-col-5">
            <div className="relative mx-5">
              <p className="font-bold px-4 text-[#233a95] hover:text-[#2bbef9]">
                Shop Lists
              </p>
              <div className="mt-5">
                <Link
                  href="#"
                  className="block  px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Shop Default
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Shop Right Sidebar
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Shop Wide
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  List Left Sidebar
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Load More Button
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Infinite Scrolling
                </Link>
              </div>
            </div>

            <div className="mx-5">
              <p className="font-bold px-4  text-[#233a95] hover:text-[#2bbef9]">
                Product Detail
              </p>
              <div className="mt-5">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Product Default
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Product Variable
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Product Grouped
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Product External
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Product Downloadable
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Product With Video
                </Link>
              </div>
            </div>

            <div className="mx-5">
              <p className="font-bold px-4 text-[#233a95] hover:text-[#2bbef9]">
                Product Types
              </p>
              <div className="mt-5">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Single Type 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Single Type 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Single Type 3
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Single Type 4
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Thumbnails Left
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Zoom Image
                </Link>
              </div>
            </div>

            <div className="mx-5">
              <p className="font-bold px-4 text-[#233a95] hover:text-[#2bbef9]">
                Shop Pages
              </p>
              <div className="mt-5">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Cart
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Checkout
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  My Account
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Wishlist
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Order Tracking
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Order On WhatsApp
                </Link>
              </div>
            </div>

            <div className="mx-5">
              <p className="font-bold px-4 text-[#233a95] hover:text-[#2bbef9]">
                Shop Layouts
              </p>
              <div className="mt-5">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Two Columns
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Three Columns
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Three Columns Wide
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9] "
                >
                  Four Columns
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Four Columns Wide
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-[#2bbef9]"
                >
                  Five Columns Wide
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="my-0" />
    </div>
  );
};

export default Navbar;
