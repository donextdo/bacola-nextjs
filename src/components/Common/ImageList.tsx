import Image from "next/image";
import banner1 from "../../../assets/home/bacola-banner-01.jpg";
import banner2 from "../../../assets/home/bacola-banner-02.jpg";
import banner3 from "../../../assets/home/banner-box.jpg";
import banner4 from "../../../assets/home/bacola-banner-04.jpg";
import { BsArrowRight } from "react-icons/bs";

export const ImageOne = () => {
  return (
    <div>
      <div className="mt-9 relative">
        <Image
          src={banner1}
          alt="banner - Image"
          className="mb-0 h-[220px] w-full rounded-md lg:w-[430px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] lg:max-w-[610px] lg:max-h-[372px] p-8 lg:mt-3 md:justify-center md:mt-14 md:max-w-[450px]">
          <div className="flex flex-row  mt-3 items-center">
            <h1 className="text-green-500 text-sm uppercase font-bold">
              Weekend discount 40%
            </h1>
          </div>

          <h2 className="text-gray-600 text-2xl font-semibold mt-4 lg:text-2xl capitalize">
            legumes & cereals
          </h2>
          <h1 className="text-gray-400 text-xs mt-3  capitalize">
            Feed your family the best
          </h1>
          <div className="bg-gray-300 py-2  flex flex-row rounded-full text-[13px] w-[100px] text-white font-bold px-4 justify-between mt-3 lg:mt-6">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImageTwo = () => {
  return (
    <div className="mt-9 relative">
      <Image
        src={banner2}
        alt="banner - Image"
        className="mb-0 h-[220px] w-full rounded-md lg:w-[430px] lg:ml-7"
      />
      <div className="absolute inset-0 flex flex-col justify-center max-w-[390px] lg:mt-3 max-h-[290px] lg:max-w-[610px] lg:max-h-[372px] p-8 md:justify-center md:mt-14 md:max-w-[450px]">
        <div className="flex flex-row  mt-3 items-center">
          <h1 className="text-green-500 text-sm uppercase font-bold">
            Weekend discount 40%
          </h1>
        </div>

        <h2 className="text-gray-600 text-2xl font-semibold mt-4 lg:text-2xl capitalize">
          dairy & eggs
        </h2>
        <h1 className="text-gray-400 text-xs mt-3  capitalize">
          A different kind of grocery store
        </h1>

        <div className="bg-gray-300 py-2  flex flex-row rounded-full text-[13px] w-[100px] text-white font-bold px-4 justify-between mt-3 lg:mt-6">
          Shop Now
        </div>
      </div>
    </div>
  );
};

export const ImageThree = () => {
  return (
    <div className="mt-9 relative lg:mt-0">
      <Image
        src={banner3}
        alt="banner - Image"
        className="mb-0 h-[220px] w-full rounded-md lg:h-[403px] lg:w-[270px] "
      />
      <div className="absolute inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] md:justify-center md:mt-14 md:max-w-[450px] lg:ml-7 lg:mt-0">
        <div className="flex flex-row  mt-3 lg:mt-6 items-center">
          <h1 className="text-white text-sm capitalize">
            bacola natural foods
          </h1>
        </div>

        <h2 className="text-black text-2xl mt-4 lg:text-2xl capitalize font-extralight lg:mt-1">
          Special organic
        </h2>
        <h1 className="text-black text-2xl mt-3 lg:mt-1 capitalize font-semibold">
          roasts burger
        </h1>

        <h1 className="text-black text-xs mt-3 lg:mt-3">only-from</h1>
        <span className="text-red-600 font-semibold text-3xl lg:text-3xl">
          {" "}
          $ 14.99{" "}
        </span>
      </div>
    </div>
  );
};

export const ImageFour = () => {
  return (
    <div className="mt-9 relative lg:mt-9">
      <Image
        src={banner4}
        alt="banner - Image"
        className="mb-0 h-[260px] w-full rounded-md lg:h-[403px] lg:w-[270px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center max-w-[390px] max-h-[290px] md:justify-center md:mt-14 md:max-w-[450px] lg:ml-7 lg:mt-0">
        <div className="flex flex-row  mt-3 lg:mt-6 items-center">
          <h1 className="text-white text-sm capitalize">
            best bakery products
          </h1>
        </div>

        <h2 className="text-black text-2xl mt-4 lg:text-2xl capitalize font-extralight lg:mt-1">
          Freshest Products
        </h2>
        <h1 className="text-black text-2xl mt-3 lg:mt-1 capitalize font-semibold">
          every hour.
        </h1>
        <h1 className="text-black text-xs mt-3 lg:mt-3">only-from</h1>
        <span className="text-red-600 font-semibold text-3xl lg:text-3xl">
          {" "}
          $ 24.99{" "}
        </span>
        <div className="bg-cyan-500 py-2  flex flex-row rounded-full text-[13px] w-[100px] text-white font-bold px-4 justify-between mt-3 lg:mt-6">
          Shop Now
        </div>
      </div>
    </div>
  );
};
