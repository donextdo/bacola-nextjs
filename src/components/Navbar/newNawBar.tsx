import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Allcategories from "../AllCategories/Allcategories";
import PageNavBar from "./pageNavBar";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { logOut } from "../../../utils/logout";
import Swal from "sweetalert2";

const NavbarNew = () => {
  const [totalProduct, setTotalProduct] = useState("10");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token: any;
        if (typeof localStorage !== "undefined") {
          token = localStorage.getItem("token");
        }

        const response = await axios.get(`${baseUrl}/products`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setTotalProduct(response.data.totalItems);
      } catch (error: any) {
        if (error?.response?.status == 403 || error?.response?.status == 401) {
          Swal.fire({
            width: 700,
            color: "black",
            background: "white",
            html: `
              <div style="text-align: left;">
                <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                <hr style="margin-bottom: 20px;" />
                <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                <hr style="margin-bottom: 20px;" />
              </div>
            `,
            showConfirmButton: true,
            confirmButtonText: "Ok",
            confirmButtonColor: "bg-primary",
            heightAuto: true,
            customClass: {
              confirmButton:
                "bg-primary text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
            },
          }).then((result) => {
            if (result.value) {
              logOut();
              router.push("/account");
            }
          });
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container mx-auto xl:px-40 lg:px-5 lg:py-5  hidden md:hidden lg:block">
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
      <hr className="" />
    </div>
  );
};

export default NavbarNew;
