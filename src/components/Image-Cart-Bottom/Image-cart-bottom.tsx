import React, { useEffect, useState } from "react";
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
import Swal from "sweetalert2";

interface CartBottomItem {
  _id: any;
  id: any;
  name: string;
  quantity: string;
}

const MyList: React.FC<{
  CartBottomItems: CartBottomItem[];
  productCounts: any;
}> = ({ CartBottomItems, productCounts }) => {
  const router = useRouter();

  const handleMeat = async (categoryId: string) => {
    const category = CartBottomItems.find((item) => item.name === categoryId);

    if (category) {
      router.push({
        pathname: "/filterProduct",
        query: { categoryId: category._id },
      });
    } else {
      router.push({
        pathname: "/shop",
      });
    }
  };
  return (
    <div className="container mx-auto  grid grid-rows-5 md:grid-rows-4  lg:grid-rows-2 md:grid-flow-col w-full p-2 border lg:border-transparent my-4">
      <div className="col-span-2 md:row-span-4 lg:row-span-2 flex flex-col justify-center items-center lg:border">
        <div
          className="h-[150px] w-[150px] cursor-pointer"
          onClick={() => handleMeat("Beverages")}
          data-category="Beverages"
        >
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
        </div>
        <h2
          className="text-sm cursor-pointer"
          onClick={() => handleMeat("Beverages")}
        >
          Beverages
        </h2>{" "}
        <h2 className="text-xs text-[#202435]">
          {
            productCounts[
              CartBottomItems.find((item) => item.name === "Beverages")?._id
            ]
          }{" "}
          item
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Meats & Seafood")}
          data-category="Meats & Seafood"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Meats & Seafood")}
          >
            Meats & Seafood
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find((item) => item.name === "Meats & Seafood")
                  ?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Household Needs")}
          data-category="Household Needs"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Household Needs")}
          >
            Household Needs
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find((item) => item.name === "Household Needs")
                  ?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Grocery & Staples")}
          data-category="Grocery & Staples"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Grocery & Staples")}
          >
            Grocery & Staples
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find(
                  (item) => item.name === "Grocery & Staples"
                )?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Fruits & Vegetables")}
          data-category="Fruits & Vegetables"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Fruits & Vegetables")}
          >
            Fruits & Vegetables
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find(
                  (item) => item.name === "Fruits & Vegetables"
                )?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Frozen Foods")}
          data-category="Frozen Foods"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Frozen Foods")}
          >
            Frozen Foods
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find((item) => item.name === "Frozen Foods")
                  ?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Breakfast & Dairy")}
          data-category="Breakfast & Dairy"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Breakfast & Dairy")}
          >
            Breakfast & Dairy
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find(
                  (item) => item.name === "Breakfast & Dairy"
                )?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Biscuits & Snacks")}
          data-category="Biscuits & Snacks"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Biscuits & Snacks")}
          >
            Biscuits & Snacks
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find(
                  (item) => item.name === "Biscuits & Snacks"
                )?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:border p-5">
        <div
          className="h-[70px] w-auto mr-3 cursor-pointer"
          onClick={() => handleMeat("Breads & Bakery")}
          data-category="Breads & Bakery"
        >
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
        </div>
        <div>
          <h2
            className="text-sm cursor-pointer"
            onClick={() => handleMeat("Breads & Bakery")}
          >
            Breads & Bakery
          </h2>{" "}
          <h2 className="text-xs text-[#202435]">
            {" "}
            {
              productCounts[
                CartBottomItems.find((item) => item.name === "Breads & Bakery")
                  ?._id
              ]
            }{" "}
            item
          </h2>
        </div>
      </div>
    </div>
  );
};

const CartList: React.FC = () => {
  const [CartBottomItems, setCartBottomItems] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/categories`);

      setCartBottomItems(response.data);
      const productCountsData: any = {};
      for (const category of response.data) {
        try {
          const categoryResponse = await axios.get(
            `${baseUrl}/products/${category._id}`
          );
          const productCount = categoryResponse.data.length;
          productCountsData[category._id] = productCount;
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
      }
      setProductCounts(productCountsData);
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
    <div className="flex flex-col md:flex-row">
      {/* <OneItem /> */}
      <MyList CartBottomItems={CartBottomItems} productCounts={productCounts} />
    </div>
  );
};

export default CartList;
