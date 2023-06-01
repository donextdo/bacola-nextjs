import { FaStar } from "react-icons/fa";
import Image from "next/image";
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
import Description from "@/components/ViewItem/Details/Description";
import AdditionalInformation from "@/components/ViewItem/Details/AdditionalInformation";
import { Product } from "@/features/product/product";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addItem, updateItemQuantity } from "@/features/cart/cartSlice";
import { updateProductQuantity } from "@/features/product/productSlice";
import Review from "@/components/ViewItem/Details/Review";
import siteUrl from "../../../utils/siteUrl";
import default_image from "../../../assets/item/default_image.jpeg";
import { RecentlyViewProduct } from "@/components/RecentlyViewProduct/RecentlyViewProduct";
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
// interface ItemData {
//     description: string;
//     quantity: number;
//     price: number;
//     title:string;
//     // any other properties
//   }

const ItemPages = () => {
    const [data, setData] = useState<Product>({
        _id: "",
        isRecommended: false,
        isDiscount: false,
        isOrganic: false,
        isFavourite: false,
        discount: 0,
        rating: 0,
        front: "",
        back: "",
        side: "",
        title: "",
        isAvailable: false,
        price: 0,
        quantity: 0,
        brand: "",
        description: "",
        productQuantity: 0,
        skuNumber: "",
        count: 0,
        newprice: 0,
        type: "",
        review: 0,
        mfgDate: "",
        life: "",
        category: "",
        tags: "",
        speacialtag: "",
        additionalInformation: "",
        isBestSeller: false,
        isNewArrival:false
    });
    const [myCategory, setMyCategory] = useState([]);
    const [isColor, setIsColor] = useState(1);
    const [mainImage, setMainImage] = useState(data?.front);
    const [tag, setTag] = useState([]);
    const [allreview, setAllreview] = useState<Array<Review>>([]);
    const [hideBackImage, setHideBackImage] = useState(false);
    const [hideFrontImage, setHideFrontImage] = useState(false);
    const [hideSideImage, setHideSideImage] = useState(false);
    const [categoryName, setcategoryname] = useState();

    let id: any;
    if (typeof localStorage !== "undefined") {
        id = localStorage.getItem("id");
    }

    const [isClicked, setIsClicked] = useState<string | null>("front");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();
    const { itemId } = router.query;
    // console.log(itemId)

    const dispatch = useDispatch();
    const products = useSelector(
        (state: RootState) => state.product.products
    ) as Product[];

    useEffect(() => {
        fetchData();
    }, [itemId]);

    async function fetchData() {
        try {
            const res = await axios.get(`${baseUrl}/products/getOne/${itemId}`);
            console.log(res.data);
            setData(res.data);
            setTag(res.data.tags);
            if (res.data.back == "") {
                setHideBackImage(true);
            }
            if (res.data.front == "") {
                setHideFrontImage(true);
            }
            if (res.data.side == "") {
                setHideSideImage(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    let findcategory: any;
    if (data && data.category && data.category.length > 0) {
        findcategory = data.category[0];
    } else {
        findcategory = undefined;
    }
    console.log(findcategory);

    useEffect(() => {
        if (findcategory) {
            fetchData2();
        }
    }, [findcategory]);

    async function fetchData2() {
        try {
            const res = await axios.get(`${baseUrl}/categories/get/${findcategory}`);
            console.log(res.data);
            setMyCategory(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData3();
    }, []);
    async function fetchData3() {
        try {
            const res = await axios.get(`${baseUrl}/reviews/getReview/${itemId}`);
            setAllreview(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const item: Product | undefined = products.find(
        (item) => item._id === itemId
    );

    const handleIncrement = (data: Product) => {
        const newQuantity = (item?.count || 1) + 1;
        dispatch(updateItemQuantity({ itemId: data._id, count: newQuantity }));
        dispatch(
            updateProductQuantity({ productId: data._id, count: newQuantity })
        );
    };

    const handleDecrement = (data: Product) => {
        const newQuantity = Math.max((item?.count || 0) - 1, 0);
        dispatch(updateItemQuantity({ itemId: data._id, count: newQuantity }));
        dispatch(
            updateProductQuantity({ productId: data._id, count: newQuantity })
        );
    };

    const stars = Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
            <FaStar
                className={
                    i < (data?.rating as number) ? "text-yellow-500" : "text-gray-400"
                }
            />
        </span>
    ));

    const handleChange = (id: any) => {
        setIsColor(id);
    };

    // const handleWishlist = async (data: any) => {

    //     if (id) {
    //         const whishListObj = {
    //             whishList: [
    //                 {
    //                     productId: data._id,
    //                     front: data.front,
    //                     title: data.title,
    //                     price: data.price,
    //                     date: new Date().toLocaleDateString("en-US", {
    //                         month: "long",
    //                         day: "numeric",
    //                         year: "numeric",
    //                     }),
    //                     quantity: data.quantity,
    //                 },
    //             ],
    //         };

    //         try {
    //             const response = await axios.post(
    //                 `${baseUrl}/users/wishList/${id}`,
    //                 whishListObj
    //             );
    //             console.log(response.data); // do something with the response data
    //         } catch (error) {
    //             console.log(error); // handle the error
    //         }
    //     } else {
    //         router.push("/account");
    //     }
    // };

    const handleWishlist = async (data: any) => {
       
        if (id) {
            const whishListObj = {
                whishList: [
                    {
                        productId: data._id,
                        front: data.front,
                        title: data.title,
                        price: data.price,
                        date: new Date().toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        }),
                        quantity: data.quantity,
                    },
                ],
            };
    
            try {

            //authentication session handle
                const token = localStorage.getItem("token"); // Retrieve the token from local storage or wherever it's stored
                if (!token) {
                alert("Session expired")
                  router.push("/account");
                  return;
                }

                const config = {
                  headers: {
                    Authorization: token,
                  },
                };

                const response = await axios.post(
                    `${baseUrl}/users/wishList/${id}`,
                    whishListObj,
                    config,
                    
                );

                
                console.log(response.data); // do something with the response data
            } catch (error) {
                console.log(error); // handle the error 
                
                alert("Session expired")
                  router.push("/account");
                
            }
          } else {
            router.push("/account");
          }

    }

    const handleaddToCart = (data: any) => {
        dispatch(addItem(data));
        const newQuantity = (data.count || 0) + 1;
        dispatch(
            updateProductQuantity({ productId: data._id, count: newQuantity })
        );
        // dispatch(addItems({ product: data, count: item?.count }))
        console.log(data._id);
    };

    // console.log(item)

    const handleClick = (image: any) => {
        setMainImage(image);
    };
    let discountprice;
    discountprice = data.price * (data.discount / 100);
    let newprice = data.price - discountprice;

    const encodedUrl = encodeURIComponent(`${siteUrl}/item-preview/${itemId}`);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
    const pinterestShareUrl = `https://pinterest.com/pin/create/bookmarklet/?url=${encodedUrl}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    const redditShareUrl = `https://www.reddit.com/submit?url=${encodedUrl}`;
    const whatsappShareUrl = `https://wa.me/?text=${encodedUrl}`;

    const facebookShareClick = (e: any) => {
        e.preventDefault();
        window.open(
            facebookShareUrl,
            "facebook-share-dialog",
            "width=626,height=436"
        );
    };

    const twitterShareClick = (e: any) => {
        e.preventDefault();
        window.open(
            twitterShareUrl,
            "twitter-share-dialog",
            "width=626,height=436"
        );
    };

    const pinterestShareClick = (e: any) => {
        e.preventDefault();
        window.open(
            pinterestShareUrl,
            "pinterest-share-dialog",
            "width=626,height=436"
        );
    };

    const linkedinShareClick = (e: any) => {
        e.preventDefault();
        window.open(
            linkedinShareUrl,
            "linkedin-share-dialog",
            "width=626,height=436"
        );
    };

    const redditShareClick = (e: any) => {
        e.preventDefault();
        window.open(redditShareUrl, "reddit-share-dialog", "width=626,height=436");
    };

    const whatsappShareClick = (e: any) => {
        e.preventDefault();
        window.open(
            whatsappShareUrl,
            "whatsapp-share-dialog",
            "width=626,height=436"
        );
    };

    let yellowstars = [];
    let graystars = [];

    for (let i = 1; i <= data.review; i++) {
        yellowstars.push(<FaStar />);
    }
    for (let i = 1; i <= 5 - data.review; i++) {
        graystars.push(<FaStar />);
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        let catName: any = localStorage.getItem("catName");
        catName = catName?.replace(/"/g, "");
        setcategoryname(catName);
        console.log("catname: ", categoryName);
    });
    const breadcrumbs = [
        { title: "Home", url: "/" },
        { title: `${categoryName}`, url: `/item-preview/${itemId}` },
        { title: `${data.title}` },
    ];

    const MAX_TITLE_LENGTH = 20; // Set your desired character limit
    const [expanded, setExpanded] = useState(false);

    const titleToDisplay = expanded ? data.title : data.title.substring(0, MAX_TITLE_LENGTH) + "...";
    return (
        <>
            <div className="bg-[#f7f8fd] ">
                <div className="container mx-auto xl:px-40 px-5 m-8 py-6 ">
                    <div className=" pb-3">
                        <Breadcrumbs crumbs={breadcrumbs}></Breadcrumbs>
                    </div>
                    {/* working one */}
                    <div className=" bg-white drop-shadow rounded-md px-6 pt-10 mt-2 ">
                        <div className="w-full mb-[1.875rem]">
                            <h1 className=" capitalize text-[1.5rem] font-semibold " onClick={() => setExpanded(!expanded)}>
                                {data.title.length > 20 ? titleToDisplay : data.title}
                            </h1>
                            <div className="flex flex-row bg-white text-[0.75rem] ">
                                <span className="text-gray-400 ">Brands: </span>
                                <span className="ml-1"> {data.brand}</span>

                                <div className="text-gray-400 mx-3">|</div>
                                <span className="text-gray-400 ">
                                    <div className="flex flex-row max-h-[18px] max-w-[130.49px] items-center justify-center">
                                        <p className="text-md text-yellow-400 flex">
                                            {yellowstars}
                                        </p>
                                        <p className="text-md text-gray-400 flex">{graystars}</p>
                                    </div>
                                </span>
                                <span className="ml-1">
                                    <div className="uppercase  text-gray-400 font-semibold ml-2 text-[11px] flex items-center justify-center">
                                        {allreview.length} REVIEW
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
                                        {data?.speacialtag == "organic" && (
                                            <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
                                                {data.speacialtag}
                                            </div>
                                        )}
                                        {data?.speacialtag == "Recommended" && (
                                            <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                                                {data.speacialtag}
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="hover:cursor-pointer flex items-center justify-center px-12 "
                                        onClick={openModal}
                                    >
                                        <Image
                                            width={390}
                                            height={436}
                                            src={mainImage || data?.front}
                                            alt="mainImage"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]">
                                        <div
                                            className={`flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px] border ${isClicked === "side"
                                                ? "border-gray-500"
                                                : "border-gray-200"
                                                } mr-2 hover:cursor-pointer`}
                                            onClick={() => {
                                                handleClick(data?.side);
                                                setIsClicked("side");
                                            }}
                                        >
                                            {!hideSideImage ? (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={data?.side}
                                                    alt="Man looking at item at a store"
                                                />
                                            ) : (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={default_image}
                                                    alt="Man looking at item at a store"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className={`flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border ${isClicked === "front"
                                                ? "border-gray-500"
                                                : "border-gray-200"
                                                } mr-2 hover:cursor-pointer`}
                                            onClick={() => {
                                                handleClick(data?.front);
                                                setIsClicked("front");
                                            }}
                                        >
                                            {!hideFrontImage ? (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={data?.front}
                                                    alt="Man looking at item at a store"
                                                />
                                            ) : (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={default_image}
                                                    alt="Man looking at item at a store"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className={`flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border ${isClicked === "back"
                                                ? "border-gray-500"
                                                : "border-gray-200"
                                                } hover:cursor-pointer`}
                                            onClick={() => {
                                                handleClick(data?.back);
                                                setIsClicked("back");
                                            }}
                                        >
                                            {!hideBackImage ? (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={data?.back}
                                                    alt="Man looking at item at a store"
                                                />
                                            ) : (
                                                <Image
                                                    width={67}
                                                    height={67}
                                                    src={default_image}
                                                    alt="Man looking at item at a store"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full ">
                                <div className=" w-full">
                                    <div className=" flex flex-row">
                                        <span className="text-gray-400 line-through mr-2 my-1 font-[1.125rem] flex items-center justify-center">
                                            Rs {data?.price.toFixed(2)}
                                        </span>

                                        <span className="my-1 text-red-700 text-[1.625rem] font-semibold">
                                            Rs {newprice.toFixed(2)}
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
                                        <p className=" ">{data.description}</p>
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
                                            <button
                                                className="flex flex-row px-3 py-2"
                                                onClick={() => handleWishlist(data)}
                                            >
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
                                    <div className="max-h-[66px] w-full mt-6">
                                        {data.type && (
                                            <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                                <div className="mr-2">
                                                    <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                                </div>
                                                <div className="">
                                                    Type: <span className="">{data.type}</span>
                                                </div>

                                            </div>
                                        )}
                                        {data.mfgDate && (
                                            <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                                <div className="mr-2 ">
                                                    <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                                </div>

                                                <div className="">
                                                    MFG: <span>{data.mfgDate}</span>
                                                </div>

                                            </div>
                                        )}

                                        {data.life && (
                                            <div className="flex flex-row text-[.75rem] place-items-start mb-1">
                                                <div className="mr-2">
                                                    <BsCheckLg className="h-[15px] w-[15px] text-green-600 stroke-[1px]"></BsCheckLg>
                                                </div>

                                                <div className="">
                                                    LIFE: <span className="">{data.life}</span>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                    <hr className="max-w-[330px] mt-6"></hr>
                                    <div className="mt-6 max-h-[72.8px] max-w-[308.33px]">
                                        {myCategory.length > 0 && (
                                            <div className="flex flex-row">
                                                <span className="text-gray-400 text-xs capitalize">
                                                    Category:
                                                    {myCategory.map((cat: any, index) => (
                                                        <a
                                                            key={index}
                                                            href=""
                                                            rel="tag"
                                                            className="ml-2 text-gray-600 text-xs capitalize"
                                                        >
                                                            {cat.name}
                                                        </a>
                                                    ))}
                                                </span>
                                            </div>
                                        )}

                                        {tag.length > 0 && (
                                            <div className="flex">
                                                <span className="text-gray-400 text-xs capitalize">
                                                    Tags:
                                                </span>
                                                <div className="flex">
                                                    {tag.map((tag: any, index: number) => (
                                                        <div key={index} className="flex">
                                                            <div className="text-xs">{index > 0 && ","}</div>
                                                            <a
                                                                href=""
                                                                rel="tag"
                                                                className="ml-2 text-gray-600 text-xs capitalize flex"
                                                            >
                                                                {tag.name}
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-row gap-1.5 max-w-[229px] mt-6">
                                            <div className="">
                                                <a
                                                    href={facebookShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={facebookShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-blue-700 flex items-center justify-center">
                                                        <FaFacebookF className="text-white"></FaFacebookF>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="">
                                                <a
                                                    href={twitterShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={twitterShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-cyan-500 flex items-center justify-center">
                                                        <FaTwitter className="text-white"></FaTwitter>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="">
                                                <a
                                                    href={pinterestShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={pinterestShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-red-600 flex items-center justify-center">
                                                        <FaPinterest className="text-white"></FaPinterest>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="">
                                                <a
                                                    href={linkedinShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={linkedinShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-cyan-700 flex items-center justify-center">
                                                        <FaLinkedin className="text-white"></FaLinkedin>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="">
                                                <a
                                                    href={redditShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={redditShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-orange-600 flex items-center justify-center">
                                                        <FaReddit className="text-white"></FaReddit>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="">
                                                <a
                                                    href={whatsappShareUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={whatsappShareClick}
                                                >
                                                    <div className="h-[34px] w-[34px] rounded-full bg-green-500 flex items-center justify-center">
                                                        <FaWhatsapp className="text-white"></FaWhatsapp>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-4 mt-10 xl:mt-0">
                                    {/* <div className="flex flex-row items-center justify-center max-h-[38px] w-full rounded  bg-red-100  text-[.8125rem] p-6 text-red-800">
                                        Covid-19 Info: We keep delivering.
                                    </div> */}
                                    <div className=" bg-gray-100  text-[.8125rem] p-6 py-10 space-y-8 mt-4">
                                        <div className="flex flex-row place-items-center">
                                            <div className="mr-4">
                                                <FaShippingFast className="min-w-[30px] min-h-[20px]"></FaShippingFast>
                                            </div>
                                            <div>Free Shipping apply to all orders over Rs 100</div>
                                        </div>
                                        <div className="flex flex-row place-items-center ">
                                            <div className="mr-4">
                                                <GiMedicinePills className="min-w-[30px] min-h-[20px]"></GiMedicinePills>
                                            </div>
                                            <div>Guranteed 100% Organic from natural farmas</div>
                                        </div>
                                        {/* <div className="flex flex-row place-items-center ">
                                            <div className="mr-4">
                                                <HiOutlineCurrencyDollar className="min-w-[30px] min-h-[20px] "></HiOutlineCurrencyDollar>
                                            </div>
                                            <div>1 Day Returns if you change your mind</div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white drop-shadow rounded-md mt-10 pb-5">
                        <div className=" flex flex-col sm:flex-row gap-4 sm:gap-8  justify-start text-left text-gray-400 py-5 px-6">
                            <button
                                className={`   ${isColor === 1 ? "text-black" : "text-[#c2c2d3]"
                                    }`}
                                onClick={() => handleChange(1)}
                            >
                                DESCRIPTION
                            </button>
                            {data.additionalInformation?.length > 0 && (
                                <button
                                    className={`  ${isColor === 2 ? "text-black" : "text-[#c2c2d3]"
                                        }`}
                                    onClick={() => handleChange(2)}
                                >
                                    ADDITIONAL INFORMATION
                                </button>
                            )}
                            <button
                                className={`   ${isColor === 3 ? "text-black" : "text-[#c2c2d3]"
                                    }`}
                                onClick={() => handleChange(3)}
                            >
                                REVIEWS({allreview.length})
                            </button>
                        </div>
                        <hr />
                        <div className="mt-4 px-6">
                            {isColor === 1 ? (
                                <Description data={data} />
                            ) : isColor === 2 ? (
                                <AdditionalInformation data={data} />
                            ) : (
                                <Review itemId={itemId} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto xl:px-40 px-5">
                    <RelatedProduct findcategory={findcategory} />
                </div>
                <div className="pb-20 pt-20 container mx-auto xl:px-40 px-5">
                    <RecentlyViewProduct />
                </div>

                {/* mobile view */}
                <div className="lg:hidden">
                    <div className="fixed bottom-0 w-full h-20 bg-white flex items-center justify-between z-50">
                        <div className="grid grid-cols-3 gap-2 min-h-[44px] min-w-[130px] pl-4">
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

                            <button
                                type="button"
                                className="px-4 hover:bg-yellow-400 border-gray-500 bg-gray-300  text-[20px]   rounded-full  font-medium"
                                onClick={() => handleIncrement(data)}
                            >
                                +
                            </button>
                        </div>
                        <div className="pr-4">
                            <button
                                type="button"
                                className=" bg-blue-900 text-white px-6 md:px-12 py-3 rounded-full text-[13px]"
                                onClick={() => handleaddToCart(data)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div >

            {/* Modal or Lightbox */}
            {
                isModalOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black  flex items-center justify-center">
                        <button
                            className="absolute top-2 right-8 text-white text-4xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="relative">
                            {/* Close Icon */}

                            {/* Full screen image */}
                            <div className="flex items-center justify-center">
                                <Image
                                    src={mainImage || data?.front}
                                    alt="mainImage"
                                    width={700} // Adjust the width value as per your requirements
                                    height={700} // Adjust the height value as per your requirements
                                    className="max-w-full max-h-full"
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ItemPages;