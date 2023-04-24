import React, { useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/stylesswiper.module.css";

// import required modules
import { Pagination } from "swiper";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";

export default function HomeSlider() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-row mb-9">
        <div className="lg:w-1/4"></div>
        <div className="mt-4 lg:w-3/4 md:w-full w-full cursor-pointer">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=" mySwiper"
            // style={{ height: "550px" }}
          >
            <SwiperSlide>
              <div className="relative">
                <Image
                  src="/images/slider-image-1.jpg"
                  alt="Slider- Image"
                  className="w-full h-1/3 md:h-[260px] lg:h-[500px]"
                  width={500}
                  height={200}
                />
                <div className="absolute ml-4 lg:m-14 inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] lg:max-w-[610px] lg:max-h-[372px] md:justify-center md:max-w-[450px]">
                  <div className="flex flex-row items-center">
                    <h1 className="text-black text-sm uppercase">
                      Exclusive offer
                    </h1>
                    <div className="bg-gradient-to-br from-green-400 to-green-200 p-2 rounded-full text-sm ml-3 mt-0">
                      -20% OFF
                    </div>
                  </div>

                  <h2 className="text-black text-2xl font-bold mt-4 lg:mt-6 lg:text-5xl">
                    Specialist in the grocery store
                  </h2>
                  <h1 className="text-black text-base mt-3 lg:mt-6">
                    Only this week. Don't miss...
                  </h1>

                  <h1 className="text-black text-base mt-3 lg:mt-6">
                    from
                    <span className="text-red-600 font-semibold text-2xl lg:text-3xl">
                      {" "}
                      $ 7.99{" "}
                    </span>
                  </h1>
                  <div className="bg-[#2bbef9] p-2 flex flex-row rounded-full text-sm w-32 text-white font-semibold px-4 justify-between mt-3 lg:mt-6">
                    Shop Now
                    <span>
                      <BsArrowRight className="text-lg"></BsArrowRight>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                src="/images/slider-image-2.jpg"
                alt="Slider- Image"
                className="w-full h-1/3 md:h-[260px] lg:h-[500px]"
                width={500}
                height={200}
              />
              <div className="absolute ml-4 lg:m-14 inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] lg:max-w-[610px] lg:max-h-[372px] px-6 md:justify-center lg:mt-24 md:max-w-[450px]">
                <div className="flex flex-row lg:mt-6 items-center">
                  <h1 className="text-black text-sm uppercase">
                    Exclusive offer
                  </h1>
                  <div className="bg-gradient-to-br from-green-400 to-green-200 p-2 rounded-full text-sm ml-3 mt-0">
                    -30% OFF
                  </div>
                </div>

                <h2 className="text-black text-2xl font-bold mt-4 lg:mt-6 lg:text-5xl">
                  Feed your family the best
                </h2>
                <h1 className="text-black text-base mt-3 lg:mt-6">
                  Only this week. Don't miss...
                </h1>

                <h1 className="text-black text-base mt-3 lg:mt-6">
                  from
                  <span className="text-red-600 font-semibold text-2xl lg:text-3xl">
                    {" "}
                    $ 8.99{" "}
                  </span>
                </h1>
                <div className="bg-[#2bbef9] p-2 flex flex-row rounded-full text-sm w-32 text-white font-semibold px-4 justify-between mt-3 lg:mt-6">
                  Shop Now
                  <span>
                    <BsArrowRight className="text-lg"></BsArrowRight>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                src="/images/slider-3.jpg"
                alt="Slider- Image"
                className="w-full h-1/3 md:h-[260px] lg:h-[500px]"
                width={500}
                height={200}
              />
              <div className="absolute ml-4 lg:m-14 inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] lg:max-w-[610px] lg:max-h-[372px] px-6 md:justify-center lg:mt-24 md:max-w-[450px]">
                <div className="flex flex-row lg:mt-6 items-center">
                  <h1 className="text-black text-sm uppercase">
                    Exclusive offer
                  </h1>
                  <div className="bg-gradient-to-br from-green-400 to-green-200 p-2 rounded-full text-sm ml-3 mt-0">
                    -40% OFF
                  </div>
                </div>

                <h2 className="text-black text-2xl font-bold mt-4 lg:mt-6 lg:text-5xl">
                  Grocery full of inspiration
                </h2>
                <h1 className="text-black text-base mt-3 lg:mt-6">
                  Only this week. Don't miss...
                </h1>

                <h1 className="text-black text-base mt-3 lg:mt-6">
                  from
                  <span className="text-red-600 font-semibold text-2xl lg:text-3xl">
                    {" "}
                    $ 6.99{" "}
                  </span>
                </h1>
                <div className="bg-[#2bbef9] p-2 flex flex-row rounded-full text-sm w-32 text-white font-semibold px-4 justify-between mt-3 lg:mt-6">
                  Shop Now
                  <span>
                    <BsArrowRight className="text-lg"></BsArrowRight>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
