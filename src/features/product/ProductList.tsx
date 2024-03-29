import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "./productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "./product";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import banner from "../../../assets/home/banner-box2.png";
import { ImageFour, ImageOne, ImageThree } from "@/components/Common/ImageList";

interface ComponentProps {}

export const ProductList: FC<ComponentProps> = ({ passgrid }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  const [isGrid, setIsGrid] = useState<String>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const getItem = localStorage.getItem("gridType");
    if (!getItem) {
      setIsGrid("layoutGrid");
    } else {
      setIsGrid(getItem);
    }
  }, [passgrid]);

  const displayedProducts = products.slice(0, 8);
  return (
    <div>
      <div className="mx-auto ">
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {displayedProducts.map((product: any, index) => {
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
    </div>
  );
};
