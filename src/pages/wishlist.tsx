import { addItem } from "@/features/cart/cartSlice";
import { updateProductQuantity } from "@/features/product/productSlice";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import baseUrl from "../../utils/baseUrl";
import { Product } from "@/features/product/product";

interface WIshlist {
    selected: boolean;
    address: string;
    date: string;
    price: number;
    title:string;
    productId: string;
    front:string;
    checked: boolean;
    quantity: number;
    count:number;

    // any other properties
  }
const Wishlist = () => {
    const [data, setData] = useState<Array<WIshlist>>([]);
   
    let id: any;
    if (typeof localStorage !== 'undefined') {
      id = localStorage.getItem("id");
    }

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/users/${id}`);
            console.log(res.data.whishList)
            setData(res.data.whishList)        
        } catch (err) {
            console.log(err);
        }
    }
    
    const [checkAll, setCheckAll] = useState(false);

    const handleCheckAll = () => {
        const newData = [...data];
        newData.forEach(item => {
            item.checked = !checkAll;
        });
        setData(newData);
        setCheckAll(!checkAll);
    };

    const handleCheck = (id:any) => {
        const newData = [...data];
        newData.forEach(item => {
            if (item.productId === id) {
                item.checked = !item.checked;
            }
        });
        setData(newData);
    };

    const handleDelete = async (_id: any) => {
        
        try {
            const res = await axios.delete(`${baseUrl}/users/${id}/wishList/${_id}`);
            console.log(res.data)
            const newItems = data.filter((item) => item.productId !== _id);
        setData(newItems)
        } catch (err) {
            console.log(err);
        }
    };
    const dispatch = useDispatch();

    const handleCart = async (item: any) => {
        console.log(item)
        try {
            const res = await axios.get(`${baseUrl}/products/getOne/${item.productId}`);
            console.log(res.data)
            const itemProduct = res.data
            dispatch(addItem(itemProduct))
                  
        } catch (err) {
            console.log(err);
        }

    }

    const handleAddSelectedToCart = () => {
        const selectedItems = data.filter(item => item.checked);
        selectedItems.forEach(async (item:any) => {
            try {
                const res = await axios.get(`${baseUrl}/products/getOne/${item.productId}`);
                console.log(res.data)
                const itemProduct = res.data
                dispatch(addItem(itemProduct))
                      
            } catch (err) {
                console.log(err);
            }
            
        });
    }

    

    const handleAddCart = () => {
        const selectedItems = data.filter(item => item.checked);
        selectedItems.forEach(async (item:any) => {
            try {
                const res = await axios.get(`${baseUrl}/products/getOne/${item.productId}`);
                console.log(res.data)
                const itemProduct = res.data
                dispatch(addItem(itemProduct))
                      
            } catch (err) {
                console.log(err);
            }
        });
    }

    return (
        <div className="container mx-auto xl:px-40 px-5 mb-40">
            <h1 className="text-[32px] mt-14 mb-6">Default wishlist</h1>
            <table className="table-auto w-full border-collapse border border-gray-400 ">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={checkAll}
                                onChange={handleCheckAll}
                            />
                        </th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Product Name</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Unit Price</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Date Added</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Stock Status</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.productId}>
                            <td className="border px-4 py-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                    checked={item.checked}
                                    onChange={() => handleCheck(item.productId)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button className="" onClick={() => handleDelete(item.productId)}><IoClose /></button>
                            </td>
                            <td className="border px-4 py-2">
                                <div className="w-[71px] h-[71px]">
                                    <img
                                        src={item.front}
                                        alt="Header Image"
                                        className="w-full "
                                        width={1200}
                                        height={800}
                                    />
                                </div>
                            </td>
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">{item.date}</td>
                            <td className="border px-4 py-2">{item.quantity>0 ? "In Stock": "Out of Stock"}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className=" bg-blue-900 text-white text-xs rounded-md px-5 py-3 " onClick={() => handleCart(item)}
                                >
                                    Add to cart
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <section className="flex justify-between p-3.5 border ">
                <div className="inline-flex gap-2 w-full">
                    {/* <input type="text" className="h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72" placeholder="Action" />
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40">Apply Action</button> */}
                </div>

                <div className="flex gap-2">
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 " onClick={handleAddSelectedToCart}>Add Selected to Cart</button>
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 " onClick={handleAddCart}>Add All to Cart</button>
                </div>
            </section>
        </div>
    );
}

export default Wishlist;