import React, { ReactNode } from "react";
import Footer from "../Footer/Footer-top";
import Header from "../Header/Header";
import Message from "../Message/Message";
import TopHeader from "../TopHeader/TopHeader";
import NavbarNew from "../Navbar/newNawBar";
import NewsLetter from "../NewsLetter/NewsLetter";


type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
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
