import Link from "next/link";
import { useState } from "react";
import Bill from "../../Bill/Bill";

const Address = () => {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)


    const handleClick = () => {
        setModal(true)
    }
    const handleClick1 = () => {
        setModal1(true)
    }
    return (
        <div>
            <p>The following addresses will be used on the checkout page by default.</p>

            <div className="grid gap-8 sm:grid-cols-2 mt-4">
                <div>
                    <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
                    <hr />
                   {/* <Link href="/bill"><h2 className="text-[#2bbef9] mt-4">Add</h2></Link>  */}
                   <button className="text-[#2bbef9] mt-4" onClick={handleClick}>Add</button>
                   
                    <h2>You have not set up this type of address yet.</h2>
                    
                </div>
                <div>
                    <h2 className="font-semibold mb-2">SHIPPING ADDRESS</h2>
                    <hr />
                    {/* <h2 className="text-[#2bbef9] mt-4">Add</h2> */}
                   <button className="text-[#2bbef9] mt-4" onClick={handleClick1}>Add</button>

                    <h2>You have not set up this type of address yet.</h2>
                </div>
            </div>

            {
                modal && <Bill />
            }

{
                modal1 && <Bill />
            }
        </div >
    );
}

export default Address;