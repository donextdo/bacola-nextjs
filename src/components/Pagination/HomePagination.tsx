import Brands from "../Brands/Brands";
import { ImageProductFilter } from "../FilterSideBar/Image";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { PageNumber } from "./PageNumber";
import { ProductCount } from "./ProductCount";
import Image from "next/image";
import bacolaBannergif from "../../../assets/home/sidebar-banner.gif";
import { ProductPagination } from "./ProductPagination";
import { useEffect, useState } from "react";
import { RecentlyViewProduct } from "../RecentlyViewProduct/RecentlyViewProduct";

export const HomePagination = ({
  perpage,
  page,
  orderby,
  brand,

  minValue,
  maxValue,
  inStock,
  onSale,
}: any) => {
  const [passgrid, setPassgrid] = useState();

  const handleGridChange = (grid: any) => {
    setPassgrid(grid);
  };

  const categoryId = null;

  return (
    <>
      <div className="flex flex-row mb-9">
        <div className="lg:w-1/4 hidden lg:block">
          <div className="grid md:grid-cols-1 grid-cols-1 ">
            <RangeSlider />
            <Status />
            <Brands category={categoryId} />
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
          <div className="mt-10">
            <ProductPagination
              brand={brand}
              minValue={minValue}
              maxValue={maxValue}
              inStock={inStock}
              onSale={onSale}
              perpage={perpage}
              page={page}
              orderby={orderby}
            />
          </div>

          <div className="lg:mt-12 md:mt-12 mt-12 cursor-pointer"></div>
          <div>
            <PageNumber perpage={perpage} />
          </div>
        </div>
      </div>
      <div className="pb-20 pt-20">
        <RecentlyViewProduct />
      </div>
    </>
  );
};
