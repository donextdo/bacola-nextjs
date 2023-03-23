import Image from "next/image";
import { CiMail } from "react-icons/ci";

export default function NewsLetter() {
  return (
    <div className="relative bg-[#233a95]">
      <div className="px-5 mx-auto sm:px-5 lg:px-10 2xl:px-40">
        <div className="grid lg:grid-cols-2">
          <div className="max-w-5xl lg:max-w-md lg:self-center">
            <p className="mt-6 text-base text-gray-300 lg:mt-10">
              $20 discount for your first order
            </p>
            <h2 className="text-lg font-bold text-white lg:text-3xl lg:mt-2">
              Join our newsletter and get...
            </h2>
            <p className="mt-2 text-sm text-gray-300 opacity-60 lg:text-base lg:mt-6">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>
            <form className="flex flex-col mt-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="flex items-center py-1 pr-1 bg-white rounded-md lg:my-5">
                <span className="pl-2 text-xl text-gray-400 lg:pl-3">
                  <CiMail />
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="flex-1 px-2 text-gray-900 bg-white lg:px-3"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="bg-[#233a95] py-2 px-4 text-white rounded-md lg:py-[15px] lg:px-7"
                >
                  Subscribe
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
}
