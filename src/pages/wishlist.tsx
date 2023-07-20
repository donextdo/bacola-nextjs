import { calSubTotal } from "@/features/cart/cartSlice";
import { updateProductQuantity } from "@/features/product/productSlice";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import baseUrl from "../../utils/baseUrl";
import { Product } from "@/features/product/product";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { logOut } from "../../utils/logout";

interface WIshlist {
  selected: boolean;
  address: string;
  date: string;
  price: number;
  title: string;
  productId: string;
  front: string;
  checked: boolean;
  quantity: number;
  count: number;

  // any other properties
}
const Wishlist = () => {
  const [data, setData] = useState<Array<WIshlist>>([]);
  const dispatch = useDispatch();
  let token: any;
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("token");
  }
  const router = useRouter();

  let id: any;
  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.whishList);
    } catch (error: any) {
      if (error?.response?.status == 403 || error?.response?.status == 401) {
        Swal.fire({
          width: 700,
          color: "black",
          background: "white",
          html: `
              <div style="text-align: left;">
                <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                <hr style="margin-bottom: 20px;" />
                <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                <hr style="margin-bottom: 20px;" />
              </div>
            `,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          confirmButtonColor: "bg-primary",
          heightAuto: true,
          customClass: {
            confirmButton:
              "bg-primary text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
          },
        }).then((result) => {
          if (result.value) {
            logOut();
            router.push("/account");
          }
        });
      }
    }
  }

  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAll = () => {
    const newData = [...data];
    newData.forEach((item) => {
      item.checked = !checkAll;
    });
    setData(newData);
    setCheckAll(!checkAll);
  };

  const handleCheck = (id: any) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.productId === id) {
        item.checked = !item.checked;
      }
    });
    setData(newData);
  };

  const handleDelete = async (_id: any) => {
    const cartItemsString = localStorage.getItem("cartItems");
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    try {
      const res = await axios.delete(`${baseUrl}/users/${id}/wishList/${_id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const newItems = data.filter((item) => item.productId !== _id);
      setData(newItems);
    } catch (error: any) {
      if (error?.response?.status == 403 || error?.response?.status == 401) {
        Swal.fire({
          width: 700,
          color: "black",
          background: "white",
          html: `
                <div style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                  <hr style="margin-bottom: 20px;" />
                  <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                  <hr style="margin-bottom: 20px;" />
                </div>
              `,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          confirmButtonColor: "bg-primary",
          heightAuto: true,
          customClass: {
            confirmButton:
              "bg-primary text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
          },
        }).then((result) => {
          if (result.value) {
            logOut();
            router.push("/account");
          }
        });
      }
    }
  };

  const handleCart = async (item: any) => {
    const cartItemsString = localStorage.getItem("cartItems");
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    try {
      const res = await axios.get(
        `${baseUrl}/products/getOne/${item.productId}`
      );
      const itemProduct = res.data;
      const itemIndex = items.findIndex(
        (itemOne: any) => itemOne._id === itemProduct._id
      );
      if (itemIndex === -1) {
        const newItem = { ...itemProduct, count: 1 };
        items.push(newItem);
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch(calSubTotal(12));
      } else {
        items[itemIndex].count += 1;
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch(calSubTotal(12));
      }
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  };

  const handleAddSelectedToCart = () => {
    const cartItemsString = localStorage.getItem("cartItems");
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    const selectedItems = data.filter((item) => item.checked);
    selectedItems.forEach(async (item: any) => {
      try {
        const res = await axios.get(
          `${baseUrl}/products/getOne/${item.productId}`
        );
        const itemProduct = res.data;
        const itemIndex = items.findIndex(
          (itemOne: any) => itemOne._id === itemProduct._id
        );
        if (itemIndex === -1) {
          const newItem = { ...itemProduct, count: 1 };
          items.push(newItem);
          localStorage.setItem("cartItems", JSON.stringify(items));
          dispatch(calSubTotal(12));
        } else {
          items[itemIndex].count += 1;
          localStorage.setItem("cartItems", JSON.stringify(items));
          dispatch(calSubTotal(12));
        }
      } catch (error: any) {
        Swal.fire({
          width: 500,
          color: "black",
          background: "white",
          imageUrl:
            "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Custom image",
          html: `
            <div style="text-align: center;">
              <p style="font-size: 14px;">${error.response.data.message}</p>
            </div>
          `,
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
          heightAuto: true,
        });
      }
    });
  };

  const handleAddCart = () => {
    const cartItemsString = localStorage.getItem("cartItems");
    const items = cartItemsString ? JSON.parse(cartItemsString) : [];

    const selectedItems = data.filter((item) => item.checked);
    selectedItems.forEach(async (item: any) => {
      try {
        const res = await axios.get(
          `${baseUrl}/products/getOne/${item.productId}`
        );
        const itemProduct = res.data;
        const itemIndex = items.findIndex(
          (itemOne: any) => itemOne._id === itemProduct._id
        );
        if (itemIndex === -1) {
          const newItem = { ...itemProduct, count: 1 };
          items.push(newItem);
          localStorage.setItem("cartItems", JSON.stringify(items));
          dispatch(calSubTotal(12));
        } else {
          items[itemIndex].count += 1;
          localStorage.setItem("cartItems", JSON.stringify(items));
          dispatch(calSubTotal(12));
        }
      } catch (error: any) {
        Swal.fire({
          width: 500,
          color: "black",
          background: "white",
          imageUrl:
            "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Custom image",
          html: `
            <div style="text-align: center;">
              <p style="font-size: 14px;">${error.response.data.message}</p>
            </div>
          `,
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
          heightAuto: true,
        });
      }
    });
  };

  return (
    <div className="container mx-auto xl:px-40 px-5 mb-40">
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
            <th className="border px-4 py-2 text-xs text-[#71778e]">
              Product Name
            </th>
            <th className="border px-4 py-2 text-xs text-[#71778e]">
              Unit Price
            </th>
            <th className="border px-4 py-2 text-xs text-[#71778e]">
              Date Added
            </th>
            <th className="border px-4 py-2 text-xs text-[#71778e]">
              Stock Status
            </th>
            <th className="border px-4 py-2 text-xs text-[#71778e]"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.productId}>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={item.checked}
                  onChange={() => handleCheck(item.productId)}
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  className=""
                  onClick={() => handleDelete(item.productId)}
                >
                  <IoClose />
                </button>
              </td>
              <td className="border px-4 py-2">
                <div className="w-[71px] h-[71px]">
                  <img
                    src={item.front}
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
              <td className="border px-4 py-2">
                {item.quantity > 0 ? "In Stock" : "Out of Stock"}
              </td>
              <td className="border px-4 py-2">
                <button
                  className=" bg-blue-900 text-white text-xs rounded-md px-5 py-3 "
                  onClick={() => handleCart(item)}
                >
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="flex justify-between p-3.5 border ">
        <div className="inline-flex gap-2 w-full"></div>

        <div className="flex gap-2">
          <button
            className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 "
            onClick={handleAddSelectedToCart}
          >
            Add Selected to Cart
          </button>
          <button
            className="bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40 "
            onClick={handleAddCart}
          >
            Add All to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
