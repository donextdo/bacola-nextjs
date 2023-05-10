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

export const FilteredProduct = ({ categoryId, brand, subcategory }: any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId && brand) {
        try {
          const response = await axios.get(
            `${baseUrl}/productDetails?categoryId=${categoryId}&brands=${brand}`
          );
          console.log("only category Id ? ", response);
          const products = response.data;
          setProduct(products);
          console.log("only category Id ? ", products);
        } catch (error) {
          console.error(error);
        }
      } else if (categoryId) {
        try {
          const response = await axios.get(
            `${baseUrl}/productDetails?categoryId=${categoryId}`
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
  }, [categoryId, brand]);

  useEffect(() => {
    const fetchData = async () => {
      if (subcategory && brand) {
        try {
          const response = await axios.get(
            `${baseUrl}/productDetails?categoryId=${subcategory}&brands=${brand}`
          );
          console.log("only subcategory Id ? ", response);
          const products = response.data;
          setProduct(products);
          console.log("only subcategory Id ? ", products);
        } catch (error) {
          console.error(error);
        }
      } else if (subcategory) {
        try {
          const response = await axios.get(
            `${baseUrl}/productDetails?categoryId=${subcategory}`
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
  }, [subcategory, brand]);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId && subcategory && brand) {
        try {
          const response = await axios.get(
            `${baseUrl}/productDetails?categoryId=${categoryId}&subCategories=${subcategory}&brands=${brand}`
          );
          console.log("only subcategory Id ? ", response);
          const products = response.data;
          setProduct(products);
          console.log("only subcategory Id ? ", products);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [categoryId, subcategory, brand]);

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
