import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//Components
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/Header";
import CartList from "@/components/Image-Cart-Bottom/Image-cart-bottom";
import HomeSlider from "@/components/Homeslider";
import { ProductList } from "@/features/product/ProductList";

export default function Home() {
  return (
    <div className="lg:px-40 md:px-10 px-10">
      {/* <Header /> */}
      <HomeSlider />
      <div>
        <ProductList />
      </div>
      <CartList />
    </div>
  );
}
