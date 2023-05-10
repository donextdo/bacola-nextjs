import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const ProductPagination = ({ perpage, page, orderby }: any) => {
  const [product, setProduct] = useState([]);

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

  return (
    <div>
      {product.length != 0 ? (
        <div className="mx-auto ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            {product.map((product: any, index) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
