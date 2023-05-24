import React, { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "./productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "./product";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import banner from "../../../assets/home/banner-box2.png";
import { ImageFour, ImageOne, ImageThree } from "@/components/Common/ImageList";

interface ComponentProps {
  // productPopup: boolean;
  // setProductPopup: Dispatch<SetStateAction<boolean>>;
}

export const ProductList= ({setProductPopup, productPopup}:any) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());

    console.log("data ", products);
    console.log(products);
  }, [dispatch]);

 
  // useEffect(() => {
  //   // Fetch products data from the API or use the dummy data from the JSON file
  //   fetch('/data.json')
  //     .then((response) => response.json())
  //     .then((data) => dispatch(setProducts(data)));
  // }, [dispatch]);
  return (
    <div>
      <div className="mx-auto ">
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {products.map((product: any, index) => {
            return <ProductCard key={product.id} product={product} productPopup={productPopup} setProductPopup={setProductPopup}/>;
          })}
        </div>
      </div>
    </div>
  );
};
