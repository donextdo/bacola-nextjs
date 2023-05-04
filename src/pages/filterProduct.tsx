import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
const FilterProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  console.log("categoryId ", categoryId);
  const { query } = useRouter();

  const brand = query?.brands;
  const subcategory = query?.sub_category;
  console.log("sub category ", subcategory);
  console.log("brands ", brand);

  const perpage = query?.perpage;
  console.log("perpage ", perpage);

  const page = query?.page;
  console.log("perpage ", page);

  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <FilterSideBar
        categoryId={categoryId}
        brand={brand}
        subcategory={subcategory}
        perpage={perpage}
        page={page}
      />
    </div>
  );
};

export default FilterProduct;
