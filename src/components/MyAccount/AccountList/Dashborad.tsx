const Dashboard = () => {
   
    const handleClick = () => {
        localStorage.removeItem("token");
        location.reload(); 

    }
    const handleorder = () => {
        
    }

        return (
        <div>
            <p>Hello <span className="font-semibold">Kalana</span> (not <span className="font-semibold">Kalana?</span><button onClick={handleClick}><span className="text-[#2bbef9] underline underline-offset-1"> Log out</span></button>)</p>

            <p className="mt-4">From your account dashboard you can view your <button onClick={() => handleorder()}><span className="text-[#2bbef9] underline underline-offset-1">recent orders</span></button>, manage your <span className="text-[#2bbef9] underline underline-offset-1">shipping and billing addresses</span>, and <span className="text-[#2bbef9] underline underline-offset-1">edit your password and account details</span>.</p>
        </div>
    );
}

export default Dashboard;