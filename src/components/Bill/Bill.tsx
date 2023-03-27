const Bill = () => {
    
    return ( 
        <div className="container mx-auto px-40 mt-10">
                    <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
                    <hr className="mb-4"/>


            <label className="text-sm">First Name *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Last Name *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Company Name (optional)</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Country / Region *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Street address *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-2 px-2" placeholder="House number and street name"/>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-2" placeholder="Apartment, suite, unite, etc. (optional)"/>


             <label className="text-sm">Town / City *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

             <label className="text-sm">State *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

             <label className="text-sm">Zip Code *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" /> 

            <label className="text-sm">Phone *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" /> 

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" /> 

            <button className="bg-[#233a95] text-white py-2.5 px-4 mb-4 rounded-md text-sm">Save Changes</button>

        </div>
     );
}
 
export default Bill;