//import icons
import { MdProductionQuantityLimits } from "react-icons/Md";
import { TbTruckDelivery } from "react-icons/Tb";
import { TbDiscount2 } from "react-icons/Tb";
import { CiDollar } from "react-icons/Ci";

import MainFooter from "./footer";

export default function Footer() {
  return (
    <>
      <div className="bg-[#f7f8fd] w-[100%] xl:mt-40 h-1/2">
        <div className="container justify-center pt-10 mx-auto xl:py-10 xl:flex">
          <div className="px-3 border-b-0 border-l-0 border-r-2 xl:px-3 borer-t-0">
            <div className="flex ">
              <p className="xl:mx-2 text-[24px]">
                <MdProductionQuantityLimits />
              </p>
              <p className="text-[13px] font-medium pl-2 ">
                Everyday fresh products
              </p>
            </div>
          </div>
          <div className="px-1 border border-t-0 border-b-0 border-l-0 border-r-2 xl:px-3">
            <div className="flex ">
              <p className="mx-2 text-[24px]">
                <TbTruckDelivery />
              </p>
              <p className="text-[13px] font-medium">
                Free delivery for order over $70
              </p>
            </div>
          </div>
          <div className="px-1 border border-t-0 border-b-0 border-l-0 border-r-2 xl:px-3">
            <div className="flex ">
              <p className="mx-2 text-[24px]">
                <TbDiscount2 />
              </p>
              <p className="text-[13px] font-medium">Daily Mega Discounts</p>
            </div>
          </div>
          <div>
            <div className="flex px-1 xl:px-3">
              <p className="mx-2 text-[24px]">
                <CiDollar />
              </p>
              <p className="text-[13px] font-medium">
                Best price on the market
              </p>
            </div>
          </div>
        </div>
        <hr className="xl:mx-16" />
      </div>
      <MainFooter />
    </>
  );
}
