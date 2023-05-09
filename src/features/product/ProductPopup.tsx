import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FC, useEffect, useState } from "react";
import {
    FaHeart,
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaPinterest,
    FaLinkedin,
    FaReddit,
    FaShippingFast,
} from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiMedicinePills } from "react-icons/gi";
import { TbArrowsDownUp } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { Product } from "./product";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "../cart/cartSlice";
import { updateProductQuantity } from "./productSlice";
import siteUrl from "../../../utils/siteUrl";
import { RootState } from "@/redux/store";

const ProductPopup = ({setProductPopup, proId}:any) => {
    const [data, setData] = useState<Product>({
        _id: '',
        isRecommended: false,
        isDiscount: false,
        isOrganic: false,
        isFavourite: false,
        discount: 0,
        rating: 0,
        front: '',
        back: '',
        side: '',
        title: '',
        isAvailable: false,
        price: 0,
        quantity: 0,
        brand: '',
        description: '',
        productQuantity: 0,
        skuNumber: '',
        count: 0,
        newprice: 0,
        type: '',
        // review:'',
    })
    const [mainImage, setMainImage] = useState(data?.front);

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product.products) as Product[];


    useEffect(() => {
        fetchData();
        console.log(proId)
    }, []);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/products/getOne/644b54d6b1d73a568c29dfd1`);
            console.log(res)
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const item: Product | undefined = products.find((item) => item._id === proId);

    const handleIncrement = (data: Product) => {
        const newQuantity = (item?.count || 0) + 1;
        dispatch(updateItemQuantity({ itemId: data._id, count: newQuantity }));
        dispatch(updateProductQuantity({ productId: data._id, count: newQuantity }))
    };

    const handleDecrement = (data: Product) => {
        const newQuantity = Math.max((item?.count || 0) - 1, 0);
        dispatch(updateItemQuantity({ itemId: data._id, count: newQuantity }));
        dispatch(updateProductQuantity({ productId: data._id, count: newQuantity }))
    };

    const handleWishlist = (data: any) => {
        // const wishlist = JSON.parse(localStorage.getItem('wishlist'));

        const wishlistString = localStorage.getItem('wishlist');
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];

        const newObj = {
            id: data._id,
            image: data.front,
            title: data.title,
            price: data.price,
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
            quantity: data.quantity
        };
        // console.log(newObj)
        // Modify the array by pushing the new object
        wishlist.push(newObj);

        // Store the modified array back in local storage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));


    }

    const handleaddToCart = (data: any) => {
        dispatch(addItem(data));
        const newQuantity = (data.count || 0) + 1;
        dispatch(
            updateProductQuantity({ productId: data._id, count: newQuantity })
        );
        console.log(data._id);
    };

    let discountprice;
    discountprice = data.price * (data.discount / 100)
    let newprice = data.price - discountprice

    const handleClick = (image: any) => {
        setMainImage(image);
    };
    
    const handleclose = () => {
        setProductPopup(false)
    }
    return ( 
        <div className="fixed inset-0 z-20 grid place-items-center bg-slate-900 bg-opacity-50">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-5/6">
            <div className="flex justify-end px-2"><button onClick={handleclose} className="bg-[#c2c2d3] rounded-full w-8 h-8 flex justify-center items-center"><IoClose className="text-white"/></button></div>
            <div className=" bg-white  rounded-md px-6 mt-4 ">
                    <div className="w-full mb-[1.875rem]">
                        <h1 className=" capitalize text-[1.5rem] font-semibold">
                            {data.title}
                        </h1>
                        <div className="flex flex-row bg-white text-[0.75rem] ">
                            <span className="text-gray-400 ">Brands: </span>
                            <span className="ml-1"> {data.brand}</span>

                            <div className="text-gray-400 mx-3">|</div>
                            <span className="text-gray-400 ">
                                <div className="flex flex-row max-h-[18px] max-w-[130.49px] items-center justify-center">
                                    {/* {stars} */}
                                </div>
                            </span>
                            <span className="ml-1">
                                <div className="uppercase  text-gray-400 font-semibold ml-2 text-[11px] flex items-center justify-center">
                                    1 review
                                </div>
                            </span>

                            <div className="text-gray-400 mx-3">|</div>
                            <span className="text-gray-400 ">SKU: </span>
                            <span className="ml-1">{data.skuNumber}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px]">
                        <div>
                            <div className="relative  max-h-[579.2px] max-w-[466.66px] ">
                                <div className="absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2">
                                    {data?.discount && (
                                        <div className=" font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
                                            {data?.discount != undefined ? data.discount : 0}%
                                        </div>
                                    )}
                                    {data?.isRecommended && (
                                        <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                                            Recommended
                                        </div>
                                    )}
                                    {data?.isOrganic && (
                                        <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
                                            {data.type}
                                        </div>
                                    )}
                                </div>
                                <div className="hover:cursor-pointer flex items-center justify-center px-12 ">
                                    <Image
                                        width={390}
                                        height={436}
                                        src={mainImage || data?.front}
                                        alt="mainImage"
                                    />
                                </div>

                                <div className="flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]">
                                    <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]  border border-gray-400 mr-2 hover:cursor-pointer"
                                        onClick={() => handleClick(data?.side)}
                                    >
                                        <Image
                                            width={67}
                                            height={67}
                                            src={data?.side}
                                            alt="Man looking at item at a store"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 mr-2 hover:cursor-pointer"
                                        onClick={() => handleClick(data?.front)}>
                                        <Image
                                            width={67}
                                            height={67}
                                            src={data?.front}
                                            alt="Man looking at item at a store"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 hover:cursor-pointer"
                                        onClick={() => handleClick(data?.back)}>
                                        <Image
                                            width={67}
                                            height={67}
                                            src={data?.back}
                                            alt="Man looking at item at a store"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full ">
                            <div className=" w-full">
                                <div className=" flex flex-row">
                                    <span className="text-gray-400 line-through mr-2 my-1 font-[1.125rem] flex items-center justify-center">
                                        {data?.price.toFixed(2)}
                                    </span>

                                    <span className="my-1 text-red-700 text-[1.625rem] font-semibold">
                                        ${newprice.toFixed(2)}
                                    </span>
                                </div>
                                {data?.quantity > 0 ? (
                                    <div className="font-medium py-2 px-2 mt-2 max-h-[26px] max-w-[68.35px] bg-emerald-100 text-green-600 rounded-full text-[.75rem] flex items-center justify-center uppercase tracking-tighter">
                                        In Stock
                                    </div>
                                ) : (
                                    <div className="font-medium py-2 px-2 mt-2 max-h-[26px] w-[100px] bg-red-100 text-red-600 rounded-full text-[.75rem] flex items-center justify-center uppercase tracking-tighter">
                                        Out of Stock
                                    </div>
                                )}

                                <div className="mt-6 text-[.8125rem]">
                                    <p className=" ">
                                        {data.description}
                                    </p>
                                </div>
                                {/* <div className="fixed bottom-0 left-0 right-0 md:relative md:flex md:flex-row md:items-center md:justify-between md:max-w-[130px] md:mx-auto md:mt-10 md:mb-4 md:px-4">
                                <div className="w-full flex items-center justify-between min-h-[44px] md:min-h-auto md:flex-1 md:grid md:grid-cols-3"> */}
                                <div className="hidden lg:block">
                                    <div className=" w-full lg:min-h-[44px] md:relative md:flex md:flex-row md:w-auto lg:max-w-[130px] md:min-h-[44px] md:max-w-[130px] mt-10 flex flex-row">

                                        <div className=" w-full flex grid-cols-3 min-h-[44px] min-w-[130px]">
                                            <button
                                                type="button"
                                                className="hover:bg-yellow-400 px-4 border-gray-500 bg-gray-300 text-[25px]  rounded-full font-medium"
                                                onClick={() => handleDecrement(data)}
                                            >
                                                -
                                            </button>


                                            <div className=" flex items-center justify-center w-full text-center ">

                                                {item?.count || 1}
                                            </div>

                                            {/* <div className=" flex items-center justify-center w-full text-center ">
                                                    {data.count}
                                                </div> */}

                                            <button
                                                type="button"
                                                className="px-4 hover:bg-yellow-400 border-gray-500 bg-gray-300  text-[20px]   rounded-full  font-medium"
                                                onClick={() => handleIncrement(data)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className=" bg-blue-900 text-white min-h-[34px] min-w-[140px] rounded-full  ml-4"
                                            onClick={() => handleaddToCart(data)}
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-10  ">
                                    <div className="max-h-[33px] max-w-[135px] bg-white border border-gray-600 rounded-[2.0625rem] hover:cursor-pointer">
                                        <button className="flex flex-row px-3 py-2" onClick={() => handleWishlist(data)}>
                                            <FaHeart className="h-[15px] w-[15px] text-gray-500"></FaHeart>
                                            <span className="text-[10.5px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase">
                                                ADD TO WISHLIST
                                            </span>
                                        </button>
                                    </div>
                                    <div className="ml-4 flex flex-row items-center justify-center">
                                        {/* <button type="button" className="flex flex-row ">
                                            <TbArrowsDownUp className="h-[15px] w-[15px] text-gray-500"></TbArrowsDownUp>
                                            <span className="text-[11px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase">
                                                compare
                                            </span>
                                        </button> */}
                                    </div>
                                </div>
                                <div className="max-h-[66px] max-w-[113.66px] mt-6">
                                    <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                        <div className="mr-2">
                                            <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                        </div>
                                        <div className="">
                                            Type: <span className="">Organic</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                        <div className="mr-2 ">
                                            <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                        </div>
                                        <div className="">
                                            MFG: <span>June 4.21</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                        <div className="mr-2">
                                            <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                        </div>
                                        <div className="">
                                            LIFE: <span className="">30 days</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="max-w-[330px] mt-6"></hr>
                                <div className="mt-6 max-h-[72.8px] max-w-[308.33px]">
                                    <div className="flex flex-row">
                                        <span className="text-gray-400 text-[.8125rem] capitalize">
                                            Category:
                                            <a
                                                href=""
                                                rel="tag"
                                                className="ml-2 text-gray-600 text-[.8125rem] capitalize"
                                            >
                                                Meats & Seafood
                                            </a>
                                        </span>
                                    </div>
                                    <div className="flex flex-row">
                                        <span className="text-gray-400 text-[.8125rem] capitalize">
                                            Tags:
                                            <a
                                                href=""
                                                rel="tag"
                                                className="ml-2 text-gray-600 text-[.8125rem] capitalize"
                                            >
                                                chicken,
                                            </a>
                                            <a
                                                href=""
                                                rel="tag"
                                                className="ml-1 text-gray-600 text-[.8125rem] capitalize"
                                            >
                                                natural,
                                            </a>
                                            <a
                                                href=""
                                                rel="tag"
                                                className="ml-1 text-gray-600 text-[.8125rem] capitalize"
                                            >
                                                organic
                                            </a>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
</div>
</div>

     );
}
 
export default ProductPopup;