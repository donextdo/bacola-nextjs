import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { ProductCard } from "./ProductCard";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "./product";
import Swal from "sweetalert2";

const NewArrivalProducts = ({ passgrid }: any) => {
  const [isGrid, setIsGrid] = useState<String>();
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];

  useEffect(() => {
    const getItem = localStorage.getItem("gridType");
    if (!getItem) {
      setIsGrid("layoutGrid");
    } else {
      setIsGrid(getItem);
    }
  }, [passgrid]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(
        `${baseUrl}/products/getAllNewArrivalProducts`
      );

      setNewArrivalProducts(res.data);
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
  }
  const bestProducts = products.filter(
    (product) => product.isNewArrival === true
  );
  const displayedProducts = bestProducts.slice(0, 8);
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

export default NewArrivalProducts;
