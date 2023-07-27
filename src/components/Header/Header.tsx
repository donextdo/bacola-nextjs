import { useEffect, useState } from "react";
import CartPopup from "../../features/cart/popup-cart/CartPopup";
import { SearchItem } from "../Search/Search";
import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import logo from "../../../assets/logo/buntalk.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import getConfig from "next/config";
import { Location } from "../Location/Location";
import { useRouter } from "next/router";
import SideNavBar from "../SideNavBar/SideNavbar";
import { FiHeart, FiSearch } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    const cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [];
    if (cartItemsArray.length > 0) {
      const sum = cartItemsArray.reduce(
        (accumulator: any, currentValue: any) => {
          const updatedUnitPrice =
            currentValue.price -
            currentValue.price * (currentValue.discount / 100);
          return accumulator + currentValue.count * updatedUnitPrice;
        },
        0
      );

      const sumQuantity = cartItemsArray.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator + currentValue.count,
        0
      );
      setTotalPrice(sum);
      setTotalQuantity(sumQuantity);
    } else {
      setTotalPrice(0);
      setTotalQuantity(0);
    }
  }, [totalAmount]);

  const { publicRuntimeConfig } = getConfig();

  const logoUrl = publicRuntimeConfig.APP_LOGO_URL;

  const Logo = () => {
    if (logoUrl !== "") {
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
    setCart(!cart);
  };
  const hnadleEnter = () => {
    setCart(true);
  };
  const handleLeave = () => {
    setCart(false);
  };

  const handleSideNavbar = () => {
    setShowSideNavbar(!showSideNavbar);
  };

  return (
    <>
      <div className="container mx-auto hidden md:block">
        <div className="mx-auto flex items-center flex-row lg:px-40 mt-4">
          <div className="basis-1/4 text-4xl font-bold text-[#223994]">
            <Link href="/">
              <div className="h-[95px] w-40 sm:col-span-2">
                <Logo />
              </div>
            </Link>
          </div>
          <div className="basis-1/4 lg:visible md:visible invisible">
            <Location />
          </div>
          <div className="basis-2/4 search-bar">
            <SearchItem />
          </div>

          <div className="basis-1/4 flex gap-4 justify-end items-center font-semibold">
            <div>
              <Link href="/account">
                <button className="border rounded-full p-2">
                  <AiOutlineUser className="text-2xl" />
                </button>
              </Link>
            </div>
            <div className="">Rs {totalPrice.toFixed(2)}</div>
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
              {totalQuantity > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </div>
              )}
            </div>
            <div>{ }</div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="md:hidden  sticky top-0  w-full bg-white z-50">
        <div className="flex justify-between items-center h-14 px-2">
          <div>
            <button className="text-3xl" onClick={handleSideNavbar}>
              <BsList />
            </button>
            {showSideNavbar && (
              <SideNavBar
                setShowSideNavbar={setShowSideNavbar}
                handleSideNavbar={handleSideNavbar}
              />
            )}
          </div>
          <div className="h-[50px] w-40 sm:col-span-2">
            <Link href="/">
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
            {totalQuantity > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden  fixed bottom-0  w-full bg-white z-50">
        <div className="flex justify-between items-center h-14 px-2">

          <div className="flex flex-col items-center space-y-1">
            <button className="text-3xl" onClick={()=>{router.push("/shop")}}>
              <HiOutlineBuildingStorefront className="text-[#a7a7b5] w-[20px] h-[20px]" />
            </button>
            <h1 className="text-[#a7a7b5] text-[10px]">Search</h1>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <button className="text-3xl" onClick={handleSideNavbar}>
              <FiSearch className="text-[#a7a7b5] w-[20px] h-[20px]" />
            </button>
            <h1 className="text-[#a7a7b5] text-[10px]">Search</h1>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <button className="text-3xl" onClick={() => { router.push("/wishlist")}}>
              <FiHeart className="text-[#a7a7b5] w-[20px] h-[20px]" />
            </button>
            <h1 className="text-[#a7a7b5] text-[10px]">Wishllist</h1>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <button className="text-3xl" onClick={() => { router.push("/account")}}>
              <AiOutlineUser className="fill-[#a7a7b5] w-[20px] h-[20px]" />
            </button>
            <h1 className="text-[#a7a7b5] text-[10px]">Account</h1>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <button className="text-3xl" onClick={handleSideNavbar}>
              <BsList className="fill-[#a7a7b5] w-[20px] h-[20px]" />
            </button>
            <h1 className="text-[#a7a7b5] text-[10px]">Categories</h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
