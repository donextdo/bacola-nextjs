import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//Components
import About from "@/components/about";
import ContactUs from "@/components/contact-us";
import NewsLetter from "@/components/newsletter";
import LoginSignup from "@/components/Home/Login";
import IndexPage from "@/components/Home";
import Footer from "@/components/Footer";
import HomeSlider from "@/components/Homeslider";
import CartList from "@/components/List-Hardcode";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* All Completed */}
      <About /> 
      {/* <IndexPage />   */}
      {/* <ContactUs/> */}
      {/* <HomeSlider/> */}
      {/* <NewsLetter/> */}
      {/* <CartList/>      */}
      {/* <Footer/> */}
    </>
  );
}
