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
  //setSelectedBrands,
}) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setProduct(response.data);
        //console.log("filter product Subcategory prop:", categoryId);
        const brands: Array<String> =
          sessionStorage.getItem("brands") != null
            ? sessionStorage.getItem("brands")
            : [];
        const brandsLoad = brands && brands.length > 0 ? brands.split(",") : [];
        //console.log("session storage brand id", brands);
        console.log("session storage brandsLoad", brandsLoad);
        if (selectedBrands.length > 0) {
          const filteredProducts = response.data.filter((product) =>
            selectedBrands.includes(product?._id)
          );
          console.log("filteredProducts ", filteredProducts);
          setProduct(filteredProducts);
        } else if (brandsLoad.length > 0) {
          console.log("productttttttttt ", response.data);
          product.forEach((item) => {
            console.log("item ", item);
          });
          const filteredProducts = response.data.filter((product) =>
            brandsLoad.includes(product?._id)
          );
          console.log("filteredProducts brandsLoad", filteredProducts);
          setProduct(filteredProducts);
        } else {
          sessionStorage.clear();
          // If no brands are selected, load all products for the selected category
          const fetchData = async () => {
            if (categoryId) {
              const response = await axios.get(
                `${baseUrl}/products/${categoryId}`
              );
              setProduct(response.data);
              //console.log("filter product Subcategory prop:", categoryId);
            }
          };
          fetchData().catch((error) => {
            console.log(error);
          });
        }
      }
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [categoryId, selectedBrands]);

  useEffect(() => {
    console.log("passed brand id", selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    const brands: Array<String> =
      sessionStorage.getItem("brands") != null
        ? sessionStorage.getItem("brands")
        : [];
    const brandsLoad = brands && brands.length > 0 ? brands.split(",") : [];
    if (selectedBrands.length > 0) {
      const filteredProducts = product.filter((product) =>
        selectedBrands.includes(product?._id)
      );
      console.log("filteredProducts ", filteredProducts);
      setProduct(filteredProducts);
    } else if (brandsLoad.length == 0) {
      sessionStorage.clear();

      // If no brands are selected, load all products for the selected category
      const fetchData = async () => {
        if (categoryId) {
          sessionStorage.clear();
          const response = await axios.get(`${baseUrl}/products/${categoryId}`);
          setProduct(response.data);
          //console.log("filter product Subcategory prop:", categoryId);
        }
      };
      fetchData().catch((error) => {
        console.log(error);
      });
    }
  }, [selectedBrands, categoryId]);

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
