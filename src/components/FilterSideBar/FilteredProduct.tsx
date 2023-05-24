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
  brand,
  subcategory,
  minValue,
  maxValue,
  inStock,
  onSale,
  perpage,
  page,
  orderby,
}: any) => {
  const [product, setProduct] = useState([]);

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
              return <ProductCard key={product.id} product={product} productPopup={undefined} setProductPopup={undefined} />;
            })}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
