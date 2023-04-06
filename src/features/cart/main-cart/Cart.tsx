import Image from "next/image";
import { FC, useEffect, useState } from "react";
import item1 from "../../../assets/item/item1.jpg";
import { GrFormClose } from "react-icons/gr";
import { IoCloseSharp, IoClose } from "react-icons/io5";
import Link from "next/link";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";

interface CartType {
  image: string;
  title: string;
  subtotal: number;
}

const Cart: FC<CartType> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedValue, setSelectedValue] = useState("Ship");
  // let total = 0;

  useEffect(() => {
    console.log(cartItems);
  });

  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let subtotal = item.quantity * item.price;
    totalAmount += subtotal;
  }

  const [total, setTotal] = useState(totalAmount + 5);

  function handleClickRadioAdd5() {
    setTotal(total + 5);
  }

  function handleClickRadioSubtract5() {
    setTotal(total - 5);
  }

  return (
    <div className="px-3.5 container mx-auto mt-4 mb-20">
      <div>
        <section className="flex justify-between h-full">
          <div className="w-full h-full pb-10">
            <div className="border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4">
              <p className="text-sm">
                Add <span className="text-[#ed174a] font-semibold">$15.93</span>{" "}
                to cart and get free shipping!
              </p>
              <hr className="h-2 rounded-md bg-[#ed174a]" />
            </div>

            <div className="mt-8">
              {/* header */}
              <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 border-b border-[#e4e5ee] pb-3">
                <div className="text-xs sm:col-span-2"></div>
                <div className="col-span-2 sm:col-span-4 text-xs text-[#71778e] font-semibold">
                  Product
                </div>
                <div className="text-xs text-[#71778e] font-semibold hidden sm:block">
                  Price
                </div>
                <div className="text-xs text-[#71778e] font-semibold sm:col-span-2">
                  Quantity
                </div>
                <div className="text-xs text-[#71778e] font-semibold hidden sm:block">
                  Subtotal
                </div>
                <div></div>
              </div>

              {/* products */}
              <div>
                {cartItems.map((item, index) => (
                  <CartCard item={item} index={index} />
                ))}
              </div>
            </div>

            <section className="flex justify-between mt-6">
              <div className="inline-flex gap-2 w-full">
                <input
                  type="text"
                  className="h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72"
                  placeholder="Coupon code"
                />
                <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40">
                  Apply coupon
                </button>
              </div>

              <div>
                <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] hidden md:block">
                  Remove All
                </button>
              </div>
            </section>
          </div>
          <div>
            {/* sidebar cart totals */}
            <div className="w-80 border border-[#e4e5ee] p-4 rounded-md h-full hidden xl:block ml-8">
              <h2 className="font-semibold mb-3">CART TOTALS</h2>
              <hr />
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">
                      Subtotal
                    </td>
                    <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">
                      ${totalAmount}
                    </td>
                  </tr>
                  <tr>
                    <td
                      rowSpan={4}
                      className="text-[13px] font-semibold border-b border-[#e4e5ee]"
                    >
                      Shipping
                    </td>
                    <td className="text-right text-[13px] py-3">
                      Flat rate:{" "}
                      <span className="inline-flex text-[#d51243] text-sm gap-2">
                        $5.00
                        <input
                          type="radio"
                          name="cart"
                          // onClick={handleClickRadioAdd5}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-[13px] pb-3 text-right">
                      <label className="inline-flex -gap-1">
                        <span className="mr-2">Local pickup</span>
                        <input
                          type="radio"
                          name="cart"
                          // onClick={handleClickRadioSubtract5}
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right text-[12.5px] pb-4">
                      Shipping to <span className="font-semibold">AL.</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4">
                      Change address
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#e4e5ee] text-[13px] font-semibold pb-4">
                      Total
                    </td>
                    <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4">
                      ${total}
                    </td>
                  </tr>
                </tbody>
              </table>

              <Link href="/checkout">
                {" "}
                <button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </section>

        <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-full text-left mt-2 md:hidden">
          Remove All
        </button>

        {/* Cart Totals */}
        <div className="w-full border border-[#e4e5ee] mt-10 p-4 rounded-md xl:hidden">
          <h2 className="font-semibold mb-3">CART TOTALS</h2>
          <hr />
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">
                  Subtotal
                </td>
                <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">
                  ${totalAmount}
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={4}
                  className="text-[13px] font-semibold border-b border-[#e4e5ee]"
                >
                  Shipping
                </td>
                <td className="text-right text-[13px] py-3">
                  Flat rate:{" "}
                  <span className="inline-flex text-[#d51243] text-sm gap-2">
                    $5.00
                    <input
                      type="radio"
                      name="vendor"
                      // onChange={handleRadioChange}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-[13px] pb-3 text-right">
                  <label className="inline-flex -gap-1">
                    <span className="mr-2">Local pickup</span>
                    <input
                      type="radio"
                      name="vendor"
                      // onChange={handleRadioChange}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td className="text-right text-[12.5px] pb-4">
                  Shipping to <span className="font-semibold">AL.</span>
                </td>
              </tr>
              <tr>
                <td className="text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4">
                  Change address
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#e4e5ee] text-[13px] font-semibold pb-4">
                  Total
                </td>
                <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4">
                  ${total}
                </td>
              </tr>
            </tbody>
          </table>

          <Link href="/checkout">
            <button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;