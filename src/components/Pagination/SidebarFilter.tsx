import Brands from "../Brands/Brands";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import Image from "next/image";
import bacolaBannergif from '../../../assets/home/sidebar-banner.gif'
import { IoCloseSharp } from "react-icons/io5";
import Categories from "../ProductCategories/Categories";

const SidebarFilter = ({ handleFilterSiderbar }: any) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
      <div className="w-full h-full overflow-auto bg-white px-4 py-6">
        <div className="flex justify-between">
          <h1 className="text-sm text-[#202435]">Filter Product</h1>
          <button className="absolute top-4 right-4 border bg-[#c2c2d3] rounded-full p-1" onClick={handleFilterSiderbar}><IoCloseSharp className="text-md font-semibold text-white" /></button>
        </div>
        <div className="pt-7 pb-7 lg:pb-0">
          <hr />
        </div>
        {/* <div>
          <Categories />
        </div> */}
        <div>
          <RangeSlider />
        </div>
        <div className="pt-7 pb-7 lg:pb-0">
          <hr />
        </div>
        <div>
          <Status />
        </div>
        <div className="pt-7 pb-7 lg:pb-0">
          <hr />
        </div>
        <div>
          <Brands />
        </div>
        <div>
          <div className="py-7 ">
            <hr />
          </div>
          <div className="w-full h-auto">
            <Image
              src={bacolaBannergif}
              alt="Slider- Image"
              style={{
                objectFit: "contain",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
              width={450}
              height={400}
            />

          </div>
        </div>

      </div>
    </div>
  );
}

export default SidebarFilter;