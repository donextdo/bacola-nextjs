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

const MyList: React.FC<{
  CartBottomItems: CartBottomItem[];
  productCounts: any;
}> = ({ CartBottomItems, productCounts }) => {
  return (
    <div className="container mx-auto  grid grid-rows-5 md:grid-rows-4  lg:grid-rows-2 md:grid-flow-col w-full p-2 border lg:border-transparent my-4">
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
        const categoryResponse = await axios.get(
          `${baseUrl}/products/${category._id}`
        );
        const productCount = categoryResponse.data.length;
        productCountsData[category._id] = productCount;
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
