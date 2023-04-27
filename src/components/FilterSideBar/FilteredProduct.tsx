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
}) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setProduct(response.data);

        const brands: Array<String> =
          sessionStorage.getItem("brands") != null
            ? sessionStorage.getItem("brands")
            : [];
        const brandsLoad = brands && brands.length > 0 ? brands.split(",") : [];

        if (selectedBrands.length > 0) {
          const filteredProducts = response.data.filter((product) =>
            selectedBrands.includes(product?._id)
          );

          setProduct(filteredProducts);
        } else if (brandsLoad.length > 0) {
          product.forEach((item) => {});
          const filteredProducts = response.data.filter((product) =>
            brandsLoad.includes(product?._id)
          );

          setProduct(filteredProducts);
        } else {
          const fetchData = async () => {
            if (categoryId) {
              const response = await axios.get(
                `${baseUrl}/products/${categoryId}`
              );
              setProduct(response.data);
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
    console.log("passed selectedSubCat id", selectedSubCat);
  }, [selectedSubCat]);

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

      setProduct(filteredProducts);
    } else if (brandsLoad.length == 0) {
      const fetchData = async () => {
        if (categoryId) {
          const response = await axios.get(`${baseUrl}/products/${categoryId}`);
          setProduct(response.data);
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
