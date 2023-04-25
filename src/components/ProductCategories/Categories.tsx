import { useEffect, useState } from "react";
import CheckBoxRow from "../CheckBox/CheckBox";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

const Categories = ({ categoryId }) => {
  const [subCategory, setSubCategory] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [checkedCategory, setCheckedCategory] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
      setSubCategory(response.data);
      setIsEmpty(response.data.length === 0);
      console.log("data awad? ", response.data);
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

  const handleCtegoryClick = (categoryId) => {
    const newCheckedCategory = {};
    newCheckedCategory[categoryId] = !checkedCategory[categoryId];

    // uncheck all other categories
    Object.keys(checkedCategory).forEach((key) => {
      if (key !== categoryId) {
        newCheckedCategory[key] = false;
      }
    });

    setCheckedCategory(newCheckedCategory);
  };

  return (
    <>
      {!isEmpty && (
        <div className="box-border max-h-[290px] max-w-[270px]  my-5 lg:mt-12 ">
          <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
            PRODUCT CATEGORIES
          </h4>

          {Array.isArray(subCategory) &&
            subCategory.map((category: any, index) => {
              const isChecked = checkedCategory[category._id];
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
                      onChange={() => handleCtegoryClick(category._id)}
                      className="mr-4  min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
                    />
                    <label
                      htmlFor={category._id}
                      className={`select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize ${
                        isChecked ? "text-blue-900" : "text-gray-500"
                      }`}
                    >
                      {category.name}
                    </label>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Categories;
