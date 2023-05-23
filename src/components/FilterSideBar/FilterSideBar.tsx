import Brands from "../Brands/Brands";
import Categories from "../ProductCategories/Categories";
import Status from "../ProductStatus/Status";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { ImageProductFilter } from "./Image";
import { FilteredProduct } from "../FilterSideBar/FilteredProduct";
import bacolaBannergif from "../../../assets/home/sidebar-banner.gif";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PageNumber } from "../Pagination/PageNumber";
import { ProductCount } from "../Pagination/ProductCount";

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
  useEffect(() => {
    console.log("categoryId ? ", categoryId);

    console.log("brands ? ", brand);

    console.log("subCat ? ", subcategory);
    console.log("minValue ? ", minValue);
    console.log("maxValue ? ", maxValue);
    console.log("inStock ? ", inStock);
    console.log("onSale ? ", onSale);

    console.log("perpage-homepagination? ", perpage);
    console.log("page-homepagination? ", page);
    console.log("orderby-homepagination? ", orderby);
  }, []);

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
          />
        </div>
        <div>
          <PageNumber perpage={perpage} />
        </div>
      </div>
    </div>
  );
};
