import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyAccount from '@/components/MyAccount/MyAccount'
import Cart from '@/features/Cart/Cart'

//Components
import About from "@/components/about";
import ContactUs from "@/components/contact-us";

import LoginSignup from "@/components/Home/Login";
import IndexPage from "@/components/Home";

import HomeSlider from "@/components/Homeslider";
import CartList from "@/components/List-Hardcode";
import Link from "next/link";
import Message from '@/components/Message/Message'
import TopHeader from '@/components/TopHeader/TopHeader'

import Navbar from '@/components/Navbar/navbar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      
      
      {/* <h1 className="text-3xl text-red-600 font-bold font-ff-headings text-center">HELLO WORLD</h1> */}
      {/* <MyAccount /> */}
      {/* <Cart /> */}
      {/* All Completed */}
      {/* <About />  */}
      {/* <IndexPage />   */}
      {/* <ContactUs/> */}
      {/* <HomeSlider/> */}
      {/* <NewsLetter /> */}
      {/* <CartList/>      */}
      {/* <Footer/> */}
      {/* <Message /> */}

    </>
  );
}
