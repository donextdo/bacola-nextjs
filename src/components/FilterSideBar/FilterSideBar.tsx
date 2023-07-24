import Brands from "../Brands/Brands";
import Categories from "../ProductCategories/Categories";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { ImageProductFilter } from "./Image";
import { FilteredProduct } from "../FilterSideBar/FilteredProduct";
import bacolaBannergif from "../../../assets/home/sidebar-banner.gif";
import Image from "next/image";
import { useState } from "react";
import { ProductCount } from "../Pagination/ProductCount";
import { RecentlyViewProduct } from "../RecentlyViewProduct/RecentlyViewProduct";

export const FilterSideBar = ({
  categoryId,
  brand,
  subcategory,
  minValue,
  maxValue,
  inStock,
  onSale,
  perpage,
  page,
  orderby,
}: any) => {
  const [passgrid, setPassgrid] = useState();

  const handleGridChange = (grid: any) => {
    setPassgrid(grid);
  };

  return (
    <>
      <div className="container mx-auto xl:px-40 px-5 flex flex-row mb-9">
        <div className="lg:w-1/4 hidden lg:block">
          <div className="grid md:grid-cols-1 grid-cols-1 ">
            <Categories categoryId={categoryId} />
            <RangeSlider categoryId={categoryId} />
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
        <div className="lg:w-3/4 md:w-full w-full mt-12 md:ml-9">
          <div className="cursor-pointer">
            <ImageProductFilter />
          </div>
          <div>
            <ProductCount />
          </div>
          <div className="lg:mt-12 md:mt-12 mt-12 cursor-pointer">
            <FilteredProduct
              categoryId={categoryId}
              brand={brand}
              subcategory={subcategory}
              minValue={minValue}
              maxValue={maxValue}
              inStock={inStock}
              onSale={onSale}
              perpage={perpage}
              page={page}
              orderby={orderby}
              passgrid={passgrid}
            />
          </div>
          <div>{/* <PageNumber perpage={perpage} /> */}</div>
        </div>
      </div>
      <div className="container mx-auto xl:px-40 px-5 pt-20 mb-8">
        <RecentlyViewProduct />
      </div>
    </>
  );
};
