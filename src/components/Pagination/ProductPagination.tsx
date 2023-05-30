import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";

export const ProductPagination = ({
  brand,
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
  const [isGrid, setIsGrid] = useState<String>();
  const [matchWithProduct, setmatchWithProduct] = useState<Product[]>([]);
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
    if (!perpage) {
      const fetchData = async () => {
        try {
          let url = `${baseUrl}/products?page=${page}&sort=${orderby}`;

          if (brand) {
            url += `&brands=${brand}`;
          }
          if (minValue && maxValue) {
            url += `&min_price=${minValue}&max_price=${maxValue}`;
          }
          if (inStock) {
            url += `&stock_status=${inStock}`;
          }
          if (onSale) {
            url += `&on_sale=${onSale}`;
          }

          const response = await axios.get(url);
          const products = response.data.products;

          if (products.length === 0) {
            console.log("No products found.");
          }

          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    } else if (perpage || orderby) {
      const fetchData = async () => {
        try {
          let url = `${baseUrl}/products?page=${page}&perpage=${perpage}&sort=${orderby}`;

          if (brand) {
            url += `&brands=${brand}`;
          }
          if (minValue && maxValue) {
            url += `&min_price=${minValue}&max_price=${maxValue}`;
          }
          if (inStock) {
            url += `&stock_status=${inStock}`;
          }
          if (onSale) {
            url += `&on_sale=${onSale}`;
          }

          const response = await axios.get(url);
          const products = response.data.products;

          if (products.length === 0) {
            console.log("No products found.");
          }

          setProduct(products);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [page, perpage, orderby, brand, minValue, maxValue, inStock, onSale]);

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
