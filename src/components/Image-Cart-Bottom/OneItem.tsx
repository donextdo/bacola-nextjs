import Image from "next/image";
import baverages from "../../../assets/baverages.jpg"
const OneItem = () => {
    return (
        <div className="mt-16 ">
            <div className="p-5 lg:border-l-2 lg:border-t-2 lg:border-b-2 border-[#e5e7eb] h-[360px] md:h-[1435px] xl:h-[294px] flex flex-col justify-center items-center">
                <div className="h-[193px] w-[193px]">
                    <Image
                        src={baverages}
                        alt="baverages"
                        style={{
                            objectFit: "contain",
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                        }}
                        width={450}
                        height={400}
                    />
                </div>
                <div className="font-semibold text-sm ">
                    Beverages
                </div>
                <div className="text-xs text-[#202435] ">
                    11 Items
                </div>
            </div>
        </div>
    );
}

export default OneItem;