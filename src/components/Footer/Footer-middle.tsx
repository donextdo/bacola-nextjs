import React, { useEffect, useState } from "react";
import BottomFooter from "./Footer-bottom";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
interface Category {
  _id: string;
  name: string;
  subcategories: any;
}
function MainFooter() {
  const [viewCategory, setviewCategory] = useState<Array<Category>>([]);
  const [homeOpen, setHomeOpen] = useState(false);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/categories`);
      setviewCategory(response.data);
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

  const getProductByCategory = async (categoryId: any) => {
    sessionStorage.clear();
    // localStorage.clear();
    setHomeOpen(false);
    router.push({
      pathname: "/filterProduct",
      query: { categoryId: categoryId },
    });
  };

  const handlesubcatgory = (id: any) => {
    setActiveCategory(id);
  };

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
                      onClick={() => getProductByCategory(subcategory?._id)}
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
