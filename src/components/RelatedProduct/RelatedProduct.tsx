import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useEffect, useState } from "react";
import { ProductCard } from "@/features/product/ProductCard";
import { Product } from "@/features/product/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProducts } from "@/features/product/productSlice";

const RelatedProduct = ({ passgrid, findcategory }: any) => {
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);
  const [matchWithProduct, setmatchWithProduct] = useState<Product[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const productsRidux = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    const matchedProducts = productsRidux.filter((pr: Product) =>
      relatedProduct.some((p: any) => p?._id === pr?._id)
    );
    const displayedProducts = matchedProducts.slice(0, 4);
    setmatchWithProduct(displayedProducts);
  }, [relatedProduct, productsRidux]);

  return (
    <div className="container mx-auto">
      <div className="text-[20px] font-semibold font-ff-headings">
        RELATED PRODUCTS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5">
        {matchWithProduct.map((product) => {
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
  );
};

export default RelatedProduct;
