import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productSlice";
import { RootState } from "@/redux/store";
import { Product } from "./product";




interface ComponentProps {
  itemsList: Array<Object>;
}


export const ProductList: FC<ComponentProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products) as Product[];

  useEffect(() => {
    // Fetch products data from the API or use the dummy data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);
  return (
    <div className="container mx-auto lg:max-w-[885px] md:max-w-[670px]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 ">
        {products.map((product: any, index) => {
          return (
            <ProductCard
              key={product.id} product={product} />
          );
        })}
      </div>
    </div>
  );
};
