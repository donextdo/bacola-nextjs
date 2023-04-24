import Brands from "../Brands/Brands";
import Categories from "../ProductCategories/Categories";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { ImageProductFilter } from "./Image";
import { FilteredProduct } from "../FilterSideBar/FilteredProduct";
import bacolaBannergif from "../../../assets/home/sidebar-banner.gif";
import Image from "next/image";

export const FilterSideBar = ({ categoryId }) => {
  //console.log("data enawad? ", categoryId);

  return (
    <div className="flex flex-row mb-9">
      <div className="lg:w-1/4 hidden lg:block">
        <div className="grid md:grid-cols-1 grid-cols-1 ">
          <Categories categoryId={categoryId} />
          <RangeSlider />
          <Status />
          <Brands categoryId={categoryId} />
        </div>
        <div className="lg:mt-12">
          <Image
            src={bacolaBannergif}
            alt="Slider- Image"
            className="lg:h-[370px] w-full rounded-md lg:w-[270px]"
          />
        </div>
      </div>
      <div className="lg:w-3/4 md:w-full w-full cursor-pointer mt-12 md:ml-9">
        <div>
          <ImageProductFilter />
        </div>
        <div className="lg:mt-12 md:mt-12 mt-12">
          <FilteredProduct categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};
