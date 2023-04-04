import { useState } from "react";
import CartPopup from "../../features/cart/popup-cart/CartPopup";
import { SearchItem } from "../Search/Search";
import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";

const Header = () => {
const [cart,setCart] =  useState(false);

const handleClick = () => {
    setCart(!cart)
}
    return ( 
        <div className="container mx-auto flex items-center justify-between px-20 mt-4">
            <div className="text-4xl font-bold text-[#223994]"><Link href="/">bacola</Link></div>
            <div className="search-bar"><SearchItem /></div>
            <div className="flex gap-4">
            <div><Link href="/account"><button className="border rounded-full p-2"><AiOutlineUser className="text-2xl"/></button></Link></div>
            <div className="relative">
            <button className="border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2" onClick={handleClick} ><SlHandbag className="text-2xl text-[#ea2b0f]"/></button>
            {
                cart && <CartPopup setCart={setCart}/>
            }
            </div>
            </div>
        </div>
     );
}
 
export default Header;