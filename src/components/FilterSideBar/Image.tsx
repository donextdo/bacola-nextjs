import bacolaBanner from "../../../assets/home/bacola-banner-18.jpg";
import Image from "next/image";

export const ImageProductFilter = () => {
  return (
    <div>
      <div className="relative">
        <div className="lg:h-[240px] w-full rounded-md  h-[200px]">
          <Image
            src={bacolaBanner}
            alt="Slider- Image"
            className="lg:h-[240px] w-full rounded-md  h-[200px]"
          />
        </div>

        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <div className=" lg:p-8 lg:flex lg:flex-col lg:justify-center lg:items-start">
            <h2 className="text-black text-2xl lg:text-2xl mb-2 font-extralight">
              Organic Meals Prepared
            </h2>
            <div className="lg:flex lg:flex-row flex flex-row mb-4">
              <h1 className="text-black font-bold lg:text-3xl text-3xl">
                Delivered to&nbsp;
                <span className="text-green-600 font-bold lg:text-3xl text-3xl">
                  your Home
                </span>
              </h1>
            </div>
            <h1 className="text-gray-400 lg:text-sm text-sm">
              Fully prepared &amp; delivered nationwide.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
