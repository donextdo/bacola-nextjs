import Brands from "../Brands/Brands";
import Categories from "../ProductCategories/Categories";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";

export const FilterSideBar = () => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-1 px-4  mx-4 ">
      <Categories />
      <RangeSlider />
      <Status />
      <Brands />
    </div>
  );
};
