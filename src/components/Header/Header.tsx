import { useState } from "react";
import CartPopup from "../../features/cart/popup-cart/CartPopup";
import { SearchItem } from "../Search/Search";
import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import { BsList } from "react-icons/bs";

const Header = () => {
  const [cart, setCart] = useState(false);

  const handleClick = () => {
    // setCart(!cart)
  };
  const hnadleEnter = () => {
    setCart(true);
  };
  const handleLeave = () => {
    setCart(false);
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="mx-auto flex items-center flex-row lg:px-40 mt-4">

          <div className="basis-1/4 text-4xl font-bold text-[#223994]">
            <Link href="/">bacola</Link>
          </div>
          <div className="basis-2/4 search-bar">
            <SearchItem />
          </div>

          <div className="basis-1/4 flex gap-4 justify-end">
            <div>
              <Link href="/account">
                <button className="border rounded-full p-2">
                  <AiOutlineUser className="text-2xl" />
                </button>
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={hnadleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                className="border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2"
                onClick={handleClick}
              >
                <SlHandbag className="text-2xl text-[#ea2b0f]" />
              </button>
              {cart && <CartPopup setCart={setCart} />}
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="md:hidden  sticky top-0  w-full bg-white z-50">
        <div className="flex justify-between items-center h-14 px-2">
          <div>
            <button className="text-3xl">
              <BsList />
            </button>
          </div>
          <div className="text-4xl font-bold text-[#223994]">
            <Link href="/">bacola</Link>
          </div>
          <div
              className="relative"
              onMouseEnter={hnadleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                className="border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2"
                onClick={handleClick}
              >
                <SlHandbag className="text-2xl text-[#ea2b0f]" />
              </button>
              {cart && <CartPopup setCart={setCart} />}
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
