import Link from "next/link";
import React, { useState } from "react";
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FaMugHot } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import Swal from "sweetalert2";
const PageNavBar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const router = useRouter();

  const toggleHome = () => {
    setHomeOpen(homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(shopOpen);
  };

  const handleMeat = async (categoryId: any) => {
    try {
      const response = await axios.get(
        `${baseUrl}/categories/catname/${categoryId}`
      );
      const categoryIdResponse = response.data[0]._id;

      router.push({
        pathname: "/filterProduct",
        query: { categoryId: categoryIdResponse },
      });
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

  return (
    <div className="lg:flex lg:flex-row ">
      <ul className="lg:space-x-1 lg:flex gap gap-0">
        {/* Meats & SeaFood */}
        <li className="font-semibold font-ff-headings hoverable hover:rounded-full  hover:bg-[#F0FAFF] ">
          <button
            onMouseEnter={toggleShop}
            className="lg:py-2 lg:px-4 inline-flex items-center"
            onClick={() => handleMeat("Meats & Seafood")}
          >
            <GiChickenOven className="text-xl mr-2" />
            <Link
              // href={"/shop"}
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
            onClick={() => handleMeat("Breads & Bakery")}
          >
            <MdOutlineBakeryDining className="text-xl mr-2" />
            <Link
              // href={"/shop"}
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
            onClick={() => handleMeat("Beverages")}
          >
            <FaMugHot className="text-xl mr-2" />
            <Link
              // href={"/shop"}
              href="#"
              className="hover:text-[#2bbef9] flex text-gray-700 text-[15px]"
            >
              BEVERAGES
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
