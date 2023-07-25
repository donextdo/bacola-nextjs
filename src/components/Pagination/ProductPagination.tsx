import React, { useState, useEffect, FC } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import { logOut } from "../../../utils/logout";
import Swal from "sweetalert2";

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
  const [product, setProduct] = useState<Product[]>([]);
  const [isGrid, setIsGrid] = useState<String>();
  const [favoriteProductIds, setFavoriteProductIds] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  let id: any;
  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }
  const productsRidux = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const router = useRouter();

  useEffect(() => {
    if (!perpage) {
      const fetchData = async () => {
        let url = `${baseUrl}/products?sort=${orderby}&page=${page}`;

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
        let token: any;
        if (typeof localStorage !== "undefined") {
          token = localStorage.getItem("token");
        }

        try {
          const response = await axios.get(url);

          const products = response.data.products;

          if (products.length === 0) {
          }

          setProduct(products);
        } catch (error: any) {
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
      };

      fetchData();
    } else if (perpage || orderby) {
      const fetchData = async () => {
        let url = `${baseUrl}/products?sort=${orderby}&page=${page}&perpage=${perpage}`;

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
        let token: any;
        if (typeof localStorage !== "undefined") {
          token = localStorage.getItem("token");
        }
        try {
          const response = await axios.get(url);
          const products = response.data.products;

          if (products.length === 0) {
          }

          setProduct(products);
        } catch (error: any) {
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
      };

      fetchData();
    }
  }, [page, perpage, orderby, brand, minValue, maxValue, inStock, onSale]);

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
      {product.length != 0 ? (
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
            {product.map((product: any, index) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavourite={favoriteProductIds.includes(product._id)}
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
