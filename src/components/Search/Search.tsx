import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "./product";
import { fetchProducts } from "@/features/product/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export const SearchItem = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.products
  ) as Product[];

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setIsLoading(true);
    e.preventDefault();
  };

  const onSearch = (searchTerm: string) => {
    setSearchItem(searchTerm);
  };

  const sendView = (itemId) => {
    setIsHide(true);
    router.push({
      pathname: "/viewProduct",
      query: { itemId: itemId },
    });
    setSearchItem("");
    setIsHide(false);
  };

  return (
    <div className=" flex flex-col w-full md:w-full lg:w-96 place-content-center relative">
      <div className="flex relative xl:w-[600px] ">
        <input
          type="search"
          className="bg-gray-200 rounded-tl rounded-bl min-h-[60px] md:w-full lg-w-full w-1/2 pl-5 text-sm focus:outline-none "
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
        )}
      </div>

      {searchItem !== "" && !isHide && (
        <div className=" flex flex-col">
          <ul className="absolute bg-white border-2 border-gray-200 min-w-[37.5rem] z-10">
            {products
              .filter((item) => {
                const searchTerm = searchItem.toLowerCase();
                const title = item.title.toLowerCase();
                return (
                  searchTerm &&
                  title.startsWith(searchTerm) &&
                  title !== searchTerm
                );
              })
              .slice(0, 7)
              .map((item) => (
                <div className="flex flex-row items-center justify-between py-1">
                  <div className="flex items-center">
                    <li
                      key={item.id}
                      className="cursor-pointer text-start ml-2 border border-gray-400 py-1"
                    >
                      <Image
                        width={50}
                        height={50}
                        src={item.front}
                        alt={item.title}
                      />
                    </li>

                    {/* <Link href={`/item-preview/${item._id}`}> */}
                    <li
                      key={item.id}
                      className="cursor-pointer text-start ml-2 flex-1 hover:underline"
                      onClick={() => sendView(item._id)}
                    >
                      {item.title}
                    </li>
                    {/* </Link> */}
                  </div>
                  <div className="flex flex-col">
                    <li
                      key={item.id}
                      className="cursor-pointer text-end text-gray-400 font-semibold line-through mr-2 text-[14px]"
                    >
                      ${item.price}
                    </li>
                    <li
                      key={item.id}
                      className="cursor-pointer text-end text-red-700 text-lg font-semibold mr-2"
                    >
                      ${item.price}
                    </li>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
