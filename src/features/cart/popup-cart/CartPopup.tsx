import Image from "next/image";
import product from "../../../assets/product/product.jpg";
import { IoClose } from "react-icons/io5";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CartPopupCard from "@/features/cart/popup-cart/CartPopupCard";
import { calSubTotal, fetchCart } from "../cartSlice";
import cart from "../../../../assets/cart/Untitled.jpg"
import { useEffect } from "react";

const CartPopup = ({ setCart, }: any) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  let totalAmount1 = useSelector((state: RootState) => state.cart.totalAmount);


  console.log(cartItems)
  const dispatch = useDispatch();

  let totalSubtotal = 0;
  // cartItems.forEach(price  =>{
  //     totalSubtotal += price.subtotal
  // }
  // )
  console.log(totalSubtotal);

  let totalAmount = 0
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let subtotal = item.count * (item.price - item.price * (item.discount / 100));
    totalAmount += subtotal;
  }
  useEffect(() => {
    console.log(totalAmount)
    totalAmount1 = totalAmount
    dispatch(calSubTotal(totalAmount))
  });

  return (
    <>
      {cartItems.length > 0 ?
        <div className="absolute w-[300px] max-h-[540px] bg-white right-0 z-50 px-5 py-4 shadow-lg">
          <div className="max-h-[260px] overflow-y-auto overflow-x-hidden">
            {cartItems.map((item:any, index) => (
              <CartPopupCard item={item} key={index} />
            ))}
          </div>
          <div className="flex justify-between mt-6 mb-4">
            <p className="text-[#c2c2d3] font-semibold text-[13px]">Subtotal:</p>
            <p className="text-lg text-[#d51243]">Rs {totalAmount.toFixed(2)}</p>
          </div>

          <Link href="/cart">
            {" "}
            <button className="bg-white border py-1.5 rounded-md text-sm h-[50px] w-full text-center">
              View cart
            </button>
          </Link>
          <Link href="/checkout">
            <button
              className="bg-[#ed174a] text-white py-1.5 rounded-md text-sm h-[50px] w-full text-center mt-1"

            >
              Checkout
            </button>
          </Link>
          <hr className="mt-3" />
          {/* <p className="text-xs text-center text-[#3e445a] mt-4">
        We reduce shipping prices to only 2.49 €!
      </p> */}
        </div>
        :
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
      }
    </>
  );
};

export default CartPopup;
