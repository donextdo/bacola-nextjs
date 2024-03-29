import Link from "next/link";
import { useEffect, useState } from "react";
import Bill from "../../Bill/Bill";
import Ship from "@/components/Bill/Ship";
import axios from "axios";
import baseUrl from "../../../../utils/baseUrl";
import { useRouter } from "next/router";
import { logOut } from "../../../../utils/logout";
import Swal from "sweetalert2";

interface Address {
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

const Address = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  let id = localStorage.getItem("id");
  let token: any;
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("token");
  }
  const router = useRouter();
  const [address, setAddress] = useState<Address>({
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function fetchData() {
    try {
      const res = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setAddress(res.data);
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

  const handleClick = () => {
    setModal(true);
    setModal1(false);
  };
  const handleClick1 = () => {
    setModal(false);
    setModal1(true);
  };
  return (
    <div>
      <p>
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 mt-4 mx-4">
        <div>
          {address.billingAddress ? (
            <div>
              <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
              <hr />
              <button className="text-[#2bbef9] mt-4" onClick={handleClick}>
                Edit
              </button>
              <div className="mt-2">
                <h2 className="text-base">
                  {address?.billingAddress.billingFirstName}{" "}
                  {address?.billingAddress.billingLastName}
                </h2>
                <h2 className="text-base">
                  {address?.billingAddress.billingCompanyName}
                </h2>
                <h2 className="text-base">{address?.billingAddress.street}</h2>
                <h2 className="text-base">{address?.billingAddress.town}</h2>
                <h2 className="text-base">{address?.billingAddress.zipCode}</h2>
                <h2 className="text-base">{address?.billingAddress.country}</h2>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="font-semibold mb-2">BILLING ADDRESS</h2>
              <hr />
              {/* <Link href="/bill"><h2 className="text-[#2bbef9] mt-4">Add</h2></Link>  */}
              <button className="text-[#2bbef9] mt-4" onClick={handleClick}>
                Add
              </button>

              <h2>You have not set up this type of address yet.</h2>
            </div>
          )}
        </div>
        <div>
          {address.shippingAddress ? (
            <div>
              <h2 className="font-semibold mb-2">SHIPPING ADDRESS</h2>
              <hr />
              <button className="text-[#2bbef9] mt-4" onClick={handleClick1}>
                Edit
              </button>
              <div className="mb-4">
                <h2 className="text-base">
                  {address?.shippingAddress.shippingFirstName}{" "}
                  {address?.shippingAddress.shippingLastName}
                </h2>
                <h2 className="text-base">
                  {address?.shippingAddress.shippingCompanyName}
                </h2>
                <h2 className="text-base">{address?.shippingAddress.street}</h2>
                <h2 className="text-base">{address?.shippingAddress.town}</h2>
                <h2 className="text-base">
                  {address?.shippingAddress.zipCode}
                </h2>
                <h2 className="text-base">
                  {address?.shippingAddress.country}
                </h2>
                <h2 className="text-base">
                  {address?.shippingAddress.shippingPhone}
                </h2>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="font-semibold mb-2">SHIPPING ADDRESS</h2>
              <hr />
              {/* <h2 className="text-[#2bbef9] mt-4">Add</h2> */}
              <button className="text-[#2bbef9] mt-4" onClick={handleClick1}>
                Add
              </button>

              <h2>You have not set up this type of address yet.</h2>
            </div>
          )}
        </div>
      </div>

      {modal && <Bill setModal1={setModal1} setModal={setModal} />}

      {modal1 && <Ship setModal1={setModal1} setModal={setModal} />}
    </div>
  );
};

export default Address;
