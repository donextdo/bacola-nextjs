import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
} from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { FC, useState } from "react";
import Image from "next/image";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addItem, calSubTotal, updateItemQuantity } from "../cart/cartSlice";
import { updateProductQuantity } from "./productSlice";
import { Product } from "./product";
import Link from "next/link";
import ProductPopup from "./ProductPopup";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { addRecentlyClickedProductId } from "./recentlyClickedSlice";
interface Props {
  product: Product;
  isGrid: string;
}

export const ProductCard: FC<Props> = ({ product, isGrid }) => {
  const [isDiscount, setIsdiscount] = useState(false);
  // const [productPopup, setProductPopup] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  let id = localStorage.getItem("id");
  const [productPopup, setProductPopup] = useState(false);
  const [proId, setProId] = useState("");
  const [grid, setGrid] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (product.discount >= 0) {
      setIsdiscount(true);
    }

    console.log(product);
  }, []);

  useEffect(() => {
    const getItem: string | null = localStorage.getItem("gridType");
    if (getItem == "list") {
      setGrid("list");
    } else {
      setGrid(getItem || "");
    }
  }, [isGrid]);

  const handleProductClick = (product: any) => {
    let recentlyAddedProductsString = localStorage.getItem(
      "recentlyAddedProducts"
    );
    let products: any[] = [];

    if (recentlyAddedProductsString) {
      products = JSON.parse(recentlyAddedProductsString);
    }
    products.push(product._id);
    if (products.length > 4) {
      products = products.slice(-4);
    }

    // Save the updated list back to local storage
    localStorage.setItem("recentlyAddedProducts", JSON.stringify(products));
    console.log("data - productId: ", products);
  };
  const [cateName, setCatName] = useState();
  let findcategory: any;
  const saveCategoryName = async (product: any) => {
    if (product.category.length > 0) {
      findcategory = product.category[0];
      const res = await axios.get(`${baseUrl}/categories/get/${findcategory}`);

      console.log("ggggggg: ", res.data[0].name);
      localStorage.setItem("catName", JSON.stringify(res.data[0].name));
    }
  };
  const handleIncrement = (product: Product) => {
    // setQuantity(quantity + 1);
    const newQuantity = (product.count || 0) + 1;
    dispatch(updateItemQuantity({ itemId: product._id, count: newQuantity }));
    dispatch(
      updateProductQuantity({ productId: product._id, count: newQuantity })
    );

    console.log("handleIncrement ", product.count);
    dispatch(calSubTotal(totalAmount));
  };

  const handleDecrement = (product: Product) => {
    // setQuantity(quantity - 1);
    const newQuantity = Math.max((product.count || 0) - 1, 0);
    dispatch(updateItemQuantity({ itemId: product._id, count: newQuantity }));
    dispatch(
      updateProductQuantity({ productId: product._id, count: newQuantity })
    );
    console.log("handleDecrement ", product.count);
    if (product.count === 1) {
      // dispatch(removeFromCart(id))
      // setIsAddToCart(false)
    }
    dispatch(calSubTotal(totalAmount));
  };

  const handleaddToCart = (product: Product) => {
  //   console.log(product)
  //    // Retrieve the existing cart items from local storage
  //    let cartItemss = JSON.parse(localStorage.getItem('cartItemss') || '[]');
  // // Add the product to the cart items array
  // cartItemss.push(product);

  // // Update the local storage with the updated array
  // localStorage.setItem('cartItemss', JSON.stringify(cartItemss));

  // cartItemss = JSON.parse(localStorage.getItem('cartItemss') || '[]');

    dispatch(addItem(product));
    const newQuantity = (product.count || 0) + 1;
    console.log("handleaddToCart ", product.count);
    dispatch(
      updateProductQuantity({ productId: product._id, count: newQuantity })
    );
    console.log(product._id);
    dispatch(calSubTotal(totalAmount));
    Swal.fire({
      title:
        '<span style="font-size: 18px">Item has been added to your card</span>',
      width: 400,
      timer: 1500,
      // padding: '3',
      color: "white",
      background: "#00B853",
      showConfirmButton: false,
      heightAuto: true,
      position: "bottom-end",
    });
 
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FaStar
        className={
          i < (product.rating as number) ? "text-yellow-500" : "text-gray-400"
        }
      />
    </span>
  ));

  let discountprice;
  discountprice = product.price * (product.discount / 100);
  let newprice = product.price - discountprice;

  // const handleWishlist = async (product: any) => {
  //   if (id) {
  //     const whishListObj = {
  //       whishList: [
  //         {
  //           productId: product._id,
  //           front: product.front,
  //           title: product.title,
  //           price: product.price,
  //           date: new Date().toLocaleDateString("en-US", {
  //             month: "long",
  //             day: "numeric",
  //             year: "numeric",
  //           }),
  //           quantity: product.quantity,
  //         },
  //       ],
  //     };

  //     try {
  //       const response = await axios.post(
  //         `${baseUrl}/users/wishList/${id}`,
  //         whishListObj
  //       );
  //       console.log(response.data); // do something with the response data
  //     } catch (error) {
  //       console.log(error); // handle the error
  //     }
  //   } else {
  //     router.push("/account");
  //   }

  // };
  const handleWishlist = async (data: any) => {
       
    if (id) {
        const whishListObj = {
            whishList: [
                {
                    productId: data._id,
                    front: data.front,
                    title: data.title,
                    price: data.price,
                    date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    }),
                    quantity: data.quantity,
                },
            ],
        };

        try {

        //authentication session handle
            const token = localStorage.getItem("token"); // Retrieve the token from local storage or wherever it's stored
            if (!token) {
            alert("Session expired")
              router.push("/account");
              return;
            }

            const config = {
              headers: {
                Authorization: token,
              },
            };

            const response = await axios.post(
                `${baseUrl}/users/wishList/${id}`,
                whishListObj,
                config,
                
            );

            
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.log(error); // handle the error 
            
            alert("Session expired")
              router.push("/account");
            
        }
      } else {
        router.push("/account");
      }

}

  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let subtotal =
      item.count * (item.price - item.price * (item.discount / 100));
    totalAmount += subtotal;
  }
  useEffect(() => {
    dispatch(calSubTotal(totalAmount));
  });

  const handlepopup = (product: any) => {
    setProductPopup(true);
    setProId(product);
  };

  let yellowstars = [];
  let graystars = [];

  for (let i = 1; i <= product.review; i++) {
    yellowstars.push(<FaStar />);
  }
  for (let i = 1; i <= 5 - product.review; i++) {
    graystars.push(<FaStar />);
  }

  return (
    <>
      {grid == "list" ? (
        <>
          <div
            className="flex w-full h-full mx-auto bg-white border border-gray-200 overflow-hidden relative group hover:drop-shadow-lg rounded-sm"
            key={product._id}
          >
            {" "}
            <div className="w-1/3  relative">
              <div className="absolute top-2 right-2">
                <button
                  className="bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2"
                  onClick={() => handlepopup(product._id)}
                >
                  <SlSizeFullscreen className="h-[10px] w-[10px] fill-blue-900 group-hover/icon2:fill-white" />
                </button>
                <div
                  className={`absolute top-9 ${
                    product.isFavourite ? "text-white" : "text-blue-900"
                  }`}
                >
                  <div
                    className={`bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1`}
                  >
                    {product.isFavourite ? (
                      <FaHeart className="h-3 w-3 fill-blue-900 group-hover/icon1:fill-white" />
                    ) : (
                      <FiHeart className="h-3 w-3 text-blue-900 group-hover/icon1:text-white" />
                    )}
                  </div>
                </div>
              </div>
              <div className=" absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2">
                {isDiscount && (
                  <div className=" font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
                    {(product.discount as unknown as ReactElement) != undefined
                      ? (product.discount as unknown as ReactElement)
                      : 0}
                    %
                  </div>
                )}
                {product.isRecommended && (
                  <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                    Recommended
                  </div>
                )}
                {product?.speacialtag == "organic" && (
                  <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
                    {product.speacialtag}
                  </div>
                )}
                {product?.speacialtag == "Recommended" && (
                  <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                    {product.speacialtag}
                  </div>
                )}
              </div>
              <div
                className=" h-full w-full  hover:cursor-pointer flex items-center justify-center mb-5"
                onClick={() => {
                  handleProductClick(product);
                  saveCategoryName(product);
                }}
              >
                <Link href={`/item-preview/${product._id}`}>
                  <img
                    width={172.95}
                    height={154.95}
                    //src={product.front as string}
                    src={product.front}
                    alt={product.title}
                    //alt="Man looking at item at a store"
                  />
                </Link>
              </div>
            </div>{" "}
            <div className="w-2/3 ">
              <div className="mx-5 mb-1 max-h-[155.29px] max-w-[212.95]  mt-5">
                <div
                  className="text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2"
                  onClick={() => {
                    handleProductClick(product);
                    saveCategoryName(product);
                  }}
                >
                  <Link href={`/item-preview/${product._id}`}>
                    {product.title}
                  </Link>
                </div>
                <div className="my-1 font-[.6875rem] text-xs pt-2 text-green-600 uppercase font-semibold tracking-[.005em]">
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </div>
                <div className="text-xs pt-2 flex flex-row items-center my-1 ">
                  {stars}
                  {/* <p className="text-md text-yellow-400 flex">{yellowstars}</p>
  <p className="text-md text-gray-400 flex">{graystars}</p> */}
                </div>
                <div className=" flex flex-row items-center">
                  {isDiscount && (
                    <span className="text-gray-400 text-sm line-through mr-2 my-1 font-[1.125rem]">
                      ${product.price.toFixed(2) as unknown as ReactElement}
                    </span>
                  )}
                  <span className="my-1 text-red-700 text-lg font-semibold">
                    ${newprice.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mx-1 border-black text-black py-2 px-4 mt-1 rounded-full md:visible group-hover:visible ">
                {(product.count == undefined || product.count < 1) && (
                  <button
                    type="button"
                    className=" bg-blue-900 text-white min-h-[34px]  rounded-full w-40"
                    onClick={() => handleaddToCart(product)}
                  >
                    Add to cart
                  </button>
                )}

                {product.count >= 1 && (
                  <div className="max-h-[34px] w-full flex grid-cols-3 h-10">
                    <button
                      type="button"
                      className="px-4 max-h-[34px] border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl "
                      onClick={() => handleDecrement(product)}
                    >
                      -
                    </button>
                    <div className="max-h-[34px] flex items-center justify-center w-full text-center border-y">
                      {product.count || 0}
                    </div>
                    <button
                      type="button"
                      className="px-4 max-h-[34px] border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl "
                      onClick={() => handleIncrement(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
              {/* {productPopup && (
          <ProductPopup setProductPopup={setProductPopup} proId={proId} />
        )} */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-full min-h-[350.24px] mx-auto bg-white border border-gray-200  overflow-hidden relative group hover:drop-shadow-lg hover:border-secondary rounded-sm"
            key={product._id}
          >
            <div className="absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2">
              {isDiscount && (
                <div className=" font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center">
                  {(product.discount as unknown as ReactElement) != undefined
                    ? (product.discount as unknown as ReactElement)
                    : 0}
                  %
                </div>
              )}
              {product?.speacialtag == "organic" && (
                <div className=" font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter">
                  {product.speacialtag}
                </div>
              )}
              {product?.speacialtag == "Recommended" && (
                <div className=" font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter">
                  {product.speacialtag}
                </div>
              )}
            </div>
            <div className="max-w-[40px] max-h-[85px] ">
              <button
                className="absolute max-w-[24px] max-h-[24px] top-2 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2"
                onClick={() => handlepopup(product._id)}
              >
                <SlSizeFullscreen className="h-[10px] w-[10px] fill-blue-900 group-hover/icon2:fill-white" />
              </button>

              <div
                className={`absolute max-w-[24px] max-h-[24px] top-9 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1`}
                onClick={() => handleWishlist(product)}
              >
                {product.isFavourite ? (
                  <FaHeart className="h-3 w-3 fill-blue-900 group-hover/icon1:fill-white" />
                ) : (
                  <FiHeart className="h-3 w-3 text-blue-900 group-hover/icon1:text-white" />
                )}
              </div>
            </div>

            <div
              className=" max-h-[172.95px] min-h-[172.95px] min-w-[154.95px] w-full  hover:cursor-pointer my-2 flex items-center justify-center"
              onClick={() => {
                handleProductClick(product);
                saveCategoryName(product);
              }}
            >
              <Link href={`/item-preview/${product._id}`}>
                <img
                  width={172.95}
                  height={154.95}
                  //src={product.front as string}
                  src={product.front}
                  alt={product.title}
                  //alt="Man looking at item at a store"
                />
              </Link>
            </div>
            <div className="mx-5 mb-1 max-h-[155.29px] max-w-[212.95] ">
              <div
                className="text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2"
                onClick={() => {
                  handleProductClick(product);
                  saveCategoryName(product);
                }}
              >
                <Link href={`/item-preview/${product._id}`}>
                  {product.title}
                </Link>
              </div>
              {product?.quantity > 0 ? (
                <div className="my-1 font-[.6875rem] text-xs pt-2 text-green-600 uppercase font-semibold tracking-[.005em]">
                  In Stock
                </div>
              ) : (
                <div className="my-1 font-[.6875rem] text-xs pt-2 text-red-600 uppercase font-semibold tracking-[.005em]">
                  Out of Stock
                </div>
              )}
              <div className="text-xs pt-2 flex flex-row items-center my-1">
                {/* {stars} */}
                <p className="text-md text-yellow-400 flex">{yellowstars}</p>
                <p className="text-md text-gray-400 flex">{graystars}</p>
              </div>
              <div className=" flex flex-row items-center">
                {isDiscount && (
                  <span className="text-gray-400 text-sm line-through mr-2 my-1 font-[1.125rem]">
                    Rs {product.price.toFixed(2) as unknown as ReactElement}
                  </span>
                )}
                <span className="my-1 text-red-700 text-lg font-semibold">
                  Rs {newprice.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mx-1 border-black text-black py-2 px-4 mt-1 rounded-full  transition duration-150">
              <div className="md:invisible group-hover:visible md:group-hover:-translate-y-3 md:group-hover:ease-in">
                {(product.count == undefined || product.count < 1) && (
                  <button
                    type="button"
                    className=" bg-primary text-white min-h-[34px]  rounded-full w-full "
                    onClick={() => handleaddToCart(product)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
              <div>
                {product.count >= 1 && (
                  <div className="max-h-[34px] w-full flex grid-cols-3 h-10">
                    <button
                      type="button"
                      className="px-4 max-h-[34px] border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl "
                      onClick={() => handleDecrement(product)}
                    >
                      -
                    </button>
                    <div className="max-h-[34px] flex items-center justify-center w-full text-center border-y">
                      {product.count || 0}
                    </div>
                    <button
                      type="button"
                      className="px-4 max-h-[34px] border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl "
                      onClick={() => handleIncrement(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {productPopup && (
        <ProductPopup setProductPopup={setProductPopup} proId={proId} />
      )}
    </>
  );
};
//max-w-md
