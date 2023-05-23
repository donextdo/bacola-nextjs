import { useRouter } from "next/router";
import { useState } from "react";

const Status = () => {
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const router = useRouter();

  const handleStock = () => {
    const stockStatus = inStock ? "" : "instock";
    setInStock(!inStock);

    const query = { ...router.query };
    if (stockStatus) {
      query.stock_status = stockStatus;
    } else {
      delete query.stock_status;
    }

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const handleSale = () => {
    const saleStatus = onSale ? "" : "onsale";
    setOnSale(!onSale);

    const query = { ...router.query };
    if (saleStatus) {
      query.on_sale = saleStatus;
    } else {
      delete query.on_sale;
    }

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  return (
    <div className="box-border max-h-[97px] max-w-[270px] lg:mt-12">
      <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
        Product Status
      </h4>

      <div className="relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer">
        <div className="flex flex-row mb-3">
          <input
            type="checkbox"
            className="mr-4 min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
            checked={inStock}
            onChange={handleStock}
          />
          <label className="select-none text-[.8125rem] font-medium hover:cursor-pointer capitalize text-gray-500">
            in stock
          </label>
        </div>
      </div>
      <div className="relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer">
        <div className="flex flex-row mb-3">
          <input
            type="checkbox"
            className="mr-4 min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
            checked={onSale}
            onChange={handleSale}
          />
          <label className="select-none text-[.8125rem] font-medium hover:cursor-pointer capitalize text-gray-500">
            on sale
          </label>
        </div>
      </div>
    </div>
  );
};

export default Status;

{
  /* <CheckBoxRow inputId="status1" htmlForId="status1" name="in stock" />
      <CheckBoxRow inputId="status2" htmlForId="status2" name="on sale" /> */
}
