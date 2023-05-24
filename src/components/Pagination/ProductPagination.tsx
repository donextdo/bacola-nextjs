import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const ProductPagination = ({ perpage, page, orderby,passgrid, }: any) => {
  const [product, setProduct] = useState([]);
  const [isGrid, setIsGrid] = useState<String>();

  const router = useRouter();

  useEffect(() => {
    if (!perpage) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/products?sort=${orderby}&page=${page}`
          );
          console.log("!perpage");
          const products = response.data.products;
          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    } else if (perpage || orderby) {
      const fetchData = async () => {
        console.log("sssssss 1: ", page);
        console.log("sssssss 2: ", perpage);
        try {
          const response = await axios.get(
            `${baseUrl}/products?sort=${orderby}&page=${page}&perpage=${perpage}`
          );
          console.log("perpage || page || orderby");

          const products = response.data.products;
          console.log("sssssss 3: ", products);
          if (products.length == 0) {
            console.log("bhebhd");
          }

          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [perpage, page, orderby]);
  useEffect(() => {
    const getItem = localStorage.getItem("gridType");
    if (!getItem) {
      console.log("empty : ");
      setIsGrid("layoutGrid");
    } else {
      setIsGrid(getItem);
    }

    console.log("setIsGrid : ", getItem);
  }, [passgrid]);
  return (
    <div>
      {product.length != 0 ? (
        <div className="mx-auto ">
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 "> */}
          <div
            className={`mx-auto ${
              isGrid === "list"
                ? "grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
                : isGrid === "fillGrid"
                ? "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2"
                : isGrid === "grid3X3Gap"
                ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2"
                : isGrid === "layoutGrid"
                ? "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
                : ""
            }`}
          >
            {product.map((product: any, index) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isGrid={passgrid}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
