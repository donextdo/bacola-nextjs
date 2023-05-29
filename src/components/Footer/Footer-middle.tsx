import React, { useEffect, useState } from "react";
import BottomFooter from "./Footer-bottom";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
interface Category {
  _id: string;
  name: string;
  subcategories: any;
}
function MainFooter() {
  const [viewCategory, setviewCategory] = useState<Array<Category>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/categories`);
      setviewCategory(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid w-full pt-10 grid-col xl:grid-flow-col xl:grid-col-4 xl:grid-rows-1 sm:grid-col-2 sm:grid-rows-3 sm:grid-flow-col xl:px-10 bg-gray-50 ">
        {viewCategory.map((category) => (
          <>
            {category.subcategories.length > 0 && (
              <div key={category._id} className="flex p-5 ">
                <ul className=" mx-14">
                  <p className="pb-4 font-semibold font-ff-headings text-gray-800 text-[18px]">
                    {category.name}
                  </p>
                  {category.subcategories.map((subcategory: any) => (
                    <li
                      key={subcategory._id}
                      className="pb-2 text-gray-500 cursor-pointer text-md text-[13px]"
                    >
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ))}
      </div>

      <div className="xl:px-5 2xl:px-10">
        <BottomFooter />
      </div>
    </>
  );
}

export default MainFooter;
