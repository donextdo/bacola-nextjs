import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
const FilterProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  //console.log("data coming ", categoryId);

  useEffect(() => {
    console.log("Query parameter: ", categoryId);
  }, [categoryId]);

  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <FilterSideBar categoryId={categoryId} />
    </div>
  );
};

export default FilterProduct;
