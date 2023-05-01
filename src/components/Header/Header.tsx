import { useState } from "react";
import CartPopup from "../../features/cart/popup-cart/CartPopup";
import { SearchItem } from "../Search/Search";
import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import logo from "../../../assets/logo/bacola.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import getConfig from "next/config";

const Header = () => {
  const [cart, setCart] = useState(false);
  // const [totalCount, setTotalCount] = useState(0)
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);

  const { publicRuntimeConfig } = getConfig();

  const logoUrl = publicRuntimeConfig.APP_LOGO_URL;

  const Logo = () => {
    if (logoUrl !== "") {
      console.log("logo url");
      return (
        <Image
          src={logoUrl}
          alt={publicRuntimeConfig.APP_NAME}
          style={{
            objectFit: "contain",
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
          width={450}
          height={400}
        />
      );
    } else {
      console.log("logo url");
      return (
        <Image
          src={logo}
          alt="item1"
          style={{
            objectFit: "contain",
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
          width={450}
          height={400}
        />
      );
    }
  };

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
            <Link href="/">
              <div className="h-[95px] w-40 sm:col-span-2">
                <Logo />
                {/* <Image
                  src={logo}
                  alt="item1"
                  style={{
                    objectFit: "contain",
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                  }}
                  width={450}
                  height={400}
                /> */}
              </div>
            </Link>
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
              {totalCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCount}
                </div>
              )}
            </div>
            <div>{}</div>
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
