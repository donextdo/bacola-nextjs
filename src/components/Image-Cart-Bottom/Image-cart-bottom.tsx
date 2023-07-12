import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import bevarage from "./../../../assets/categary/bevarage.jpg";
import breads from "./../../../assets/categary/breads.jpg";
import buscuits from "./../../../assets/categary/buscuits.jpg";
import dairy from "./../../../assets/categary/dairy-1.jpg";
import frozenfoods from "./../../../assets/categary/frozenfoods.png";
import fruitvegetables from "./../../../assets/categary/fruitvegetables.jpg";
import grocery from "./../../../assets/categary/grocery.png";
import household from "./../../../assets/categary/household.jpg";
import meat from "./../../../assets/categary/meat.jpg";
import Link from "next/link";
import { logOut } from "../../../utils/logout";
import Swal from "sweetalert2";

interface CartBottomItem {
  _id: any;
  id: number;
  name: string;
  quantity: string;
}

const images: string[] = [
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image2.png",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/dairy-1.jpg",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/household-1.jpg",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/category-image4.png",
  "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/meat-1.jpg",
];
const router = useRouter();
const MyList: React.FC<{
  CartBottomItems: CartBottomItem[];
  productCounts: any;
}> = ({ CartBottomItems, productCounts }) => {
  const getProductByCategory = async (categoryId: any) => {
    sessionStorage.clear();
    localStorage.clear();

    router.push({
      pathname: "/filterProduct",
      query: { categoryId: categoryId },
    });
  };

  const slicedItems = CartBottomItems.slice(1, 8);

  return (
    <div className="container mx-auto  grid grid-rows-5 md:grid-rows-4  lg:grid-rows-2 md:grid-flow-col w-full p-2 border lg:border-transparent my-4">
      {/* <div className="lg:col-span-1 ">

        {slicedItems.map((CartBottomItem, index) => {
          if (index === 0) {
            return (
              <div key={CartBottomItem._id} className="py-5  ">
                <div
                  className="flex flex-col items-center justify-center"
                  onClick={() => getProductByCategory(CartBottomItem._id)}
                >
                  <img
                    src={images[index]}
                    alt={CartBottomItem.name}
                    className="cursor-pointer justify-center w-auto h-[360px] lg:h-[186px] "
                  />
                  <div className="">
                    <p className="cursor-pointer font-bold text-[14px] lg:text-left text-center ">
                      {CartBottomItem.name}
                    </p>
                    <div className="flex flex-col text-center ">
                      <p className="cursor-pointer text-[12px] mt-1 text-gray-400">
                        {productCounts[CartBottomItem._id]} Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null; // Return null for other items to skip rendering them
        })}
      </div> */}
      <div className="col-span-2 md:row-span-4 lg:row-span-2 flex flex-col justify-center items-center lg:border">
        <div className="h-[150px] w-[150px]">
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <Image
              src={bevarage}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
          <h2 className="text-sm">Beverages</h2>{" "}
        </Link>

        <h2 className="text-xs text-[#202435]">11 Items</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <Image
              src={meat}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <h2 className="text-sm">Meats & Seafood</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <Image
              src={household}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <h2 className="text-sm">Household Needs</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <Image
              src={grocery}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a82507245756e38fe70a#">
            <h2 className="text-sm">Grocery & Staples</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a80707245756e38fe708">
            <Image
              src={fruitvegetables}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a80707245756e38fe708">
            <h2 className="text-sm">Fruits & Vegetables</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a83907245756e38fe70c#">
            <Image
              src={frozenfoods}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a83907245756e38fe70c#">
            <h2 className="text-sm">Frozen Foods</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a83907245756e38fe70c#">
            <Image
              src={dairy}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a83907245756e38fe70c#">
            <h2 className="text-sm">Breakfast & Dairy</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a85507245756e38fe70e#">
            <Image
              src={buscuits}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a85507245756e38fe70e#">
            <h2 className="text-sm">Biscuits & Snacks</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div className="h-[70px] w-auto mr-3">
          <Link href="/filterProduct?categoryId=6450a85507245756e38fe70e#">
            <Image
              src={breads}
              alt="bevarage"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />
          </Link>
        </div>
        <div>
          <Link href="/filterProduct?categoryId=6450a85507245756e38fe70e#">
            <h2 className="text-sm">Breads & Bakery</h2>{" "}
          </Link>

          <h2 className="text-xs text-[#202435]">11 Items</h2>
        </div>
      </div>

      {/* <div className="grid grid-flow-col grid-rows-4 gap-0  mb-9 border sm:grid-rows-4 lg:grid-rows-2 rounded-md lg:col-span-4">
        {slicedItems.map((CartBottomItem, index) => (
          <div key={CartBottomItem._id} className="py-10 md:py-5 lg:border">
            <div
              className="lg:flex "
              onClick={() => getProductByCategory(CartBottomItem._id)}
            >
              <img
                src={images[index]}
                alt={CartBottomItem.name}
                className="cursor-pointer justify-center md:w-full md:h-full lg:w-1/2 lg:h-1/2 lg:pl-10 sm:w-full sm:h-full xl:w-1/3 xl:h-1/2"
              />
              <div className="lg:flex-col lg:px-5">
                <p className="cursor-pointer font-bold text-[14px] lg:text-left text-center lg:pr-0 xl:mt-5 xl:pr-24 ">
                  {CartBottomItem.name}
                </p>
                <div className=" flex flex-col text-center lg:text-left ">
                  <p className="cursor-pointer text-[12px] mt-1 text-gray-400">
                    {productCounts[CartBottomItem._id]} Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
const CartList: React.FC = () => {
  const [CartBottomItems, setCartBottomItems] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/categories`);
      setCartBottomItems(response.data);
      const productCountsData: any = {};
      for (const category of response.data) {
        try {
          const token = localStorage.getItem("token");

          const categoryResponse = await axios.get(
            `${baseUrl}/products/${category._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const productCount = categoryResponse.data.length;
          productCountsData[category._id] = productCount;
        } catch (error: any) {
          if (
            error?.response?.status == 403 ||
            error?.response?.status == 401
          ) {
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
              confirmButtonColor: "blue",
              heightAuto: true,
              customClass: {
                confirmButton:
                  "bg-blue-500 text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
              },
            }).then((result) => {
              if (result.value) {
                logOut();
                router.push("/account");
              }
            });
          }
        }
      }
      setProductCounts(productCountsData);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      {/* <OneItem /> */}
      <MyList CartBottomItems={CartBottomItems} productCounts={productCounts} />
    </div>
  );
};

export default CartList;
