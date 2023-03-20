const AccountDetails = () => {
    return ( 
        <div>
            <label className="text-sm">First Name *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Last Name *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Display Name *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-1" />

            <h2 className="italic text-md mb-4">This will be how your name will be displayed in the account section and in reviews</h2>

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-5" />

            <h1 className="fone-smeibold text-xl mb-5">Password Change</h1>

            <label className="text-sm">Current password (leave blank to leave unchanged)</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">New password (leave blank to leave unchanged)</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <label className="text-sm">Confirm new password</label>
            <input type="text" className="w-full h-10 bg-gray-100 rounded-md mt-2 mb-4" />

            <button className="bg-[#233a95] text-white py-2.5 px-4 mb-4 rounded-md text-sm">Save Changes</button>
        </div>
     );
}
 
export default AccountDetails;