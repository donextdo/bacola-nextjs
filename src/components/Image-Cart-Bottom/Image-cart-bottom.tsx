import React from "react";
import OneItem from "./OneItem";

interface CartBottomItem {
  id: number;
  name: string;
  quantity: string;
}

const CartBottomItems: CartBottomItem[] = [
  { id: 1, name: "Biscuits & Snacks", quantity: "6 Items" },
  { id: 2, name: "Fruits & Vegetables", quantity: "12 Items" },
  { id: 3, name: "Breads & Bakery", quantity: "6 Items" },
  { id: 4, name: "Grocery & Staples", quantity: "7 Items" },
  { id: 5, name: "Breakfast & Dairy", quantity: "8 Items" },
  { id: 6, name: "Household Needs", quantity: "1 Items" },
  { id: 7, name: "Frozen Foods", quantity: "7 Items" },
  { id: 8, name: "Meats & Seafood", quantity: "5 Items" },
];

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

const MyList: React.FC<{ CartBottomItems: CartBottomItem[] }> = ({
  CartBottomItems,
}) => (
  <div className="grid grid-flow-col grid-rows-4 gap-0 mt-16 mb-9 border sm:grid-rows-4 lg:grid-rows-2 rounded-md">
    {CartBottomItems.map((CartBottomItem, index) => (
      <div key={CartBottomItem.id} className="py-10 md:py-5 lg:border">
        <div className="lg:flex">
          <img
            src={images[index]}
            alt={CartBottomItem.name}
            className="justify-center md:w-full md:h-full lg:w-1/2 lg:h-1/2 lg:pl-10 sm:w-full sm:h-full xl:w-1/3 xl:h-1/2"
          />
          <div className="lg:flex-col lg:px-5">
            <p className="font-bold text-[14px] lg:text-left text-center lg:pr-0 xl:mt-5 xl:pr-24 ">
              {CartBottomItem.name}
            </p>
            <div className="flex flex-col text-center lg:text-left ">
              <p className="text-[12px] mt-1 text-gray-400">
                {CartBottomItem.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
const CartList: React.FC = () => (
  <div className="flex flex-col md:flex-row">
    {/* <OneItem /> */}
    <MyList CartBottomItems={CartBottomItems} />
  </div>
);

export default CartList;
