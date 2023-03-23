import React, { ReactElement } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { FC, useState } from "react";

interface ComponentProps {
  isRecommended: Boolean;
  isDiscount: Boolean;
  isOrganic: Boolean;
  image: String;
  title: String;
  isAvailable: Boolean;
  rating: Number;
  price: Number;
  discount: Number;
  isFavourite: Boolean;
}

export const CartItem: FC<ComponentProps> = ({
  isRecommended,
  isDiscount,
  isOrganic,
  image,
  title,
  isAvailable,
  rating,
  price,
  discount,
  isFavourite,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handleIncrement: () => void = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement: () => void = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setIsAddToCart(false);
      setQuantity(1);
    }
  };

  const addToCart: () => void = () => {
    setIsAddToCart(true);
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FaStar
        className={i < (rating as number) ? "text-yellow-500" : "text-gray-400"}
      />
    </span>
  ));

  return (
    <div className="w-full max-w-md mx-auto md:max-w-2xl bg-white border border-gray-200  overflow-hidden relative group hover:drop-shadow-lg rounded-sm">
      <div className="absolute flex flex-col items-start gap-1 p-2">
        {isDiscount && (
          <div className=" font-semibold px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
            {(discount as unknown as ReactElement) != undefined
              ? (discount as unknown as ReactElement)
              : 0}
            %
          </div>
        )}
        {isRecommended && (
          <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
            Recommended
          </div>
        )}
        {isOrganic && (
          <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
            organic
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2">
        <SlSizeFullscreen className="h-4 w-4 fill-blue-900 group-hover/icon2:fill-white" />
      </div>
      <div
        className={`absolute top-12 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1`}
      >
        {isFavourite ? (
          <FaHeart className="h-4 w-4 fill-blue-900 group-hover/icon1:fill-white" />
        ) : (
          <FiHeart className="h-4 w-4 text-blue-900 group-hover/icon1:text-white" />
        )}
      </div>

      <div className="h-40 w-full hover:cursor-pointer my-2">
        <img
          className="h-40 mx-auto p-3"
          src={image as string}
          alt="Man looking at item at a store"
        />
      </div>
      <div className="p-2">
        <div className="text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2">
          {title}
        </div>
        <div className="my-2 text-xs pt-2 text-green-600 uppercase font-semibold">
          {isAvailable ? "In Stock" : "Out of Stock"}
        </div>
        <div className="text-xs pt-2 flex flex-row items-center my-2">
          {stars}
        </div>
        <div className="flex flex-row items-center">
          {isDiscount && (
            <span className="text-gray-400 text-sm line-through mr-2">
              ${price as unknown as ReactElement}
            </span>
          )}
          <span className="text-red-700 text-lg font-semibold">$39.99</span>
        </div>
        <div className="border-black text-black py-2 px-4 mt-4 rounded-full md:invisible group-hover:visible md:group-hover:-translate-y-3 md:group-hover:ease-in transition duration-150">
          {!isAddToCart && (
            <button
              type="button"
              className=" bg-blue-900 text-white py-2 px-4 rounded-full w-full "
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}

          {isAddToCart && (
            <div className=" w-full flex grid-cols-3 h-10">
              <button
                type="button"
                className="px-4 py-2 border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl "
                onClick={handleDecrement}
              >
                -
              </button>
              <div className="flex items-center justify-center w-full text-center border-y">
                {quantity}
              </div>
              <button
                type="button"
                className="px-4 py-2 border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl "
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
