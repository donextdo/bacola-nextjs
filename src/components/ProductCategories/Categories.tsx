import { useEffect, useState } from "react";
import CheckBoxRow from "../CheckBox/CheckBox";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

// const Categories = ({ categoryId }) => {
//   const [subCategory, setSubCategory] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
//       setSubCategory(response.data);
//       console.log("data awad? ", response.data);
//     };
//     fetchData().catch((error) => {
//       console.log(error);
//     });
//   });

//   return (
//     <div className="box-border max-h-[290px] max-w-[270px]  my-5">
//       <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem]">
//         PRODUCT CATEGORIES
//       </h4>
//       <CheckBoxRow inputId="category1" htmlForId="category1" name="beverages" />
//       <CheckBoxRow
//         inputId="category2"
//         htmlForId="category2"
//         name="biscuits & snacks"
//       />
//       <CheckBoxRow
//         inputId="category3"
//         htmlForId="category3"
//         name="breads & bakery"
//       />
//       <CheckBoxRow
//         inputId="category4"
//         htmlForId="category4"
//         name="breakfast & dairy"
//       />
//       <CheckBoxRow
//         inputId="category5"
//         htmlForId="category5"
//         name="frozen foods"
//       />
//       <CheckBoxRow
//         inputId="category6"
//         htmlForId="category6"
//         name="fruits & vegetables"
//       />
//     </div>
//   );
// };

const Categories = ({ categoryId }) => {
  const [subCategory, setSubCategory] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

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

  return (
    <>
      {!isEmpty && (
        <div className="box-border max-h-[290px] max-w-[270px]  my-5 lg:mt-12 ">
          <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
            PRODUCT CATEGORIES
          </h4>
          {subCategory.map((category: any, index) => {
            return (
              <CheckBoxRow
                key={category.id}
                inputId={`category${category.id}`}
                htmlForId={`category${category.id}`}
                name={category.name}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Categories;
