import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const FilteredProduct = ({
  categoryId,
  brand,
  subcategory,
  minValue,
  maxValue,
  inStock,
  onSale,
  perpage,
  page,
  orderby,
  passgrid,
}: any) => {
  const [product, setProduct] = useState([]);
  const [matchWithProduct, setmatchWithProduct] = useState<Product[]>([]);
  const [isGrid, setIsGrid] = useState<String>();

  const dispatch = useDispatch<AppDispatch>();
  const productsRidux = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());
    console.log("data data", productsRidux);
  }, [dispatch]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${baseUrl}/productDetails?`;

        if (categoryId) {
          url += `categoryId=${categoryId}`;
        }
        if (subcategory) {
          url += `&subCategories=${subcategory}`;
        }
        if (brand) {
          url += `&brands=${brand}`;
        }
        if (minValue && maxValue) {
          url += `&min_price=${minValue}&max_price=${maxValue}`;
        }
        if (inStock) {
          url += `&stock_status=true`;
        }
        if (onSale) {
          url += `&on_sale=true`;
        }
        if (orderby) {
          url += `&sort=${orderby}`;
        }

        if (page) {
          url += `&page=${page}`;
        }
        if (perpage) {
          url += `&perpage=${perpage}`;
        }

        const response = await axios.get(url);
        const products = response.data.products;
        console.log("response.data: ", response.data.products);
        setProduct(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [
    categoryId,
    brand,
    subcategory,
    minValue,
    maxValue,
    inStock,
    onSale,
    page,
    perpage,
    orderby,
  ]);

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

  useEffect(() => {
    const matchedProducts = productsRidux.filter((pr: Product) =>
      product.some((p: any) => p?._id === pr?._id)
    );
    setmatchWithProduct(matchedProducts);
    console.log({ product });
    console.log({ matchWithProduct });
  }, [product, productsRidux]);

  return (
    <div>
      {matchWithProduct.length != 0 ? (
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
            {matchWithProduct.map((product: any, index) => {
              return (
                <ProductCard
                  key={product._id}
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
