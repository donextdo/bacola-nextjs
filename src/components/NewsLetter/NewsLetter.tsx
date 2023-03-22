import Image from "next/image";
import { CiMail } from "react-icons/Ci";

export default function NewsLetter() {
  return (
    <>
   
      <div className="relative  bg-[#233a95]">
        <div className="px-5 mx-auto sm:mx-auto sm:px-5 lg:mx-10 lg:px-3">
          <div className="grid lg:grid-cols-2">
            <div className="max-w-5xl sm:w-5xl lg:max-w-md ">
              <p className="mt-10 sm:mt-10 text-[16px] text-gray-300 lg:mt-16 ">
                $20 discount for your first order
              </p>
              <h2 className="font-bold  text-white text-[26px] ">
                Join our newsletter and get...
              </h2>

              <p className="mt-4 sm:mt-4 text-[13px]  text-gray-300 opacity-60">
                Join our email subscription now to get updates on promotions and
                coupons.
              </p>

              <div className="px-1 py-1 mt-3 bg-white rounded-md sm:py-1 sm:px-1 sm:mt-3 ">
                <div className="flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>

                  <p className="py-3 text-xl lg:mr-2 lg:pl-2 sm:py-3">
                    <CiMail />
                    {""}
                  </p>

                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="text-gray-900 bg-white lg:pl-3"
                    placeholder="Your email address"
                  />

                  <button
                    type="submit"
                    className=" bg-[#233a95] rounded-md px-3 sm:px-3 sm:ml-64 lg:ml-16 font-semibold text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <Image
              src="/images/coupon.png"
              alt="Newsletter - Image"
              className="mt-6 sm:mt-6 lg:mt-16 lg:mx-0 lg:ml-0 sm:mx-[10%]"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    
    </>
  );
}
