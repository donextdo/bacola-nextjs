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
import Description from "./Details/Description";
import AdditionalInformation from "./Details/AdditionalInformation";
import Review from "./Details/Review";

export const ViewItem = () => {
  const [newCount, setNewCount] = useState(1);
  const [isClick, setIsClick] = useState(false);
  const [myObject, setMyObject] = useState(null);
  const [isColor, setIsColor] = useState(1);


  useEffect(() => {
    const storedObject = localStorage.getItem("item");

    if (storedObject) {
      setMyObject(JSON.parse(storedObject));
    }
  }, [newCount]);

  const increment = () => {
    setIsClick(true);
    setNewCount(newCount + 1);
  };

  const dicrement = () => {
    setIsClick(true);
    setNewCount(newCount - 1);
    if (newCount == 1) {
      setNewCount(1);
    }
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FaStar
        className={
          i < (myObject?.rating as number) ? "text-yellow-500" : "text-gray-400"
        }
      />
    </span>
  ));

  const handleChange = (id: any) => {
    setIsColor(id);
  }
  return (
    <div className="container mx-auto m-8 p-6">
      <div className=" bg-white drop-shadow-2xl rounded-md">
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

        <div className="flex flex-wrap min-h-[579.2px] lg:min-w-[757px] md:min-w-[757px]">
          <div className="lg:col-span-5 lg:w-1/3 md:w-1/2">
            <div className="relative  max-h-[579.2px] max-w-[466.66px] ">
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
              <div className="hover:cursor-pointer flex items-center justify-center px-12 ">
                <Image
                  width={390}
                  height={436}
                  src={myObject?.image}
                  alt="Man looking at item at a store"
                />
              </div>

              <div className="flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]">
                <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]  border border-gray-400 mr-2 hover:cursor-pointer">
                  <Image
                    width={67}
                    height={67}
                    src={myObject?.image}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 mr-2 hover:cursor-pointer">
                  <Image
                    width={67}
                    height={67}
                    src={myObject?.sideimage}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 hover:cursor-pointer">
                  <Image
                    width={67}
                    height={67}
                    src={myObject?.backside}
                    alt="Man looking at item at a store"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:w-2/3 md:w-1/2 justify-end">
            <div className="grid lg:grid-cols-2 grid-cols-1 min-h-[579.2px] lg:min-w-[350.66px] px-6 justify-end">
              <div className="min-h-[579.2px] max-w-full ">
                <div className=" flex flex-row mt-8 md:mt-0 lg:mt-0">
                  <span className="text-gray-400 line-through mr-2 my-1 font-[1.125rem] flex items-center justify-center">
                    {myObject?.price}
                  </span>

                  <span className="my-1 text-red-700 text-[1.625rem] font-semibold">
                    $7.25
                  </span>
                </div>
                {myObject?.isAvailable ? (
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
                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                    luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                    litora torquent
                  </p>
                </div>
                {/* <div className="fixed bottom-0 left-0 right-0 md:relative md:flex md:flex-row md:items-center md:justify-between md:max-w-[130px] md:mx-auto md:mt-10 md:mb-4 md:px-4">
                <div className="w-full flex items-center justify-between min-h-[44px] md:min-h-auto md:flex-1 md:grid md:grid-cols-3"> */}
                <div className=" fixed md:visible w-full lg:min-h-[44px] md:relative md:flex md:flex-row md:w-auto lg:max-w-[130px] md:min-h-[44px] md:max-w-[130px] mt-10 flex flex-row">
                  <div className=" w-full flex grid-cols-3 min-h-[44px] min-w-[130px]">
                    <button
                      type="button"
                      className="hover:bg-yellow-400 px-4 border-gray-500 bg-gray-300 text-[25px]  rounded-full font-medium"
                      onClick={dicrement}
                    >
                      -
                    </button>

                    {isClick ? (
                      <div className=" flex items-center justify-center w-full text-center ">
                        {newCount}
                      </div>
                    ) : (
                      <div className=" flex items-center justify-center w-full text-center ">
                        {myObject?.count}
                      </div>
                    )}
                    <button
                      type="button"
                      className="px-4 hover:bg-yellow-400 border-gray-500 bg-gray-300  text-[20px]   rounded-full  font-medium"
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
                <div className="flex flex-row mt-10  ">
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
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-blue-700 flex items-center justify-center">
                          <FaFacebookF className="text-white"></FaFacebookF>
                        </div>
                      </a>
                    </div>
                    <div className="grid lg:grid-cols-6 ml-1">
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-cyan-500 flex items-center justify-center">
                          <FaTwitter className="text-white"></FaTwitter>
                        </div>
                      </a>
                    </div>
                    <div className="grid lg:grid-cols-6 ml-1">
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-red-600 flex items-center justify-center">
                          <FaPinterest className="text-white"></FaPinterest>
                        </div>
                      </a>
                    </div>
                    <div className="grid lg:grid-cols-6 ml-1">
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-cyan-700 flex items-center justify-center">
                          <FaLinkedin className="text-white"></FaLinkedin>
                        </div>
                      </a>
                    </div>
                    <div className="grid lg:grid-cols-6 ml-1">
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-orange-600 flex items-center justify-center">
                          <FaReddit className="text-white"></FaReddit>
                        </div>
                      </a>
                    </div>
                    <div className="grid lg:grid-cols-6 ml-1">
                      <a href="">
                        <div className="h-[34px] w-[34px] rounded-full bg-green-500 flex items-center justify-center">
                          <FaWhatsapp className="text-white"></FaWhatsapp>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-h-[260px] max-w-[413.2px] lg:ml-4 mt-3">
                <div className="flex flex-row items-center justify-center max-h-[38px] max-w-full lg:min-w-[260px] rounded  bg-red-100 ml-4 text-[.8125rem] p-6 text-red-800">
                  Covid-19 Info: We keep delivering.
                </div>
                <div className="lg:min-h-[228px] lg:min-w-[260px] min-h-[210px] max-w-[413.2px] rounded  bg-gray-100 ml-4 text-[.8125rem] p-6 mt-4">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow-2xl rounded-md mt-10 pb-5">
        <div className=' flex space-x-8 text-left text-gray-400 py-5 px-6'>
          <button className={`   ${isColor === 1 ? 'text-black' : 'text-[#c2c2d3]'}`}
            onClick={() => handleChange(1)}>DESCRIPTION</button>
          <button className={`  ${isColor === 2 ? 'text-black' : 'text-[#c2c2d3]'}`}
            onClick={() => handleChange(2)}>ADDITIONAL INFORMATION</button>
          <button className={`   ${isColor === 3 ? 'text-black' : 'text-[#c2c2d3]'}`}
            onClick={() => handleChange(3)}>REVIEW</button>
        </div>
        <hr />
        <div className='mt-4 px-6'>
          {isColor === 1 ?
            <Description />
            :
            isColor === 2 ?
              <AdditionalInformation /> :
              <Review />

          }
        </div>
      </div>
    </div>
  );
};
