import Link from "next/link";
import React, { useEffect, useState } from "react";

import Allcategories from "../AllCategories/Allcategories";
import PageNavBar from "./pageNavBar";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

const NavbarNew = () => {
  const [totalProduct, setTotalProduct] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/products`);
      setTotalProduct(response.data.totalItems);
      console.log("response: ", response.data.totalItems);
    };
    fetchData();
  }, []);
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
