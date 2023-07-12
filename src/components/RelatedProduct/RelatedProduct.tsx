import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useEffect, useState } from "react";
import { ProductCard } from "@/features/product/ProductCard";

const RelatedProduct = ({passgrid,findcategory}:any) => {
    const [relatedProduct,setRelatedProduct] = useState([])

    useEffect(() => {

        fetchData()
    
      }, []);
    
      async function fetchData() {
       
        try {
          const res = await axios.get(`${baseUrl}/products?categoryId=${findcategory}`);
         
          setRelatedProduct(res.data.products)
        } catch (err) {
          return null;
        }
      }
  const displayedProducts = relatedProduct.slice(0, 4);

    return ( 
        <div className="container mx-auto">
            <div className="text-[20px] font-semibold font-ff-headings">
            RELATED PRODUCTS
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5">
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
     );
}
 
export default RelatedProduct;