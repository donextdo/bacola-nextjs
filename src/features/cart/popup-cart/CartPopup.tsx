import Image from "next/image";
import product from '../../../assets/product/product.jpg'
import { IoClose } from "react-icons/io5"; import { RootState } from "../../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CartPopupCard from "@/features/cart/popup-cart/CartPopupCard";

const CartPopup = ({ setCart }: any) => {
    const  cartItems  = useSelector((state: RootState) => state.cart.items);

    let totalSubtotal = 0
    // cartItems.forEach(price  =>{
    //     totalSubtotal += price.subtotal
    // }
    // )
    console.log(totalSubtotal)

    return (
        <div className="absolute w-[300px] max-h-[540px] bg-white right-0 z-50 px-5 py-4 shadow-lg">
            <div className="max-h-[260px] overflow-y-auto overflow-x-hidden">
            {cartItems.map(item => (
                <CartPopupCard  item={item} /> 
            ))}
            </div>
            <div className="flex justify-between mt-6 mb-4">
                <p className="text-[#c2c2d3] font-semibold text-[13px]">Subtotal:</p>
                <p className="text-lg text-[#d51243]">${totalSubtotal}</p>
            </div>

            <Link href="/cart">  <button className="bg-white border py-1.5 rounded-md text-sm h-[50px] w-full text-center">View cart</button></Link>
            <Link href="/checkout"><button className="bg-[#ed174a] text-white py-1.5 rounded-md text-sm h-[50px] w-full text-center mt-1">Checkout</button></Link>
            <hr className="mt-3" />
            <p className="text-xs text-center text-[#3e445a] mt-4">We reduce shipping prices to only 2.49 €!</p>

        </div>
    );
}

export default CartPopup;