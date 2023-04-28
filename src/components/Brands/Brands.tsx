import { useEffect, useState } from "react";
import CheckBoxRow from "../CheckBox/CheckBox";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

const Brands = ({ categoryId }:any) => {
  const [brand, setBrand] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get(
      //   `${baseUrl}/products/brands/${categoryId}`
      // );
      const response = await axios.get(`${baseUrl}/products/${categoryId}`);

      setBrand(response.data);
      setIsEmpty(response.data.length === 0);
      console.log("Brands? ", response.data);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

  return (
    <div>
      {!isEmpty && (
        <div className="box-border max-h-[106px] max-w-[270px] lg:mt-12">
          <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
            brands
          </h4>
          {brand.map((category: any, index) => {
            return (
              <CheckBoxRow
                key={category.id}
                inputId={`category${category.id}`}
                htmlForId={`category${category.id}`}
                name={category.brand}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Brands;
