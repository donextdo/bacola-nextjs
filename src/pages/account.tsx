import LoginRegisterPage from "@/components/LoginRegister/LoginRegister";
import MyAccount from "@/components/MyAccount/MyAccount";
import { useEffect, useState } from "react";

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
      }, []);

    return ( 
        <div>
            {isLoggedIn ? <MyAccount /> : <LoginRegisterPage />}
            {/* // <MyAccount /> */}
        </div>
     );
}
 
export default Account;