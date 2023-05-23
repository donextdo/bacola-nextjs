import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
const FilterProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  const { query } = useRouter();

  const brand = query?.brands;
  const subcategory = query?.subCategories;
  const minValue = query?.min_price;
  const maxValue = query?.max_price;
  const inStock = query?.stock_status;
  const onSale = query?.on_sale;
  console.log("min_price : ", minValue);
  console.log("max_price : ", maxValue);
  console.log("stock_status : ", inStock);
  console.log("on_sale : ", onSale);
  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <FilterSideBar
        categoryId={categoryId}
        brand={brand}
        subcategory={subcategory}
        minValue={minValue}
        maxValue={maxValue}
        inStock={inStock}
        onSale={onSale}
      />
    </div>
  );
};

export default FilterProduct;
