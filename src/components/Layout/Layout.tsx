import React, { ReactNode } from "react";
import Footer from "../Footer/Footer-top";
import Header from "../Header/Header";
import Message from "../Message/Message";
// import Navbar from "../Navbar/Navbar";
import NewsLetter from "../NewsLetter/Newsletter";
import TopHeader from "../TopHeader/TopHeader";
import NavbarNew from "../Navbar/newNawBar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Message />
      <TopHeader />
      <Header />
      {/* <Navbar /> */}
      <NavbarNew />
      {children}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Layout;
