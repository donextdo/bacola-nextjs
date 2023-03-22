//import icons
import { FiPhoneCall } from "react-icons/Fi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/Ai";
import { AiOutlineInstagram } from "react-icons/Ai";
import { SiAmericanexpress } from "react-icons/Si";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiApplepay } from "react-icons/Si";
import { RiMastercardFill } from "react-icons/Ri";
import { SiVisa } from "react-icons/Si";

import Image from "next/image";
import Link from "next/link";

export default function BottomFooter() {
  return (
    <>
      <div className="sm:mx-40 xl:mx-0">
        <div className="mt-16 sm:mt-16 xl:flex xl:my-2 xl:py-10 xl:mx-24">
          <div className="flex mt-2  xl:mt-0 sm:mx-3 xl:mx-3">
            <div className="xl:rounded-full xl:border-2">
              <p className="p-5 xl:p-3">
                <FiPhoneCall />
              </p>
            </div>
            <div className="px-2 xl:px-5">
              <h2 className="font-semibold text-[20px] flex">8 800 555-55</h2>
              <p className="text-gray-400 text-[11px]">Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="ml-5 xl:ml-60 sm:mx-10 xl:mx-0">
            <p className="font-semibold text-[14px] xl:ml-7">
              Download App on Mobile :
            </p>
            <p className="text-gray-400 text-[12px]">
              15% discount on your first purchase
            </p>
          </div>
          <div className="mt-3 xl:mt-0">
            <button>
              <Image
                src="/images/google-play.png"
                alt="GooglePlay - Image"
                className="ml-5 xl:ml-5"
                width={116}
                height={38}
              />
            </button>
            <button>
              <Image
                src="/images/app-store.png"
                alt="AppStore - Image"
                className="ml-2 xl:ml-2"
                width={116}
                height={38}
              />
            </button>
          </div>

          <div className="sm:mx-[25%] xl:mx-0">
            <button className="xl:ml-7 ml-5 mt-3 xl:mt-0  text-[#233a95]">
              <GrFacebookOption />
            </button>
            <button className="xl:mx-5 mx-2 text-[#233a95]">
              <AiOutlineTwitter />
            </button>
            <button className="xl:mx-0 mx-2 text-[#233a95]">
              <AiOutlineInstagram />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-5 xl:mx-16" />

      <div className="mt-10 mb-10  xl:flex xl:mx-10">
        <p className="text-gray-400 text-[12px] pl-5">
          Copyright 2022 © Bacola WordPress Theme. All rights reserved. Powered
          by KlbTheme.
        </p>

        <div className="flex mt-3 mb-3 xl:mt-0 xl:mb-0">
          <p className="text-gray-400 text-[12px] xl:pl-10 pl-5">
            <Link href="" className="hover:underline hover:underline-offset-1">
              Privacy Policy
            </Link>
          </p>
          <p className="text-gray-400 text-[12px] xl:pl-2 pl-2">
            <Link href="" className="hover:underline hover:underline-offset-1">
              Terms and Conditions
            </Link>
          </p>
          <p className="text-gray-400 text-[12px] xl:pl-2 pl-2">
            <Link href="" className="hover:underline hover:underline-offset-1">
              Cookie
            </Link>
          </p>
        </div>
        <div className="xl:ml-2">
          <button className="ml-5 xl:ml-7">
            <SiAmericanexpress className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <FaCcStripe className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <FaGooglePay className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <SiApplepay className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <FaCcPaypal className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <RiMastercardFill className="text-2xl text-gray-600" />
          </button>
          <button className="ml-5 xl:ml-7">
            <SiVisa className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
}
