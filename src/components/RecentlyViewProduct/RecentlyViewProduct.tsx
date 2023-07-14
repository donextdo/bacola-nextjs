import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../../utils/baseUrl";
import { ProductCard } from "@/features/product/ProductCard";
import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";

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
            const response = await axios.get(`${baseUrl}/products/getOne/${productId}`);
            return response.data; // Assuming the API response contains the product data
          } catch (error) {
            return null;
          }
        }
      );

      try {
        const fetchedProducts = await Promise.all(productPromises);
        setProduct(fetchedProducts.filter((product) => product !== null));
      } catch (error) {
        return null;
      }
    };

    fetchRecentlyViewedProducts();
  }, []);
  useEffect(() => {
    const matchedProducts = productsRidux.filter((pr: Product) =>
      product.some((p: any) => p?._id === pr?._id)
    );
    setmatchWithProduct(matchedProducts);
  }, [product, productsRidux]);
  return (
    <div className="container mx-auto">
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
    </div>
  );
};
