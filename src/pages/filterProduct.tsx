import { FilterSideBar } from "@/components/FilterSideBar/FilterSideBar";
import { useRouter } from "next/router";
const FilterProduct = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  //console.log("data coming ", categoryId);

  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <FilterSideBar categoryId={categoryId} />
    </div>
  );
};

export default FilterProduct;
