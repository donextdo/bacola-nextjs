import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

export const FilteredProduct = ({
  categoryId,
  selectedBrands,
  setSelectedBrands,
}) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setSelectedBrands([]);
    const fetchData = async () => {
      if (categoryId) {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setProduct(response.data);
        console.log("filter product Subcategory prop:", categoryId);
      }
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

  useEffect(() => {
    console.log("passed brand id", selectedBrands);
  });

  useEffect(() => {
    console.log("passed brand id", selectedBrands);
    if (selectedBrands.length > 0) {
      const filteredProducts = product.filter((product) =>
        selectedBrands.includes(product?._id)
      );
      setProduct(filteredProducts);
    } else {
      // If no brands are selected, load all products for the selected category
      const fetchData = async () => {
        if (categoryId) {
          const response = await axios.get(`${baseUrl}/products/${categoryId}`);
          setProduct(response.data);
          console.log("filter product Subcategory prop:", categoryId);
        }
      };
      fetchData().catch((error) => {
        console.log(error);
      });
    }
  }, [selectedBrands]);

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
