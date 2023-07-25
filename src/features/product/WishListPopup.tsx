import router from "next/router";
import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

export function WishListPopup({ setWishListPopup, proId }: any) {
  const viewWishlist = () => {
    router.push("/wishlist");
  };

  const closeModal = () => {
    setWishListPopup(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-slate-900 bg-opacity-50">
      <div className="py-10 px-10 mx-2 flex flex-col items-center relative bg-white shadow-md  w-full lg:w-[400px]">
        <FiHeart className="h-10 w-10 text-blue-900 mb-6" />
        <p className="text-center font-medium">
          {proId.title} has been added to your wishlist.
        </p>
        <div className="mt-4 space-y-4">
          <button
            className="flex items-center justify-center text-white bg-blue-900 text-sm w-[300px] py-2 rounded-sm"
            onClick={viewWishlist}
          >
            <FiHeart className="mr-2" />
            View Wishlist
          </button>
          <button
            className="flex items-center justify-center text-white bg-blue-900 text-sm w-[300px] py-2 rounded-sm"
            onClick={closeModal}
          >
            <RxCross2 className="mr-2 font-bold" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function WishListWrongPopup({ setModalWrongWishList, proId }: any) {
  const viewWishlist = () => {
    router.push("/wishlist");
  };

  const closeModal = () => {
    setModalWrongWishList(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-slate-900 bg-opacity-50">
      <div className="py-10 px-10 mx-2 flex flex-col items-center relative bg-white shadow-md  w-full lg:w-[400px]">
        <RxCrossCircled className="h-10 w-10 text-blue-900 mb-6" />
        <p className="text-center font-medium">
          {proId.title} already in Wishlist.
        </p>
        <div className="mt-4 space-y-4">
          <button
            className="flex items-center justify-center text-white bg-blue-900 text-sm w-[300px] py-2 rounded-sm"
            onClick={viewWishlist}
          >
            <FiHeart className="mr-2" />
            View Wishlist
          </button>
          <button
            className="flex items-center justify-center text-white bg-blue-900 text-sm w-[300px] py-2 rounded-sm"
            onClick={closeModal}
          >
            <RxCross2 className="mr-2 font-bold" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
