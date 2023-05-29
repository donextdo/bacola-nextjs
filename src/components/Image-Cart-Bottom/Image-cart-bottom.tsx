import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const getProductByCategory = async (categoryId: any) => {
    sessionStorage.clear();
    localStorage.clear();

    router.push({
      pathname: "/filterProduct",
      query: { categoryId: categoryId },
    });
  };
  return (
    <div className="grid grid-flow-col grid-rows-4 gap-0 mt-16 mb-9 border sm:grid-rows-4 lg:grid-rows-2 rounded-md">
      {CartBottomItems.map((CartBottomItem, index) => (
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
    </div>
  );
};
const CartList: React.FC = () => {
  const [CartBottomItems, setCartBottomItems] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/categories`);
      console.log("bottum : ", response.data);
      console.log("bottum : ", response.data[0].subcategories.length);
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
      console.log("productCounts : ", productCounts);
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
