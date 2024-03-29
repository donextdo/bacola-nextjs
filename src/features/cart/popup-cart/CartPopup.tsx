import Image from "next/image";
import product from "../../../assets/product/product.jpg";
import { IoClose } from "react-icons/io5";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CartPopupCard from "@/features/cart/popup-cart/CartPopupCard";
import { calSubTotal } from "../cartSlice";
import cart from "../../../../assets/cart/Untitled.jpg";
import { useEffect, useState } from "react";
import { Product } from "@/features/product/product";

const CartPopup = ({ setCart }: any) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    const cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItems(cartItemsArray);
  }, []);

  let totalAmount1 = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();

  let totalSubtotal = 0;

  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let subtotal =
      item.count * (item.price - item.price * (item.discount / 100));
    totalAmount += subtotal;
  }

  useEffect(() => {
    totalAmount1 = totalAmount;
    dispatch(calSubTotal(12));
  }, []);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="absolute w-[300px] max-h-[540px] bg-white right-0 z-50 px-5 py-4 shadow-lg">
          <div className="max-h-[260px] overflow-y-auto overflow-x-hidden">
            {cartItems.map((item: any, index: number) => (
              <CartPopupCard
                item={item}
                key={index}
                setCartItems={setCartItems}
              />
            ))}
          </div>
          <div className="flex justify-between mt-6 mb-4">
            <p className="text-[#c2c2d3] font-semibold text-[13px]">
              Subtotal:
            </p>
            <p className="text-lg text-[#d51243]">
              Rs {totalAmount.toFixed(2)}
            </p>
          </div>

          <Link href="/cart">
            {" "}
            <button className="bg-white border py-1.5 rounded-md text-sm h-[50px] w-full text-center">
              View cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="bg-[#ed174a] text-white py-1.5 rounded-md text-sm h-[50px] w-full text-center mt-1">
              Checkout
            </button>
          </Link>
          <hr className="mt-3" />
        </div>
      ) : (
        <div className="absolute w-[300px] max-h-[540px] min-h-[220px] bg-white right-0 z-50 px-5 py-4 shadow-lg">
          <div className="h-[160px] sm:col-span-2">
            <Image
              src={cart}
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
        </div>
      )}
    </>
  );
};

export default CartPopup;
