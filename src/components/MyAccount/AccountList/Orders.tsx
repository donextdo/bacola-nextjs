import Image from "next/image";
import Link from "next/link";
import pic from "../../../../assets/item/item2.jpg"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getOrdersByUserIdAsync } from "@/components/Checkout/orderSlice";

const Orders = () => {
    const [data, setData] = useState([])
    const orderList = useSelector((state: RootState) => state.order.orders);

    let id: string | null;
    if (localStorage.getItem('id') !== null) {
        id = localStorage.getItem('email');
    } else { }
    const dispatch = useDispatch

    // useEffect(() => {
    //     const orderString = localStorage.getItem('order');
    //     const order = orderString ? JSON.parse(orderString) : [];
    //     console.log(order)
    //     setData(order);
    //     dispatch(getOrdersByUserIdAsync(id));

    // }, []);
    return (
        // <div className="border border-gray-200 p-4 ">
        //     <p className="leading-loose"><Link href="#" className="bg-[#233a95] text-white p-2 rounded-md">Browse Products</Link> No Order has been made yet.</p>
        // </div>
        <div className="">
            {orderList.map((order) => (
                <div className="mb-8">
                    <div className="border border-gray-200 p-5 grid grid-cols-5">
                        <div>
                            <h1 className="text-sm font-semibold">Order</h1>
                            <p className="text-[13px] text-[#2bbef9]">{order.id}</p>
                        </div>
                        <div>
                            <h1 className="text-sm font-semibold">Date</h1>
                            <p className="text-[13px]">{order.date}</p>
                        </div>
                        <div>
                            <h1 className="text-sm font-semibold">Status</h1>
                            <p className="text-[13px]">{order.status}</p>
                        </div>
                        <div>
                            <h1 className="text-sm font-semibold">Total</h1>
                            <p className="text-[13px]">${order.totalprice}</p>
                        </div>
                        <div className="text-right">
                            <button className="bg-[#233a95] text-white p-2 rounded-md w-[74px]">view</button>
                        </div>
                    </div>
                    {order.items.map((item) => (
                        <div className="border border-gray-200 p-5 space-y-3" >
                            <div className="flex justify-between border border-gray-200 items-center px-5 py-[15px]">
                                <p className="text-sm">{item.productId} <span className="text-sm font-semibold">x {item.orderquantity}</span> </p>
                                <div className="h-[60px] w-[60px] ">
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
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};

export default Orders;
