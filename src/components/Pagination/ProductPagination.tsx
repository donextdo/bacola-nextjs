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
  const [product, setProduct] = useState([]);
  const [isGrid, setIsGrid] = useState<String>();
  const [matchWithProduct, setmatchWithProduct] = useState<Product[]>([]);
  const dispatch = useDispatch<AppDispatch>();
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
        try {
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
          const token = localStorage.getItem("token");

          const response = await axios.get(url, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          const products = response.data.products;

          if (products.length === 0) {
          }

          setProduct(products);
        } catch (error: any) {
          if (
            error?.response?.status == 403 ||
            error?.response?.status == 401
          ) {
            Swal.fire({
              width: 700,
              color: "black",
              background: "white",
              html: `
                <div style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                  <hr style="margin-bottom: 20px;" />
                  <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                  <hr style="margin-bottom: 20px;" />
                </div>
              `,
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: "blue",
              heightAuto: true,
              customClass: {
                confirmButton:
                  "bg-blue-500 text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
              },
            }).then((result) => {
              if (result.value) {
                logOut();
                router.push("/account");
              }
            });
          }
        }
      };

      fetchData();
    } else if (perpage || orderby) {
      const fetchData = async () => {
        try {
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
          const token = localStorage.getItem("token");
          const response = await axios.get(url, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          const products = response.data.products;

          if (products.length === 0) {
          }

          setProduct(products);
        } catch (error: any) {
          if (
            error?.response?.status == 403 ||
            error?.response?.status == 401
          ) {
            Swal.fire({
              width: 700,
              color: "black",
              background: "white",
              html: `
                <div style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                  <hr style="margin-bottom: 20px;" />
                  <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                  <hr style="margin-bottom: 20px;" />
                </div>
              `,
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: "blue",
              heightAuto: true,
              customClass: {
                confirmButton:
                  "bg-blue-500 text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
              },
            }).then((result) => {
              if (result.value) {
                logOut();
                router.push("/account");
              }
            });
          }
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
    const matchedProducts = productsRidux.filter((pr: Product) =>
      product.map((p: any) => p?._id).includes(pr?._id)
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
