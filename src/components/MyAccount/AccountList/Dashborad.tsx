import { RootState } from "@/redux/store";
import { JSXElementConstructor, ReactElement, ReactFragment } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";

const Dashboard = () => {
    const orderList = useSelector((state: RootState) => state.order.orders);
    console.log(orderList)
   
    const handleClick = () => {
        localStorage.removeItem("token");
        location.reload(); 

    }
    const handleorder = () => {
        
    }

    let email: string | null;
    let username;
    let extractedUsername: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;

    // review name
    if (localStorage.getItem('email') !== null) {
        email = localStorage.getItem('email');
        console.log(email)
        if (email !== null) {
            username = email.split('@')[0]; // Extract the username from the email
            extractedUsername = username.replace(/"/g, '');
        } else {
            // Handle the case when the email value is null
        }
    } else {
        // Handle the case when the value is null
        // For example, you could set a default value      
    }
        return (
        <div>
            <p>Hello <span className="font-semibold">{extractedUsername}</span> (not <span className="font-semibold">{extractedUsername}?</span><button onClick={handleClick}><span className="text-[#2bbef9] underline underline-offset-1"> Log out</span></button>)</p>

            <p className="mt-4">From your account dashboard you can view your <button onClick={() => handleorder()}><span className="text-[#2bbef9] underline underline-offset-1">recent orders</span></button>, manage your <span className="text-[#2bbef9] underline underline-offset-1">shipping and billing addresses</span>, and <span className="text-[#2bbef9] underline underline-offset-1">edit your password and account details</span>.</p>
        </div>
    );
}

export default Dashboard;