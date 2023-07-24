import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../../utils/baseUrl";
import { ProductCard } from "@/features/product/ProductCard";
import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import Swal from "sweetalert2";

export const RecentlyViewProduct = ({ passgrid }: any) => {
  const [product, setProduct] = useState<any[]>([]);
  const [matchWithProduct, setmatchWithProduct] = useState<Product[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const productsRidux = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchRecentlyViewedProducts();
  }, []);

  const fetchRecentlyViewedProducts = async () => {
    let recentlyAddedProductsString = localStorage.getItem(
      "recentlyAddedProducts"
    );
    let recentlyAddedProducts: any[] = [];

    if (recentlyAddedProductsString) {
      recentlyAddedProducts = JSON.parse(recentlyAddedProductsString);
    }
    const productPromises = recentlyAddedProducts.map(
      async (productId: any) => {
        try {
          const response = await axios.get(
            `${baseUrl}/products/getOne/${productId}`
          );
          return response.data; // Assuming the API response contains the product data
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
    );

    try {
      const fetchedProducts = await Promise.all(productPromises);
      setProduct(fetchedProducts.filter((product) => product !== null));
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

  useEffect(() => {
    const matchedProducts = productsRidux.filter((pr: Product) =>
      product.some((p: any) => p?._id === pr?._id)
    );
    setmatchWithProduct(matchedProducts);
  }, [product, productsRidux]);
  return (
    <div className="container mx-auto">
      {matchWithProduct.length > 0 && (
        <>
          <div className="text-[20px] font-semibold font-ff-headings">
            RECENTLY VIEWED PRODUCTS
          </div>
          <div className=" mt-5">
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
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
        </>
      )}
    </div>
  );
};
