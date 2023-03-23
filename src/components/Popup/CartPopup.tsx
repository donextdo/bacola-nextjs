import Image from "next/image";
import product from '../../../assets/product/product.jpg'
import { IoClose } from "react-icons/io5";import {RootState} from "../../redux/store"
import { useDispatch, useSelector } from "react-redux";

const CartPopup = ({ setCart }: any) => {
    const {count} = useSelector((state: RootState)=>state.counter);

    return (
        <div className="absolute w-[300px] max-h-[540px] bg-white right-0 z-50 px-5 py-4 shadow-lg">
            <div className=" grid grid-cols-3 w-[258px] max-h-[260px] mb-4 overflow-y-auto pt-2 relative">
                
                <div className="text-left h-20  border-b border-[#e3e4e6] ">
                    <Image
                    src={product}
                    alt="product"
                    style={{ objectFit: "contain", backgroundColor: "white", width: "100%", height: "100%" }}
                    width={450}
                    height={400}
                />
                </div>
                <div className="col-span-2 text-left py-2 h-20 border-b border-[#e3e4e6]">
                    <p className="text-xs ">Pepsi Cola Soda - 2 L Bottle</p>
                    <p className="text-xs mt-2">{count} × <span className="text-[#d51243]"> $5.05</span></p>
                </div>
                <button className="absolute bg-[#ff6048] rounded-full p-0.5 text-white left-4 top-4"><IoClose className="text-white text-xs" /></button>
                <div className="text-left pb-2 h-20  border-b border-[#e3e4e6]">
                    <Image
                    src={product}
                    alt="product"
                    style={{ objectFit: "contain", backgroundColor: "white", width: "100%", height: "100%" }}
                    width={450}
                    height={400}
                />
                </div>
                <div className="col-span-2 text-left py-2 h-20 border-b border-[#e3e4e6]">
                    <p className="text-xs ">Pepsi Cola Soda - 2 L Bottle</p>
                    <p className="text-xs mt-2">1 × <span className="text-[#d51243]"> $5.05</span></p>
                </div>
                
               
            </div>
            <div className="flex justify-between mt-6 mb-4">
                <p className="text-[#c2c2d3] font-semibold text-[13px]">Subtotal:</p>
                <p className="text-lg text-[#d51243]">$85.33</p>
            </div>
            <button className="bg-white border py-1.5 rounded-md text-sm h-[50px] w-full text-center">View cart</button>
            <button className="bg-[#ed174a] text-white py-1.5 rounded-md text-sm h-[50px] w-full text-center mt-1">Checkout</button>
            <hr className="mt-3" />
            <p className="text-xs text-center text-[#3e445a] mt-4">We reduce shipping prices to only 2.49 €!</p>
        </div>
    );
}

export default CartPopup;