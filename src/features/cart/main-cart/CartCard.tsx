import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import item1 from "../../../assets/item/item1.jpg";
import { GrFormClose } from "react-icons/gr";
import { IoCloseSharp, IoClose } from "react-icons/io5";
import { RootState } from "../../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItemQuantity } from "../cartSlice";
import { updateProductQuantity } from "@/features/product/productSlice";
import { Product } from "@/features/product/product";


const CartCard = ({item, index}:any) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items);


    const handleCheckboxChange = () => {

    }
    const handleIncrement = (item: Product) => {
        const newQuantity = (item.quantity || 0) + 1;
    dispatch(updateItemQuantity({ itemId: item.id, quantity: newQuantity }));
    dispatch(updateProductQuantity({ productId: item.id, quantity: newQuantity }))
    };

    const handleDecrement = (item: Product) => {
        const newQuantity = Math.max((item.quantity || 0) - 1, 0);
    dispatch(updateItemQuantity({ itemId: item.id, quantity: newQuantity }));
    dispatch(updateProductQuantity({ productId: item.id, quantity: newQuantity }))
    };
    useEffect(() => {
        console.log(cartItems)
        
    });
    
    const handleDelete = (id: number) => {
        dispatch(removeItem(id));

        
    }

 let subtotal = (item.quantity) * (item.price)


    return ( 
        <div className="grid grid-cols-4 sm:grid-cols-12 grid-2 gap-1 border-b border-[#e4e5ee] py-3 h-28 items-center relative" key={index}>
                                    <div className="h-[95px] sm:col-span-2">
                                        <Image
                                            src={item.image}
                                            alt="item1"
                                            style={{
                                                objectFit: "contain",
                                                backgroundColor: "white",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                            width={450}
                                            height={400}
                                        />

                                    </div>
                                    <div className="col-span-2 sm:col-span-4 text-sm  ">
                                        {item.title}
                                    </div>
                                    <div className="col-span-1 hidden sm:block">{item.price}</div>
                                    <div className="flex sm:col-span-2">
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={()=>handleDecrement(item)}>
                                            <FaMinus className="text-xs" />
                                        </button>
                                        <p className="text-sm flex items-center justify-center w-7">{item.quantity 
                                        || 0}</p>
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={()=>handleIncrement(item)}>
                                            <FaPlus className="text-xs " />
                                        </button>
                                    </div>
                                    <div className="col-span-2 hidden sm:block">{subtotal}</div>
                                    <div className="col-span-1 hidden sm:block">
                                        <button className="bg-white rounded-full p-1" onClick={()=>handleDelete(item.id)}><IoCloseSharp className="text-xl font-semibold text-black" /></button>
                                    </div>
                                    <button className="absolute bg-[#ed174a] rounded-full p-1 text-white sm:hidden"><IoClose className="text-white" /></button>
                                </div>
     );
}
 
export default CartCard;