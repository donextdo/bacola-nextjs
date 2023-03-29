import React, {ReactNode} from "react";
import Footer from "../Footer/Footer-top"
import Header from "../Header/Header";
import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import NewsLetter from "../NewsLetter/Newsletter";
import TopHeader from "../TopHeader/TopHeader";



type Props = {
    children: ReactNode;
}

const Layout : React.FC<Props> = ({children}) => {
    return ( 
        <div className="">
        <Message />
        <TopHeader />
        <Header />
        <Navbar />
        {children}
        <NewsLetter/>
        <Footer />
        </div>
     );
}
 
export default Layout;