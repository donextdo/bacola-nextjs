import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { OrderItem } from "@/components/Checkout/orderItem";
import { useRouter } from "next/router";
import { logOut } from "../../utils/logout";
import Swal from "sweetalert2";

interface Order {
  orderId: string;
  userId: string;
  totalprice: number;
  date: string;
  address: string;
  payment: string;
  orderNumber: string;
  status: string;
  items: {
    productDetails: {
      name: string;
      price: number;
      brand: string;
      description: string;
      front: string;
    };
    orderquantity: number;

    productId: number;
  }[];
  billingAddress: {
    billingFirstName: string;
    billingLastName: string;
    billingCompanyName: string;
    country: string;
    street: string;
    apartment: string;
    town: string;
    state: string;
    zipCode: string;
    billingPhone: string;
    billingEmail: string;
    note: string;
  };
  shippingAddress: {
    shippingFirstName: string;
    shippingLastName: string;
    shippingCompanyName: string;
    country: string;
    street: string;
    apartment: string;
    town: string;
    state: string;
    zipCode: string;
    shippingPhone: string;
    shippingEmail: string;
  };
}

const OrderMessage = () => {
  const [order, setOrder] = useState<Order>({
    orderId: "",
    userId: "",
    totalprice: 0,
    date: "",
    status: "",
    address: "",
    payment: "",
    orderNumber: "",
    items: [
      {
        productId: 0,
        orderquantity: 1,
        productDetails: {
          name: "",
          brand: "",
          description: "",
          price: 0,
          front: "",
        },
      },
    ],
    billingAddress: {
      apartment: "",
      country: "",
      billingCompanyName: "",
      billingEmail: "",
      billingFirstName: "",
      billingLastName: "",
      billingPhone: "",
      state: "",
      street: "",
      town: "",
      zipCode: "",
      note: "",
    },
    shippingAddress: {
      apartment: "",
      country: "",
      shippingCompanyName: "",
      shippingEmail: "",
      shippingFirstName: "",
      shippingLastName: "",
      shippingPhone: "",
      state: "",
      street: "",
      town: "",
      zipCode: "",
    },
  });

  const router = useRouter();
  const { orderId, message } = router.query;

  let id: any;

  if (typeof localStorage !== "undefined") {
    id = localStorage.getItem("id");
  }

  useEffect(() => {
    fetchData();
  }, [orderId]);

  async function fetchData() {
    try {
      let token: any;
      if (typeof localStorage !== "undefined") {
        token = localStorage.getItem("token");
      }
      const res = await axios.get(`${baseUrl}/orders/${orderId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOrder(res.data);
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

  return (
    <div className="mx-20 xl:mx-36">
      <div
        className="w-full border-2 border-dashed border-[#00b853] text-lg md:text-2xl leading-5 md:leading-6 py-3 md:py-8 px-3 md:px-10 my-20 text-center font-medium"
        style={{ color: "#00b853" }}
      >
        Thank you. Your order has been received.
      </div>
      <div className="border shadow-md p-5 grid grid-cols-5">
        <div>
          <h1 className="text-sm font-semibold">Order Number</h1>
          <p className="text-[13px] text-[#2bbef9]">#{order?.orderNumber}</p>
        </div>
        <div>
          <h1 className="text-sm font-semibold">Date</h1>
          <p className="text-[13px]">{order?.date}</p>
        </div>
        <div>
          <h1 className="text-sm font-semibold">Email</h1>
          <p className="text-[13px]">email</p>
        </div>
        <div>
          <h1 className="text-sm font-semibold">Total</h1>
          <p className="text-[13px]">Rs {order?.totalprice?.toFixed(2)}</p>
        </div>
        <div className="">
          <h1 className="text-sm font-semibold">Payment method:</h1>
          <p className="text-[13px]">{order?.payment}</p>
        </div>
      </div>

      <h2 className="font-semibold  mt-4 mb-2">ORDER DETAILS</h2>
      <div className="mb-4 w-full">
        <table className="w-full border-collapse border-t border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Product</th>
              <th className="border border-gray-400 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        {order?.items.map((item, index) => (
          <div className="flex border border-gray-300 " key={index}>
            <div className="w-2/3 px-2 py-2">
              {item.productDetails?.name}{" "}
              <span className="font-semibold">x {item.orderquantity}</span>
            </div>
            <div className="w-1/3 py-2">{item.productDetails?.price}</div>
          </div>
        ))}
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Location:</div>
          <div className="w-1/3 py-2">{order?.address}</div>
        </div>
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Subtotal:</div>
          <div className="w-1/3 py-2">Rs {order?.totalprice.toFixed(2)}</div>
        </div>
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Payment method:</div>
          <div className="w-1/3 py-2">{order?.payment}</div>
        </div>
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Total:</div>
          <div className="w-1/3 py-2">Rs {order?.totalprice.toFixed(2)}</div>
        </div>
      </div>
      <h2 className="font-semibold  mt-4 mb-2">BILLING DETAILS</h2>
      <div className="mb-4">
        <h2 className="text-sm">
          {order?.billingAddress.billingFirstName}{" "}
          {order?.billingAddress.billingLastName}
        </h2>
        <h2 className="text-sm">{order?.billingAddress.billingCompanyName}</h2>
        <h2 className="text-sm">{order?.billingAddress.street}</h2>
        <h2 className="text-sm">{order?.billingAddress.town}</h2>
        <h2 className="text-sm">{order?.billingAddress.zipCode}</h2>
        <h2 className="text-sm">{order?.billingAddress.country}</h2>
        <h2 className="text-sm">{order?.billingAddress.billingPhone}</h2>
        <h2 className="text-sm mt-2">{order?.billingAddress.billingEmail}</h2>
      </div>

      {/* {ship !== null && ship.shippingAddress && ( */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2">SHIPPING DETAILS</h2>
        <div className="mb-4">
          <h2 className="text-sm">
            {order?.shippingAddress.shippingFirstName}{" "}
            {order?.shippingAddress.shippingLastName}
          </h2>
          <h2 className="text-sm">
            {order?.shippingAddress.shippingCompanyName}
          </h2>
          <h2 className="text-sm">{order?.shippingAddress.street}</h2>
          <h2 className="text-sm">{order?.shippingAddress.town}</h2>
          <h2 className="text-sm">{order?.shippingAddress.zipCode}</h2>
          <h2 className="text-sm">{order?.shippingAddress.country}</h2>
          <h2 className="text-sm">{order?.shippingAddress.shippingPhone}</h2>
          <h2 className="text-sm mt-2">
            {order?.shippingAddress.shippingEmail}
          </h2>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default OrderMessage;
