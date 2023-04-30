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
}:any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    console.log("passed categoryId id", categoryId);
    console.log("passed selectedSubCat id", selectedSubCat);
    console.log("passed selectedBrands id", selectedBrands);
  }, [categoryId, selectedSubCat, selectedBrands]);

  useEffect(() => {
    const categories: Array<String> =
      sessionStorage.getItem("subCategories") != null
        ? JSON.parse(sessionStorage.getItem("subCategories")!)
        : [];
    const subcatLoad =
      categories && categories.length > 0 ? categories.join(",").split(",") : [];

    const fetchData = async () => {
      if (categoryId) {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setProduct(response.data);
        if (selectedSubCat.length > 0) {
          const fetchData = async () => {
            if (selectedSubCat) {
              const response = await axios.get(
                `${baseUrl}/products/${selectedSubCat}`
              );
              if (response.data.length > 0) {
                setProduct(response.data);
                const brands: Array<String> =
                  sessionStorage.getItem("brands") != null
                    ? JSON.parse(sessionStorage.getItem("brands")!)
                    : [];
                const brandsLoad =
                  brands && brands.length > 0 ? brands.join(",").split(",") : [];

                if (selectedBrands.length > 0) {
                  const filteredProducts = product.filter((product:any) =>
                    selectedBrands.includes(product?._id)
                  );

                  setProduct(filteredProducts);
                } else if (brandsLoad.length == 0) {
                  const fetchData = async () => {
                    if (selectedSubCat) {
                      const response = await axios.get(
                        `${baseUrl}/products/${selectedSubCat}`
                      );
                      setProduct(response.data);
                    } else if (categoryId) {
                      const response = await axios.get(
                        `${baseUrl}/products/${selectedSubCat}`
                      );
                      setProduct(response.data);
                    }
                  };
                  fetchData().catch((error) => {
                    console.log(error);
                  });
                }
              }
            }
          };
          fetchData().catch((error) => {
            console.log(error);
          });
        } else if (subcatLoad.length == 0) {
          const fetchData = async () => {
            if (categoryId) {
              const response = await axios.get(
                `${baseUrl}/products/${categoryId}`
              );
              setProduct(response.data);
              const brands: Array<String> =
                sessionStorage.getItem("brands") != null
                ? JSON.parse(sessionStorage.getItem("brands")!)
                  : [];
              const brandsLoad =
                brands && brands.length > 0 ? brands.join(",").split(",") : [];

              if (selectedBrands.length > 0) {
                const filteredProducts = product.filter((product:any) =>
                  selectedBrands.includes(product?._id)
                );

                setProduct(filteredProducts);
              } else if (brandsLoad.length == 0) {
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
        }
      }
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [categoryId, selectedSubCat, selectedBrands]);

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
