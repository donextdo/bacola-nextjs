import { Product } from "@/features/product/product";
import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";

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
  const [products, setProducts] = useState<Product[]>([]);
  const [isGrid, setIsGrid] = useState<String>();
  const [favoriteProductIds, setFavoriteProductIds] = useState<string[]>([]);

  let id: any;
  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }
  useEffect(() => {
    const fetchData = async () => {
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
      try {
        const response = await axios.get(url);
        const products = response.data.products;

        setProducts(products);
      } catch (error: any) {
        if (error?.response?.status == 500) {
          Swal.fire({
            width: 500,
            color: "black",
            background: "white",
            imageUrl:
              "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: "Custom image",
            html: `
              <div style="text-align: center;">
                <p style="font-size: 14px;">${error.response.data.message}</p>
              </div>
            `,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            heightAuto: true,
          });
        }
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
      setIsGrid("layoutGrid");
    } else {
      setIsGrid(getItem);
    }
  }, [passgrid]);

  useEffect(() => {
    fetchFavouriteProducts();
  }, []);

  const fetchFavouriteProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/getProduct/${id}`);
      if (response) {
        const favouriteProductIds = response.data.productIds;
        setFavoriteProductIds(favouriteProductIds);
      }
    } catch (error: any) {}
  };

  return (
    <div>
      {products?.length > 0 ? (
        <div className="mx-auto ">
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
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                isFavourite={favoriteProductIds.includes(product._id)}
                isGrid={passgrid}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
