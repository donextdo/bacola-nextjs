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

export const FilterSideBar = ({
  categoryId,
  // brand,
  subcategory,
}: any) => {
  //const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const router = useRouter();
  // let brandId: any = [];
  let subcategorySelected: any = [];

  // useEffect(() => {
  //   if (brand) {
  //     const brands = brand.split(",");
  //     sessionStorage.setItem("brands", brands);
  //     brandId = brands;
  //   }
  // }, [brand]);

  useEffect(() => {
    if (subcategory) {
      const subCategories = subcategory.split(",");
      sessionStorage.setItem("subCategories", subCategories);
      console.log("category coming from session storage", subCategories);
      subcategorySelected = subCategories;
    }
  }, [subcategory]);

  // const handleBrandChange = (brands: any) => {
  //   setSelectedBrands(brands);
  // };

  const handleSubCatChange = (subCate: any) => {
    setSelectedSubCat(subCate);
    console.log("sub category passing with props ", subCate);
  };

  return (
    <div className="flex flex-row mb-9">
      <div className="lg:w-1/4 hidden lg:block">
        <div className="grid md:grid-cols-1 grid-cols-1 ">
          <Categories
            categoryId={categoryId}
            onSuCatChange={handleSubCatChange}
          />
          <RangeSlider />
          <Status />
          {/* <Brands categoryId={categoryId} onBrandChange={handleBrandChange} /> */}
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
          <FilteredProduct
            categoryId={categoryId}
            // selectedBrands={
            //   selectedBrands.length > 0 ? selectedBrands : brandId
            // }
            selectedSubCat={
              selectedSubCat.length > 0 ? selectedSubCat : subcategorySelected
            }
          />
        </div>
      </div>
    </div>
  );
};
// useEffect(() => {
//   const storedBrands = localStorage.getItem("selectedBrands");
//   if (storedBrands) {
//     const parsedBrands = JSON.parse(storedBrands);
//     setSelectedBrands(parsedBrands);
//   }
// }, []);

//console.log("data enawad? ", categoryId);
