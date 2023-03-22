import React, {ReactNode} from "react";
import MainFooter from "../Footer/MainFooter";
import Message from "../Message/Message";
import NewsLetter from "../NewsLetter/NewsLetter";


type Props = {
    children: ReactNode;
}

const Layout : React.FC<Props> = ({children}) => {
    return ( 
        <div className="">
        <Message />
        {children}
        <NewsLetter />
         <MainFooter />   
        </div>
     );
}
 
export default Layout;