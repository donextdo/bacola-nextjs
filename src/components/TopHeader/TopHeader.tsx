import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const TopHeader = () => {
  const router = useRouter();

  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      token != "" && token != null ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }
  }, [router.pathname]);

  const clickNavBarAboutUs = () => {
    if (isLoggedin) {
      router.push({
        pathname: "/about",
      });
    } else {
      router.push({
        pathname: "/account",
      });
    }
  };
  const clickNavBarWishList = () => {
    if (isLoggedin) {
      router.push({
        pathname: "/wishlist",
      });
    } else {
      router.push({
        pathname: "/account",
      });
    }
  };
  return (
    <div className="container mx-auto hidden xl:block px-40">
      <div className=" mx-auto flex justify-between py-2.5">
        <div>
          <nav>
            <ul className="flex gap-4 text-xs">
              <li
                onClick={() => clickNavBarAboutUs()}
                className="cursor-pointer"
              >
                {/* <Link href="/about"> */}
                <p>About Us</p>
                {/* </Link> */}
              </li>
              <li>
                <Link href="/account">
                  <p>My account</p>
                </Link>
              </li>
              <li
                onClick={() => clickNavBarWishList()}
                className="cursor-pointer"
              >
                {/* <Link href="/wishlist"> */}
                <p>Wishlist</p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="#">
                                    <p>Order Tracking</p>
                                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <span className="text-xs mr-4">
            100% Secure delivery without contacting the courier
          </span>
          <span className="text-xs text-gray-300 mr-4">|</span>
          <span className="text-xs flex">
            Need help? Call Us:{" "}
            <p className="text-[#2bbef9] font-semibold ml-2">0112729729</p>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopHeader;
