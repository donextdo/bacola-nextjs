import React, { ReactElement } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { FC, useState } from "react";
import Image from "next/image";
import { addItem } from "../../redux/cartItems";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/redux/counter";
import { addToCart, removeFromCart } from "@/redux/AddCartButton";
import { useRouter } from "next/router";

interface ComponentProps {
  isRecommended: Boolean;
  isDiscount: Boolean;
  isOrganic: Boolean;
  image: String;
  sideimage: String;
  backside: String;
  title: String;
  isAvailable: Boolean;
  rating: Number;
  price: number;
  discount: Number;
  isFavourite: Boolean;
}

export const CartItem: FC<ComponentProps> = ({
  isRecommended,
  isDiscount,
  isOrganic,
  image,
  sideimage,
  backside,
  title,
  isAvailable,
  rating,
  price,
  discount,
  isFavourite,
}) => {
  // const [quantity, setQuantity] = useState(1);
  // const [isAddToCart, setIsAddToCart] = useState(false);
  const { count } = useSelector((state: RootState) => state.counter);
  const isAddToCart = useSelector(
    (state: RootState) => state.cartbutton.isAddToCart
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleIncrement: () => void = () => {
    // setQuantity(quantity + 1);
    dispatch(increment());
  };

  const handleDecrement: () => void = () => {
    // setQuantity(quantity - 1);
    dispatch(decrement());
    if (count === 1) {
      dispatch(removeFromCart());
    }
  };

  const handleaddToCart: () => any = () => {
    const item = {
      image: image,
      title: title,
      price: price,
      count: count,
      subtotal: price * count,
    };
    console.log(item.subtotal);
    dispatch(addToCart());
    dispatch(addItem(item));
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FaStar
        className={i < (rating as number) ? "text-yellow-500" : "text-gray-400"}
      />
    </span>
  ));

  const handleClick = () => {
    router.push("/viewcart");
    const myObject = {
      title: title,
      image: image,
      sideimage: sideimage,
      backside: backside,
      isRecommended: isRecommended,
      isDiscount: isDiscount,
      isOrganic: isOrganic,
      isAvailable: isAvailable,
      rating: rating,
      price: price,
      discount: discount,
      count: count,
    };
    localStorage.setItem("item", JSON.stringify(myObject));
  };

  return (
    <div className="md:max-w-[212.95px] md:max-h-[370.24px] min-w-[212.95px] min-h-[350.24px] mx-auto bg-white border border-gray-200  overflow-hidden relative group hover:drop-shadow-lg rounded-sm">
      <div className="absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2">
        {isDiscount && (
          <div className=" font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
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
      <div className="max-w-[40px] max-h-[85px] ">
        <div className="absolute max-w-[24px] max-h-[24px] top-2 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2">
          <SlSizeFullscreen className="h-[10px] w-[10px] fill-blue-900 group-hover/icon2:fill-white" />
        </div>
        <div
          className={`absolute max-w-[24px] max-h-[24px] top-9 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1`}
        >
          {isFavourite ? (
            <FaHeart className="h-3 w-3 fill-blue-900 group-hover/icon1:fill-white" />
          ) : (
            <FiHeart className="h-3 w-3 text-blue-900 group-hover/icon1:text-white" />
          )}
        </div>
      </div>

      <div className=" max-h-[172.95px] min-h-[172.95px] min-w-[154.95px] w-full  hover:cursor-pointer my-2 flex items-center justify-center">
        <Image
          width={172.95}
          height={154.95}
          src={image as string}
          alt="Man looking at item at a store"
          onClick={handleClick}
        />
      </div>
      <div className="mx-5 mb-1 max-h-[155.29px] max-w-[212.95] ">
        <div
          className="text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2"
          onClick={handleClick}
        >
          {title}
        </div>
        {isAvailable ? (
          <div className="my-1 font-[.6875rem] text-xs pt-2 text-green-600 uppercase font-semibold tracking-[.005em]">
            In Stock
          </div>
        ) : (
          <div className="my-1 font-[.6875rem] text-xs pt-2 text-red-600 uppercase font-semibold tracking-[.005em]">
            Out of Stock
          </div>
        )}

        <div className="text-xs pt-2 flex flex-row items-center my-1">
          {stars}
        </div>
        <div className=" flex flex-row items-center">
          {isDiscount && (
            <span className="text-gray-400 text-sm line-through mr-2 my-1 font-[1.125rem]">
              ${price as unknown as ReactElement}
            </span>
          )}
          <span className="my-1 text-red-700 text-lg font-semibold">
            $39.99
          </span>
        </div>
      </div>
      <div className="mx-1 border-black text-black py-2 px-4 mt-1 rounded-full md:invisible group-hover:visible md:group-hover:-translate-y-3 md:group-hover:ease-in transition duration-150">
        {!isAddToCart && (
          <button
            type="button"
            className=" bg-blue-900 text-white min-h-[34px] min-w-[180.8px] rounded-full w-full "
            onClick={handleaddToCart}
          >
            Add to cart
          </button>
        )}

        {isAddToCart && (
          <div className="max-h-[34px] w-full flex grid-cols-3 h-10">
            <button
              type="button"
              className="px-4 max-h-[34px] border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl "
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="max-h-[34px] flex items-center justify-center w-full text-center border-y">
              {count}
            </div>
            <button
              type="button"
              className="px-4 max-h-[34px] border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl "
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
//max-w-md
