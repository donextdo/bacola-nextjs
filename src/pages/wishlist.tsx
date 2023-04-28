import { addItem } from "@/features/cart/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface WIshlist {
    address: string;
    date: string;
    price: number;
    title:string;
    id: string;
    image:string;
    checked: boolean;
    quantity: number;

    // any other properties
  }
const Wishlist = () => {
    const [data, setData] = useState<Array<WIshlist>>([
        // { id: 1, name: "John", age: 25, email: "john@example.com", phone: "1234567890", address: "123 Main St", city: "New York" },
        // { id: 2, name: "Jane", age: 30, email: "jane@example.com", phone: "2345678901", address: "456 Broadway", city: "Los Angeles" },
        // { id: 3, name: "Bob", age: 40, email: "bob@example.com", phone: "3456789012", address: "789 5th Ave", city: "Chicago" },
    ]);

    useEffect(() => {
        const wishlistString = localStorage.getItem('wishlist');
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
        console.log(wishlist)
        setData(wishlist);
    }, []);

    const [checkAll, setCheckAll] = useState(false);

    const handleCheckAll = () => {
        const newData = [...data];
        newData.forEach(item => {
            item.checked = !checkAll;
        });
        setData(newData);
        setCheckAll(!checkAll);
    };

    const handleCheck = (id:any) => {
        const newData = [...data];
        newData.forEach(item => {
            if (item.id === id) {
                item.checked = !item.checked;
            }
        });
        setData(newData);
    };

    const handleDelete = (id: any) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        // localStorage.setItem('wishlist', JSON.stringify([])); 
        // Retrieve the wishlist array from localStorage and parse it
        const wishlistString = localStorage.getItem('wishlist');
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];

        // Find the index of the item you want to remove
        const index = wishlist.findIndex(item => item.id === id);

        // Use the splice method to remove the item from the array
        wishlist.splice(index, 1);

        // Store the updated array back into localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));

    };
    const dispatch = useDispatch();

    const handleCart = (item: any) => {
        dispatch(addItem(item))
    }

    const handleAddSelectedToCart = () => {
        const selectedItems = data.filter(item => item.checked);
        selectedItems.forEach(item => {
            dispatch(addItem(item));
        });
    }

    const handleAddCart = () => {
        const selectedItems = data.filter(item => item.checked);
        selectedItems.forEach(item => {
            dispatch(addItem(item));
        });
    }

    return (
        <div className="container mx-auto mb-40">
            <h1 className="text-[32px] mt-14 mb-6">Default wishlist</h1>
            <table className="table-auto w-full border-collapse border border-gray-400 ">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={checkAll}
                                onChange={handleCheckAll}
                            />
                        </th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Product Name</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Unit Price</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Date Added</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]">Stock Status</th>
                        <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                    checked={item.checked}
                                    onChange={() => handleCheck(item.id)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button className="" onClick={() => handleDelete(item.id)}><IoClose /></button>
                            </td>
                            <td className="border px-4 py-2">
                                <div className="w-[71px] h-[71px]">
                                    <Image
                                        src={item.image}
                                        alt="Header Image"
                                        className="w-full "
                                        width={1200}
                                        height={800}
                                    />
                                </div>
                            </td>
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">{item.date}</td>
                            <td className="border px-4 py-2">{item.quantity>0 ? "In Stock": "Out of Stock"}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className=" bg-blue-900 text-white text-xs rounded-md px-5 py-3 " onClick={() => handleCart(item)}
                                >
                                    Add to cart
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <section className="flex justify-between p-3.5 border ">
                <div className="inline-flex gap-2 w-full">
                    <input type="text" className="h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72" placeholder="Action" />
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40">Apply Action</button>
                </div>

                <div className="flex gap-2">
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 " onClick={handleAddSelectedToCart}>Add Selected to Cart</button>
                    <button className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 " onClick={handleAddCart}>Add All to Cart</button>
                </div>
            </section>
        </div>
    );
}

export default Wishlist;