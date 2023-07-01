import CheckoutSidebar from "@/components/Checkout/CheckoutSidebar";
import { addOrder, insertOrderAsync } from "@/components/Checkout/orderSlice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../utils/baseUrl";
import { useRouter } from "next/router";
import Link from "next/link";
import { removeAll } from "@/features/cart/cartSlice";
import Terms from "@/components/Terms/Terms";
import { Product } from "@/features/product/product";




export interface OrderObj {
    userId: string;
    totalprice: number;
    date: string;
    status: string;
    items: {

        orderquantity: number;

        productId: number;
    }[];

}

interface LocationType {
    dollar_min: any;
    locationName: any;
    id: number;
    name: string;
    min: string;
}
const Checkout = () => {
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
    const [note, setNote] = useState('');

    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [companyNameError, setCompanyNameError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [streetAddressError, setStreetAddressError] = useState('');
    const [apartmentError, setApartmentError] = useState('');
    const [townCityError, setTownCityError] = useState('');
    const [stateError, setStateError] = useState('');
    const [zipCodeError, setZipCodeError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [formError, setFormError] = useState('');

    const [isChecked, setIsChecked] = useState(false);
    const [terms, setTerms] = useState(false);


    const [ship, setShip] = useState({

        shippingAddress: {
            apartment: "",
            country: "",
            shippingCompanyName: "",
            shippingEmail: "",
            shippingFirstName: "",
            shippingLastName: "",
            shippingphone: "",
            state: "",
            street: "",
            town: "",
            zipCode: ""
        },

    });

    const [location, setLocation] = useState<LocationType[]>([]);

    const router = useRouter();

    const { shippingObj } = router.query;


    const parsedObject = typeof shippingObj === 'string' ? JSON.parse(shippingObj) : undefined;
    console.log(parsedObject)
    console.log(location)
    console.log(parsedObject?.cartshippingtown)


    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
      const cartItemsString = localStorage.getItem('cartItems');
      const cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [];
      setCartItems(cartItemsArray)
    },[]);
    
    const orderList = useSelector((state: RootState) => state.order.orders);
    const dispatch = useDispatch<AppDispatch>();
    let id: any;
    if (typeof localStorage !== 'undefined') {
        id = localStorage.getItem("id");
    }

    //     let discountprice;
    //     discountprice = item.price * (item.discount/100)
    //   let newprice=item.price-discountprice
    //   item.price - (item.price * (item.discount/100))
    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const handleFirstNameChange = (e: any) => {
        const newFirstName = e.target.value;
        setFirstName(newFirstName);
        if (newFirstName === '') {
            setFirstNameError('First name cannot be empty');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastNameChange = (e: any) => {
        const newLastName = e.target.value;
        setLastName(newLastName);
        if (newLastName === '') {
            setLastNameError('Last name cannot be empty');
        } else {
            setLastNameError('');
        }
    };

    const handleCompanyNameChange = (e: any) => {
        const newCompanyName = e.target.value;
        setCompanyName(newCompanyName);
        if (newCompanyName === '') {
            setCompanyNameError('Company name cannot be empty');
        } else {
            setCompanyNameError('');
        }
    };

    const handleCountryChange = (e: any) => {
        const newCountry = e.target.value;
        setCountry(newCountry);
        if (newCountry === '') {
            setCountryError('Country cannot be empty');
        } else {
            setCountryError('');
        }
    };

    const handleStreetAddressChange = (e: any) => {
        const newStreetAddress = e.target.value;
        setStreetAddress(newStreetAddress);
        if (newStreetAddress === '') {
            setStreetAddressError('Street address cannot be empty');
        } else {
            setStreetAddressError('');
        }
    };

    const handleApartmentChange = (e: any) => {
        const newApartment = e.target.value;
        setApartment(newApartment);
        // No validation logic for apartment, assuming it can be empty
    };

    const handleTownCityChange = (e: any) => {
        const newTownCity = e.target.value;
        setTownCity(newTownCity);
        if (newTownCity === '') {
            setTownCityError('Town/city cannot be empty');
        } else {
            setTownCityError('');
        }
    };

    const handleStateChange = (e: any) => {
        const newState = e.target.value;
        setState(newState);
        if (newState === '') {
            setStateError('State cannot be empty');
        } else {
            setStateError('');
        }
    };

    const handleZipCodeChange = (e: any) => {
        const newZipCode = e.target.value;
        setZipCode(newZipCode);
        if (!/^[0-9]{5}(?:-[0-9]{4})?$/.test(newZipCode)) {
            setZipCodeError('Invalid zip code format');
        } else {
            setZipCodeError('');
        }
    };

    const handlePhoneChange = (e: any) => {
        const newPhone = e.target.value;
        setPhone(newPhone);
        if (!/^\+?[0-9]{7,}$/i.test(newPhone)) {
            setPhoneError('Invalid phone number format');
        } else {
            setPhoneError('');
        }
    };

    // form handle submit for example
    // const handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     // perform form submission or validation here
    //     if (emailError || phoneError) {
    //         setFormError('Please fix the errors and try again');
    //       } else {
    //         // perform form submission
    //         console.log('Form submitted!');
    //       }
    // };

    let totalAmount = 0
    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        let subtotal = item.count * (item.price - (item.price * (item.discount / 100)));
        totalAmount += subtotal;
    }

    useEffect(() => {
        fetchData()

    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/users/${id}`);
            console.log(res.data)
            const data = res.data;
            setFirstName(data.billingAddress.billingFirstName);
            setLastName(data.billingAddress.billingLastName);
            setCompanyName(data.billingAddress.billingCompanyName);
            setCountry(data.billingAddress.country)
            setStreetAddress(data.billingAddress.street)
            setApartment(data.billingAddress.apartment)
            setTownCity(data.billingAddress.town)
            setState(data.billingAddress.state)
            setZipCode(data.billingAddress.zipCode)
            setPhone(data.billingAddress.billingPhone)
            setEmail(data.billingAddress.billingEmail);


        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData2()
    }, []);

    async function fetchData2() {
        try {
            const res = await axios.get(`${baseUrl}/users/${id}`);
            console.log(res.data)
            setShip(res.data)

        } catch (err) {
            console.log(err);
        }
    }


    const [selectedRadio, setSelectedRadio] = useState('Cash payment at the outlet');
    const handleCheckboxChange = (e: any) => {

        setSelectedRadio(e.target.value)

    }
    console.log(selectedRadio)

    const handleOrder = async (event: any) => {
        event.preventDefault()

        const orderObj = {
            userId: id ? id : "",
            totalprice: totalAmount,
            status: "processing",
            address: selectedItem ? selectedItem : "No location selected",
            payment: selectedRadio,
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
            items: cartItems.map(item => ({
                productId: item._id,
                orderquantity: item.count
            })),
            "billingAddress": {
                billingFirstName: firstName,
                billingLastName: lastName,
                billingCompanyName: companyName,
                country: country,
                street: streetAddress,
                apartment: apartment,
                town: townCity,
                state: state,
                zipCode: zipCode,
                billingPhone: phone,
                billingEmail: email,
                note: note,
            },
            "shippingAddress": (parsedObject?.cartshippingcountry && parsedObject?.cartshippingtown && parsedObject?.cartshippingzipCode) ?
                {
                    shippingFirstName: parsedObject?.cartshippingFirstName,
                    shippingLastName: parsedObject?.cartshippingLastName,
                    shippingCompanyName: parsedObject?.cartshippingCompanyName,
                    country: parsedObject?.cartshippingcountry,
                    street: parsedObject?.cartshippingstreet,
                    town: parsedObject?.cartshippingtown,
                    zipCode: parsedObject?.cartshippingzipCode,
                    shippingPhone: parsedObject?.cartshippingphone,
                } :
                {
                    shippingFirstName: ship.shippingAddress?.shippingFirstName,
                    shippingLastName: ship.shippingAddress?.shippingLastName,
                    shippingCompanyName: ship.shippingAddress?.shippingCompanyName,
                    country: ship.shippingAddress?.country,
                    street: ship.shippingAddress?.street,
                    town: ship.shippingAddress?.town,
                    zipCode: ship.shippingAddress?.zipCode,
                    shippingPhone: ship.shippingAddress?.shippingphone,
                }
        };

        console.log(orderObj)
        try {

            //authentication session handle
            const token = localStorage.getItem("token"); // Retrieve the token from local storage or wherever it's stored
            if (!token) {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                alert("Session expired")
                router.push("/account");
                return;
            }

            const config = {
                headers: {
                    Authorization: token,
                },
            };

            const response = await axios.post(`${baseUrl}/orders/place`, orderObj, config);

            console.log(response.data); // do something with the response data
            if (response.status == 201) {
                const orderData = { orderId: response.data.orderId, message: response.data.messsage };
                router.push({
                    pathname: '/orderMessage',
                    query: orderData,
                });
                dispatch(removeAll())


            }
        } catch (error) {
            console.log(error); // handle the error
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            alert("Session expired")
            router.push("/account");
        }
    }

    const handletermsandconditions = () => {
        setIsChecked(!isChecked);
    };

    const handleterms = () => {
        setTerms(!terms)
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

    const handleDropdownChange = (event: any) => {
        setSelectedItem(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className="container mx-auto xl:px-40 px-5  ">

            {/* <div className="border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4 mt-2">
                <p className="text-[13px]">
                    Add <span className="text-[#ed174a] font-semibold">$15.93</span> to
                    cart and get free shipping!
                </p>
                <hr className="h-2 rounded-md bg-[#ed174a]" />
            </div> */}

            <section className=" my-5 flex justify-between">
                <div className="border border-[#e4e5ee] px-7 py-3.5 rounded-md lg:px-10 ">
                    <p className="border-b border-[#e4e5ee] py-3 font-semibold">BILLING DETAILS</p>

                    <div className="mt-3">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-4">
                            <div>
                                <label className="text-[13px]">First Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 "
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                />
                                {firstNameError && <div className='text-red-500'>{firstNameError}</div>}
                            </div>
                            <div>
                                <label className="text-[13px] ">Last Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                                {lastNameError && <div className='text-red-500'>{lastNameError}</div>}
                            </div>
                        </div>

                        <label className="text-[13px] ">Company Name </label>
                        <input
                            type="text"
                            className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
                            value={companyName}
                            onChange={handleCompanyNameChange}
                        />
                        {/* {companyNameError && <div className='text-red-500'>{companyNameError}</div>} */}

                        <div className="flex flex-col mt-4 mb-4">
                            <label className="text-[13px] ">Country / Region *</label>
                            <input
                                type="text"
                                className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
                                value={country}
                                onChange={handleCountryChange}
                                required
                            />
                            {countryError && <div className='text-red-500'>{countryError}</div>}
                        </div>

                        <label className="text-[13px] ">Street address *</label>
                        <input type="text" className="w-full h-11 px-4 bg-gray-100 rounded-md mt-2 pl-4 text-sm" placeholder="House number and street name" value={streetAddress} onChange={handleStreetAddressChange}
                            required />
                        {streetAddressError && <div className='text-red-500'>{streetAddressError}</div>}
                        <input
                            type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-4 mb-4 pl-4 text-sm" placeholder="Apartment, suite, unite, etc. (optional)" value={apartment} onChange={(e) => setApartment(e.target.value)}
                        />

                        <label className="text-[13px] ">Town / City *</label>
                        <input type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 " value={townCity} onChange={handleTownCityChange}
                            required />
                        {townCityError && <div className='text-red-500'>{townCityError}</div>}

                        <div className="flex flex-col space-y-2 mt-4 mb-4">
                            <label className="text-[13px] ">State *</label>
                            <input type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2" value={state} onChange={handleStateChange}
                                required />
                            {stateError && <div className='text-red-500'>{stateError}</div>}
                        </div>

                        <label className="text-[13px] ">Zip Code *</label>
                        <input type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2" value={zipCode} onChange={handleZipCodeChange}
                            required />
                        {zipCodeError && <div className='text-red-500'>{zipCodeError}</div>}

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-4">
                            <div>
                                <label className="text-[13px] ">Phone *</label>
                                <input type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 " value={phone} onChange={handlePhoneChange}
                                    required />
                                {phoneError && <div className='text-red-500'>{phoneError}</div>}
                            </div>
                            <div>
                                <label className="text-[13px] ">Email address *</label>
                                <input type="text" className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2" value={email} onChange={handleEmailChange}
                                    required />
                                {emailError && <div className='text-red-500'>{emailError}</div>}
                            </div>
                        </div>

                        {/* <div className="flex gap-1 border-b border-[#e4e5ee] py-3">
                            <input type="checkbox" name="address" id="address" />
                            <p className="text-[13px] font-semibold">SHIP TO A DIFFERENT ADDRESS?</p>
                        </div> */}

                        <p className="text-[13px] mt-6">Order notes (optional)</p>

                        <textarea className="w-full h-[120px] bg-gray-100 rounded-md mt-2 mb-4 pl-4 pr-10 pt-5 text-sm" value={note} placeholder="Notes about your order, e.g special notes for delivery." onChange={(e) => setNote(e.target.value)} />
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
                                {cartItems.map((item, index) => (
                                    <CheckoutSidebar item={item} key={index} />
                                ))}

                            </tbody>
                        </table>

                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="text-[13px] font-semibold border-y border-[#e4e5ee] text-[#71778e]">Subtotal</td>
                                    <td className=" py-3 text-[15px] text-right border-y border-[#e4e5ee]">Rs {totalAmount.toFixed(2)}</td>

                                </tr>
                                {/* <tr>
                                    <td rowSpan={2} className="text-[13px] font-semibold border-b border-[#e4e5ee] text-[#71778e] py-2"></td>
                                    <td className="text-right text-[13px] py-3">
                                        Free shipping <span className="inline-flex text-[#d51243] text-sm gap-2">
                                        Rs5.00
                                        <input type="radio" name="vendor" value="Vendor 1"
                                     onChange={handleCheckboxChange} 
                                    />
                                    </span>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className="border-b border-[#e4e5ee] py-8"></td>
                                    <td className="relative text-[13px] text-right border-b border-[#e4e5ee] flex items-center py-8">
                                        <select
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
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#e4e5ee] text-[13px] font-semibold py-4 text-[#71778e]">Total</td>
                                    <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4 ">Rs {totalAmount.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="Cash payment at the outlet" checked={selectedRadio === 'Cash payment at the outlet'} value="Cash payment at the outlet" onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Cash payment at the outlet</p>
                        </div>
                        {
                            selectedRadio === "Cash payment at the outlet" && <p className="text-xs text-[#71778e] mt-3">paying for goods or services in physical currency at the store.</p>
                        }

                        {/* <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="bank" value="check"
                                onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Check payments</p>
                        </div>
                        {
                            selectedRadio === "check" && <p className="text-xs text-[#71778e] mt-3">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        } */}

                        {/* <div className="flex gap-6 mt-3.5">
                            <input type="radio" name="bank" value="cash"
                                onChange={handleCheckboxChange}
                            />
                            <p className="text-sm text-[#233a95] font-semibold">Cash on delivery</p>
                        </div>
                        {
                            selectedRadio === "cash" && <p className="text-xs text-[#71778e] mt-3">Pay with cash upon delivery.</p>
                        } */}

                        <p className="text-[13px] mt-8">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="/privacy-policy"><span className="text-[#ed174a] underline underline-offset-1 font-semibold">privacy policy.</span></Link></p>

                        {
                            terms && (
                                <div className="h-[200px] overflow-y-auto mt-4">
                                    <Terms />
                                </div>
                            )
                        }

                        <div className="flex gap-2 mt-4">
                            <input type="checkbox" name="address" id="address" checked={isChecked} onChange={handletermsandconditions} />
                            <p className="text-xs" >I have read and agree to the website <span className="text-[#ed174a] underline underline-offset-1"><button onClick={handleterms}> terms and conditions*</button></span></p>
                        </div>

                        {(firstName == "" || lastName == "" ||
                            companyName == "" ||
                            country == "" ||
                            streetAddress == "" ||
                            apartment == "" ||
                            townCity == "" ||
                            state == "" ||
                            zipCode == "" ||
                            phone == "" ||
                            email == "" ||
                            isChecked == false ||
                            selectedItem == "" ||
                            cartItems.length == 0
                        )

                            ? <button className="bg-[#ed174a] opacity-50 text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" onClick={handleOrder} disabled={true}>Place order</button>
                            : <button className="bg-[#ed174a] text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" onClick={handleOrder}>Place order</button>}

                    </div>
                </div>
            </section>

            {/* checkout cart */}
            <div>
                <div className="w-full border-2 border-[#233a95] mt-10 p-4 mb-4 rounded-md xl:hidden">
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
                            {cartItems.map((item, index) => (
                                <CheckoutSidebar item={item} key={index} />
                            ))}
                        </tbody>
                    </table>

                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="text-[13px] font-semibold border-y border-[#e4e5ee] text-[#71778e]">Subtotal</td>
                                <td className=" py-3 text-[15px] text-right border-y border-[#e4e5ee]">Rs {totalAmount.toFixed(2)}</td>

                            </tr>
                            {/* <tr>
                                <td rowSpan={2} className="text-[13px] font-semibold border-b border-[#e4e5ee] text-[#71778e]"></td>
                                <td className="text-right text-[13px] py-3">
                                    Flat rate: <span className="inline-flex text-[#d51243] text-sm gap-2">Rs 5.00<input type="radio" name="vendor" value="Vendor 1"
                             
                                />
                                </span>
                                </td>
                            </tr> */}
                            <tr>
                                <td className="border-b border-[#e4e5ee] py-6"></td>
                                <td className="relative text-[13px]  text-right border-b border-[#e4e5ee] py-6">
                                    <select
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
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b border-[#e4e5ee] text-[13px] font-semibold py-4 text-[#71778e]">Total</td>
                                <td className="border-b border-[#e4e5ee] text-right font-semibold text-xl py-4 ">Rs {totalAmount.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex gap-6 mt-3.5">
                        <input type="radio" name="Cash payment at the outlet" checked={selectedRadio === 'Cash payment at the outlet'} value="Cash payment at the outlet"
                            onChange={handleCheckboxChange}
                        />
                        <p className="text-sm text-[#233a95] font-semibold">Cash payment at the outlet</p>
                    </div>
                    {
                        selectedRadio === "Cash payment at the outlet" && <p className="text-xs text-[#71778e] mt-3">Paying for goods or services in physical currency at the store.</p>
                    }

                    {/* <div className="flex gap-6 mt-3.5">
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
                    } */}

                    <p className="text-[13px] mt-8">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="/privacy-policy"><span className="text-[#ed174a] underline underline-offset-1 font-semibold">privacy policy.</span></Link></p>

                    {
                        terms && (
                            <div className="h-[200px] overflow-y-auto mt-4">
                                <Terms />
                            </div>
                        )
                    }

                    <div className="flex gap-2 mt-4">
                        <input type="checkbox" name="address" id="address" checked={isChecked} onChange={handletermsandconditions} />
                        <p className="text-xs" >I have read and agree to the website<span className="text-[#ed174a] underline underline-offset-1"><button onClick={handleterms}>terms and conditions*</button></span></p>
                    </div>

                    {(firstName == "" || lastName == "" ||
                        companyName == "" ||
                        country == "" ||
                        streetAddress == "" ||
                        apartment == "" ||
                        townCity == "" ||
                        state == "" ||
                        zipCode == "" ||
                        phone == "" ||
                        email == "" ||
                        isChecked == false ||
                        selectedItem == "" ||
                        cartItems.length == 0
                    )

                        ? <button className="bg-[#ed174a] opacity-50 text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" onClick={handleOrder} disabled={true}>Place order</button>
                        : <button className="bg-[#ed174a] text-white py-2.5 rounded-md text-sm h-[50px] w-full text-center mt-6 font-semibold" onClick={handleOrder}>Place order</button>}

                </div>
            </div>

        </div>
    );
}

export default Checkout;


