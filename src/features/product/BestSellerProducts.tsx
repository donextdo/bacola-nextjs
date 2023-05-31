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

const BestSellerProducts = ({ passgrid }: any) => {
    const [isGrid, setIsGrid] = useState<String>();
    const [bestSellerProducts, setBestSellerProducts] = useState([])

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
            const res = await axios.get(`${baseUrl}/products/getAllBestSellerProducts`);
            console.log(res.data)
            setBestSellerProducts(res.data)      
        } catch (err) {
            console.log(err);
        }
    }

    const displayedProducts = bestSellerProducts.slice(0, 8);

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

export default BestSellerProducts;