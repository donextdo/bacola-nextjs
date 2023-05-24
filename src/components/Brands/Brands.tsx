import { useEffect, useState } from "react";
import CheckBoxRow from "../CheckBox/CheckBox";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Product } from "@/features/product/product";
import { RootState } from "@/redux/store";

const Brands = ({ categoryId }: any) => {
  const [brand, setBrand] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkedBrands, setCheckedBrands] = useState<any>({});
  const [brandPage, setBrandPage] = useState<string[]>([]);
  const router = useRouter();

  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];

  useEffect(() => {
    setCheckedBrands([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setBrand(response.data);
        setIsEmpty(response.data.length === 0);
        setBrandPage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const queryBrands = router.query.brands;
    if (typeof queryBrands === "string") {
      const selectedBrands = queryBrands.split(",");
      const newCheckedBrands: { [key: string]: boolean } = {};
      selectedBrands.forEach((brandId: any) => {
        newCheckedBrands[brandId] = true;
      });
      setCheckedBrands(newCheckedBrands);
    }
  }, [categoryId]);

  const handleBrandClick = (brandId: any) => {
    const newCheckedBrands = { ...checkedBrands };
    newCheckedBrands[brandId] = !checkedBrands[brandId];
    setCheckedBrands(newCheckedBrands);
    const selectedBrands = Object.keys(newCheckedBrands).filter(
      (key) => newCheckedBrands[key]
    );

    router.push({
      pathname: router.pathname,
      query: { ...router.query, brands: selectedBrands.join(",") },
    });
  };

  return (
    <div>
      {categoryId
        ? !isEmpty && (
            <div className="box-border max-h-[106px] max-w-[270px] lg:mt-12">
              <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
                brands
              </h4>
              {brand.map((category: any, index) => {
                const isChecked = checkedBrands[category._id];
                return (
                  <div
                    className="relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer"
                    key={category._id}
                  >
                    <div className="flex flex-row mb-3">
                      <input
                        type="checkbox"
                        id={category._id}
                        checked={isChecked}
                        onChange={() => handleBrandClick(category.brand)}
                        className="mr-4  min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
                      />
                      <label
                        htmlFor={category._id}
                        className={`select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize ${
                          isChecked ? "text-blue-900" : "text-gray-500"
                        }`}
                      >
                        {category.brand}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        : !isEmpty && (
            <div className="box-border max-h-[106px] max-w-[270px] lg:mt-12">
              <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
                brands
              </h4>
              {brandPage.map((brand: any, index: any) => {
                const isChecked = checkedBrands[brand.id];
                return (
                  <div
                    className="relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer"
                    key={index}
                  >
                    <div className="flex flex-row mb-3">
                      <input
                        type="checkbox"
                        id={brand.id}
                        checked={isChecked}
                        // onChange={() => handleBrandClick(brand.id)}
                        className="mr-4  min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
                      />
                      <label
                        htmlFor={brand.id}
                        className={`select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize ${
                          isChecked ? "text-blue-900" : "text-gray-500"
                        }`}
                      >
                        {brand.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
    </div>
  );
};

export default Brands;
