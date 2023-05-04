import React, { ReactNode } from "react";
import Footer from "../Footer/Footer-top";
import Header from "../Header/Header";
import Message from "../Message/Message";
import TopHeader from "../TopHeader/TopHeader";
import NavbarNew from "../Navbar/newNawBar";
import NewsLettertwo from "../NewsLetter2/NewsLettertwo";

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
      <NewsLettertwo />
      <Footer />
    </div>
  );
};

export default Layout;
