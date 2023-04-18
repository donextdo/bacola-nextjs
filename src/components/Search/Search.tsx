import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "./product";
import { fetchProducts } from "@/features/product/productSlice";
import Image from "next/image";

export const SearchItem = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];
  // useEffect(() => {
  //   dispatch(fetchProducts());
  //   console.log("search data ", products);
  // }, [dispatch]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setIsLoading(true);
    e.preventDefault();
    // const response = await fetch(
    //   `https://example.com/api/search?q=${searchItem}`
    // );
    // const data = await response.json();
    // if(response.ok){
    //   setIsLoading(false);
    //   setSearchResults(data);
    //   console.log(data);
    //   alert("Search button clicked! " + searchItem);
    // }
  };

  const onSearch = (searchItem: string) => {
    console.log("search == ", searchItem);
    dispatch(fetchProducts());
    console.log("search data ", products[0].front);
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   // const response = await fetch(
  //   //   `https://example.com/api/search?q=${searchItem}`
  //   // );
  //   // const data = await response.json();
  //   // if(response.ok){
  //   //   setIsLoading(false);
  //   //   setSearchResults(data);
  //   //   console.log(data);
  //   //   alert("Search button clicked! " + searchItem);
  //   // }
  // }, [searchItem]);

  return (
    <div className=" flex flex-col min-h-[60px] min-w-[557.51px] place-content-center">
      <div className="flex">
        <input
          type="search"
          className="bg-gray-200 rounded-tl rounded-bl min-h-[60px] min-w-[557.51px] pl-5 text-sm focus:outline-none"
          placeholder="Search for product..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          // onClick={handleSubmit}
        />
        {isLoading ? (
          <div className="bg-gray-200 rounded-br rounded-tr min-h-[60px] min-w-[60px]  flex items-center justify-center hover:cursor-pointer">
            <Spinner />
          </div>
        ) : (
          <div
            className="bg-gray-200 rounded-br rounded-tr min-h-[60px] min-w-[60px]  flex items-center justify-center hover:cursor-pointer"
            onClick={() => onSearch(searchItem)}
          >
            <FiSearch
              type="submit"
              className="min-h-[36px] min-w-[24px] text-blue-900 "
            />
          </div>
          /* {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )} */
        )}
      </div>

      <div className="bg-white flex flex-col border-solid border-2 border-gray-200 ">
        {/* <ul>
          {products.filter().map((item) => (
            <div className="flex flex-row items-center">
              <li className="cursor-pointer text-start ml-2">
                <Image
                  width={50}
                  height={50}
                  src={item.front}
                  alt={item.title}
                />
              </li>
              <li className="cursor-pointer text-start ml-2 flex-1  ">
                {item.title}
              </li>
              <li className="cursor-pointer text-end ">{item.price}</li>
            </div>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
