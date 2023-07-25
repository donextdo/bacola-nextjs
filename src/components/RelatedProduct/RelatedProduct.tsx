import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useEffect, useState } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import { Product } from "@/features/product/product";

const RelatedProduct = ({ passgrid, findcategory }: any) => {
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);
  const [favoriteProductIds, setFavoriteProductIds] = useState<string[]>([]);

  let id: any;
  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(
        `${baseUrl}/products?categoryId=${findcategory}`
      );

      setRelatedProduct(res.data.products);
    } catch (err) {
      return err;
    }
  }

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
    <div className="container mx-auto">
      <div className="text-[20px] font-semibold font-ff-headings">
        RELATED PRODUCTS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5">
        {relatedProduct.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              isGrid={passgrid}
              isFavourite={favoriteProductIds.includes(product._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
