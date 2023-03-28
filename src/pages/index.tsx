import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//Components
const inter = Inter({ subsets: ["latin"] });
import React, { useState, useEffect } from "react";
import MyAccount from "@/components/MyAccount/MyAccount";
import Cart from "@/features/Cart/Cart";
import Header from "@/components/Header/Header";
import CartList from "@/components/Image-Cart-Bottom/Image-cart-bottom";
import HomeSlider from "@/components/Homeslider";
import { SearchItem } from "@/components/Search/Search";
import { ItemList } from "@/components/ItemList/ItemList";
import { data } from "@/dummy_data/Items";
import Status from "@/components/ProductStatus/Status";
import Categories from "@/components/ProductCategories/Categories";
import Brands from "@/components/Brands/Brands";
import { RangeSlider } from "@/components/RangeSlider/RangeSlider";
import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";

export default function Home() {
  const [items, setItems] = useState<Array<Object>>([]);

  useEffect(() => {
    setItems(data);
    return () => {
      setItems([]);
    };
  }, []);

  return (
    <div>
      <ItemList itemsList={items} />
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       {/* <Header /> */}
  //       <HomeSlider />
  //     </div>
  //     {/* <div className="m-8 search-bar ">
  //       <SearchItem />
  //     </div> */}
  //     <div>
  //       <ItemList itemsList={items} />
  //     </div>
  //     <div>
  //       <FilterSideBar />
  //     </div>

  //     <div>
  //       <CartList />
  //     </div>
  //   </div>
  // );
}
