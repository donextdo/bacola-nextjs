import Image from "next/image";
import { FC, useEffect, useState } from "react";
import item1 from "../../../assets/item/item1.jpg";
import { GrFormClose } from "react-icons/gr";
import { IoCloseSharp, IoClose } from "react-icons/io5";
import Link from "next/link";
import { RootState } from "../../../redux/store"
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { calSubTotal, removeAll } from "../cartSlice";
import axios from "axios";
import baseUrl from "../../../../utils/baseUrl";
import { useRouter } from "next/router";
import cartimage from "../../../../assets/cart/cartimage2.png"



interface CartType {
    image: string,
    title: string,
    subtotal: number,
}

interface Coupon {
    coupon_code: string,
    date: string,
    dicount_amount: number,
    __v: number,
    _id: string
}

interface LocationType {
    dollar_min: any;
    locationName: any;
    id: number;
    name: string;
    min: string;
}


const Cart: FC<CartType> = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    let totalAmount1 = useSelector((state: RootState) => state.cart.totalAmount);

    const [selectedValue, setSelectedValue] = useState("Ship");
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [country, setCountry] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [townCity, setTownCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let id: any;
    if (typeof localStorage !== 'undefined') {
        id = localStorage.getItem("id");
    }
    const [showInputs, setShowInputs] = useState(false);
    const router = useRouter();
    const [coupon, setCoupon] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [couponDiscount, setCouponDiscount] = useState<Coupon>({
        coupon_code: "",
        date: "",
        dicount_amount: 0,
        __v: 0,
        _id: ""
    });
    let [fulldiscount, setFulldiscount] = useState(0);
    const [location, setLocation] = useState<LocationType[]>([]);


    const [shippingObj, setShippingObj] = useState({
        cartshippingFirstName: "",
        cartshippingLastName: "",
        cartshippingCompanyName: "",
        cartshippingcountry: "",
        cartshippingstreet: "",
        cartshippingapartment: "",
        cartshippingtown: "",
        cartshippingstate: "",
        cartshippingzipCode: "",
        cartshippingphone: "",
        cartshippingEmail: "",
    });


    useEffect(() => {
        console.log(cartItems)
        dispatch(calSubTotal(totalAmount))
    });

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/users/${id}`);
            console.log(res.data)
            const data = res.data;
            setFirstName(data.shippingAddress.shippingFirstName);
            setLastName(data.shippingAddress.shippingLastName);
            setCompanyName(data.shippingAddress.shippingCompanyName);
            setCountry(data.shippingAddress.country)
            setStreetAddress(data.shippingAddress.street)
            setApartment(data.shippingAddress.apartment)
            setTownCity(data.shippingAddress.town)
            setState(data.shippingAddress.state)
            setZipCode(data.shippingAddress.zipCode)
            setPhone(data.shippingAddress.shippingphone)
            setEmail(data.shippingAddress.shippingEmail);

        } catch (err) {
            console.log(err);
        }
    }



    let totalAmount = 0
    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        let subtotal = item.count * (item.price - item.price * (item.discount / 100));
        totalAmount += subtotal;
    }
    useEffect(() => {
        console.log(cartItems)
        dispatch(calSubTotal(totalAmount))
    });

    // calculate discount

    fulldiscount = totalAmount * (couponDiscount.dicount_amount / 100)
    console.log(fulldiscount)
    console.log(couponDiscount)


    const [total, setTotal] = useState(totalAmount + 5);

    function handleClickRadioAdd5() {
        setTotal(total + 5);
    }

    function handleClickRadioSubtract5() {
        setTotal(total - 5);
    }

    const handleClear = () => {

        dispatch(removeAll())


    }

    function handleClick() {
        setShowInputs(!showInputs);
    }

    const handleUpdateShipping = async () => {
        const newshippingObj = {
            cartshippingFirstName: firstName,
            cartshippingLastName: lastName,
            cartshippingCompanyName: companyName,
            cartshippingcountry: country,
            cartshippingstreet: streetAddress,
            cartshippingapartment: apartment,
            cartshippingtown: townCity,
            cartshippingstate: state,
            cartshippingzipCode: zipCode,
            cartshippingphone: phone,
            cartshippingEmail: email,

        }
        const savenewshippingObj = newshippingObj
        setShippingObj(savenewshippingObj);
        console.log(savenewshippingObj)
        setShowInputs(false);


    }
    console.log(shippingObj)

    const handleCheckout = () => {
        
        const orderData = {  shippingObj:JSON.stringify(shippingObj) };
        console.log(orderData)
        router.push({
            pathname: '/checkout',
            query: orderData,
        });
    }

    const handlecoupon = async () => {
        try {
            const res = await axios.get(`${baseUrl}/coupons/getOne/${coupon}`);
            console.log(res.data)
            if (res.status == 200) {
                setCouponDiscount(res.data);
                setErrorMessage('');

            }

        } catch (err) {
            console.log(err);
            setErrorMessage('There is no such coupon.');

        }

    }

    let finalAmount = totalAmount - fulldiscount

    const hanleRemoveCoupon = () => {
        setCouponDiscount({
            coupon_code: "",
            date: "",
            dicount_amount: 0,
            __v: 0,
            _id: ""
        });
    }


    const handleproduct = () => {
        router.push("./shop");
    }

    // location
    useEffect(() => {
        fetchData4()
    }, []);

    const fetchData4 = async () => {
        const response = await axios.get(`${baseUrl}/locations/getAll`);
        const locations = response.data;
        setLocation(locations);

        console.log("location", locations);
    };

    const [selectedItem, setSelectedItem] = useState('');

  const handleDropdownChange = (event:any) => {
    setSelectedItem(event.target.value);
    console.log(event.target.value);
  };

    return (
        <>
            {cartItems.length > 0 ? (
                <div className="container mx-auto xl:px-40 px-5 mt-4 mb-20">
                    <div>
                        <section className="flex justify-between h-full">
                            <div className="w-full h-full pb-10">
                                {/* <div className="border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4">
                            <p className="text-sm">
                                Add <span className="text-[#ed174a] font-semibold">Rs 15.93</span> to
                                cart and get free shipping!
                            </p>
                            <hr className="h-2 rounded-md bg-[#ed174a]" />
                        </div> */}

                                <div className="mt-8">
                                    {/* header */}
                                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 border-b border-[#e4e5ee] pb-3">
                                        <div className="text-xs sm:col-span-2"></div>
                                        <div className="col-span-2 sm:col-span-4 text-xs text-[#71778e] font-semibold">Product</div>
                                        <div className="text-xs text-[#71778e] font-semibold hidden sm:block">Price</div>
                                        <div className="text-xs text-[#71778e] font-semibold sm:col-span-2">Quantity</div>
                                        <div className="text-xs text-[#71778e] font-semibold hidden sm:block">Subtotal</div>
                                        <div></div>
                                    </div>

                                    {/* products */}
                                    <div>
                                        {cartItems.map((item, index) => (

                                            <CartCard item={item} key={index} totalAmount={totalAmount} />
                                        ))}

                                    </div>
                                </div>

                                <section className="flex justify-between mt-6">
                                    <div className="inline-flex gap-2 w-full">
                                        <input type="text" className="h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72" placeholder="Coupon code"
                                            onChange={(e) => setCoupon(e.target.value)}
                                        />
                                        <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40" onClick={handlecoupon}>Apply coupon</button>
                                    </div>

                                    <div><button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] hidden md:block" onClick={handleClear}>Remove All</button></div>
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
                                                <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">Rs {totalAmount.toFixed(2)}</td>
                                            </tr>
                                            {fulldiscount > 0 &&
                                                <tr>
                                                    <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">Coupon <button className="text-amber-700" onClick={hanleRemoveCoupon}>[remove]</button></td>
                                                    <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">-Rs {fulldiscount.toFixed(2)}</td>
                                                </tr>
                                            }

                                            <tr>
                                                <td rowSpan={4} className="text-[13px] font-semibold "></td>
                                                <td className="text-right text-[13px] py-3">
                                                    {/* Free shipping <span className="inline-flex text-[#d51243] text-sm gap-2">
                                                $5.00
                                        <input type="radio" name="cart"  
                                        onClick={handleClickRadioAdd5} 
                                        />
                                        </span> */}
                                                </td>
                                            </tr>
                                            <tr>

                                                <td className="text-[13px] pb-3 text-right">
                                                    {/* <label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                                    <input type="radio" name="cart"
                                                    // onClick={handleClickRadioSubtract5} 
                                                    />
                                                </label> */}
                                                </td>
                                            </tr>
                                            <tr>

                                                <td className="relative text-right text-[12.5px] ">
                                                    {/* <select
                                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                    value={selectedItem}
                                                    onChange={handleDropdownChange}
                                                    >
                                                        <option value="">Pickup your location</option>
                                                        {location.map((item, index) => (
                                                            <option key={index} value={item.locationName}>
                                                                {item.locationName}
                                                            </option>
                                                        ))}
                                                    </select> */}
                                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M10 12l-6-6h12l-6 6z"
                                                            />
                                                        </svg>
                                                    </div> */}
                                                </td>
                                            </tr>
                                            <tr>

                                                <td className="text-right text-[13px]  text-[#2bbef9] pb-4 pt-2"><button onClick={handleClick}> Change address</button>
                                                    {showInputs && (
                                                        <div className="flex flex-col justify-end text-right">
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="Country"
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            />
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="City"
                                                                value={townCity}
                                                               onChange={(e) => {
        setTownCity(e.target.value);
        console.log(e.target.value); // Log the value of townCity
    }}
                                                            />
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="Postcode/Zip"
                                                                value={zipCode}
                                                                onChange={(e) => setZipCode(e.target.value)}
                                                            />

                                                            <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] mt-3" onClick={handleUpdateShipping}>Update</button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-y border-[#e4e5ee] text-[13px] font-semibold pb-4">Total</td>
                                                <td className="border-y border-[#e4e5ee] text-right font-semibold text-xl py-4">Rs {finalAmount.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* <Link href="/checkout">    */}
                                    <button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4" onClick={handleCheckout}>Proceed to checkout</button>
                                    {/* </Link> */}

                                </div>
                            </div>
                        </section>

                        <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-full text-left mt-2 md:hidden" onClick={handleClear}>Remove All</button>
                        {errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>}

                        {/* Cart Totals */}
                        <div className="w-full border border-[#e4e5ee] mt-10 p-4 rounded-md xl:hidden">
                            <h2 className="font-semibold mb-3">CART TOTALS</h2>
                            <hr />
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="border-b border-[#e4e5ee] py-3 font-semibold text-[13px]">Subtotal</td>
                                        <td className="border-b border-[#e4e5ee] py-3 text-[15px] text-right">Rs {totalAmount.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={4} className="text-[13px] font-semibold border-b border-[#e4e5ee]">Shipping</td>
                                        <td className="text-right text-[13px] py-3">
                                            {/* Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">Rs 5.00<input type="radio" name="vendor"
                                // onChange={handleRadioChange} 
                                /></span> */}
                                        </td>
                                    </tr>
                                    <tr>

                                        <td className="text-[13px] pb-3 text-right">
                                            {/* <label className="inline-flex -gap-1"><span className="mr-2">Local pickup</span>
                                            <input
                                                type="radio"
                                                name="vendor"
                                            // onChange={handleRadioChange}
                                            />
                                        </label> */}
                                        </td>
                                    </tr>
                                    <tr>

                                    <td className="relative text-right text-[12.5px] ">
                                                    {/* <select
                                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                                    value={selectedItem}
                                                    onChange={handleDropdownChange}
                                                    >
                                                        <option value="">Pickup your location</option>
                                                        {location.map((item, index) => (
                                                            <option key={index} value={item.locationName}>
                                                                {item.locationName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M10 12l-6-6h12l-6 6z"
                                                            />
                                                        </svg>
                                                    </div> */}
                                                </td>
                                    </tr>
                                    <tr>

                                    <td className="text-right text-[13px]  text-[#2bbef9] pb-4 pt-2"><button onClick={handleClick}> Change address</button>
                                                    {showInputs && (
                                                        <div className="flex flex-col justify-end text-right">
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="Country"
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            />
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="City"
                                                                value={townCity}
                                                                onChange={(e) => setTownCity(e.target.value)}
                                                            />
                                                            <input
                                                                type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 ml-2 pl-4 text-sm" placeholder="Postcode/Zip"
                                                                value={zipCode}
                                                                onChange={(e) => setZipCode(e.target.value)}
                                                            />

                                                            <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] mt-3" onClick={handleUpdateShipping}>Update</button>
                                                        </div>
                                                    )}
                                                </td>
                                    </tr>
                                    <tr>
                                        <td className="border-y border-[#e4e5ee] text-[13px] font-semibold pb-4">Total</td>
                                        <td className="border-y border-[#e4e5ee] text-right font-semibold text-xl py-4">Rs {total.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <Link href="/checkout"><button className="bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4">Proceed to checkout</button></Link>

                        </div>
                    </div>

                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <div className="h-[320px] w-[320px]">
                    <Image
                            src={cartimage}
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
                    <div className="text-lg text-[#ed174a] font-semibold">YOUR CART IS CURRENTLY EMPTY.</div>
                    <div><button className="bg-[#233a95] text-white py-2.5 px-8 rounded-full text-sm h-12 my-10" onClick={handleproduct}>Return to shop</button></div>
                </div>
            )
            }
        </>
    );
};

export default Cart;
