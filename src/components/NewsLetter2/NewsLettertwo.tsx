import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import baseUrl from "../../../utils/baseUrl";
import Swal from "sweetalert2";

const NewsLettertwo = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesubscribe = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/subscribe/insert`, {
        email,
      });

      if (response.status === 200) {
        // Handle successful subscription
        setLoading(false);

        setEmail("");
        Swal.fire({
          title: "Success",
          text: "Your billing address has been updated successfully",
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#8DC14F",
        });
      } else {
        // Handle subscription error
        const { message } = response.data;
        Swal.fire({
          title: "error",
          text: `Subscription failed: ${message} `,
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#8DC14F",
        });
      }
    } catch (error: any) {
      // alert("Subscription successful");
      // Handle fetch error
      if (error?.response?.status == 500) {
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
            <p style="font-size: 14px;">${error.message}</p>
          </div>
        `,
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
          heightAuto: true,
        });
      }
    }
  };

  return (
    <div className=" bg-[#233a95] w-full">
      <div className="px-5 sm:px-5 lg:px-10 2xl:px-40">
        <div className="grid lg:grid-cols-2">
          <div className="lg:self-center">
            {/* <p className="mt-6 text-base text-gray-300 lg:mt-10">
              Rs 20 discount for your first order
            </p> */}
            <h2 className="text-lg font-bold text-white lg:text-3xl lg:mt-2">
              Join our newsletter and get...
            </h2>
            <p className="mt-2 text-sm text-gray-300 opacity-60 lg:text-base lg:mt-6">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>
            <form className=" mt-4" onSubmit={handlesubscribe}>
              {/* <label htmlFor="email-address" className="sr-only">
                Email address
              </label> */}
              <div className="relative bg-white rounded-md flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="pl-8 text-gray-900 bg-white h-[48px] lg:h-[62px] placeholder:text-sm "
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute left-2 mt-2 text-xl text-gray-400 ">
                  <CiMail />
                </span>
                <button
                  type="submit"
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-[#233a95] py-2 px-4 text-white rounded-md lg:py-[15px]"
                >
                  {loading ? <>Loading...</> : <>Subscribe</>}
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center mt-6 lg:mt-10">
            <Image
              src="/images/coupon.png"
              alt="Newsletter - Image"
              className="w-80 lg:w-3/4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLettertwo;
