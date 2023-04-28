import CheckoutSidebar from "@/components/Checkout/CheckoutSidebar";
import { addOrder, insertOrderAsync } from "@/components/Checkout/orderSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Country = {
    USA: 'United States',
    CAN: 'Canada',
    MEX: 'Mexico',
    BRA: 'Brazil',
    ARG: 'Argentina',
};


const Checkout = () => {
    const [orderItem, setOrderItem] = useState([])
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const orderList = useSelector((state: RootState) => state.order.orders);
  const dispatch = useDispatch();
  let id = localStorage.getItem("id");  

  let totalAmount = 0
    for (let i = 0; i < cartItems.length; i++) {
       let item = cartItems[i];
       let subtotal = item.count * item.price;
       totalAmount += subtotal;
     }

    //  const orderString = localStorage.getItem('order');
    // const order = orderString ? JSON.parse(orderString) : [];

    const [selectedRadio, setSelectedRadio] = useState('');
    const handleCheckboxChange = (e: any) => {
        setSelectedRadio(e.target.value)
    }

    const [selectedCountry, setSelectedCountry] = useState('USA');

    const handleCountryChange = (e:any) => {
        setSelectedCountry(e.target.value);
    };

    const handleOrder = () => {
        const newObj = {
            userId:id,
            totalprice: totalAmount,
            status: "processing",
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
            items: cartItems.map(item => ({
                productId: item._id,
                orderquantity: item.count
              }))
        };

        console.log(newObj)

        dispatch(insertOrderAsync(newObj));

        
    // dispatch(addOrder(newObj))

        // // Modify the array by pushing the new object
        // order.push(newObj);

        // // Store the modified array back in local storage
        // localStorage.setItem('order', JSON.stringify(order));
        // localStorage.setItem('order', JSON.stringify([])); 

    }

    return (
        <div className="container mx-auto px-[15px]  ">
            <h1 className="text-center text-xl font-bold">Checkout Page</h1>
            <div className="border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4 mt-2">
                <p className="text-[13px]">
                    Add <span className="text-[#ed174a] font-semibold">$15.93</span> to
                    cart and get free shipping!
                </p>
                <hr className="h-2 rounded-md bg-[#ed174a]" />
            </div>

            <section className=" my-5 flex justify-between">
                <div className="border border-[#e4e5ee] px-7 py-3.5 rounded-md lg:px-10 ">
                    <p className="border-b border-[#e4e5ee] py-3 font-semibold">BILLING DETAILS</p>

                    <div className="mt-3">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-4">
                            <div>
                                <label className="text-[13px] ">First Name *</label>
                                <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2" />
                            </div>
                            <div>
                                <label className="text-[13px] ">Last Name *</label>
                                <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 " />
                            </div>
                        </div>

                        <label className="text-[13px] ">Company Name (optional)</label>
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4" />

                        <div className="flex flex-col space-y-2  mb-4">
                            <label className="text-[13px] ">Country / Region *</label>
                        {/* <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4" /> */}
                        <select value={selectedCountry} onChange={handleCountryChange} className="w-full h-11 bg-gray-100 rounded-md">
                            {Object.entries(Country).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        </div>

                        <label className="text-[13px] ">Street address *</label>
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-2 pl-4 text-sm" placeholder="House number and street name" />
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4 pl-4 text-sm" placeholder="Apartment, suite, unite, etc. (optional)" />


                        <label className="text-[13px] ">Town / City *</label>
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4" />

                        {/* <label className="text-[13px] ">State *</label>
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4" /> */}
                        <div className="flex flex-col space-y-2  mb-4">
                            <label className="text-[13px] ">State *</label>
                        <select value={selectedCountry} onChange={handleCountryChange} className="w-full h-11 bg-gray-100 rounded-md">
                            {Object.entries(Country).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        </div>

                        <label className="text-[13px] ">Zip Code *</label>
                        <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 mb-4" />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-2">
                            <div>
                                <label className="text-[13px] ">Phone *</label>
                                <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2" />
                            </div>
                            <div>
                                <label className="text-[13px] ">Email address *</label>
                                <input type="text" className="w-full h-11 bg-gray-100 rounded-md mt-2 " />
                            </div>
                        </div>

                        <div className="flex gap-1 border-b border-[#e4e5ee] py-3">
                            <input type="checkbox" name="address" id="address" />
                            <p className="text-[13px] font-semibold">SHIP TO A DIFFERENT ADDRESS?</p>
                        </div>

                        <p className="text-[13px] mt-6">Order notes (optional)</p>

                        <textarea className="w-full h-[120px] bg-gray-100 rounded-md mt-2 mb-4 pl-4 pr-10 pt-5 text-sm" placeholder="Notes about your order, e.g special notes for delivery." />
                    </div>
                </div>
                {/* sidebar checkout cart */}
                <div>
                    <div className="w-[400px] border-2 border-[#233a95] p-7 rounded-md ml-8 hidden xl:block">
                        <h2 className="font-semibold mb-3">YOUR ORDER</h2>
                        <hr />
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px] text-[#c2c2d3]">Product</td>
                                    <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px] text-right text-[#c2c2d3]">Subtotal</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* load items and total  map method*/}
                        <table className="w-full">
                            <tbody>
                            {cartItems.map((item) => (
                               <CheckoutSidebar item={item} orderItem={orderItem} setOrderItem={setOrderItem}/>
                            ))}
                                {/* <tr>
                                    <td className=" py-3 text-[13px] w-[50%]">Pepsi Cola Soda - 2 L Bottle <span className="font-semibold">× 2</span> </td>
                                    <td className=" py-3 text-[15px] text-right">$5.05</td>
                                </tr> */}
                            </tbody>
                        </table>

                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="text-[13px] font-semibold border-y border-[#e4e5ee] text-[#71778e]">Subtotal</td>
                                    <td className=" py-3 text-[15px] text-right border-y border-[#e4e5ee]">${totalAmount}</td>

                                </tr>
                                <tr>
                                    <td rowSpan={2} className="text-[13px] font-semibold border-b border-[#e4e5ee] text-[#71778e]">Shipping</td>
                                    <td className="text-right text-[13px] py-3">Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">$5.00<input type="radio" name="vendor" value="Vendor 1"
                                    //  onChange={handleCheckboxChange} 
                                    />
                                    </span></td>
                                </tr>
                                <tr>

                                    <td className="text-[13px] pb-5 text-right border-b border-[#e4e5ee]">
                                        {/* <label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                        <input
                                            type="radio"
                                            name="vendor"
                                            value="Vendor 1"
                                        // onChange={handleCheckboxChange}
                                        />
                                    </label> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#e4e5ee] text-[13px] font-semibold py-4 text-[#71778e]">Total</td>
                                    <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4 ">${totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="bank" value="bank" onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Direct bank transfer</p>
                        </div>
                        {
                            selectedRadio === "bank" && <p className="text-xs text-[#71778e] mt-3">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        }

                        <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="bank" value="check"
                                onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Check payments</p>
                        </div>
                        {
                            selectedRadio === "check" && <p className="text-xs text-[#71778e] mt-3">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        }

                        <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="bank" value="cash"
                                onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Cash on delivery</p>
                        </div>
                        {
                            selectedRadio === "cash" && <p className="text-xs text-[#71778e] mt-3">Pay with cash upon delivery.</p>
                        }

                        <p className="text-[13px] mt-8">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-[#ed174a] underline underline-offset-1 font-semibold">privacy policy.</span></p>

                        <div className="flex gap-2 mt-4">
                            <input type="checkbox" name="address" id="address" />
                            <p className="text-xs">I have read and agree to the website <span className="text-[#ed174a] underline underline-offset-1">terms and conditions* </span></p>
                        </div>

                        <button className="bg-[#ed174a] text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" onClick={handleOrder}>Place order</button>

                    </div>
                </div>
            </section>

            {/* checkout cart */}
            <div>
                <div className="w-full border-2 border-[#233a95] mt-10 p-4 rounded-md xl:hidden">
                    <h2 className="font-semibold mb-3">YOUR ORDER</h2>
                    <hr />
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px] text-[#c2c2d3]">Product</td>
                                <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px] text-right text-[#c2c2d3]">Subtotal</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* load items and total  map method*/}
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className=" py-3 text-[13px] w-[50%]">Pepsi Cola Soda - 2 L Bottle <span className="font-semibold">× 1</span> </td>
                                <td className=" py-3 text-[15px] text-right">$5.05</td>
                            </tr>
                            <tr>
                                <td className=" py-3 text-[13px] w-[50%]">Pepsi Cola Soda - 2 L Bottle <span className="font-semibold">× 2</span> </td>
                                <td className=" py-3 text-[15px] text-right">$5.05</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="text-[13px] font-semibold border-y border-[#e4e5ee] text-[#71778e]">Subtotal</td>
                                <td className=" py-3 text-[15px] text-right border-y border-[#e4e5ee]">$5.05</td>

                            </tr>
                            <tr>
                                <td rowSpan={2} className="text-[13px] font-semibold border-b border-[#e4e5ee] text-[#71778e]">Shipping</td>
                                <td className="text-right text-[13px] py-3">Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">$5.00<input type="radio" name="vendor" value="Vendor 1"
                                //  onChange={handleCheckboxChange} 
                                />
                                </span></td>
                            </tr>
                            <tr>

                                <td className="text-[13px] pb-5 text-right border-b border-[#e4e5ee]"><label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                    <input
                                        type="radio"
                                        name="vendor"
                                        value="Vendor 1"
                                    // onChange={handleCheckboxChange}
                                    />
                                </label></td>
                            </tr>
                            <tr>
                                <td className="border-b border-[#e4e5ee] text-[13px] font-semibold py-4 text-[#71778e]">Total</td>
                                <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4 ">$35.78</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex gap-6 mt-3.5">
                        <input type="radio" name="bank" value="bank"
                            onChange={handleCheckboxChange}
                        />
                        <p className="text-sm text-[#233a95] font-semibold">Direct bank transfer</p>
                    </div>
                    {
                        selectedRadio === "bank" && <p className="text-xs text-[#71778e] mt-3">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    }

                    <div className="flex gap-6 mt-3.5">
                        <input type="radio" name="bank" value="check"
                            onChange={handleCheckboxChange}
                        />
                        <p className="text-sm text-[#233a95] font-semibold">Check payments</p>
                    </div>
                    {
                        selectedRadio === "check" && <p className="text-xs text-[#71778e] mt-3">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    }

                    <div className="flex gap-6 mt-3.5">
                        <input type="radio" name="bank" value="cash"
                            onChange={handleCheckboxChange}
                        />
                        <p className="text-sm text-[#233a95] font-semibold">Cash on delivery</p>
                    </div>
                    {
                        selectedRadio === "cash" && <p className="text-xs text-[#71778e] mt-3">Pay with cash upon delivery.</p>
                    }

                    <p className="text-[13px] mt-8">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-[#ed174a] underline underline-offset-1 font-semibold">privacy policy.</span></p>

                    <div className="flex gap-2 mt-4">
                        <input type="checkbox" name="address" id="address" />
                        <p className="text-xs">I have read and agree to the website <span className="text-[#ed174a] underline underline-offset-1">terms and conditions* </span></p>
                    </div>

                    <button className="bg-[#ed174a] text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" >Place order</button>

                </div>
            </div>
        </div>
    );
}

export default Checkout;