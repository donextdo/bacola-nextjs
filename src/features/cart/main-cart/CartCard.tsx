import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import item1 from "../../../assets/item/item1.jpg";
import { GrFormClose } from "react-icons/gr";
import { IoCloseSharp, IoClose } from "react-icons/io5";
import { RootState } from "../../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { calSubTotal, removeItem, updateItemQuantity } from "../cartSlice";
import { updateProductQuantity } from "@/features/product/productSlice";
import { Product } from "@/features/product/product";
// import { Tooltip } from 'react-tooltip';
// import Tooltip from '@mui/material/Tooltip';




const CartCard = ({item, index,totalAmount}:any) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items);
  let totalAmount1 = useSelector((state: RootState) => state.cart.totalAmount);



    const handleCheckboxChange = () => {

    }
    const handleIncrement = (item: Product) => {
        const newQuantity = (item.count || 0) + 1;
    dispatch(updateItemQuantity({ itemId: item._id, count: newQuantity }));
    dispatch(updateProductQuantity({ productId: item._id, count: newQuantity }))
    dispatch(calSubTotal(totalAmount))
    };

    const handleDecrement = (item: Product) => {
        const newQuantity = Math.max((item.count || 0) - 1, 0);
    dispatch(updateItemQuantity({ itemId: item._id, count: newQuantity }));
    dispatch(updateProductQuantity({ productId: item._id, count: newQuantity }))
    dispatch(calSubTotal(totalAmount))

    };
    useEffect(() => {
        console.log(cartItems)
        
    });
    
    const handleDelete = (_id: string) => {
        dispatch(removeItem(_id));
        dispatch(calSubTotal(totalAmount))

        
    }

 

 let discountprice;
 discountprice = item.price * (item.discount/100)
let newprice=item.price-discountprice

let subtotal = (item.count) * (newprice)

const MAX_LENGTH = 20; // Maximum number of characters to display

//   let displayName = item.title;
//   if (item.title.length > MAX_LENGTH) {
//     displayName = item.title.substring(0, MAX_LENGTH) + '...';
//   }

  const MAX_TITLE_LENGTH = 20; // Set your desired character limit
  const [expanded, setExpanded] = useState(false);

  const titleToDisplay = expanded ? item.title : item.title.substring(0, MAX_TITLE_LENGTH) + "...";
    return ( 
        <div className="grid grid-cols-4 sm:grid-cols-12 grid-2 gap-1 border-b border-[#e4e5ee] py-3 h-28 items-center relative" key={index}>
                                    <div className="h-[95px] sm:col-span-2">
                                        <Image
                                            src={item.front}
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
                                    
                                   
                                  
                                    {/* <Tooltip title={item.title} followCursor> */}
                                    <div className="col-span-2 sm:col-span-4 text-sm " onClick={() => setExpanded(!expanded)}>
                                        {titleToDisplay}
                                        
                                    </div>
                                    {/* </Tooltip> */}
                                   
                                    <div className="col-span-1 hidden sm:block">{newprice.toFixed(2)}</div>
                                    <div className="flex sm:col-span-2">
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={()=>handleDecrement(item)}>
                                            <FaMinus className="text-xs" />
                                        </button>
                                        <p className="text-sm flex items-center justify-center w-7">{item.count 
                                        || 0}</p>
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={()=>handleIncrement(item)}>
                                            <FaPlus className="text-xs " />
                                        </button>
                                    </div>
                                    <div className="col-span-2 hidden sm:block">{subtotal.toFixed(2)}</div>
                                    <div className="col-span-1 hidden sm:block">
                                        <button className="bg-white rounded-full p-1" onClick={()=>handleDelete(item._id)}><IoCloseSharp className="text-xl font-semibold text-black" /></button>
                                    </div>
                                    <button className="absolute bg-[#ed174a] rounded-full p-1 text-white sm:hidden"><IoClose className="text-white" /></button>
                                </div>
     );
}
 
export default CartCard;