import { MdInstallMobile } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import clock from "../../../assets/home/clock.png";
import deliveryBox from "../../../assets/home/delivery-box.png";
import download from "../../../assets/home/download.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import banner from "../../../assets/home/banner-box2.png";
import { useRouter } from "next/router";

export const RedDiv = () => {
  return (
    <div>
      {/* <div className="lg:w-1/4"></div> */}

      <div className="flex flex-col rounded-md items-center justify-between mt-9 bg-red-100 p-6 mb-9 cursor-pointer">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="text-[15px] text-red-600 flex flex-row items-center mb-2 lg:mb-0 lg:mr-4">
            Super discount for your&nbsp;
            <div className="text-red-600 underline font-semibold">
              first purchase.
            </div>
          </div>
          <div className="flex flex-row items-center lg:w-auto">
            <div className="uppercase p-2 h-9 flex flex-row rounded-full border border-dashed border-red-500 text-sm w-32 text-red-500 px-4 mr-2">
              FREE25BAC
            </div>
            <div className="text-xs text-gray-400">
              Use discount code in checkout!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdditionalDiv = () => {
  return (
    <div className="border border-gray-300 rounded-md p-3 mt-9 lg:w-[270px]">
      <div className="flex flex-col">
        <div className="flex flex-row py-4 items-center">
          <Image
            src={download}
            alt="clock"
            className="w-[35px] h-[30px] ml-1"
          />
          <div className="px-10 text-xs">
            Download the Bacola App to your Phone.
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row py-4 items-center">
          <Image
            src={deliveryBox}
            alt="clock"
            className="w-[28px] h-[28px] ml-2"
          />
          <div className="px-10 text-xs">
            Order now so you dont miss the opportunities.
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row py-4 items-center">
          <Image src={clock} alt="clock" className="w-[28px] h-[28px] ml-2" />
          <div className="px-10 text-xs">
            Your order will arrive at your door in 15 minutes.
          </div>
        </div>
      </div>
    </div>
  );
};

export const BestSeller = () => {
  const router = useRouter();
  const goToProduct = () => {
    // router.push("./filterProduct");
    router.push("./shop");
    localStorage.clear();
  };
  return (
    <div className="flex flex-row items-center justify-between mb-9 ">
      <div className="flex flex-col">
        <div className="uppercase font-semibold text-lg font-ff-headings lg:text-xl">
          Best Seller
        </div>
        <div className="text-xs text-gray-400">
          Do not miss the current offers until the end of March.
        </div>
      </div>
      <div
        className=" p-2 h-9 flex flex-row rounded-full border border-gray-300 text-sm w-32 text-gray-500 px-4 justify-between cursor-pointer"
        onClick={goToProduct}
      >
        View All
        <span>
          <BsArrowRight className="text-lg"></BsArrowRight>
        </span>
      </div>
    </div>
  );
};

export const NewProduct = () => {
  const router = useRouter();
  const goToProduct = () => {
    // router.push("./filterProduct");
    router.push("./shop");
    localStorage.clear();
  };
  return (
    <div className="flex flex-row items-center justify-between mb-9 ">
      <div className="flex flex-col">
        <div className="uppercase font-semibold text-lg lg:text-xl  font-ff-headings">
          NEW PRODUCTS
        </div>
        <div className="text-xs text-gray-400">
          New products with updated stocks.
        </div>
      </div>
      <div
        className=" p-2 h-9 flex flex-row rounded-full border border-gray-300 text-sm w-32 text-gray-500 px-4 justify-between cursor-pointer"
        onClick={goToProduct}
      >
        View All
        <span>
          <BsArrowRight className="text-lg"></BsArrowRight>
        </span>
      </div>
    </div>
  );
};

export const TakeCare = () => {
  return (
    <div className="container mt-7 relative bg-[#f7efea] w-full h-[340px] flex flex-col items-center rounded-md lg:h-[130px] overflow-hidden cursor-pointer mb-9">
      <div className="lg:flex lg:flex-row lg:items-start lg:w-full justify-between">
        <div className="relative flex flex-col items-start justify-start md:mt-14 lg:ml-10 lg:mt-10 ">
          <h1 className="text-gray-400 text-sm capitalize">
            Always Taking Care
          </h1>
          <h2 className="text-gray-500 text-lg font-bold ">
            In store or online your health &amp; safety is our top priority.
          </h2>
        </div>
        <div className="mt-auto lg:w-1/4 lg:order-2">
          <Image
            src={banner}
            alt="banner - Image"
            className="mb-0 h-[250px] w-[600px] lg:h-[170px] lg:w-[700px]"
            style={{ objectPosition: "right center" }}
          />
        </div>
      </div>
    </div>
  );
};
