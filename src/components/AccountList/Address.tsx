import { useState } from "react";

const Address = () => {
    return (
        // const [showDiv, setShowDiv] = useState(true);

        // const handleRemove = () => {

        // }

        <div>
            <p>The following addresses will be used on the checkout page by default.</p>

            <div className="grid gap-8 sm:grid-cols-2 mt-4">
                <div>
                    <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
                    <hr />
                    <h2 className="text-[#2bbef9] mt-4">Add</h2>
                    <h2>You have not set up this type of address yet.</h2>
                    
                </div>
                <div>
                    <h2 className="font-semibold mb-2">SHIPPING ADDRESS</h2>
                    <hr />
                    <h2 className="text-[#2bbef9] mt-4">Add</h2>
                    <h2>You have not set up this type of address yet.</h2>
                </div>
            </div>
        </div >
    );
}

export default Address;