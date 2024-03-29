import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FC, useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { Product } from "./product";
import { useDispatch, useSelector } from "react-redux";
import { calSubTotal } from "../cart/cartSlice";
import { updateProductQuantity } from "./productSlice";

import { RootState } from "@/redux/store";
import Review from "@/components/ViewItem/Details/Review";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { logOut } from "../../../utils/logout";

const ProductPopup = ({ setProductPopup, proId }: any) => {
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
    isNewArrival: false,
    imageArray: "",
  });
  const [mainImage, setMainImage] = useState(data?.front);
  let id: any;
  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }
  const [allreview, setAllreview] = useState<Array<Review>>([]);
  const [tag, setTag] = useState([]);
  const [myCategory, setMyCategory] = useState([]);
  const router = useRouter();
  let [newQuantity, setNewQuantity] = useState<number>(1);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(`${baseUrl}/products/getOne/${proId}`);
      setData(res.data);
      setTag(res.data.tags);
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  }

  let findcategory: any;
  if (data && data.category && data.category.length > 0) {
    findcategory = data.category[0];
  } else {
    findcategory = undefined;
  }

  useEffect(() => {
    if (findcategory) {
      fetchData2();
    }
  }, [findcategory]);

  async function fetchData2() {
    try {
      const res = await axios.get(`${baseUrl}/categories/get/${findcategory}`);
      setMyCategory(res.data);
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  }

  useEffect(() => {
    fetchData3();
  }, []);
  async function fetchData3() {
    try {
      const res = await axios.get(`${baseUrl}/reviews/getReview/${proId}`);
      setAllreview(res.data);
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  }

  const item: Product | undefined = products.find((item) => item._id === proId);

  const handleIncrement = (data: Product) => {
    setCount(count + 1);
    dispatch(calSubTotal(12));
  };

  const handleDecrement = (data: Product) => {
    if (count > 0) {
      setCount(count - 1);
    }
    dispatch(calSubTotal(12));
  };

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
        let token: any;
        if (typeof localStorage !== "undefined") {
          token = localStorage.getItem("token");
        }

        const config = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          `${baseUrl}/users/wishList/${id}`,
          whishListObj,
          config
        );
      } catch (error: any) {
        if (error?.response?.status == 403 || error?.response?.status == 401) {
          Swal.fire({
            width: 700,
            color: "black",
            background: "white",
            html: `
                      <div style="text-align: left;">
                        <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                        <hr style="margin-bottom: 20px;" />
                        <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                        <hr style="margin-bottom: 20px;" />
                      </div>
                    `,
            showConfirmButton: true,
            confirmButtonText: "Ok",
            confirmButtonColor: "bg-primary",
            heightAuto: true,
            customClass: {
              confirmButton:
                "bg-primary text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
            },
          }).then((result) => {
            if (result.value) {
              logOut();
              router.push("/account");
            }
          });
        }
      }
    } else {
      router.push("/account");
    }
  };

  const handleaddToCart = (data: any) => {
    const cartItemsString = localStorage.getItem("cartItems");
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    const itemIndex = items.findIndex((item: any) => item._id === data._id);

    if (itemIndex === -1) {
      const newItem = { ...data, count: count };
      items.push(newItem);
      localStorage.setItem("cartItems", JSON.stringify(items));
      dispatch(calSubTotal(12));
    } else {
      items[itemIndex].count += count;
      localStorage.setItem("cartItems", JSON.stringify(items));
      dispatch(calSubTotal(12));
    }

    Swal.fire({
      title:
        '<span style="font-size: 18px">Item has been added to your card</span>',
      width: 400,
      timer: 1500,
      // padding: '3',
      color: "white",
      background: "#00B853",
      showConfirmButton: false,
      heightAuto: true,
      position: "bottom-end",
    });
  };

  let discountprice;
  discountprice = data.price * (data.discount / 100);
  let newprice = data.price - discountprice;

  const handleClick = (image: any) => {
    setMainImage(image);
  };

  const handleclose = () => {
    setProductPopup(false);
  };

  let yellowstars = [];
  let graystars = [];

  for (let i = 1; i <= data.review; i++) {
    yellowstars.push(<FaStar />);
  }
  for (let i = 1; i <= 5 - data.review; i++) {
    graystars.push(<FaStar />);
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-50">
      <div className="py-6 px-4 mx-2 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-full lg:w-[1024px]">
        <div className="flex justify-end px-2">
          <button
            onClick={handleclose}
            className="bg-[#c2c2d3] rounded-full w-8 h-8 flex justify-center items-center"
          >
            <IoClose className="text-white" />
          </button>
        </div>
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
                  <p className="text-md text-yellow-400 flex">{yellowstars}</p>
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
                <div className="hover:cursor-pointer flex items-center justify-center px-12 ">
                  <img
                    width={390}
                    height={436}
                    src={mainImage || data?.front}
                    alt="mainImage"
                  />
                </div>

                <div className="flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]">
                  <div
                    className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]  border border-gray-400 mr-2 hover:cursor-pointer"
                    onClick={() => handleClick(data?.side)}
                  >
                    <img
                      width={67}
                      height={67}
                      src={data?.side}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div
                    className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 mr-2 hover:cursor-pointer"
                    onClick={() => handleClick(data?.front)}
                  >
                    <img
                      width={67}
                      height={67}
                      src={data?.front}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div
                    className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 hover:cursor-pointer"
                    onClick={() => handleClick(data?.back)}
                  >
                    <img
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
                        {count}
                      </div>
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
                      className=" bg-primary text-white min-h-[34px] min-w-[140px] rounded-full  ml-4"
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
                  <div className="ml-4 flex flex-row items-center justify-center"></div>
                </div>
                <div className="max-h-[66px]  mt-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
