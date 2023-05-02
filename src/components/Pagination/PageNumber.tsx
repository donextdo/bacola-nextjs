import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Pagination from "react-js-pagination";

export const PageNumber = () => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }
  return (
    <div className="mt-8 flex justify-center items-center flex-wrap pagination-container ">
      <div className="flex bg-white font-[Poppins]">
        <button onClick={back} className="h-12 hover:text-white ">
          {" "}
          <BsArrowLeft className=" text-gray-500 mr-3 group-hover:text-[#2bbef9] flex justify-center  mt-0"></BsArrowLeft>
        </button>

        {pages.map((pg, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCur(pg.page)}
            className={`h-10 mt-1 m-0
                      w-10 rounded-full ${
                        cur === pg.page ? "bg-cyan-400 text-white" : ""
                      }`}
            style={{ marginLeft: "" }}
          >
            {pg.page}
          </button>
        ))}

        <button onClick={Next} className="h-12 hover:text-white">
          <BsArrowRight className=" text-gray-500 ml-3 group-hover:text-[#2bbef9]  "></BsArrowRight>
        </button>
      </div>
    </div>
  );
};
