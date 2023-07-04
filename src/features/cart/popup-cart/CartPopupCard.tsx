import Image from "next/image";
import product from '../../../assets/product/product.jpg'
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { calSubTotal} from "../cartSlice";
// import Tooltip from '@mui/material/Tooltip';





const CartPopupCard = ({ item, setCartItems }: any) => {
    const dispatch = useDispatch()

    const handleRemove = (_id: any) => {
        const cartItemsString = localStorage.getItem('cartItems');
        const items = cartItemsString ? JSON.parse(cartItemsString) : [];


        const filteredCartItems = items.filter((item: any) => item._id !== _id);

        if (filteredCartItems.length == 0) {
      console.log("remove item")

            localStorage.removeItem("cartItems");

        } else {
            localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
        }

        setCartItems(filteredCartItems)
        dispatch(calSubTotal(12));

    }

    let discountprice;
    discountprice = item.price * (item.discount / 100)
    let newprice = item.price - discountprice

    const MAX_LENGTH = 30; // Maximum number of characters to display

    let displayName = item.title;
    if (item.title?.length > MAX_LENGTH) {
        displayName = item.title.substring(0, MAX_LENGTH) + '...';
    }

    return (
        <div className="grid grid-cols-3 gap-1 w-[258px] mb-4 pt-2 relative">
            <div className="text-left h-20  border-b border-[#e3e4e6] ">
                <img
                    src={item.front}
                    alt="product"
                    style={{ objectFit: "contain", backgroundColor: "white", width: "100%", height: "100%" }}
                    width={450}
                    height={400}
                />
            </div>
            <div className="col-span-2 text-left py-2 h-20 border-b border-[#e3e4e6]">
                {/* <Tooltip title={item.title} followCursor> */}

                <p className="text-xs ">{item.title}</p>
                {/* </Tooltip> */}
                <p className="text-xs mt-2">{item.count || 0} × <span className="text-[#d51243]"> {newprice.toFixed(2)}</span></p>
            </div>
            <button className="absolute bg-[#ff6048] rounded-full p-0.5 text-white left-4 top-4" onClick={() => handleRemove(item._id)}><IoClose className="text-white text-xs" /></button>
        </div>
    );
}

export default CartPopupCard;