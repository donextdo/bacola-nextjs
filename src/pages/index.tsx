import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//Components
import About from "@/components/AboutUs/Aboutus";
import ContactUs from "@/components/ContactUs/Contact-us-main";
import NewsLetter from "@/components/NewsLetter/Newsletter";
import LoginSignup from "@/components/LoginRegister/Login";
import Footer from "@/components/Footer/Footer-top";
import HomeSlider from "@/components/Homeslider";
import CartList from "@/components/Image-Cart-Bottom/Image-cart-bottom";
import Navbar from "@/components/Navbar/Navbar";
import LoginRegisterPage from "@/components/LoginRegister/LoginRegister";
import SideNavBar from "@/components/SideNavBar/SideNavbar";
import Allcategories from "@/components/AllCategories/Allcategories";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <NewsLetter/> */}
      {/* <About /> */}
      {/* <CartList/>      */}

      {/* <HomeSlider/> */}

      {/* <ContactUs/> */}
      {/* <LoginRegisterPage />   */}
   

      
      {/* <Footer /> */}

   
     
      
      {/* <Navbar/> */}
      {/* <SideNavBar/> */}
      {/* <div className="mx-10 my-5">
      <Allcategories/>
      </div> */}


      
     
    </>
  );
}
