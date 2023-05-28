import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//Components
const inter = Inter({ subsets: ["latin"] });

import CartList from "@/components/Image-Cart-Bottom/Image-cart-bottom";
import HomeSlider from "@/components/Homeslider";
import HomePage from "@/components/Common/Home";
import { SlArrowUp } from "react-icons/sl";
import { useEffect, useState } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="container mx-auto xl:px-40 lg:px-5 md:px-5 px-5 relative">
      {/* <Header /> */}
      <div className="container mx-auto">
    
  
      <div>
        <HomeSlider />
      </div>
      <HomePage />
      <CartList />
      <button className={`fixed bottom-4 right-4 rounded-full p-4 z-50 bg-white shadow-xl border ${
        showButton ? 'visible' : 'invisible'
      }`} onClick={scrollToTop}><SlArrowUp /></button>
      
    </div>
    </div>
  );
}
