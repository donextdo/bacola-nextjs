import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const ProductPagination = ({ perpage, page }: any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (perpage || page) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/products?page=${page}&perpage=${perpage}`
          );
          console.log(
            "only perpage product pagination with perpage? ",
            response.data.products
          );
          console.log(
            "only perpage product pagination currentpage with perpage? ",
            response.data.currentPage
          );
          const products = response.data.products;
          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    } else if (!perpage) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/products?page=1&perpage=12`
          );

          const products = response.data.products;
          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [perpage, page]);

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
