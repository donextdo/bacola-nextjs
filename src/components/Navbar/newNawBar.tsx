import Link from "next/link";
import React, { useEffect, useState } from "react";

import Allcategories from "../AllCategories/Allcategories";
import PageNavBar from "./pageNavBar";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Product } from "@/features/product/product";

const NavbarNew = () => {
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];

  const totalProduct = products.length;

  return (
    <div>
      <div className="xl:px-40 lg:px-5 lg:py-5  hidden md:hidden lg:block">
        <div className=" lg:flex lg:flex-row  lg:justify-between lg:items-center">
          <div className="lg:flex lg:flex-col items-center">
            <div className="my-4">
              <Allcategories />
            </div>
            <div className="flex justify-center items-center bg-[#edeef5] rounded-full h-[18px] w-[120px] -mt-6">
              <h1 className="text-[#71778e] text-[10px]">
                TOTAL {totalProduct} PRODUCTS
              </h1>
            </div>
          </div>
          <div className="lg:flex lg:flex-col  ">
            <PageNavBar />
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </div>
  );
};

export default NavbarNew;
