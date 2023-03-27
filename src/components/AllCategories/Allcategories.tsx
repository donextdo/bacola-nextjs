import Link from "next/link";
import React, { useState } from "react";
import { CiApple } from "react-icons/ci";
import { GiChickenOven, GiThreeLeaves } from "react-icons/gi";
import {
  MdKeyboardArrowDown,
  MdOutlineBakeryDining,
  MdOutlineFastfood,
  MdOutlineStorage,
} from "react-icons/md";
import { BsCupHot, BsEgg } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";

const Allcategories = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(!homeOpen);
  };
  return (
    <>
    
      <div className=""></div>
      <div className="mr-24">
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
          <div className="text-[13px] absolute w-[268px] py-2  mt-2 shadow-md font-medium bg-white rounded-lg  ">
            <div className="flex  ">
              <CiApple className="py-2 text-4xl text-gray-400 " />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9] md:font-medium ">
                Fruits & Vegetables
              </Link>
            </div>

            <div className="flex">
              <GiChickenOven className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9]  md:font-medium">
                Meats & SeaFood
              </Link>
            </div>

            <div className="flex">
              <BsEgg className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9]  md:font-medium">
                Breakfast & Diary
              </Link>
            </div>

            <div className="flex">
              <BsCupHot className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9]  md:font-medium">
                Beverages
              </Link>
            </div>

            <div className="flex">
              <MdOutlineBakeryDining className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9]  md:font-medium">
                Breads & Bakery
              </Link>
            </div>

            <div className="flex">
              <IoFastFoodSharp className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9] md:font-medium">
                Frozen Foods
              </Link>
            </div>

            <div className="flex">
              <MdOutlineFastfood className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500  hover:text-[#2bbef9]  md:font-medium">
                Biscuits and Snacks
              </Link>
            </div>

            <div className="flex">
              <GiThreeLeaves className="py-2 text-4xl text-gray-400" />
              <Link href="#" className="block px-2 py-2 text-gray-500 hover:text-[#2bbef9] md:font-medium">
                Grocery & Staples
              </Link>
            </div>
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
