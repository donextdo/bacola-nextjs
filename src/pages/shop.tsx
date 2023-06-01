import { HomePagination } from "@/components/Pagination/HomePagination";
import { useRouter } from "next/router";
import { useEffect } from "react";
const PaginationProduct = () => {
  const router = useRouter();

  const { query } = useRouter();

  const perpage = query?.perpage;
  const page = query?.page;
  const orderby = query?.orderby;
  const brand = query?.brands;
  const minValue = query?.min_price;
  const maxValue = query?.max_price;
  const inStock = query?.stock_status;
  const onSale = query?.on_sale;

  return (
    <div className="container mx-auto xl:px-40 px-5">
      <HomePagination
        brand={brand}
        perpage={perpage}
        page={page}
        orderby={orderby}
        minValue={minValue}
        maxValue={maxValue}
        inStock={inStock}
        onSale={onSale}
      />
    </div>
  );
};

export default PaginationProduct;
