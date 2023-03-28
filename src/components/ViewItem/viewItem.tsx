import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import Swiper from "swiper";

export const ViewItem = () => {
  const [count, setCount] = useState(1);
  const [myObject, setMyObject] = useState(null);

  useEffect(() => {
    const storedObject = localStorage.getItem("item");
    if (storedObject) {
      setMyObject(JSON.parse(storedObject));
    }
  }, []);

  const increment = () => {
    return setCount(count + 1);
  };

  const dicrement = () => {
    return setCount(count - 1);
  };

  // useEffect(() => {
  //   console.log(props.router.query.title);
  // }, [props.router.query]);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FaStar
        className={
          i < (myObject?.rating as number) ? "text-yellow-500" : "text-gray-400"
        }
      />
    </span>
  ));

  return (
    <div className="container mx-auto m-8 p-8 bg-white drop-shadow-2xl">
      <div className="min-h-[67.8px] max-w-[757px] mb-[1.875rem]">
        <h1 className="min-h-[28.8px] max-w-[757px] capitalize text-[1.5rem] font-semibold">
          {myObject?.title}
        </h1>
        <div className="flex flex-row min-h-[24px] max-w-[757px] bg-white text-[0.75rem] ">
          <span className="text-gray-400 ">Brands: </span>
          <span className="ml-1"> Welch's</span>

          <div className="text-gray-400 mx-3">|</div>
          <span className="text-gray-400 ">
            <div className="flex flex-row max-h-[18px] max-w-[130.49px] items-center justify-center">
              {stars}
            </div>
          </span>
          <span className="ml-1">
            <div className="uppercase  text-gray-400 font-semibold ml-2 text-[11px] flex items-center justify-center">
              1 review
            </div>
          </span>

          <div className="text-gray-400 mx-3">|</div>
          <span className="text-gray-400 ">SKU: </span>
          <span className="ml-1">ZU49VOR</span>
        </div>
      </div>

      <div className="flex flex-wrap min-h-[579.2px] min-w-[757px]">
        {/* <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1"> */}
        <div className="lg:col-span-5 lg:w-1/3 md:w-1/2">
          <div className="relative  max-h-[579.2px] max-w-[466.66px] ">
            <div className="min-w-[436.66px] min-h-[400px] ">
              <div className="absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2">
                {myObject?.isDiscount && (
                  <div className=" font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
                    {myObject?.discount != undefined ? myObject?.discount : 0}%
                  </div>
                )}
                {myObject?.isRecommended && (
                  <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                    Recommended
                  </div>
                )}
                {myObject?.isOrganic && (
                  <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
                    organic
                  </div>
                )}
              </div>
              <div className="hover:cursor-pointer flex-auto">
                <Image
                  width={390}
                  height={436}
                  src={myObject?.image}
                  alt="Man looking at item at a store"
                />
              </div>
            </div>
            <div className="flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]">
              <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]  border border-gray-400 mr-2 hover:cursor-pointer">
                <Image
                  width={67}
                  height={67}
                  src="data:image/jpeg;base64,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"
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 mr-2 hover:cursor-pointer">
                <Image
                  width={67}
                  height={67}
                  src="data:image/jpeg;base64,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"
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 hover:cursor-pointer">
                <Image
                  width={67}
                  height={67}
                  src="data:image/jpeg;base64,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"
                  alt="Man looking at item at a store"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:w-2/3 md:w-1/2">
          <div className="grid lg:grid-cols-2 grid-cols-1 min-h-[579.2px] min-w-[350.66px] px-6 ">
            <div className="min-h-[579.2px] max-w-[308.33px]">
              <div className=" flex flex-row mt-8 lg:mt-0">
                <span className="text-gray-400 line-through mr-2 my-1 font-[1.125rem] flex items-center justify-center">
                  {myObject?.price}
                </span>

                <span className="my-1 text-red-700 text-[1.625rem] font-semibold">
                  $7.25
                </span>
              </div>
              <div className="font-medium py-2 px-2 mt-2 max-h-[26px] max-w-[68.35px] bg-emerald-100 text-green-600 rounded-full text-[.75rem] flex items-center justify-center uppercase tracking-tighter">
                {myObject?.isAvailable ? "In Stock" : "Out of Stock"}
              </div>
              <div className="lg:max-h-[88px] lg:max-w-[308.33px]  max-h-[64px] max-w-[413.2px] mt-6 text-[.8125rem]">
                <p className=" ">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent
                </p>
              </div>
              <div className=" min-h-[44px] max-w-[130px]  mt-6 flex flex-row">
                <div className=" w-full flex grid-cols-3 min-h-[44px] min-w-[130px]">
                  <button
                    type="button"
                    className="px-4 border-gray-500 bg-gray-300 text-[25px]  rounded-full font-medium"
                    onClick={dicrement}
                  >
                    -
                  </button>
                  <div className=" flex items-center justify-center w-full text-center ">
                    {myObject?.count}
                  </div>
                  <button
                    type="button"
                    className="px-4  border-gray-500 bg-gray-300  text-[20px]   rounded-full  font-medium"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className=" bg-blue-900 text-white min-h-[34px] min-w-[160.8px] rounded-full w-full ml-4"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex flex-row mt-6">
                <div className="max-h-[33px] max-w-[135px] bg-white border border-gray-600 rounded-[2.0625rem] hover:cursor-pointer">
                  <div className="flex flex-row px-3 py-2">
                    <FaHeart className="h-[15px] w-[15px] text-gray-500"></FaHeart>
                    <span className="text-[10.5px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase">
                      ADD TO WISHLIST
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex flex-row items-center justify-center">
                  <button type="button" className="flex flex-row ">
                    <TbArrowsDownUp className="h-[15px] w-[15px] text-gray-500"></TbArrowsDownUp>
                    <span className="text-[11px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase">
                      compare
                    </span>
                  </button>
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
                    Type: <span className="">30 days</span>
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
                <div className="flex flex-row max-h-[34px] max-w-[229px] mt-6">
                  <div className="grid lg:grid-cols-6 ">
                    <div className="h-[34px] w-[34px] rounded-full bg-blue-700 flex items-center justify-center">
                      <FaFacebookF className="text-white"></FaFacebookF>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-6 ml-1">
                    <div className="h-[34px] w-[34px] rounded-full bg-cyan-500 flex items-center justify-center">
                      <FaTwitter className="text-white"></FaTwitter>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-6 ml-1">
                    <div className="h-[34px] w-[34px] rounded-full bg-red-600 flex items-center justify-center">
                      <FaPinterest className="text-white"></FaPinterest>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-6 ml-1">
                    <div className="h-[34px] w-[34px] rounded-full bg-cyan-700 flex items-center justify-center">
                      <FaLinkedin className="text-white"></FaLinkedin>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-6 ml-1">
                    <div className="h-[34px] w-[34px] rounded-full bg-orange-600 flex items-center justify-center">
                      <FaReddit className="text-white"></FaReddit>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-6 ml-1">
                    <div className="h-[34px] w-[34px] rounded-full bg-green-500 flex items-center justify-center">
                      <FaWhatsapp className="text-white"></FaWhatsapp>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="min-h-[260px] max-w-[650px] lg:min-h-[579.2px] lg:min-w-[308.33px] bg-cyan-200"> */}{" "}
            <div className="max-h-[260px] max-w-[413.2px] lg:ml-4 ">
              <div className="flex flex-row items-center justify-center max-h-[38px] min-w-[260px] rounded  bg-red-200 ml-4 text-[.8125rem] p-6 text-red-800">
                Covid-19 Info: We keep delivering.
              </div>
              <div className="lg:min-h-[228px] lg:min-w-[260px] min-h-[210px] max-w-[413.2px] rounded  bg-gray-200 ml-4 text-[.8125rem] p-6 mt-4">
                <div className="flex flex-row place-items-center">
                  <div className="mr-4">
                    <FaShippingFast className="min-w-[30px] min-h-[20px]"></FaShippingFast>
                  </div>
                  <div>Free Shipping apply to all orders over $100</div>
                </div>
                <div className="flex flex-row place-items-center mt-6">
                  <div className="mr-4">
                    <GiMedicinePills className="min-w-[30px] min-h-[20px]"></GiMedicinePills>
                  </div>
                  <div>Guranteed 100% Organic from natural farmas</div>
                </div>
                <div className="flex flex-row place-items-center mt-6">
                  <div className="mr-4">
                    <HiOutlineCurrencyDollar className="min-w-[30px] min-h-[20px] "></HiOutlineCurrencyDollar>
                  </div>
                  <div>1 Day Returns if you change your mind</div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="min-h-[436.66px] max-w-[392.73px] bg-pink-300 "></div>
          <div className="min-h-[436.66px] min-w-[392.73px] bg-green-300 ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-0">
              <div className="min-h-[579.2px] min-w-[308.33px] bg-cyan-400"></div>
              <div className="min-h-[260px] max-w-[650px] lg:min-h-[579.2px] lg:min-w-[308.33px] bg-cyan-200"></div>
            </div>
          </div>
        </div> */
}
