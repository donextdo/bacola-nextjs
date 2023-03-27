import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import item1 from "../../../assets/item/item1.jpg";
import { GrFormClose } from "react-icons/gr";
import { IoCloseSharp, IoClose } from "react-icons/io5";
import Link from "next/link";
import { RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/redux/counter";
import { RiH1 } from "react-icons/ri";
import { removeItem } from "@/redux/cartItems";


interface CartType {
  image: string,
  title: string,
  subtotal: number,
  }

const Cart: FC<CartType> = () => {
    // const [count, setCount] = useState(99);
    const { count } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch()

    const {cartItems} = useSelector((state: RootState) => state.cartItems);

    const handleCheckboxChange = () => {

    }
    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    useEffect(() => {
        console.log(cartItems)
    });
    
    const handleDelete = (index:any) => {
        dispatch(removeItem(index))
        
    }

    return (
        <div className="px-3.5 container mx-auto mt-4 mb-20">
            {cartItems.map((item, index) => (
               <div>
                    <section className="flex justify-between h-full">
                        <div className="w-full h-full pb-10">
                            <div className="border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4">
                                <p className="text-sm">
                                    Add <span className="text-[#ed174a] font-semibold">$15.93</span> to
                                    cart and get free shipping!
                                </p>
                                <hr className="h-2 rounded-md bg-[#ed174a]" />
                            </div>

                            <div className="mt-8">
                                {/* header */}
                                <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 border-b border-[#e4e5ee] pb-3">
                                    <div className="text-xs sm:col-span-2"></div>
                                    <div className=" col-span-2 sm:col-span-4 text-xs text-[#71778e] font-semibold">Product</div>
                                    <div className="text-xs text-[#71778e] font-semibold hidden sm:block">Price</div>
                                    <div className="text-xs text-[#71778e] font-semibold sm:col-span-2">Quantity</div>
                                    <div className="text-xs text-[#71778e] font-semibold hidden sm:block">Subtotal</div>
                                    <div></div>
                                </div>

                                {/* products */}
                                <div className="grid grid-cols-4 sm:grid-cols-12 grid-2 gap-1 border-b border-[#e4e5ee] py-3 h-28 items-center relative">
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
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={handleDecrement}>
                                            <FaMinus className="text-xs" />
                                        </button>
                                        <p className="text-sm flex items-center justify-center w-7">{count}</p>
                                        <button className="p-2.5 bg-[#edeef5] rounded-full w-[30px] flex items-center" onClick={handleIncrement}>
                                            <FaPlus className="text-xs " />
                                        </button>
                                    </div>
                                    <div className="col-span-2 hidden sm:block">{item.subtotal}</div>
                                    <div className="col-span-1 hidden sm:block">
                                        <button className="bg-white rounded-full p-1" onClick={()=>handleDelete(index)}><IoCloseSharp className="text-xl font-semibold text-black" /></button>
                                    </div>
                                    <button className="absolute bg-[#ed174a] rounded-full p-1 text-white sm:hidden"><IoClose className="text-white" /></button>
                                </div>
                            </div>

                            <section className="flex justify-between mt-6">
                                <div className="inline-flex gap-2 w-full">
                                    <input type="text" className="h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72" placeholder="Coupon code" />
                                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40">Apply coupon</button>
                                </div>

                                <div><button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] hidden md:block">Remove All</button></div>
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
                                            <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">Subtotal</td>
                                            <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">$30.78</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={4} className="text-[13px] font-semibold border-b border-[#e4e5ee]">Shipping</td>
                                            <td className="text-right text-[13px] py-3">Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">$5.00<input type="radio" name="vendor" value="Vendor 1" data-time="8.00" onChange={handleCheckboxChange} /></span></td>
                                        </tr>
                                        <tr>

                                            <td className="text-[13px] pb-3 text-right"><label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                                <input
                                                    type="radio"
                                                    name="vendor"
                                                    value="Vendor 1"
                                                    onChange={handleCheckboxChange}
                                                />
                                            </label></td>
                                        </tr>
                                        <tr>

                                            <td className="text-right text-[12.5px] pb-4">Shipping to <span className="font-semibold">AL.</span></td>
                                        </tr>
                                        <tr>

                                            <td className="text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4">Change address</td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-[#e4e5ee] text-[13px] font-semibold pb-4">Total</td>
                                            <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4">$35.78</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <Link href="/checkout">   <button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4">Proceed to checkout</button></Link>

                            </div>
                        </div>
                    </section>

                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-full text-left mt-2 md:hidden">Remove All</button>

                    {/* Cart Totals */}
                    <div className="w-full border border-[#e4e5ee] mt-10 p-4 rounded-md xl:hidden">
                        <h2 className="font-semibold mb-3">CART TOTALS</h2>
                        <hr />
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">Subtotal</td>
                                    <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">$30.78</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4} className="text-[13px] font-semibold border-b border-[#e4e5ee]">Shipping</td>
                                    <td className="text-right text-[13px] py-3">Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">$5.00<input type="radio" name="vendor" value="Vendor 1" data-time="8.00" onChange={handleCheckboxChange} /></span></td>
                                </tr>
                                <tr>

                                    <td className="text-[13px] pb-3 text-right"><label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                        <input
                                            type="radio"
                                            name="vendor"
                                            value="Vendor 1"
                                            onChange={handleCheckboxChange}
                                        />
                                    </label></td>
                                </tr>
                                <tr>

                                    <td className="text-right text-[12.5px] pb-4">Shipping to <span className="font-semibold">AL.</span></td>
                                </tr>
                                <tr>

                                    <td className="text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4">Change address</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#e4e5ee] text-[13px] font-semibold pb-4">Total</td>
                                    <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4">$35.78</td>
                                </tr>
                            </tbody>
                        </table>

                        <Link href="/checkout"><button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4">Proceed to checkout</button></Link>

                    </div>
                </div>
              
            ))}
        </div>
    );
};

export default Cart;
