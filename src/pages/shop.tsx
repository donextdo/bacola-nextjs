import { HomePagination } from "@/components/Pagination/HomePagination";
import { useRouter } from "next/router";
import { useEffect } from "react";
const PaginationProduct = () => {
  const router = useRouter();

  const { query } = useRouter();

  const perpage = query?.perpage;
  const page = query?.page;

  console.log("perpage ", perpage);
  console.log("page ", page);

  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      <HomePagination perpage={perpage} page={page} />
    </div>
  );
};

export default PaginationProduct;
