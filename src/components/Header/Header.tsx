import { useState } from "react";
import CartPopup from "../Popup/CartPopup";

const Header = () => {
const [cart,setCart] =  useState(false);

const handleClick = () => {
    setCart(!cart)
}
    return ( 
        <div className="container mx-auto text-right mb-10">
            <div className="relative">
            <button className="border rounded-full p-2" onClick={handleClick}>C</button>
            {
                cart && <CartPopup setCart={setCart}/>
            }
            </div>
        </div>
     );
}
 
export default Header;