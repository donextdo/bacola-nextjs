import Link from "next/link";
import React, { useState } from "react";

import Allcategories from "../AllCategories/Allcategories";
import Demo from "./Demo";

const NavbarNew = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const toggleHome = () => {
    setHomeOpen(homeOpen);
  };
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(shopOpen);
  };
  return (
    <div>
      <div className="xl:px-40 lg:px-5 lg:py-5  hidden md:hidden lg:block">
        <div className=" lg:flex lg:flex-row  lg:justify-between lg:items-center">
          <div className="lg:flex lg:flex-col ">
            <Allcategories />
          </div>
          <div className="lg:flex lg:flex-col  ">
            <Demo />
          </div>
        </div>
      </div>
      <hr className="my-0" />
    </div>
  );
};

export default NavbarNew;
