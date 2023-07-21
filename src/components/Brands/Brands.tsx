import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import { uniqBy } from "lodash";
import Swal from "sweetalert2";

const Brands = ({ categoryId }: any) => {
  const [brand, setBrand] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkedBrands, setCheckedBrands] = useState<any>({});
  const [brandPage, setBrandPage] = useState<string[]>([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const displayedBrands = showAllBrands ? brand : brand.slice(0, 10);
  const uniqueBrands = uniqBy(displayedBrands, "brand");
  const shouldShowSeeLess = showAllBrands && brand.length > 10;
  const router = useRouter();

  useEffect(() => {
    setCheckedBrands([]);
    fetchDataOne();
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

  const fetchDataOne = async () => {
    try {
      if (categoryId) {
        const response = await axios.get(`${baseUrl}/products/${categoryId}`);
        setBrand(response.data);
        setIsEmpty(response.data.length === 0);
      }
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/productDetails/brand`);
      setBrandPage(response.data);
      setIsEmpty(response.data.length === 0);
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  };

  return (
    <div>
      {categoryId
        ? !isEmpty && (
            <div className="box-border max-h-[106px]  lg:mt-12">
              <h4 className="max-h-[18px]  uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
                brands
              </h4>
              {uniqueBrands.map((category: any, index) => {
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
              {brand.length > 10 && (
                <div>
                  {shouldShowSeeLess ? (
                    <div
                      className="text-[.8125rem] font-medium text-blue-900 hover:underline hover:cursor-pointer"
                      onClick={() => setShowAllBrands(false)}
                    >
                      See Less
                    </div>
                  ) : (
                    <div
                      className="text-[.8125rem] font-medium text-blue-900 hover:underline hover:cursor-pointer"
                      onClick={() => setShowAllBrands(true)}
                    >
                      See All
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        : !isEmpty && (
            <div className="box-border max-h-[106px]  lg:mt-12">
              <h4 className="max-h-[18px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
                brands
              </h4>
              {brandPage.map((brand: any, index: any) => {
                const isChecked = checkedBrands[brand.id];
                return (
                  <div
                    className="relative  max-h-[59px]  items-center hover:cursor-pointer flex "
                    key={index}
                  >
                    <div className="mb-3  w-full flex flex-row justify-between ">
                      <div className=" flex flex-row">
                        <input
                          type="checkbox"
                          id={brand.brand}
                          checked={isChecked}
                          onChange={() => handleBrandClick(brand.brand)}
                          className="mr-4 min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
                        />

                        <label
                          htmlFor={brand.brand}
                          className={`select-none text-[.8125rem] font-medium hover:cursor-pointer capitalize ${
                            isChecked ? "text-blue-900" : "text-gray-500"
                          }`}
                        >
                          {brand.brand}
                        </label>
                      </div>

                      <div className=" flex flex-row">
                        <span className="ml-2 text-[.8125rem] font-medium ">
                          ({brand.count})
                        </span>
                      </div>
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
