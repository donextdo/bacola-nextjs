import { Product } from "@/features/product/product";
import { fetchProducts } from "@/features/product/productSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "@/features/product/ProductCard";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";

export const FilteredProduct = ({
  categoryId,
  selectedBrands,
  selectedSubCat,
  perpage,
  page,
}: any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/productDetails?categoryId=${categoryId}`
          );
          console.log("only category Id ? ", response);
          const products = response.data;
          setProduct(products);
          console.log("only category Id ? ", products);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [categoryId]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (categoryId && selectedBrands.length > 0) {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:4000/api/productDetails?categoryId=${categoryId}&brands=${selectedBrands}`
  //         );
  //         console.log("only category Id and brand? ", response);
  //         const products = response.data;
  //         setProduct(products);
  //         console.log("only category Id and brand? ", products);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [selectedBrands]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (selectedSubCat) {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:4000/api/productDetails?categoryId=${selectedSubCat}`
  //         );
  //         console.log("only category Id and sub category?? ", response);
  //         const products = response.data;
  //         setProduct(products);
  //         console.log("only category Id and sub category? ", products);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [selectedSubCat]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (categoryId && selectedSubCat && selectedBrands.length > 0) {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:4000/api/productDetails?categoryId=${categoryId}&subCategories=${selectedSubCat}&brands=${selectedBrands}`
  //         );
  //         console.log("only category Id and sub category brand?? ", response);
  //         const products = response.data;
  //         setProduct(products);
  //         console.log("only category Id and sub category brand??  ", products);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [selectedBrands]);

  // useEffect(() => {
  //   if (selectedSubCat && selectedBrands) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:4000/api/productDetails?subCategories=${selectedSubCat}&brands=${selectedBrands}`
  //         );
  //         console.log("sub category and brand?? ", response);
  //         const products = response.data;
  //         setProduct(products);
  //         console.log("sub category and brand??  ", products);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [selectedBrands]);

  // useEffect(() => {
  //   console.log("passed categoryId id", categoryId);
  //   console.log("passed selectedSubCat id", selectedSubCat);
  // }, [categoryId, selectedSubCat]);

  // useEffect(() => {
  //   const categories: Array<string> =
  //     sessionStorage.getItem("subCategories") !== null
  //       ? JSON.parse(sessionStorage.getItem("subCategories") as string)
  //       : [];

  //   const subcatLoad =
  //     categories && categories.length > 0
  //       ? categories.join(",").split(",")
  //       : [];
  //   console.log(
  //     "sessionStorage.getItem",
  //     sessionStorage.getItem("subCategories")
  //   );
  //   const fetchData = async () => {
  //     if (categoryId) {
  //       const response = await axios.get(`${baseUrl}/products/${categoryId}`);
  //       setProduct(response.data);
  //       if (selectedSubCat.length > 0) {
  //         const fetchData = async () => {
  //           if (selectedSubCat) {
  //             const response = await axios.get(
  //               `${baseUrl}/products/${selectedSubCat}`
  //             );
  //             if (response.data.length > 0) {
  //               setProduct(response.data);
  //               // const brands: Array<String> =
  //               //   sessionStorage.getItem("brands") != null
  //               //     ? JSON.parse(sessionStorage.getItem("brands")!)
  //               //     : [];
  //               // const brandsLoad =
  //               //   brands && brands.length > 0
  //               //     ? brands.join(",").split(",")
  //               //     : [];
  //               //brand
  //               // if (selectedBrands.length > 0) {
  //               //   const filteredProducts = product.filter((product: any) =>
  //               //     selectedBrands.includes(product?._id)
  //               //   );

  //               //   setProduct(filteredProducts);
  //               // } else if (brandsLoad.length == 0) {
  //               //   const fetchData = async () => {
  //               //     if (selectedSubCat) {
  //               //       const response = await axios.get(
  //               //         `${baseUrl}/products/${selectedSubCat}`
  //               //       );
  //               //       setProduct(response.data);
  //               //     } else if (categoryId) {
  //               //       const response = await axios.get(
  //               //         `${baseUrl}/products/${selectedSubCat}`
  //               //       );
  //               //       setProduct(response.data);
  //               //     }
  //               //   };
  //               //   fetchData().catch((error) => {
  //               //     console.log(error);
  //               //   });
  //               // }
  //             }
  //           }
  //         };
  //         fetchData().catch((error) => {
  //           console.log(error);
  //         });
  //       } else if (subcatLoad.length == 0) {
  //         const fetchData = async () => {
  //           if (categoryId) {
  //             const response = await axios.get(
  //               `${baseUrl}/products/${categoryId}`
  //             );
  //             setProduct(response.data);
  //             // const brands: Array<String> =
  //             //   sessionStorage.getItem("brands") != null
  //             //     ? JSON.parse(sessionStorage.getItem("brands")!)
  //             //     : [];
  //             // const brandsLoad =
  //             //   brands && brands.length > 0 ? brands.join(",").split(",") : [];

  //             // if (selectedBrands.length > 0) {
  //             //   const filteredProducts = product.filter((product: any) =>
  //             //     selectedBrands.includes(product?._id)
  //             //   );

  //             //   setProduct(filteredProducts);
  //             // } else if (brandsLoad.length == 0) {
  //             //   const fetchData = async () => {
  //             //     if (categoryId) {
  //             //       const response = await axios.get(
  //             //         `${baseUrl}/products/${categoryId}`
  //             //       );
  //             //       setProduct(response.data);
  //             //     }
  //             //   };
  //             //   fetchData().catch((error) => {
  //             //     console.log(error);
  //             //   });
  //             // }
  //           }
  //         };
  //         fetchData().catch((error) => {
  //           console.log(error);
  //         });
  //       }
  //     } else {
  //       if (perpage || page) {
  //         console.log("Product Count coming into Filter product :", perpage);
  //         try {
  //           const fetchData = async () => {
  //             const response = await axios.get(
  //               `http://localhost:4000/api/products?page=${page}&perpage=${perpage}`
  //             );
  //             console.log("response product count", response.data.products);
  //             if (response.data.products.length > 0) {
  //               setProduct(response.data.products);
  //               if (perpage) {
  //                 try {
  //                   const fetchData = async () => {
  //                     const response = await axios.get(
  //                       `http://localhost:4000/api/products?page=${page}&perpage=${perpage}`
  //                     );
  //                     if (response.data.products.length > 0) {
  //                       setProduct(response.data.products);
  //                     }
  //                   };
  //                   fetchData();
  //                 } catch (error) {
  //                   console.log(error);
  //                 }
  //               } else if (!page) {
  //               }
  //             }
  //           };
  //           fetchData();
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //       // };
  //       // fetchData().catch((error) => {
  //       //   console.log(error);
  //       // });
  //     }
  //   };
  //   fetchData().catch((error) => {
  //     console.log(error);
  //   });
  // }, [categoryId, selectedSubCat, perpage, page]);

  return (
    <div>
      {product.length != 0 ? (
        <div className="mx-auto ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            {product.map((product: any, index) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
