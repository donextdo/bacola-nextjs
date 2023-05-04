import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const FilteredProduct = ({
  categoryId,
  selectedBrands,
  selectedSubCat,
  perpage,
  page,
}: any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(
            `${baseUrl}/api/productDetails?categoryId=${categoryId}`
          );
          console.log("only category Id ? ", response);
          const products = response.data;
          setProduct(products);
          console.log("only category Id ? ", products);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [categoryId]);

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
