import Link from "next/link";

const Orders = () => {
    return ( 
        <div className="border border-gray-200 p-4 ">
            <p className="leading-loose"><Link href="#" className="bg-[#233a95] text-white p-2 rounded-md">Browse Products</Link> No Order has been made yet.</p>
        </div>
     );
}
 
export default Orders;