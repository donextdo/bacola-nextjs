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

const NewArrivalProducts = ({ passgrid }: any) => {

    const [isGrid, setIsGrid] = useState<String>();
  const [newArrivalProducts,setNewArrivalProducts] = useState([])
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
        fetchData()
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/products/getAllNewArrivalProducts`);
            console.log(res.data)
            setNewArrivalProducts(res.data)      
        } catch (err) {
            console.log(err);
        }
    }
    const bestProducts = products.filter(product => product.isNewArrival === true);
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
}
 
export default NewArrivalProducts;