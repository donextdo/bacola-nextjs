import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { OrderItem } from "@/components/Checkout/orderItem";
import { useRouter } from 'next/router';

interface Order {
  orderId: string;
  userId: string;
  totalprice: number;
  date: string;
  status: string;
  items: {
    productDetails: {
      name: string;
      price: number;
      brand: string;
      description: string;
      front: string
    }
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

}
}
// interface OrderMsg {
//   orderId: string;
//   userId: string;
//   totalprice: number;
//   date: string;
//   status: string;
//   items: {
//     productDetails: {
//       name: string;
//       price: number;
//       brand: string;
//       description: string;

//     }
//     orderquantity: number;

//     productId: number;
//   }[];
//   billingAddress: {
//     billingFirstName: string;
//     billingLastName: string;
//     billingCompanyName: string;
//     country: string;
//     street: string;
//     apartment: string;
//     town: string;
//     state: string;
//     zipCode: string;
//     billingPhone: string;
//     billingEmail: string;
//     note: string;
//   };
//   shippingAddress: {
//     shippingFirstName: string;
//     shippingLastName: string;
//     shippingCompanyName: string;
//     country: string;
//     street: string;
//     apartment: string;
//     town: string;
//     state: string;
//     zipCode: string;
//     shippingPhone: string;
//     shippingEmail: string;
//   };
// }

const OrderMessage = () => {
  const [order, setOrder] = useState<Order>({
    orderId: "",
    userId: "",
    totalprice: 0,
    date: "",
    status: "",
    items: [
      {
        productId: 0,
        orderquantity: 1,
        productDetails: {
          name: "",
          brand: "",
          description: "",
          price: 0,
          front: ""
        }
      }
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
      zipCode: ""
    },
  })
  // const [ship, setShip] = useState({
  //   displayName: "",
  //   email: "",
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   shippingAddress: {
  //     apartment: "",
  //     country: "",
  //     shippingCompanyName: "",
  //     shippingEmail: "",
  //     shippingFirstName: "",
  //     shippingLastName: "",
  //     shippingphone: "",
  //     state: "",
  //     street: "",
  //     town: "",
  //     zipCode: ""
  //   },
  //   billingAddress: {
  //     apartment: "",
  //     country: "",
  //     billingCompanyName: "",
  //     billingEmail: "",
  //     billingFirstName: "",
  //     billingLastName: "",
  //     billingphone: "",
  //     state: "",
  //     street: "",
  //     town: "",
  //     zipCode: ""
  //   },
  //   userName: "",
  //   _id: "",

  // });

  const router = useRouter();
  const { orderId, message } = router.query;


  // const orderList = useSelector((state: RootState) => state.order.orders);
  // console.log(orderList)
  console.log(orderId)
  // useEffect(() => {
  //   fetchData2()
  // }, []);

  let id: any;


  if (typeof localStorage !== 'undefined') {
    id = localStorage.getItem("id");
  }

  useEffect(() => {

    fetchData()

  }, []);

  async function fetchData() {
    console.log("hi")
    try {
      const res = await axios.get(`${baseUrl}/orders/${orderId}`);
      console.log(res.data)
      setOrder(res.data)
    } catch (err) {
      console.log(err);
    }
  }



  // async function fetchData2() {
  //   try {
  //     const res = await axios.get(`${baseUrl}/users/${id}`);
  //     console.log(res.data)
  //     setShip(res.data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // console.log(ship)

  //  let email
  // if (typeof localStorage !== "undefined") {
  //    email = localStorage.getItem('email');
  //   // rest of your code here
  // } else {
  //   // handle error here
  // }

  // const email = typeof localStorage !== 'undefined' ? localStorage.getItem('email') : undefined;


  return (

    <div className="mx-20 xl:mx-36">
      <div className="w-full border-2 border-dashed border-[#00b853] text-lg md:text-2xl leading-5 md:leading-6 py-3 md:py-8 px-3 md:px-10 my-20 text-center font-medium" style={{ color: '#00b853' }}>
        Thank you. Your order has been received.
      </div>
      <div className="border shadow-md p-5 grid grid-cols-5">
        <div>
          <h1 className="text-sm font-semibold">Order Number</h1>
          <p className="text-[13px] text-[#2bbef9]">#{order?.orderId}</p>
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
          <p className="text-[13px]">Rs {order?.totalprice.toFixed(2)}</p>
        </div>
        <div className="">
          <h1 className="text-sm font-semibold">Payment method:</h1>
          <p className="text-[13px]">Direct bank transfer</p>
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
          <tbody>
          </tbody>
        </table>
        {order?.items.map((item, index) => (
          <div className="flex border border-gray-300 " key={index}>
            <div className="w-2/3 px-2 py-2">{item.productDetails?.name} <span className="font-semibold">x {item.orderquantity}</span></div>
            <div className="w-1/3 py-2">{item.productDetails?.price}</div>
          </div>
        ))}
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Subtotal:</div>
          <div className="w-1/3 py-2">{order?.totalprice.toFixed(2)}</div>
        </div>
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Payment method:</div>
          <div className="w-1/3 py-2">Direct bank transfer</div>
        </div>
        <div className="flex border border-gray-300 ">
          <div className="w-2/3 px-2 py-2">Total:</div>
          <div className="w-1/3 py-2">{order?.totalprice.toFixed(2)}</div>
        </div>


      </div>
      <h2 className="font-semibold  mt-4 mb-2">BILLING DETAILS</h2>
      <div className="mb-4">
        <h2 className="text-sm">{order?.billingAddress.billingFirstName} {order?.billingAddress.billingLastName}</h2>
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
          <h2 className="text-sm">{order?.shippingAddress.shippingFirstName} {order?.shippingAddress.shippingLastName}</h2>
        <h2 className="text-sm">{order?.shippingAddress.shippingCompanyName}</h2>
        <h2 className="text-sm">{order?.shippingAddress.street}</h2>
        <h2 className="text-sm">{order?.shippingAddress.town}</h2>
        <h2 className="text-sm">{order?.shippingAddress.zipCode}</h2>
        <h2 className="text-sm">{order?.shippingAddress.country}</h2>
        <h2 className="text-sm">{order?.shippingAddress.shippingPhone}</h2>
        <h2 className="text-sm mt-2">{order?.shippingAddress.shippingEmail}</h2>
          </div>
        </div>
      {/* )} */}

    </div>
  );
}

export default OrderMessage;