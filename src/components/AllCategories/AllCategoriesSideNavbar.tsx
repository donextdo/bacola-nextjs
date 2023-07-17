// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { CiApple } from "react-icons/ci";
// import { GiChickenOven, GiThreeLeaves } from "react-icons/gi";
// import {
//   MdKeyboardArrowDown,
//   MdOutlineBakeryDining,
//   MdOutlineFastfood,
//   MdOutlineStorage,
// } from "react-icons/md";
// import { BsCupHot, BsEgg } from "react-icons/bs";
// import { IoFastFoodSharp } from "react-icons/io5";
// import baseUrl from "../../../utils/baseUrl";
// import axios from "axios";
// import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from "next/router";

// interface Category {
//   _id: string;
//   name: string;
//   subcategories: any;
//   // any other properties
// }

// const AllcategoriesSideNavbar = ({setShowSideNavbar}:any) => {
//   const [homeOpen, setHomeOpen] = useState(false);
//   const [viewCategory, setviewCategory] = useState<Array<Category>>([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [isHover, setIsHover] = useState(false);

//   const router = useRouter();

//   const toggleHome = () => {
//     setHomeOpen(!homeOpen);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`${baseUrl}/categories`);

//       setviewCategory(response.data);
//     };
//     fetchData();
//   }, []);

//   const getProductByCategory = (id:any) => {
//     router.push({
//       pathname: "/filterProduct",
//       query: { categoryId: id },
//     });
//     // setShowSideNavbar(false)
//   }
//   const handlesubcatgory = (id:any) => {
//     setActiveCategory(id)

//   }
//   return (
//     <>

//       <div className="">
//         <button
//           className="w-full h-[50px] rounded-lg justify-between bg-[#2bbef9] "
//           onClick={toggleHome}
//         >
//           <div className="font-ff-headings text-white justify-between px-3 py-4 text-[15px] font-semibold flex">

//             <div>
//               <MdOutlineStorage className="mx-2 text-xl " />
//             </div>
//             <div> ALL CATEGORIES</div>
//             <div>
//               <MdKeyboardArrowDown className="mx-2 text-xl " />
//             </div>

//           </div>
//         </button>
//       </div>

//         {homeOpen && (
//           <div className="text-[13px]  w-full py-2  font-medium bg-white   ">
//            <ul className="">
//            {viewCategory.map((category, index) => {
//             return(
//               <li key={index} className="list-item w-full flex-row pt-3">
//                     <a
//                       href="#"
//                       className={`block px-2 py-2  hover:text-[#2bbef9] group ${
//                         activeCategory === category._id && isHover
//                           ? "text-[#2bbef9]"
//                           : "text-gray-500"
//                       }`}

//                       onClick={() => getProductByCategory(category?._id)}
//                     >
//                       <div className=" flex flex-row items-center justify-between">
//                         <div>{category?.name} </div>
//                         {category?.subcategories?.length > 0 && (
//                           <div>
//                             {activeCategory === category._id ? (
//                               <div onClick={() => handlesubcatgory(category?._id)}
//                               ><MdKeyboardArrowDown className=" text-gray-500  group-hover:text-[#2bbef9]  " ></MdKeyboardArrowDown></div>
//                             ) : (
//                               <div onClick={() => handlesubcatgory(category?._id)}><MdKeyboardArrowDown className="  text-gray-500  group-hover:text-[#2bbef9]  "></MdKeyboardArrowDown></div>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     </a>
//                     {activeCategory === category._id &&
//                     category.subcategories.length > 0 ? (
//                       <ul
//                         className="text-[13px] pl-3 bg-white  "
//                         // onMouseEnter={() => setIsHover(true)}
//                         // onMouseLeave={handleCategoryLeave}
//                       >
//                         {category.subcategories.map(
//                           (subcategory: any, index: any) => (
//                             <li key={index}>
//                               {" "}
//                               <a
//                                 href="#"
//                                 className="block px-2 py-2 pt-5 text-gray-500 hover:text-[#2bbef9]  "
//                                 key={subcategory.id}

//                                 onClick={() =>
//                                   getProductByCategory(subcategory?._id)
//                                 }
//                               >
//                                 {subcategory.name}
//                               </a>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     ) : null}
//                   </li>
//             )
//            })}
//            </ul>
//             <hr className="my-2" />

//             {/* <div className="py-2 px-2">
//               <p className="hover:text-[#2bbef9] ">Value Of the Day</p>
//             </div>
//             <div className="py-2 px-2">
//               <p className="hover:text-[#2bbef9]">Top 100 Offers</p>
//             </div>
//             <div className="py-2 px-2">
//               <p className="hover:text-[#2bbef9]">New Arrivals</p>
//             </div> */}
//           </div>
//         )}

//     </>
//   );
// };

// export default AllcategoriesSideNavbar;
