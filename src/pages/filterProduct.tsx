import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
const FilterProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  const { query } = useRouter();

  const brand = query?.brands;
  const subcategory = query?.subCategories;

  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <FilterSideBar
        categoryId={categoryId}
        brand={brand}
        subcategory={subcategory}
      />
    </div>
  );
};

export default FilterProduct;
