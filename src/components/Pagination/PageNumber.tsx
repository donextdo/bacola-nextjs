import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";

export const PageNumber = ({ perpage }: any) => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  let [currentPage, setCurrentPage] = useState(0);
  var pageArray: any[] = [];
  const router = useRouter();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `${baseUrl}/products?perpage=${perpage}`
        );
        setTotalPage(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
        var foo = [];

        for (var i = 0; i < totalPage; i++) {
          let data = {
            id: i,
          };
          foo.push(data);
        }
        pageArray = foo;
        console.log("totalPage", totalPage);
        console.log("currentPage", currentPage);
        console.log("pageArray", pageArray);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [perpage]);

  pageArray = [
    { page: currentPage },
    { page: currentPage + 1 },
    // { page: currentPage + 2 },
    // { page: currentPage + 3 },
  ];
  function Next() {
    setCurrentPage(++currentPage);
  }
  function back() {
    currentPage > 1 && setCurrentPage(--currentPage);
  }

  // useEffect(() => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...router.query, page: cur },
  //   });
  //   console.log(cur);
  // }, [cur]);

  return (
    <div className="mt-8 flex justify-center items-center flex-wrap pagination-container ">
      <div className="flex bg-white font-[Poppins]">
        <button onClick={back} className="h-12 hover:text-white ">
          {" "}
          <BsArrowLeft className=" text-gray-500 mr-3 group-hover:text-[#2bbef9] flex justify-center  mt-0"></BsArrowLeft>
        </button>

        {pageArray.map((pg, i) => (
          <button
            key={i}
            type="button"
            value={pg.page}
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
