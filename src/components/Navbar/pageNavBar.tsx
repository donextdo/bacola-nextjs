import Link from "next/link";
import React, { useState } from "react";
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FaMugHot } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const PageNavBar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(shopOpen);
  };
  return (
    <div className="lg:flex lg:flex-row ">
      <ul className="lg:space-x-1 lg:flex gap gap-0">
        {/* <li className="font-semibold rounded-full bg-[#F0FAFF] ">
          <button onMouseEnter={toggleShop} className="lg:py-2 lg:px-4">
            <div>
              <Link
                href="#"
                className="text-[#2bbef9] flex text-[15px]  font-ff-headings"
              >
                HOME
                <MdKeyboardArrowDown className="ml-2 text-xl" />
              </Link>
            </div>
          </button>

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
        </li> */}

        {/* Shop */}
        {/* <li className="font-semibold hoverable hover:rounded-full  hover:bg-[#F0FAFF] ">
          <button onMouseEnter={toggleShop} className="lg:py-2 lg:px-4">
            <div>
              <Link
                href="#"
                className="hover:text-[#2bbef9] flex text-gray-700 text-[15px]  font-ff-headings"
              >
                SHOP
                <MdKeyboardArrowDown className="ml-2 text-xl" />
              </Link>
            </div>
          </button>
        </li> */}
        {/* Meats & SeaFood */}
        <li className="font-semibold font-ff-headings hoverable hover:rounded-full  hover:bg-[#F0FAFF] ">
          <button
            onMouseEnter={toggleShop}
            className="lg:py-2 lg:px-4 inline-flex items-center"
          >
            <GiChickenOven className="text-xl mr-2" />
            <Link
              href="#"
              className="hover:text-[#2bbef9] flex text-gray-700 text-[15px]"
            >
              MEATS &amp; SEAFOOD
            </Link>
          </button>
        </li>
        {/* Bakery */}
        <li className="font-semibold font-ff-headings hoverable hover:rounded-full  hover:bg-[#F0FAFF] ">
          <button
            onMouseEnter={toggleShop}
            className="lg:py-2 lg:px-4 inline-flex items-center"
          >
            <MdOutlineBakeryDining className="text-xl mr-2" />
            <Link
              href="#"
              className="hover:text-[#2bbef9] flex text-gray-700 text-[15px]"
            >
              BAKERY
            </Link>
          </button>
        </li>
        {/* Beverages */}
        <li className="font-semibold font-ff-headings hoverable hover:rounded-full  hover:bg-[#F0FAFF] ">
          <button
            onMouseEnter={toggleShop}
            className="lg:py-2 lg:px-4 inline-flex items-center"
          >
            <FaMugHot className="text-xl mr-2" />
            <Link
              href="#"
              className="hover:text-[#2bbef9] flex text-gray-700 text-[15px]"
            >
              BEVERAGES
            </Link>
          </button>
        </li>
        {/* Blog */}
        <li className="font-semibold font-ff-headings">
          <button className="lg:py-2 lg:px-4 lg:ml-4  hover:rounded-full  hover:bg-[#F0FAFF]">
            <Link href="#" className="text-gray-700 hover:text-[#2bbef9]">
              BLOG
            </Link>
          </button>
        </li>

        {/* Contact */}
        <li className="font-semibold font-ff-headings">
          <button className="lg:py-2 lg:px-4 lg:ml-4 hover:rounded-full hover:bg-[#F0FAFF]">
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#2bbef9] "
            >
              CONTACT
            </Link>
          </button>
        </li>
      </ul>
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
  );
};

export default PageNavBar;
