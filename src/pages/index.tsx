import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//Components
const inter = Inter({ subsets: ["latin"] });

import CartList from "@/components/Image-Cart-Bottom/Image-cart-bottom";
import HomeSlider from "@/components/Homeslider";
import HomePage from "@/components/Common/Home";

export default function Home() {
  
  return (
    <div className="xl:px-40 lg:px-5 md:px-5 px-5 ">
      {/* <Header /> */}

      <div>
        <HomeSlider />
      </div>
      <HomePage />
      <CartList />
    </div>
  );
}
